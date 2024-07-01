"use client";
import React from "react";
import galleryImages from "../components/Image-gallery/galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "reactstrap";

function GalleryPage() {
  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              className="masonary__img"
              src={item}
              key={index}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
}

export default GalleryPage;
