import axios from "axios";
import "./PhotoDetailsPage.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import { API_URL } from "../../Utils/api";
import { API_KEY } from "../../Utils/api";
import borderHeart from "../../assets/Icons/Like_Outline.svg";
import filledHeart from "../../assets/Icons/Like_Filled.svg";

function PhotoDetailsPage({ photos }) {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState([]);
  const [comments, setComments] = useState([]);

  const [timestamp, setTimestamp] = useState("");
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    try {
      const filterPhoto = async () => {
        const photoRender = await photos.find((img) => img.id == photoId);
        setPhoto(photoRender);
      };
      filterPhoto();
    } catch (error) {
      console.error(error);
    }
  }, [photos, photoId]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/${photoId}/comments?api_key=${API_KEY}`
      );
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (photo) {
      fetchComments();
    }
  }, [photo]);
  if (!photo || !fetchComments) {
    return "Loading...";
  }

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${photoId}?api_key=${API_KEY}`
        );
        setLikes(response.data.likes);
        setTimestamp(response.data.timestamp);
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [API_URL, API_KEY, photoId]);

  const formatDate = (timestamp) => {
    if (!timestamp) return new Date().toLocaleDateString(); // If no timestamp, return today's date
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`; // Format as MM/DD/YYYY
  };

  return (
    <section key={photo.id} className="photo-details-page">
      <div className="photos">
        <img
          className="photos__img"
          src={photo.photo}
          alt={photo.photoDescription}
        />
        <ul className="photos__tag-list">
          {(photo.tags || []).map((tag, index) => (
            <li key={index} className="photos__tag-list-item">
              {tag}
            </li>
          ))}
        </ul>
        <div className="photos__container">
          <div className="photos__info">
            <div className="like-btn">
              <img className="like-btn__img" src={borderHeart} alt="Heart" />
              <p className="like-btn__count">{likes} likes</p>
            </div>
            <p className="photographer-name">Photo By {photo.photographer}</p>
          </div>
          <div className="date">
            <p>{formatDate(timestamp)}</p>
          </div>
        </div>
      </div>

      <div className="comments">
        <Form fetchComments={fetchComments} photoId={photoId} />
        <p className="comments__length">{comments.length} Comments</p>
        <ul className="comments__list">
          {comments.map((comment, index) => (
            <li key={index} className="comments__item">
              <hr />
              <div className="comments__data">
                <p className="comments__username">{comment.name}</p>
                <p className="comments__date">
                  {formatDate(comment.timestamp)}
                </p>
              </div>
              <p className="comments__details">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PhotoDetailsPage;
