import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
// const divTag = createElement("div", { classname: "greeting" }, [
//   createElement("h1", "", "heading1"),
//   createElement("h2", "", "heading2"),
//   createElement("h3", "", "heading3"),
// ]);
import Text from "./component2/Text";
const age = 19
function App() {
  return (
    // <div className="body">
    //   {/* <h1>{1 + 2}</h1>
    //   <h2>{1 > 2 ? '1 lon hon 2' : '2 lon hon 1'}</h2>
    //   <h3>{ age>=18?'dc xem phim 19+':'ko dc xem dau'}</h3> */}
    //   <Header background="violet" height="200px" />
    //   <Header background="purple" height="400px" />
    //   <div className="main_content">
    //     <SideBar background="gray" />
    //     <Content />
    //     <SideBar background="black" />
    //   </div>
    //   <Footer />
    // </div>
    <div>
      {/* <Text text="heading1" color="red" fontSize="12px" />
      <Text text="heading2" color="blue" fontSize="30px" />
      <Text text='heading3' color='grey' ></Text> */}
      <Text>
        <h3>heading3</h3>
      </Text>
    </div>
  );
}

export default App;
