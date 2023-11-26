import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";

// const divTag = createElement("div", { classname: "greeting" }, [
//   createElement("h1", "", "heading1"),
//   createElement("h2", "", "heading2"),
//   createElement("h3", "", "heading3"),
// ]);
function App() {

  let count = 0;
  const onClickCount = () => {
 
    count++
       console.log(count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickCount}> Click me</button>
    </div>
  );
}

export default App;


//  onClick={()=>sayHello("tom")} no tao ra ham moi de chay ham sayHello()

//   function anotherFunction() {
  //   return sayHello("tom")
  // }
  // return (
  //   <div>
  //     <button onClick={anotherFunction}>Say hello</button>
//   </div>   co the dung cach nay cung dc
  
//  <label htmlFor="firstName">FirstName</label>   label khi co cai htmlfor ban chi can click vao label no se focus vao input
//       <input id="firstName" onChange={onChange}></input>

// <form onSubmit={handleSubmit}> giup ban submit
// function App() {

//   function handleSubmit(e) {
//     e.preventDefault()
//   console.log('submit')
// }




//   //  ham nay la gi tri cua attribute onsubmit()
//   const handleSubmit = (e) => {
//     // ngan chan hanh dong reload default cua form 
//     e.preventDefault()
//     // call data , api , blabla
//     console.log(e)
//     console.log('submit roi nha')
//   }

    // <form id="form" onSubmit={handleSubmit}>
    //   <h1>login</h1>
    //   <div>
    //     <label htmlFor="firstName">FirstName</label>
    //     <input id="firstName"></input>
    //   </div>
    //   <div>
    //     <label htmlFor="lastName">lastName</label>
    //     <input id="lastName"></input>
    //   </div>
    //   <button type="submit">submit</button>
    // </form>