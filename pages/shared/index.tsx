import Layout from "@/components/layout/layout/Layout";
import FolderInfo from "@/components/shared/folder-info/FolderInfo";
import SearchBar from "@/components/shared/search-bar/SearchBar";
import CardList from "@/components/ui/card-list/CardList";
import Card from "@/components/ui/card/Card";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";
import styles from "./Shared.module.scss";
import classNames from "classnames/bind";
import { useFolder } from "@/pages/hooks-test/useFolder";

const cx = classNames.bind(styles);

export default function Shared() {
  const { data, isLoading, isError } = useFolder();

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  if (!data) return <div>data가 없음</div>;

  return (
    <Layout isSticky={false}>
      <div className={cx("container")}>
        <FolderInfo
          folderName={data.name}
          ownerName={data.owner.name}
          profileImage={data.owner.profileImageSource}
        />
        <div className={cx("item")}>
          <SearchBar />
          <CardList>
            {data.links.map((link) => (
              <Card
                key={link.id}
                href={link.url}
                imageSource={link.imageSource}
                alt={"card"}
                elapsedTime={getElapsedTime(link.createdAt)}
                description={link.description}
                createdAt={formatDate(link.createdAt)}
              />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
}
