import Link from "next/link";
import React from "react";

const page = () => {
  console.log("test");
  return (
    <div>
      <h1 className="text-2xl">blog</h1>
      <div>
        titre article 1<Link href={`blog/1`}>Voir</Link>
      </div>
      <div>
        titre article 2<Link href={`blog/2`}>Voir</Link>
      </div>
    </div>
  );
};

export default page;
