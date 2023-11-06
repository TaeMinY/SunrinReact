import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onAboutPage = () => {
    navigate("/about");
  };

  return (
    <>
      <div>HOME</div>
      <Link to="/about">ABOUT 페이지로</Link>
      <div onClick={onAboutPage}>ABOUT 페이지로</div>
    </>
  );
}

export default Home;
