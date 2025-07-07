import Link from "next/link";

const Page = () => {
  const lien = "/";

  return (
    <div className="w-7xl mx-auto">
      <h1 className="text-2xl">About</h1>
      <Link href={`${lien}`}>Home</Link>
    </div>
  );
};

export default Page;
