import React from "react";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <h1 className="text-2xl">Page d'article : {id}</h1>
    </div>
  );
};

export default page;
