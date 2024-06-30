import Layout from "@/components/layout/layout/Layout";
import FolderInfo from "@/components/shared/folder-info/FolderInfo";
import SearchBar from "@/components/shared/search-bar/SearchBar";
import CardList from "@/components/ui/card-list/CardList";
import Card from "@/components/ui/card/Card";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";
import styles from "./Shared.module.scss";
import classNames from "classnames/bind";
import { getSampleLinks } from "../api/getSampleLinks";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";

const cx = classNames.bind(styles);

export default function Shared() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sampleLinks"],
    queryFn: getSampleLinks,
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;
  if (!data) return <div>data가 없음</div>;

  return (
    <Layout isSticky={false}>
      <div className={cx("container")}>
        {/* <FolderInfo
          folderName={data.name}
          ownerName={data.owner.name}
          profileImage={data.owner.profileImageSource}
        /> */}
        <div className={cx("item")}>
          <SearchBar />
          <CardList>
            {data.map((link) => (
              <Card
                key={link.id}
                href={link.url}
                imageSource={link.image_source}
                alt={"card"}
                elapsedTime={getElapsedTime(link.created_at)}
                description={link.description}
                createdAt={formatDate(link.created_at)}
              />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
}
