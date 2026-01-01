import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Time to get started!</h1>
      <p>
        <Link href={"/"}>Home</Link>
      </p>
      <p>
        <Link href={"/meals"}>meals</Link>
      </p>
      <p>
        <Link href={"/meals/share"}>meals Share</Link>
      </p>
      <p>
        <Link href={"/community"}>community</Link>
      </p>
    </main>
  );
}
