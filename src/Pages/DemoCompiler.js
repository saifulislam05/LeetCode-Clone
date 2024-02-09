import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Compiler.css";

const DemoCompiler = () => {
  const [input, setInput] = useState(localStorage.getItem("input") || "");
  const [output, setOutput] = useState("");
  const [languageId, setLanguageId] = useState(
    localStorage.getItem("language_Id") || 2
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    localStorage.setItem("input", input);
    localStorage.setItem("language_Id", languageId);
  }, [input, languageId]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguageId(event.target.value);
  };

 const submit = async () => {
   setOutput("Creating Submission ...\n");
   try {
     const response = await fetch(
       "https://judge0-ce.p.rapidapi.com/submissions",
       {
         method: "POST",
         headers: {
           "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
           "x-rapidapi-key":
             "a4da324b9fmshe304ef949d33600p13fb2fjsne08b12264f85", // Replace with your RapidAPI key
           "content-type": "application/json",
           accept: "application/json",
         },
         body: JSON.stringify({
           source_code: input,
           stdin: userInput,
           language_id: languageId,
         }),
       }
     );

     if (!response.ok) {
       throw new Error("Failed to create submission");
     }

     const jsonResponse = await response.json();
     let token = jsonResponse.token;
     setOutput("Submission Created ...\nChecking Submission Status\n");

     let jsonGetSolution;
     do {
       const result = await fetch(
         `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
         {
           method: "GET",
           headers: {
             "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
             "x-rapidapi-key":
               "a4da324b9fmshe304ef949d33600p13fb2fjsne08b12264f85", // Replace with your RapidAPI key
           },
         }
       );

       if (!result.ok) {
         throw new Error("Failed to get submission status");
       }

       jsonGetSolution = await result.json();
       if (jsonGetSolution.status.description !== "Accepted") {
         setOutput(
           (previousOutput) =>
             previousOutput + `status : ${jsonGetSolution.status.description}\n`
         );
       }
     } while (
       jsonGetSolution.status.description !== "Accepted" &&
       jsonGetSolution.stderr == null &&
       jsonGetSolution.compile_output == null
     );

     if (jsonGetSolution.stdout) {
       const output = atob(jsonGetSolution.stdout);
       setOutput(
         `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`
       );
     } else if (jsonGetSolution.stderr) {
       const error = atob(jsonGetSolution.stderr);
       setOutput(`\n Error :${error}`);
     } else {
       const compilation_error = atob(jsonGetSolution.compile_output);
       setOutput(`\n Error :${compilation_error}`);
     }
   } catch (error) {
     console.error("Error making API request:", error);
     setOutput("Error in submission or fetching the result.");
   }
 };


  return (
    <>
      <div className="row container-fluid">
        <div className="col-6 ml-4">
          <label htmlFor="solution">
            <span className="badge badge-info heading mt-2">
              <i className="fas fa-code fa-fw fa-lg"></i> Code Here
            </span>
          </label>
          <textarea
            required
            name="solution"
            id="source"
            onChange={handleInput}
            className="source"
            value={input}
          ></textarea>

          <button
            type="button"
            className="btn btn-danger ml-2 mr-2"
            onClick={submit}
          >
            <i className="fas fa-cog fa-fw"></i> Run
          </button>

          <label htmlFor="language" className="mr-1">
            <b className="heading">Language:</b>
          </label>
          <select
            value={languageId}
            onChange={handleLanguageChange}
            id="language"
            className="form-control form-inline mb-2 language"
          >
            <option value="54">C++</option>
            <option value="50">C</option>
            <option value="62">Java</option>
            <option value="71">Python</option>
          </select>
        </div>
        <div className="col-5">
          <div>
            <span className="badge badge-info heading my-2">
              <i className="fas fa-exclamation fa-fw fa-md"></i> Output
            </span>
            <textarea
              id="output"
              value={output}
              readOnly
              className="output"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mt-2 ml-5">
        <span className="badge badge-primary heading my-2">
          <i className="fas fa-user fa-fw fa-md"></i> User Input
        </span>
        <br />
        <textarea
          id="userInput"
          onChange={handleUserInput}
          value={userInput}
        ></textarea>
      </div>
    </>
  );
};

export default DemoCompiler;
