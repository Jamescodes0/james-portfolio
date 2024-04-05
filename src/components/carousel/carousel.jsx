"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: "/Ratings1.png",
      alt: "Submit Ratings form",
    },
    {
      src: "/Ratings2.png",
      alt: "Successfully added a Rating",
    },
    {
      src: "/discountAdmin1.png",
      alt: "Discount Table",
    },
    {
      src: "/discountAdmin4.png",
      alt: "Create new Discount",
    },
    {
      src: "/discountAdmin5.png",
      alt: "Edit existing Discount",
    },
    {
      src: "/UE1.png",
      alt: "Unreal Engine Char",
    },
    {
      src: "/UE2.png",
      alt: "Unreal Engine Map",
    },
  ];

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setModalImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const previousImage = () => {
    setModalImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to my Portfolio!</h1>
        <div className={styles.slider} data-speed="fast">
          <ul className={styles.slideTrack}>
            {images.map((image, index) => (
              <li
                key={index}
                className={styles.slide}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.prevArrow} onClick={previousImage}>
              &lt;
            </button>
            {modalImageIndex !== null && (
              <div className={styles.modalImageWrapper}>
                <Image
                  src={images[modalImageIndex].src}
                  alt={images[modalImageIndex].alt}
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </div>
            )}
            <button className={styles.nextArrow} onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
