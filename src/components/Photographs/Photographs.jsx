import photos from "../../assets/Data/photos.json";
import "./Photographs.scss";

const Photographs = ({ selectedTag }) => {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;
  return (
    <div className="photo-card">
      {filteredPhotos.map((photo) => (
        <section className="photos">
          <div className="photos__image-container">
            <img
              className="photos__img"
              src={photo.photo}
              alt={photo.photoDescription}
            />
            <div className="photos__text-overlay">
              <p>{photo.photographer}</p>
            </div>
          </div>
          <ul className="photos__tag-list">
            {photo.tags.map((tag, index) => (
              <li key={index} className="photos__tag-list-item">
                {tag}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
export default Photographs;
