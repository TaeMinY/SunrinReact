import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>header</div>
      <h2>App.js</h2>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}

export default App;
