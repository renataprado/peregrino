import Image from "next/image";
import styles from "./gallery.module.css";
import fs from "fs";
import path from "path";

const filenames = fs.readdirSync(path.join(process.cwd(), "public/photos"));
const images = filenames.map((name) => `/photos/${name}`);

const Gallery = () => {
  const Comp = ({ h = 400, w = 400, src }) => {
    const he = Math.floor(Math.random() * 6 + 2)*100
    console.log(he)
    return (
      <div
        style={{
          position: "relative",
          width: `${w}px`,
          height: `${he}px`,
          border: "1px solid blue",
          overflow: "hidden",
        }}
      >
        <Image src={src} fill objectFit="contain" />
      </div>
    );
  };

  return (
    <div className={styles.galleryGrid}>
      <>
        {images.map((src) => (
          <Comp src={src} />
        ))}
      </>
    </div>
  );
};

export default Gallery;
