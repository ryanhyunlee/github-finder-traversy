import { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something...", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          onChange={onTextChange}
          type='text'
          className='text'
          placeholder='Search user...'
          value={text}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className='btn btn-light btn-block'
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Search;
