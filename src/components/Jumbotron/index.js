import React, { Component } from "react";
import "./jumbotron.css";

// class Jumbotron extends Component {
//   render() {
//     console.log("hello");
//     console.log(this.props);
//     return (
//       <div class="jumbotron jumbotron-fluid">
//         <div class="container-fluid">
//           <h1 class="display-4">Hi there.</h1>
//           <h2 class="lead">SMKR, welcome to the clouds</h2>
//         </div>
//       </div>
//     );
//   }
// }
// export default Jumbotron;

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <h1 className="display-4">Hey {props.user}</h1>
        <h2 className="lead">SMKR, welcome to the clouds</h2>
      </div>
    </div>
  );
}
export default Jumbotron;
