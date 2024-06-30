import styles from "./test.module.scss";
import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/testApi";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export default function Test() {
  const router = useRouter();
  const { userId } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUsers(userId as string),
  });

  console.log(data);

  const user = data && Array.isArray(data) ? data[0] : data;

  if (isLoading) return "로딩 중입니다...";

  return (
    <div className={cx("container")}>
      <h1>test page</h1>
      {user ? (
        <>
          <h1>{user.email}</h1>
          <h1>{user.name}</h1>
        </>
      ) : (
        <h1>데이터가 없습니다</h1>
      )}
    </div>
  );
}
