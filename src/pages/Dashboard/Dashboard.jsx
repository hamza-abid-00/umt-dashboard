import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Effect to close sidebar by default on medium screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
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

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-3 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* First Row */}
        <DashboardCard
          title="New Registration"
          subtitle="Add/Drop Open"
          bgColor="bg-gradient-to-b from-[#284F93] to-[#1F3E75]"
          textColor="text-red-500"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-red-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          }
        />
        <DashboardCard
          title="Attendance"
          subtitle="View Course Attendance"
          bgColor="bg-gradient-to-r from-[#7273B7] to-[#130C3F]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          }
        />
        <DashboardCard
          title="e-Appointment"
          subtitle="Set Your Appointment"
          bgColor="bg-gradient-to-b from-[#1697DB] to-[#0B2649]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <DashboardCard
          title="FT Clearance"
          subtitle="Final Transcript"
          bgColor="bg-gradient-to-r from-[#404040] to-[#030303]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          }
        />

        {/* Second Row */}
        <DashboardCard
          title="My Courses"
          subtitle="Courses / Assesments"
          bgColor="bg-gradient-to-b from-[#E5AA3B] to-[#A17D3A]"
          countDisplay="7"
        />
        <DashboardCard
          title="Batch Profiles"
          subtitle="Profiles"
          bgColor="bg-gradient-to-b from-[#35B78B] to-[#10A565]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
        />
        <DashboardCard
          title="Short Attendance"
          subtitle="Short Attendance"
          subtitleColor="text-red-400"
          bgColor="bg-gradient-to-b from-[#295095] to-[#1F3E76]"
          countDisplay="SA"
          countColor="text-yellow-500"
        />
        <DashboardCard
          title="Peer Tutoring Program"
          subtitle="Program"
          bgColor="bg-gradient-to-r from-[#102128] to-[#2B5161]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          }
        />

        {/* Third Row */}
        <DashboardCard
          title="PRS Requests"
          subtitle="View PRS Requests"
          bgColor="bg-gradient-to-r from-[#102128] to-[#2B5161]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
        />
        <DashboardCard
          title="LMS"
          subtitle="Learning Management System"
          bgColor="bg-gradient-to-r from-[#182867] to-[#182867]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          }
        />
        <DashboardCard
          title="Student Advisor"
          subtitle="Meet With you advisor"
          bgColor="bg-gradient-to-r from-[#8362B7] to-[#633F9B]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        />
        <DashboardCard
          title="Important Links"
          subtitle="External"
          bgColor="bg-gradient-to-b from-[#C85D29] to-[#BE9278]"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          }
        />
      </div>

      {/* Bottom Sections */}
      <div className="mt-6">
        <ExpandableSection
          title="Timetable"
          isExpanded={expandedSection === "timetable"}
          onToggle={() => toggleSection("timetable")}
        />
        <ExpandableSection
          title="Registered Courses"
          isExpanded={expandedSection === "registeredCourses"}
          onToggle={() => toggleSection("registeredCourses")}
        />
      </div>
    </main>
  );
};

// Dashboard Card Component
const DashboardCard = ({
  title,
  subtitle,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  subtitleColor = "text-white",
  icon,
  countDisplay,
  countColor = "text-white",
}) => {
  return (
    <div className={`relative rounded-sm ${bgColor} shadow-md overflow-hidden`}>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between">
          <div>
            <h3 className={`text-lg font-medium ${textColor}`}>{title}</h3>
            <div className={`text-sm ${subtitleColor}`}>{subtitle}</div>
          </div>
          {countDisplay && (
            <div className={`text-6xl font-bold ${countColor}`}>
              {countDisplay}
            </div>
          )}
          {icon && <div className="absolute right-4 top-4">{icon}</div>}
        </div>
      </div>
    </div>
  );
};

// Expandable Section Component
// const ExpandableSection = ({ title, isExpanded, onToggle }) => {
//   return (
//     <div className="bg-gray-200 mb-4 rounded-lg shadow">
//       <div
//         className="flex justify-between items-center px-4 py-3 cursor-pointer"
//         onClick={onToggle}
//       >
//         <h3 className="text-lg font-medium text-gray-700">{title}</h3>
//         <svg
//           className={`w-6 h-6 transform ${isExpanded ? "rotate-180" : ""}`}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>

//       {isExpanded && (
//         <div className="px-4 py-3 border-t border-gray-300">
//           <p>Content for {title} goes here</p>
//         </div>
//       )}
//     </div>
//   );
// };
// Updated ExpandableSection Component with Timetable
const ExpandableSection = ({ title, isExpanded, onToggle }) => {
  const renderTimetableContent = () => {
    // if (title !== "Timetable") return <p>Content for {title} goes here</p>;

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Day
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                C.Code
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Name
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Faculty
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Type
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Mode
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Start Time
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                End Time
              </th>
              <th className="py-2 px-4 text-left text-gray-800 font-medium">
                Room
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Monday</td>
              <td className="py-2 px-4">CS2032L</td>
              <td className="py-2 px-4">
                Computer Organization and Assembly Language (Lab)
              </td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Lab</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">08:00 AM</td>
              <td className="py-2 px-4">09:15 AM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Monday</td>
              <td className="py-2 px-4">CS2032L</td>
              <td className="py-2 px-4">
                Computer Organization and Assembly Language (Lab)
              </td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Lab</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">09:30 AM</td>
              <td className="py-2 px-4">10:45 AM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Monday</td>
              <td className="py-2 px-4">MA230</td>
              <td className="py-2 px-4">Differential Equations</td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">05:00 PM</td>
              <td className="py-2 px-4">06:15 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Monday</td>
              <td className="py-2 px-4">CS3045</td>
              <td className="py-2 px-4">Compiler Construction</td>
              <td className="py-2 px-4">Ahmad Hussain</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">03:30 PM</td>
              <td className="py-2 px-4">04:45 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Tuesday</td>
              <td className="py-2 px-4">CS3044</td>
              <td className="py-2 px-4">Analysis of Algorithms</td>
              <td className="py-2 px-4">Rashid Rasheed</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">12:30 PM</td>
              <td className="py-2 px-4">01:45 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Wednesday</td>
              <td className="py-2 px-4">CS2032</td>
              <td className="py-2 px-4">
                Computer Organization and Assembly Language
              </td>
              <td className="py-2 px-4">Muhammad Shoaib</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">11:00 AM</td>
              <td className="py-2 px-4">12:15 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Wednesday</td>
              <td className="py-2 px-4">EN220</td>
              <td className="py-2 px-4">
                Research Paper Writing and Presentation
              </td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">02:00 PM</td>
              <td className="py-2 px-4">03:15 PM</td>
              <td className="py-2 px-4">STD-304</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Wednesday</td>
              <td className="py-2 px-4">CS3044</td>
              <td className="py-2 px-4">Analysis of Algorithms</td>
              <td className="py-2 px-4">Rashid Rasheed</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">12:30 PM</td>
              <td className="py-2 px-4">01:45 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Thursday</td>
              <td className="py-2 px-4">CS458</td>
              <td className="py-2 px-4">Data Mining</td>
              <td className="py-2 px-4">Rafia Asad Khan</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">11:00 AM</td>
              <td className="py-2 px-4">12:15 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Thursday</td>
              <td className="py-2 px-4">MA230</td>
              <td className="py-2 px-4">Differential Equations</td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">05:00 PM</td>
              <td className="py-2 px-4">06:15 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Thursday</td>
              <td className="py-2 px-4">CS458</td>
              <td className="py-2 px-4">Data Mining</td>
              <td className="py-2 px-4">Rafia Asad Khan</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">12:30 PM</td>
              <td className="py-2 px-4">01:45 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Thursday</td>
              <td className="py-2 px-4">CS3045</td>
              <td className="py-2 px-4">Compiler Construction</td>
              <td className="py-2 px-4">Ahmad Hussain</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">03:30 PM</td>
              <td className="py-2 px-4">04:45 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Saturday</td>
              <td className="py-2 px-4">CS2032</td>
              <td className="py-2 px-4">
                Computer Organization and Assembly Language
              </td>
              <td className="py-2 px-4">Muhammad Shoaib</td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">11:00 AM</td>
              <td className="py-2 px-4">12:15 PM</td>
              <td className="py-2 px-4"></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">Saturday</td>
              <td className="py-2 px-4">EN220</td>
              <td className="py-2 px-4">
                Research Paper Writing and Presentation
              </td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Theory</td>
              <td className="py-2 px-4 text-red-500 font-medium">On-Campus</td>
              <td className="py-2 px-4">02:00 PM</td>
              <td className="py-2 px-4">03:15 PM</td>
              <td className="py-2 px-4">STD-304</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 mb-4 rounded-lg shadow">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <svg
          className={`w-6 h-6 transform ${isExpanded ? "rotate-180" : ""}`}
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
      </div>

      {isExpanded && (
        <div className="px-4 py-3 border-t border-gray-300">
          {renderTimetableContent()}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
