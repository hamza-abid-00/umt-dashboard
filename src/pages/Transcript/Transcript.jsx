import React from "react";
import image from "../../assets/Ayan.jpeg";

const AcademicTranscript = () => {
  return (
    <div className="h-screen">
      <div className="lg:max-w-5xl w-[100%] p-6 font-sans lg:h-screen h-[50vh] overflow-scroll bg-gray-100 m-2 shadow-xl shadow-grey/80">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-800 mb-6">TRANSCRIPT</h1>

        {/* Disclaimer */}
        <div className="mb-4">
          <p className="text-[10px] italic">
            <span className="font-bold">Disclaimer:</span>
            <br />
            This is for student record only. Printout from this Online
            Transcript will not be accepted for any official purpose. Official
            Transcript will be issued by Office of the Controller of
            Examinations with signature and official seal...
          </p>
        </div>

        {/* School and Degree */}
        <div className="mb-[-50px] flex justify-between">
          <div className="font-semibold text-[13px]">
            School of Systems and Technology
          </div>
          <div className="font-semibold text-[12px]">
            Degree: BS Computer Science
          </div>
          <img style={{ width: "100px" }} src={image} alt="Ayan Rasool" />
        </div>
        {/* Student Information */}
        <div className="mb-4">
          <div className="grid grid-cols-4 gap-2 mb-1">
            <div className="text-sm font-semibold">ID No:</div>
            <div className="text-sm col-span-3">F2022368201</div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-1">
            <div className="text-sm font-semibold">Name:</div>
            <div className="text-sm col-span-3">HAFIZ AYAN RASOOL</div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-1">
            <div className="text-sm font-semibold">Father's Name:</div>
            <div className="text-sm col-span-3">NAEEM SHAHID</div>
          </div>
        </div>

        <div className="flex gap-2 w-[170%]">
          <div className="w-full">
            {/* Fall 2022 */}
            <div className="mb-4">
              <table className="w-full text-xs border-1 border-collapse">
                <thead>
                  <tr>
                    <th className="border p-1">Course Code</th>
                    <th className="border p-1">Course Title</th>
                    <th className="border p-1">Cr. Hrs</th>
                    <th className="border p-1">Grade</th>
                    <th className="border p-1">G.P.</th>
                  </tr>
                </thead>
              </table>
              <div className="text-center text-[10px] font-semibold p-1">
                Fall 2022
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] font-bold border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1021
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Programming Fundamentals
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        6
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1021L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Programming Fundamentals (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C+
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2.3
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        EN111
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        English Grammar and Comprehension
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        IT1091
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Introduction to Info & Comm. Technologies
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        4
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        IT1091L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Introduction to Info & Comm. Technologies (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA090
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Algebra Preliminary [Pre]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        NS123
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Applied Physics
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        NS123L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Applied Physics (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 text-xs mt-1">
                  <div>Cr. Hrs. Earned:10</div>
                  <div>CGPA: 2.04</div>
                  <div></div>
                  <div>SGPA: 2.04</div>
                </div>
              </div>
            </div>

            {/* Spring 2023 */}
            <div className="mb-4">
              <div className="text-center text-[10px] font-semibold  p-1">
                Spring 2023
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] font-bold border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1022
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Object Oriented Programming
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1022L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Object Oriented Programming (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        EN125
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Composition and Communication
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        ISL101
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Islamic Studies
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA065
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Pre-Calculus and Analytical Geometry [Pre]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        F
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 text-xs mt-1">
                  <div>Cr. Hrs. Earned:0</div>
                  <div>CGPA: 2.04</div>
                  <div></div>
                  <div>SGPA: 0</div>
                </div>
              </div>
            </div>

            {/* Summer 2023 */}
            <div className="mb-4">
              <div className="text-center text-[10px] font-semibold  p-1">
                Summer 2023
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] font-bold  border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        EN111
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        English Grammar and Comprehension [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        EN125
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Composition and Communication [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        6.1
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 text-xs mt-1">
                  <div>Cr. Hrs. Earned:3</div>
                  <div>CGPA: 1.84</div>
                  <div></div>
                  <div>SGPA: 1.70</div>
                </div>
              </div>
            </div>

            {/* Fall 2023 */}
            <div className="mb-4">
              <div className="text-center text-[10px] font-semibold  p-1">
                Fall 2023
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] font-bold  border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1022
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Object Oriented Programming [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C-
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        5.1
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC1022L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Object Oriented Programming (Lab) [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        CS2031
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Digital Logic Design
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        CS2031L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Digital Logic Design (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        HU4002
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Professional Practices
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B+
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        9.9
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA210
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Linear Algebra
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        F
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 text-xs mt-1">
                  <div>Cr. Hrs. Earned:7</div>
                  <div>CGPA: 1.82</div>
                  <div></div>
                  <div>SGPA: 1.70</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Spring 2024 */}
            <div className="mb-4">
              <table className="w-full text-xs border-1 border-collapse">
                <thead>
                  <tr>
                    <th className="border p-1">Course Code</th>
                    <th className="border p-1">Course Title</th>
                    <th className="border p-1">Cr. Hrs</th>
                    <th className="border p-1">Grade</th>
                    <th className="border p-1">G.P.</th>
                  </tr>
                </thead>
              </table>
              <div className="text-center font-semibold text-[10px] p-1">
                Spring 2024
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] font-bold  border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        CS3051
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Numerical Analysis
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        F
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA150
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Probability and Statistics
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        SA
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        NS123
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Applied Physics [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        F
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        NS123L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Applied Physics (Lab) [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        F
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        FC420
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Foreign Language
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B-
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        8.1
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 text-xs mt-1">
                  <div>Cr. Hrs. Earned:3</div>
                  <div>CGPA: 0.90</div>
                  <div></div>
                  <div>SGPA: 0.60</div>
                </div>
              </div>
            </div>

            {/* Fall 2024 */}
            <div className="mb-4">
              <div className="text-center font-semibold text-[10px] p-1">
                Fall 2024
              </div>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-3 text-xs mt-1">
                  <div>Cr. Hrs. Earned:3</div>
                  <div>CGPA: 1.53</div>
                  <div>SGPA: 0.90</div>
                </div>
                <table className="w-full text-[9px] font-bold border-dashed-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC2042
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Data Structures and Algorithms
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B+
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        9.9
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC2042L
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Data Structures and Algorithms (Lab)
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        1
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B-
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        2.7
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        OC2101
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Software Engineering
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B-
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        8.1
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        CS2051
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Numerical Analysis [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B-
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        8.1
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA150
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Probability and Statistics [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        C
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        6
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        MA210
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1">
                        Linear Algebra [R]
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        3
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        B+
                      </td>
                      <td className="border border-dashed border border-dashed-gray-300 p-1 text-center">
                        9.9
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-3 text-xs mt-1">
                  <div>Cr. Hrs. Earned:16</div>
                  <div>CGPA: 2.79</div>
                  <div>SGPA: 44.7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="border border-dashed border border-dashed-gray-300 p-2 mb-4">
          <div className="grid grid-cols-3 text-xs">
            <div>Credit Hours Earned: 29</div>
            <div>Credit Hours for GPA: 32</div>
            <div>Total Grade Points: 58.60</div>
            <div></div>
            <div></div>
            <div>CGPA: 1.83 / 4.00</div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-blue-50 p-3">
          <div className="font-semibold mb-2">Note:</div>
          <ol className="text-xs list-decimal pl-5">
            <li className="mb-2">
              This progress report shows the courses student has registered so
              far. This does not indicate that all requisites for the degree
              have been fulfilled.
            </li>
            <li className="mb-2">
              Student shall apply for official Progress Report to Office of the
              Controller of Examinations for sending his/her academic
              performance officially to the institutes / Universities /
              Employers.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AcademicTranscript;
