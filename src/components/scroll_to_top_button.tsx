import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 20) {
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
        // <button
        //   id="btn-back-to-top"
        //   className={isVisible ? 'visible' : ''}
        //   onClick={handleClick}
        // >
        //   Scroll to Top
        // </button>

<button
id="btn-back-to-top"
className={`fixed bottom-8 right-8 bg-sky-500 text-white rounded-full p-4 shadow-lg transition-opacity duration-300 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${isVisible ? 'visible' : 'invisible'}`}
onClick={handleClick}
>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9.25 12.94V4.75A.75.75 0 0 1 10 4.003zm9.28 14.97a.75.75 0 0 1-1.06 1.06l-18-18a.75.75 0 0 1 1.06-1.06l18 18z" clipRule="evenodd" />
</svg> */}
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
</button>
    );

};

export default ScrollToTopButton;