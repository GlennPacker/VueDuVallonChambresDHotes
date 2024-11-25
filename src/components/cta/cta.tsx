import { ReactNode } from "react";
import styles from "./cta.module.css";

type props = {
  children: ReactNode;
  img: string;
  alt: string;
  link?: string;
}

export default function Cta(
  {
    children,
    img,
    alt,
    link
  }: props
) {
  const src = img.startsWith('/') ? img : `/${img}`;

  const imgNode =
    <div
      className={styles.imgContainer}
    >
      <img
        width="250px"
        src={src}
        alt={alt}
      />
    </div>;

  const textNode =
    <div className={styles.textContainer}>
      {children}
    </div>;

  return (
    <div className={styles.container}>
      {link &&
        <a href={link}>
          {imgNode}
        </a>
      }
      {!link && imgNode}

      {link &&
        <a href={link}>
          {textNode}
        </a>
      }
      {!link && textNode}
    </div>
  );
}
