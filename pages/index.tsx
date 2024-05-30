import Layout from "@/components/layout/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout isSticky>
      <h1>HomePage</h1>
      <Link href="/signin">
        <button>로그인</button>
      </Link>
    </Layout>
  );
}
