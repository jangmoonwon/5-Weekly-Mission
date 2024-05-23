import styles from "./Folder.module.scss";
import classNames from "classnames/bind";
import AddLinkBar from "@/components/add-link-bar/AddLinkBar";
import Layout from "@/components/layout/layout/Layout";
import FolderLayout from "@/components/layout/page-layout/folder-layout/FolderLayout";
import ToolBar from "@/components/tool-bar/ToolBar";
import CardList from "@/components/card-list/CardList";
import { useLinks } from "../api/useLinks";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";
import Card from "@/components/card/Card";

const cx = classNames.bind(styles);

interface CardProps {
  id: number;
  url: string;
  image_source: string;
  alt: string;
  elapsedTime: string;
  description: string;
  created_at: string;
}

export default function Folder() {
  const { data } = useLinks();

  return (
    <Layout>
     <div className={cx("container")}>
      <AddLinkBar />
      <div className={cx("item")}>
        <ToolBar />
        <CardList>
          {data?.data.map((item: CardProps) => (
            <Card
              key={item.id}
              href={item.url}
              imageSource={item.image_source}
              alt={"card"}
              elapsedTime={getElapsedTime(item.created_at)}
              description={item.description}
              createdAt={formatDate(item.created_at)}
            />
          ))}
        </CardList>
      </div>
    </div>
    </Layout>
  );
}
