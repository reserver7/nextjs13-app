import React from "react";

async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();
  return data;
}

const PostDetailPage = async ({ params }: any) => {
  const post = await getPost(params.id);
  return (
    <div>
      <br />
      <h1>posts/{post.id}</h1>
      <div>
        <h3>{params.title}</h3>
        <p>{params.created}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
