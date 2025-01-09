"use strict";

//youtube video
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".video").forEach(function (videoLink) {
    videoLink.addEventListener("click", function (e) {
      e.preventDefault();

      const videoId = "4LAGNeE5pjA";
      const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
      const modalHtml = `
                <div id="videoModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                    <div style="position: relative; width: 80%; max-width: 800px;">
                        <iframe src="${videoEmbedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width: 100%; height: 450px;"></iframe>
                        <button id="closeModal" style="position: absolute; top: -10px; right: -10px; background: #fff; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 16px; cursor: pointer;">×</button>
                    </div>
                </div>
            `;

      // Append modal to body
      document.body.insertAdjacentHTML("beforeend", modalHtml);

      // Close modal on button click
      document
        .getElementById("closeModal")
        .addEventListener("click", function () {
          document.getElementById("videoModal").remove();
        });

      // Close modal if clicking outside the modal content area
      document
        .getElementById("videoModal")
        .addEventListener("click", function (e) {
          if (e.target === document.getElementById("videoModal")) {
            document.getElementById("videoModal").remove();
          }
        });
    });
  });
});

// Preloader Hide After Page Load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Fade out the preloader
  preloader.style.transition = "opacity 3.3s ease, visibility 2.3s ease";
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
});

// Scroll Effect for the Banner
window.addEventListener("scroll", function () {
  const banner = document.getElementById("banner");
  const scrollPosition = window.scrollY;

  // Calculate the scroll distance from the top
  const bannerOffset = banner.getBoundingClientRect().top + window.scrollY;
  const distance = scrollPosition - bannerOffset;

  // Calculate the opacity and vertical
  const opacityValue = Math.max(1 - Math.abs(distance) * 0.003, 0);
  const translateYValue = Math.min(distance * 0.25, 150);

  banner.style.transform = `translateY(-${translateYValue}px)`;
});

//open gallery
document.addEventListener("DOMContentLoaded", function () {
  //image elements
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  //click event
  galleryImages.forEach((image) => {
    image.addEventListener("click", function (e) {
      e.preventDefault();
      const imgSrc = image.src;
      modalImg.src = imgSrc;
      modal.style.display = "flex"; // Show the modal
    });
  });

  //close button to hide the modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal if the user clicks anywhere outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
