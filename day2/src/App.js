import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FIntroduce from "./components/FIntroduce";
import Introduce from "./components/Introduce";
import FCounter from "./components/FCounter";

// class App extends Component {
//   render() {
//     return <Introduce name="홍길동2" age={20}></Introduce>;
//   }
// }

// class App extends Component {
//   state = {
//     isCounter: true,
//   };

//   render() {
//     // return <Introduce name="홍길동2" age={123}></Introduce>;
//     const { isCounter } = this.state;

//     return (
//       <>
//         <button
//           onClick={() => {
//             this.setState({ isCounter: !isCounter });
//           }}
//         >
//           카운터
//         </button>
//         {isCounter && <Counter></Counter>}
//       </>
//     );
//   }
// }

// function App() {
//   return <FIntroduce name="홍길동2" age={10}></FIntroduce>;
// }

function App() {
  return <FCounter></FCounter>;
}

export default App;
