import Hero from "../../components/Hero/Hero";
import Tags from "../../components/Tags/Tags";
import { useState } from "react";
import Photographs from "../../components/Photographs/Photographs";
function HomePage({ isTagsPanelOpen, photos }) {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      {isTagsPanelOpen && (
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      )}
      <Hero />

      <Photographs selectedTag={selectedTag} photos={photos} />
    </>
  );
}
export default HomePage;
