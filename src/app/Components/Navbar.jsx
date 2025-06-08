"use client";
import { useState } from 'react';
import Link from 'next/link';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main nav (left side) */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">TaskApp</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link href="../add_Task" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  <i className="fas fa-plus-circle mr-2"></i> TaskAdd
                </Link>
                <Link href="../Show_Task" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  <i className="fas fa-tasks mr-2"></i> ShowTask
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary nav (right side) - desktop */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="../Login" className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium">
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </Link>
              <Link href="../Signup" className="bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                <i className="fas fa-user-plus mr-2"></i> Signup
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <i className="fas fa-times h-6 w-6"></i>
              ) : (
                <i className="fas fa-bars h-6 w-6"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="../add_Task" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">
              <i className="fas fa-plus-circle mr-2"></i> TaskAdd
            </Link>
            <Link href="../Show_Task" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">
              <i className="fas fa-tasks mr-2"></i> ShowTask
            </Link>
            <Link href="../Login" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">
              <i className="fas fa-sign-in-alt mr-2"></i> Login
            </Link>
            <Link href="../Signup" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600">
              <i className="fas fa-user-plus mr-2"></i> Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};