import React, { useState } from "react";
import Papa from "papaparse"; // Import PapaParse library
import icon from "/Icon.svg";

function CSVUploadView() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [csvData, setCsvData] = useState([]); // State to hold the parsed CSV data

  // Function to handle file change and parse CSV
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
      parseCSV(uploadedFile);
    } else {
      alert("Please upload a valid CSV file.");
      setFile(null);
      setFileName("");
      setCsvData([]); // Reset csv data
    }
  };

  // Function to parse CSV file and set the CSV data
  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data); // Store parsed data
      },
      header: false, // Set to false if the CSV doesn't have headers
    });
  };

  return (
    <>
      {/* Line above the section */}
      <div className="w-full h-[2px] bg-[#E0C9C9] my-2 mt-16"></div>

      <div className="flex gap-8 items-start justify-around py-12 px-4 flex-wrap">
        {/* Container for CSV Upload Section and File Preview Section */}
        <div className="flex w-full gap-8">
          {/* CSV Upload Section */}
          <div
            className="w-full sm:w-1/2 max-w-lg h-80 flex items-center justify-center border-2 border-[#E0C9C9] border-dashed bg-[#F3FCF6] text-[#19456B] cursor-pointer rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            onClick={() => document.getElementById("csvInput").click()} // Simulate file input click
          >
            <input
              type="file"
              id="csvInput"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center text-center p-6 bg-transparent">
              {/* Display SVG Icon */}
              <img src={icon} alt="Upload Icon" className="mb-4" />
              <span className="my-4 text-xl font-semibold">
                Drag or Choose CSV files to upload
              </span>
              <button className="mt-4 p-3 px-4 bg-[#99D8AE] rounded-lg text-[#19456B] font-semibold hover:bg-[#7FB88B] transition duration-200">
                Choose a File
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden sm:block w-px bg-[#E0C9C9] mx-4"></div>

          {/* File View Section */}
          <div className="w-full sm:w-1/2 flex flex-col items-center p-6 bg-[#F3FCF6] rounded-xl shadow-xl mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold text-[#19456B] mb-3">
              File Preview
            </h3>
            {file ? (
              <div className="overflow-auto max-h-60 w-full">
                <table className="table-auto w-full text-[#19456B]">
                  <thead>
                    <tr>
                      {/* Mapping the first row to headers */}
                      {csvData[0] && csvData[0].map((header, index) => (
                        <th key={index} className="border px-2 py-1 text-left font-bold">
                          {header} {/* Use CSV's first row as headers */}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Mapping through all other rows and columns */}
                    {csvData.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} className="border px-2 py-1">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-md text-[#19456B]">No file selected</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CSVUploadView;
