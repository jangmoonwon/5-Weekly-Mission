import { useFetchFolder } from "../../hooks/useFetchFolder";
import noImageLogo from "../../assets/noImageLogo.svg";
import "../Shared/SharedPage.css";
import User from "../../components/User/User";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Layout } from "../../sharing/ui-layout/Layout";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function timeDiffDate(value) {
  const timeDiff = new Date() - new Date(value);

  const diffMonth = Math.floor(Math.abs(timeDiff / (1000 * 60 * 60 * 24 * 30)));
  if (diffMonth) {
    return diffMonth <= 11 ? `${diffMonth} months ago` : "1 year ago";
  }
}

function FolderListPage() {
  const { data, loading } = useFetchFolder();
  return (
    <Layout isSticky={false}>
      <div className="container">
        <User />
        <SearchBar />
        <div className="card-container">
          {loading ? (
            <h1>로딩중</h1>
          ) : (
            data.folder.links.map((item) => (
              <div className="card" key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <div className="card-Thumbnail-container">
                    {item.imageSource ? (
                      <img
                        className="card-thumbnail"
                        src={item.imageSource}
                        alt="카드 썸네일"
                      />
                    ) : (
                      <img
                        className="card-no-thumbnail"
                        src={noImageLogo}
                        alt="카드 썸네일 없음"
                      />
                    )}
                  </div>
                  <div className="card-info">
                    <p className="card-created-at">
                      {timeDiffDate(item.createdAt)}
                    </p>
                    <p className="card-description">{item.description}</p>
                    <p className="card-created-at">
                      {formatDate(item.createdAt)}
                    </p>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default FolderListPage;
