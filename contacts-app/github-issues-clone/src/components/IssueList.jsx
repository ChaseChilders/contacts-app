import { useState, useEffect } from "react";
import Issue from "./Issue.jsx";

function IssueList() {
  const [issues, setIssues] = useState([]);

  const getIssues = () => {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => res.json())
      .then((data) => {
        console.log("testing");
        setIssues(data);
        console.log(issues);
      });
  };

  useEffect(() => {
    getIssues();
    console.log(issues);
  }, []);

  return (
    <div>
      {issues.map((issue) => {
        return <Issue key={issue.id} issue={issue} />;
      })}
    </div>
  );
}

export default IssueList;
