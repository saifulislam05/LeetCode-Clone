import React, { useEffect, useState } from "react";
import Split from "react-split";
import Editor from "./Editor";
import TestCases from "./TestCases";
import { firestore } from "../../../firebase/firebaseConfig";
import {
  doc,
  getDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

const PlayGround = ({ problem }) => {
  
  const [userCode, setUserCode] = useState("");
  const [runAccepted, setRunAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [runLoading, setRunLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  
  const { starterCode, handlerFunction, starterFunctionName } = problem || {};
  const { userData } = useSelector((state) => state.user);

  const localStorageKey = `code_${problem?.id}`;

  useEffect(() => {
    
    const savedCode = localStorage.getItem(localStorageKey);

    if (savedCode) {
      
      setUserCode(savedCode);
    } else if (starterCode) {
      
      setUserCode(starterCode);
    }
    
  }, [problem, starterCode, localStorageKey]);

  useEffect(() => {
    
    if (userCode && userCode !== starterCode) {
      localStorage.setItem(localStorageKey, userCode);
    }
    else if (userCode && userCode === starterCode) {
      localStorage.removeItem(localStorageKey);
    }
  }, [userCode, starterCode, localStorageKey]);
 
  const handleSubmit = async () => {
    setSubmitLoading(true);
    if (!userData) {
      toast.error("Please login to submit your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      setSubmitLoading(false);
      return;
    }

    try {
      const editorCode = userCode.slice(userCode.indexOf(starterFunctionName));
      const cb = new Function(`return ${editorCode}`)();
      const handler = new Function("return " + eval(handlerFunction))();

      if (typeof handler === "function") {
        const passedAllTestCase = handler(cb);
        if (passedAllTestCase) {
          setSubmitted(true);
          const userRef = doc(firestore, "users", userData.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            const updatedProblems = { ...userData.solvedProblems };
            const submission = {
              language: "Javascript",
              code: editorCode,
              submissionTime: Timestamp.now(),
              success: true,
            };

            if (updatedProblems[problem.id]) {
              updatedProblems[problem.id].push(submission);
            } else {
              updatedProblems[problem.id] = [submission];
            }

            await updateDoc(userRef, {
              solvedProblems: updatedProblems,
            });

            toast.success("Your code was submitted successfully!", {
              position: "top-center",
              autoClose: 3000,
              theme: "dark",
            });
            setSubmitLoading(false);
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
      setSubmitLoading(false);
    }
  };

  const handleRun = async () => {
    setRunLoading(true);
    if (!userData) {
      toast.error("Please login to run your code", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      setRunLoading(false);

      return;
    }

    try {
      const editorCode = userCode.slice(userCode.indexOf(starterFunctionName));
      const cb = new Function(`return ${editorCode}`)();
      // const handler = eval(handlerFunction);
      const handler = new Function("return " + eval(handlerFunction))();

      if (typeof handler === "function") {
        const passedAllTestCase = handler(cb);
        if (passedAllTestCase) {
          setRunAccepted(true);
          toast.success("Accepted. You can submit now", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          setRunLoading(false);
        } else {
          // Directly show the toast for wrong answer instead of throwing an error
          toast.error("Wrong answer", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          setRunLoading(false);
        }
      }
    } catch (error) {
      console.error("Error running code: ", error);
      toast.error("There was a problem running your code.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      setRunLoading(false);
    }
  };

  return (
    <div className="w-[inherit] h-full p-0.5 pl-0">
      <div className="w-full h-full overflow-hidden">
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
            runLoading={runLoading}
            submitLoading={submitLoading}
          />
        </Split>
      </div>
    </div>
  );
};

export default PlayGround;
