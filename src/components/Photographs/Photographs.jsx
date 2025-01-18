import photos from "../../assets/Data/photos.json";
import './Photographs.scss';
export default function Photographs() {
  return (
    <div className="main">
      {photos.map((photo) => (
        <section className="photos">
          <img className="photos__img" src={photo.photo} alt={photo.photoDescription} />
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
}
