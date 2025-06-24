'use client';

import { useState } from 'react';

const links = [
  'Research', 'Safety', 'For Business', 'ChatGPT',
  'Sora', 'API Platform', 'Stories', 'Company', 'News'
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-80"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed z-50 top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 text-xl font-semibold">OpenAI</div>
        <nav className="flex flex-col space-y-4 px-6 pt-2">
          {links.map((link, idx) => (
            <a href="#" key={idx} className="hover:opacity-80">{link}</a>
          ))}
        </nav>
      </div>
    </>
  );
}