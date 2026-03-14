import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
                <h2 className="text-xl font-bold mb-4">Shayasi Global Resources</h2>
                <p className="mb-2">
                    Empowering businesses with innovative solutions and global reach.
                </p>
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Shayasi Global Resources. All rights reserved.
                </p>
            </div>
            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul>
                    <li className="mb-2">
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                    <li className="mb-2">
                        <a href="/about" className="hover:underline">About Us</a>
                    </li>
                    <li className="mb-2">
                        <a href="/services" className="hover:underline">Services</a>
                    </li>
                    <li className="mb-2">
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            {/* Contact Info */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <ul>
                    <li className="mb-2">
                        <span className="font-medium">Email:</span> info@shayasi.com
                    </li>
                    <li className="mb-2">
                        <span className="font-medium">Phone:</span> +234 123 456 7890
                    </li>
                    <li className="mb-2">
                        <span className="font-medium">Address:</span>
                        <br />
                        123 Business Ave,<br />
                        Lagos, Nigeria
                    </li>
                </ul>
            </div>
            {/* Social Media */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500">
                        <svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path></svg>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
                        <svg width="24" height="24" fill="currentColor"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.155 9.03a12.72 12.72 0 0 1-9.23-4.68 4.48 4.48 0 0 0 1.387 5.98A4.47 4.47 0 0 1 2 9.713v.057a4.48 4.48 0 0 0 3.59 4.393 4.48 4.48 0 0 1-2.018.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"></path></svg>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700">
                        <svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;</a>