import PropTypes from "prop-types";

function Issue(props) {
  const issueTitle = props.issue.title;
  const issueNumber = props.issue.created_at;
  const dateCreated = props.issue.date;
  const userLink = props.issue.user.html_url;
  const username = props.issue.user.login;

  return (
    <div>
      <h1>{issueTitle}</h1>
      <h2>{issueNumber}</h2>
      <h2>{dateCreated}</h2>
      <h2>{userLink}</h2>
      <h2>{username}</h2>
    </div>
  );
}

Issue.propTypes = {
  issue: PropTypes.object,
};
export default Issue;
