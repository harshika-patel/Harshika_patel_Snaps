import tags from "../../assets/Data/tags.json";
import "./Tags.scss";
const Tags = ({ selectedTag, setSelectedTag }) => {
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
