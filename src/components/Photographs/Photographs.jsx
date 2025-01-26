import { Link } from "react-router-dom";
import "./Photographs.scss";
import axios from "axios";
import { API_KEY } from "../../Utils/api";
import { API_URL } from "../../Utils/api";
import React, { useState, useEffect } from "react";
const Photographs = ({ selectedTag, photos }) => {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div className="photo-card">
      {filteredPhotos.map((photo) => (
        <Link to={`${photo.id}`} key={photo.id} className="photos">
          {/* <section  key={photo.id}> */}
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
          {/* </section> */}
        </Link>
      ))}
    </div>
  );
};
export default Photographs;
