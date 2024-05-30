import CardLayout from "@/components/layout/card-layout/CardLayout";
import CardImage from "@/components/ui/card-image/CardImage";
import CardContent from "@/components/ui/card-content/CardContent";
import Link from "next/link";

interface CardProps {
  href: string;
  imageSource?: string;
  alt: string;
  elapsedTime: string;
  description?: string;
  createdAt: string;
}

export default function Card({
  href,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: CardProps) {
  return (
    <Link href={href} rel="noreferrer" target="_blank">
      <CardLayout>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </CardLayout>
    </Link>
  );
}
