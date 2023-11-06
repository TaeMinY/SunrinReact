import { Outlet, useParams, useLoaderData, Form } from "react-router-dom";

function Info() {
  const params = useParams();
  const { username, posts } = useLoaderData();

  return (
    <>
      <div> 유저 정보 페이지</div>
      <div> 유저 아이디 : {params.id}</div>
      <div> 유저 이름 : {username}</div>
      <Outlet context={{ id: params.id, posts: posts }} />
      <Form method="post" action="">
        <button type="submit">생성</button>
      </Form>
    </>
  );
}

export default Info;
