import React, { useState } from 'react';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <header className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center justify-between">
                            <a className="text-teal-600" href="#">
                                <span className="sr-only">Home</span>
                                <img
                                    className="max-w-[50px]"
                                    src="data:image/png;base64,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"
                                    alt="Logo"
                                />
                            </a>

                            {/* Hamburger Icon for Mobile */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 text-white"
                            >
                                <span className="sr-only">Open Menu</span>
                                {/* Icon can be replaced with an SVG or Font Awesome icon */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex gap-12 mr-[40px] ">
                            <a href="#home" className="text-white hover:text-white">Home</a>
                            <a href="#about" className="text-white hover:text-white">About</a>
                            <a href="#services" className="text-white hover:text-white">Services</a>
                            <a href="#contact" className="text-white hover:text-white">Contact</a>
                            {/* Button in Desktop View */}
                            
                        </nav>
                        <button className="text-white bg-teal-600 px-4 py-2 rounded hover:bg-teal-700">
                                Sign Up
                            </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-gray-100">
                        <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
                        <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
                        <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Services</a>
                        <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact</a>
                        {/* Button in Mobile View */}
                        <button className="block w-full text-center text-white bg-teal-600 px-4 py-2 rounded hover:bg-teal-700">
                            Sign Up
                        </button>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navigation;
