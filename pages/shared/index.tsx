import Layout from "@/components/layout/layout/Layout";
import { useGetFolder } from "../api/useGetFolder";
import FolderInfo from "@/components/folder-info/FolderInfo";
import SearchBar from "@/components/search-bar/SearchBar";
import SharedLayout from "@/components/layout/page-layout/SharedLayout/SharedLayout";
import CardList from "@/components/card-list/CardList";
import Card from "@/components/card/Card";
import formatDate from "@/lib/formatDate";
import { getElapsedTime } from "@/lib/getElapsedTime";

export default function Shared() {
  const { data } = useGetFolder();

  return (
    <Layout isSticky={false}>
      <SharedLayout
        folderInfo={
          <FolderInfo
            folderName={data?.folder.name}
            ownerName={data?.folder.owner.name}
            profileImage={data?.folder.owner.profileImageSource}
          />
        }
        seachBar={<SearchBar />}
        cardList={
          <CardList>
            {data?.folder.links.map((item: any) => (
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
        }
      />
    </Layout>
  );
}
