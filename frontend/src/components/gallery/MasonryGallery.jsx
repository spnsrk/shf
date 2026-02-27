import React, { useState, useEffect, useCallback } from "react";
import Masonry from "@mui/lab/Masonry";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MasonryGallery = ({ images, isLoading }) => {
  const [visibleImages, setVisibleImages] = useState(15);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visibleList = images.slice(0, visibleImages);
  const allImagesLoaded = images.length <= visibleImages;

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(-1);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : visibleList.length - 1));
  }, [visibleList.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i < visibleList.length - 1 ? i + 1 : 0));
  }, [visibleList.length]);

  useEffect(() => {
    if (lightboxIndex < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goPrev, goNext]);

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 15);
  };

  return (
    <Box
      className="masonry-gallery ml-2 mb-8"
      sx={{ width: "100%", minHeight: 829 }}
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {visibleList.map((image, idx) => (
              <Box
                key={image._id}
                onClick={() => openLightbox(idx)}
                sx={{ cursor: "pointer" }}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            ))}
          </Masonry>
          <Box display="flex" justifyContent="center" mt={4}>
            {allImagesLoaded ? (
              <Typography color="textSecondary">
                No more images to load
              </Typography>
            ) : (
              <Button
                onClick={loadMoreImages}
                variant="contained"
                sx={{
                  backgroundColor: "#F4911F",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#483081" },
                  borderRadius: "50px",
                  padding: "8px 25px",
                  textTransform: "none",
                  fontSize: "13px",
                }}
              >
                Load More
              </Button>
            )}
          </Box>
        </>
      )}

      {lightboxIndex >= 0 && visibleList[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              zIndex: 10001,
            }}
            aria-label="Close"
          >
            <XMarkIcon style={{ width: 32, height: 32 }} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              zIndex: 10001,
            }}
            aria-label="Previous"
          >
            <ChevronLeftIcon style={{ width: 28, height: 28 }} />
          </button>

          <img
            onClick={(e) => e.stopPropagation()}
            src={visibleList[lightboxIndex].imageUrl}
            alt={visibleList[lightboxIndex].title || "Gallery image"}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 8,
              userSelect: "none",
            }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              zIndex: 10001,
            }}
            aria-label="Next"
          >
            <ChevronRightIcon style={{ width: 28, height: 28 }} />
          </button>

          <div
            style={{
              position: "absolute",
              bottom: 20,
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {lightboxIndex + 1} / {visibleList.length}
          </div>
        </div>
      )}
    </Box>
  );
};

export default MasonryGallery;