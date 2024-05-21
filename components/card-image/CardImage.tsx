import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import EmptyImage from "@/public/card-empty-image.png";

interface CardImageProps {
  imageSource: string;
  alt: string;
}

const cx = classNames.bind(styles);

export default function CardImage({ imageSource, alt }: CardImageProps) {
  return (
    <div className={cx("container")}>
      <Image
        src={imageSource ?? EmptyImage}
        alt={alt}
        width={340}
        height={192}
      />
    </div>
  );
}
