import styles from "./Folder.module.scss";
import classNames from "classnames/bind";
import AddLinkBar from "@/components/folder/add-link-bar/AddLinkBar";
import Layout from "@/components/layout/layout/Layout";
import ToolBar from "@/components/folder/tool-bar/ToolBar";
import CardList from "@/components/ui/card-list/CardList";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";
import Card from "@/components/ui/card/Card";
import SearchBar from "@/components/shared/search-bar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getLinks } from "../api/getLinks";
import Loading from "@/components/ui/loading/Loading";

const cx = classNames.bind(styles);

export default function Folder() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["links"],
    queryFn: getLinks,
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;
  if (!data) return <div>data없음</div>;

  return (
    <Layout>
      <div className={cx("container")}>
        <AddLinkBar />
        <div className={cx("item")}>
          <SearchBar />
          <ToolBar />
          <CardList>
            {data.map((item) => (
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
