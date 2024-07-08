// Banner
export { default as heroBg } from "./hero-bg.svg";
export { default as heroBanner1 } from "./hero-banner-1.jpg";
export { default as heroBanner2 } from "./hero-banner-2.jpg";
export { default as heroShape1 } from "./hero-shape-1.svg";
export { default as heroShape2 } from "./hero-shape-2.png";
export { default as aboutBanner } from "./about-banner.jpg";
export { default as aboutShape1 } from "./about-shape-1.svg";
export { default as aboutShape2 } from "./about-shape-2.svg";
export { default as aboutShape3 } from "./about-shape-3.png";
export { default as aboutShape4 } from "./about-shape-4.svg";
export { default as logoNav } from "./logo-nav.png"
export { default as logoFooter } from "./logo-footer.png"
export { default as footerBg } from "./footer-bg.png"
export { default as logo } from "./logo.svg"
export { default as videoBg } from "./video-bg.png"
export { default as videoShape1 } from "./video-shape-1.png"
export { default as videoShape2 } from "./video-shape-2.png"
export { default as videoBanner } from "./video-banner.jpg"
export { default as blogShape } from "./blog-shape.png"
export { default as blogBg } from "./blog-bg.svg"

// Kampus images
export const kampusImages = Object.values(
  import.meta.glob("./kampus-*.{png,jpg,jpeg,PNG,JPEG,svg}", {
    import: 'default',
    eager: true,
  })
); 


// Fasilitas images
export const fasilitasImages = Object.values(
  import.meta.glob("./fasilitas-*.{png,jpg,jpeg,PNG,JPEG,svg}", {
    import: 'default',
    eager: true,
  })
); 

// Categories images
export const categoriesImages = Object.values(
  import.meta.glob("./category-*.{png,jpg,jpeg,PNG,JPEG,svg}", {
    import: 'default',
    eager: true,
  })
);