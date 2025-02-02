import { useState } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../../Utils/api";
import "./Form.scss";
function Form({ fetchComments, photoId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const isFormValid = () => {
    if (!name || !comment) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (isFormValid()) {
      try {
        await axios.post(`${API_URL}/${photoId}/comments?api_key=${API_KEY}`, {
          name,
          comment,
        });
        fetchComments();
        setName("");
        setComment("");
        setSubmitted(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment">
      <label htmlFor="name" className="comment__label">
        Name:{" "}
        <input
          className={`comment__input ${submitted && !name ? "error" : ""}`}
          type="text"
          id="name"
          name="name"
          onChange={handleChangeName}
          value={name}
        />
      </label>

      <label htmlFor="comment" className="comment__label">
        Comment:
        <textarea
          type="text"
          id="comment"
          className={`comment__input ${submitted && !comment ? "error" : ""}`}
          onChange={handleChangeComment}
          value={comment}
          name="comment"
        />
      </label>
      <div className="comment__button-container">
        <button type="submit" className="comment__button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
