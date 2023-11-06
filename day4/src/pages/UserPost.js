import { useOutletContext } from "react-router-dom";

function UserPost() {
  const context = useOutletContext();
  console.log(context);

  return (
    <>
      유저 게시글 정보 ~~
      {context.posts.map((e) => (
        <div key={e.title}>
          {e.title}, {e.text}
        </div>
      ))}
    </>
  );
}
export default UserPost;
