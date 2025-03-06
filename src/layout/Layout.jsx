import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle sidebar and screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-grey-100">
      {/* Compact Sidebar */}
      <div
        className={`
          no-scrollll
          md:relative fixed top-0 left-0 h-screen overflow-y-scroll bg-[#383838] 
          flex flex-col items-center 
          transition-all duration-300 z-40 m-2 text-center
          ${
            isMobile
              ? sidebarOpen
                ? "w-24 shadow-lg px-5"
                : "w-0 overflow-hidden"
              : "w-28"
          }
        `}
      >
        {/* Logo */}
        <div className="py-4">
          <img
            src="https://online.umt.edu.pk/img/umtlogowhite.png"
            alt="UANT Logo"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-2 w-full">
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            }
            text="Dashboard"
            path="/dashboard"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
            text="Profile"
            path="/profile"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            text="My Courses"
            path="/courses"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            text="Transcript"
            path="/transcript"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            text="Feedback"
            path="/feedback"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            }
            text="Request"
            path="/request"
            hasDropdown
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            }
            text="Payment"
            path="/payment"
            hasDropdown
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            text="Roadmap"
            path="/feedback"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            text="Announcements"
            path="/feedback"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            text="UMT Store"
            path="/feedback"
          />
          <CompactSidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
            text="Academic Calander"
            path="/feedback"
          />
        </nav>
      </div>

      {/* Main Content Area */}
      <div
        className={`
          flex-1 transition-all duration-300
          ${isMobile && sidebarOpen ? "ml-26" : "ml-0"}
        `}
      >
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-4 py-4 bg-white border-b">
          <div className="flex items-center">
            <button
              className="text-gray-500 focus:outline-none bg-[#103A4D] text-white p-2 rounded"
              onClick={toggleSidebar}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <h1 className="ml-4 text-xl font-medium text-blue-500 truncate">
              Dashboard
            </h1>
          </div>
        </header>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

const CompactSidebarItem = ({ icon, text, path, hasDropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (hasDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className="relative">
      <Link
        to={path}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#0E3241] text-white"
        onClick={toggleDropdown}
      >
        <div className="mb-1">{icon}</div>
        <span className="text-xs">{text}</span>
        {hasDropdown && (
          <svg
            className={`w-3 h-3 mt-1 transform transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </Link>

      {hasDropdown && isDropdownOpen && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#575757]  rounded-b-md text-white ${
            isDropdownOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Prs Requests
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Courses Request
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Request Management
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
