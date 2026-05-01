import { useState, useRef, useEffect } from "react";
import RightArrow from "../assets/icons/rightArrow.svg?react";
import LeftArrow from "../assets/icons/leftArrow.svg?react";
import "../styles/youtubeCarousel.css";

const videos = ["hDC7kpit1zQ", "dQw4w9WgXcQ", "kJQP7kiw5Fk", "3JZ_D3ELwOQ"];

export default function YouTubeCarousel() {
  const carouselRef = useRef(null);

  const [pageSize, setPageSize] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);

  const gap = 16;

  const updateCarousel = () => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.offsetWidth;

    let itemsFit;

    if (window.innerWidth < 1024) {
      itemsFit = 2;
    } else {
      itemsFit = 1;
    }

    const calculatedWidth = (containerWidth - gap * (itemsFit - 1)) / itemsFit;

    setPageSize(itemsFit);
    setItemWidth(calculatedWidth);
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [pageSize]);

  const next = () => {
    setStartIndex((prev) =>
      Math.min(prev + pageSize, videos.length - pageSize),
    );
  };

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - pageSize));
  };

  return (
    <div className="yt-carousel" ref={carouselRef}>
      <div
        className="yt-track"
        style={{
          transform: `translateX(-${startIndex * (itemWidth + gap)}px)`,
        }}
      >
        {videos.map((id) => (
          <div
            key={id}
            className="yt-item"
            style={{
              width: `${itemWidth}px`,
              marginRight: `${gap}px`,
            }}
          >
            <div className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <a
                className="video-link-overlay"
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        ))}
      </div>

      {startIndex > 0 && (
        <button className="prev-btn" onClick={prev}>
          <LeftArrow />
        </button>
      )}

      {startIndex + pageSize < videos.length && (
        <button className="next-btn" onClick={next}>
          <RightArrow />
        </button>
      )}
    </div>
  );
}
