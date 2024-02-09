import React from "react";
import { firestore } from "../firebase/firebaseConfig"; // Adjust the path as necessary
import { doc, setDoc } from "firebase/firestore";
import { allProblems } from "../utils/problems/allProblems"; // Adjust the path to where your problems are defined

const UploadProblems = () => {
  const uploadProblemsToFirestore = async () => {
    try {
      for (const problem of allProblems) {
        
        const problemDocRef = doc(firestore, "problems", problem.id);
        await setDoc(problemDocRef, problem);
        console.log(`Uploaded problem: ${problem.title}`);
      }
      alert("All problems uploaded successfully!");
    } catch (error) {
      console.error("Error uploading problems:", error);
      alert("Error uploading problems. Check the console for more details.");
    }
  };

  return (
    <div>
      <button onClick={uploadProblemsToFirestore}>
        Upload Problems to Firestore
      </button>
    </div>
  );
};

export default UploadProblems;
