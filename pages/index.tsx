import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/signin">
        <button>로그인</button>
      </Link>
    </>
  );
}
