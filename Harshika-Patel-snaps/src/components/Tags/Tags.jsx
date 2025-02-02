import axios from "axios";
import "./Tags.scss";
import { API_URL_TAGS } from "../../Utils/api";
import React, { useEffect, useState } from "react";
const Tags = ({ selectedTag, setSelectedTag }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        API_URL_TAGS
      )
      .then((response) => {
        setTags(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("tags data is not fectching");
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading......</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="tags-panel">
      <h2 className="tags-panel-title">Filters</h2>
      <div className="tags-panel__flex-count">
        {tags.map((tag, index) => (
          <button
            key={index}
            data={console.log("state: ", selectedTag, "tag: ", tag)}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`tags-panel__tag ${
              selectedTag == tag ? "tags-panel__tag--selected" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Tags;
