import React, { useEffect, useState } from "react";
import Split from "react-split";
import Editor from "./Editor";
import TestCases from "./TestCases";
import { auth, firestore } from "../../../firebase/firebaseConfig";
import {arrayUnion, doc, getDoc, setDoc, updateDoc, Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

const PlayGround = ({ problem }) => {
  const { data } = problem;
  const { starterCode, handlerFunction } = data;
 const localStorageKey = `code_${problem.id}`; // Unique key for localStorage

 // Try to retrieve the code for the current problem from localStorage or fallback to starterCode
 const savedCode = localStorage.getItem(localStorageKey) || starterCode;

 const [userCode, setUserCode] = useState(savedCode);
 const [runAccepted, setRunAccepted] = useState(false);
 const [success, setSuccess] = useState(false);

 const { user } = useSelector((state) => state.user);

 // Effect to save code to localStorage when userCode changes
 useEffect(() => {
   localStorage.setItem(localStorageKey, userCode);
 }, [userCode, localStorageKey]);

  const handleSubmit = async () => {
    if (!user) {
      toast.error("Please login to submit your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    try {
      const editorCode = userCode.slice(
        userCode.indexOf(data.starterFunctionName)
      );
      const cb = new Function(`return ${editorCode}`)();
      const handler = handlerFunction;
      if (typeof handler === "function") {
        setSuccess(() => handler(cb)); 
        if (success) {
          setSuccess(true);
          const userRef = doc(firestore, "users", user.uid);
          const docSnap = await getDoc(userRef);
          const submission = {
            code: editorCode,
            submissionTime: Timestamp.now(),
            success: true,
          };

          // Check if document exists
          if (!docSnap.exists()) {
            // If the document does not exist, create it with the submission under the problem ID
            await setDoc(userRef, {
              submissions: { [problem.id]: [submission] },
            });
          } else {
            // Document exists, update or add new submission under the problem ID
            const existingSubmissions = docSnap.data().submissions || {};
            const problemSubmissions = existingSubmissions[problem.id] || [];
            problemSubmissions.push(submission);

            await updateDoc(userRef, {
              [`submissions.${problem.id}`]: problemSubmissions,
            });
          }
        }
      }
    } catch (error) {
      console.error("Error submitting code: ", error);
      toast.error("There was a problem submitting your code.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleRun = async () => {
    if (!user) {
      toast.error("Please login to run your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    try {
      const editorCode = userCode.slice(
        userCode.indexOf(data.starterFunctionName)
      );
      const cb = new Function(`return ${editorCode}`)();
      const handler = handlerFunction;
      if (typeof handler === "function") {
        setRunAccepted(()=>handler(cb)) 
        if (runAccepted) {
          setRunAccepted(true);
          toast.success("Accepted. You can submit now", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        } else {
          // Directly show the toast for wrong answer instead of throwing an error
          toast.error("Wrong answer", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.error("Error running code: ", error);
      toast.error("There was a problem running your code.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };


  return (
    <div className="w-[inherit] h-full p-0.5 pl-0">
      <div className="relative w-full h-full overflow-hidden">
        <Split
          className="split w-full h-full"
          gutterSize={5}
          direction="vertical"
        >
          <Editor
            problem={problem}
            userCode={userCode}
            setUserCode={setUserCode}
          />
          <TestCases
            problem={problem}
            handleRun={handleRun}
            handleSubmit={handleSubmit}
          />
        </Split>
      </div>
    </div>
  );
};

export default PlayGround;
