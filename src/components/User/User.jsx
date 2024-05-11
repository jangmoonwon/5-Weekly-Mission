import { useFetchFolder } from "../../hooks/useFetchFolder";
import "../User/User.css";

function User() {
  const { data } = useFetchFolder();

  return (
    <div className="user-container">
      {data && (
        <div className="user-content">
          <img
            className="user-avatar"
            src={data.folder.owner.profileImageSource}
            alt="유저 이미지"
          />
          <p className="user-oner">@{data.folder.owner.name}</p>
          <p className="user-name">{data.folder.name}</p>
        </div>
      )}
    </div>
  );
}

export default User;
