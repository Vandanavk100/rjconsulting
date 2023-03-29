import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <a href='/#home' type="button"
            id="btn-back-to-top"
            className={`fixed bottom-8 right-8 bg-sky-500 text-white rounded-full p-4 shadow-lg transition-opacity duration-300 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${isVisible ? 'visible' : 'invisible'}`}
            onClick={handleClick}
        >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                strokeWidth="2.5"
                stroke="white"
                className="h-4 w-4">
                <path
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    clipRule="evenodd" />
            </svg>
        </a>
    );

};

export default ScrollToTopButton;