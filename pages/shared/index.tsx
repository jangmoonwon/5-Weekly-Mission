import Layout from "@/components/layout/layout/Layout";
import { useFolder } from "../api/useFolder";
import FolderInfo from "@/components/folder-info/FolderInfo";
import SearchBar from "@/components/search-bar/SearchBar";
import CardList from "@/components/card-list/CardList";
import Card from "@/components/card/Card";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";
import styles from "./Shared.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardProps {
  id: number;
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
}

export default function Shared() {
  const { data } = useFolder();

  return (
    <Layout isSticky={false}>
      <div className={cx("container")}>
        <FolderInfo
          folderName={data?.folder.name}
          ownerName={data?.folder.owner.name}
          profileImage={data?.folder.owner.profileImageSource}
        />
        <div className={cx("item")}>
          <SearchBar />
          <CardList>
            {data?.folder.links.map((item: CardProps) => (
              <Card
                key={item.id}
                href={item.url}
                imageSource={item.imageSource}
                alt={"card"}
                elapsedTime={getElapsedTime(item.createdAt)}
                description={item.description}
                createdAt={formatDate(item.createdAt)}
              />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
}
