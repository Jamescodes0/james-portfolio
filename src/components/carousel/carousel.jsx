"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [modalImage, setModalImage] = useState(null);
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
      src: "/Ratings3.png",
      alt: "Successfully deleted a Rating",
    },
    {
      src: "/discountAdmin1.png",
      alt: "Discount Table",
    },
    {
      src: "/discountAdmin2.png",
      alt: "Discount filter buttons",
    },
    {
      src: "/discountAdmin3.png",
      alt: "Discounts filtered",
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
      src: "/discountAdmin6.png",
      alt: "Discount deleted successfully",
    },
    {
      src: "/discountAdmin7.png",
      alt: "Discount updated successfully",
    },
    {
      src: "/discountAdmin8.png",
      alt: "Discount created successfully",
    },
  ];

  const handleImageClick = (src, alt) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
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
                onClick={() => handleImageClick(image.src, image.alt)}
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
          <div className={styles.modal}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
