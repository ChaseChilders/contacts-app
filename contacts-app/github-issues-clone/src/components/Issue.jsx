import PropTypes from "prop-types";
import "./Issue.css";

function Issue(props) {
  const issueTitle = props.issue.title;
  const issueDate = props.issue.created_at;
  const dateCreated = props.issue.date;
  const username = props.issue.user.login;
  const issueId = props.issue.id;

  return (
    <div className="issueBox">
      <h1 className="issueTitle">{issueTitle}</h1>
      <h2 className="otherIssueStuff">
        #{issueId} opened on {issueDate} by {username}
      </h2>
    </div>
  );
}

Issue.propTypes = {
  issue: PropTypes.object,
};
export default Issue;
