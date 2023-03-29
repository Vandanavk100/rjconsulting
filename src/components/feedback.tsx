/**
 * Feeback component
 * Used to render rjc consulting menu
 */
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FeedbackProps = {
    classNames?: string,

}

export default function FeebackForm(props: FeedbackProps) {
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {

        try {
            const formData = new FormData();
            formData.append("entry.1104121403", data.name);
            formData.append("entry.1704216421", data.email);
            formData.append("entry.901432237", data.message);

            const response = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBjvmUk-VMTykn3Ynf7zsKLw8GkQhk6pay_6KBLQ6WuXx0dA/formResponse", {
                method: "POST",
                body: formData,
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin':'*'
                  }
                
            });
            console.log(response);

            if (response.ok) {
                setSuccess(true);   
            } else {
                console.error("Error sending message:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    if (success) {
        return <p className="mt-5 mb-0 ml-5 text-neutral-700"> Thank you for your message!</p>;
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)} className="form-builder w-2/5">
            <input 
                placeholder="Your name"
                {...register("name", { required: true })}
            />
            {errors.name && <span className="error">This field is required</span>}

            <input
                placeholder="Your email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
                <span className="error">This field is required</span>
            )}
            {errors.email?.type === "pattern" && (
                <span className="error">Please enter a valid email address</span>
            )}

            <textarea
                placeholder="Message"
                {...register("message", { required: true })}
            />
            {errors.message && (
                <span className="error">This field is required</span>
            )}

            <button
                className="hover:from-white-500 hover:to-cyan-500 rounded-r-3xl text-white rounded-b-3xl"
                type="submit"
            >
                SEND MESSAGE
            </button>
        </form>
    );
}


