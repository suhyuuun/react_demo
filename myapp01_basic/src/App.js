import logo from "./logo.svg";
import "./App.css"; //주석해제하면 가운데 정렬됨
import MyJsx001 from "./components/ex01_jsx/MyJsx001";
import MyJsx002 from "./components/ex01_jsx/MyJsx002";
import MyJsx003 from "./components/ex01_jsx/MyJsx003";
import MyJsx004 from "./components/ex01_jsx/MyJsx004";
import MyJsx005 from "./components/ex01_jsx/MyJsx005";
import MyBasic001 from "./components/ex02_useState/MyBasic001";
import MyuseState002 from "./components/ex02_useState/MyuseState002";
import MyuseState003 from "./components/ex02_useState/MyuseState003";
import MyuseState004 from "./components/ex02_useState/MyuseState004";
import MyuseState005 from "./components/ex02_useState/MyuseState005";
import MyuseState006 from "./components/ex02_useState/MyuseState006";
import MyuseRef001 from "./components/ex03_useRef/MyuseRef001";
import MyuseRef002 from "./components/ex03_useRef/MyuseRef002";
import MyuseEffect001 from "./components/ex04_useEffect/MyuseEffect001";
import MyuseEffect002 from "./components/ex04_useEffect/MyuseEffect002";
import MyuseStatesync001 from "./components/ex05_async/MyuseStatesync001";

function App() {
  return (
    <div className="App">
      {/* {<MyJsx001 />} */}
      {/* {<MyJsx002 />} */}
      {/* {<MyJsx003 />} */}
      {/* {<MyJsx004 />} */}
      {/* {<MyJsx005 />} */}
      {/* {<MyBasic001 />} */}
      {/* {<MyuseState002 />} */}
      {/* {<MyuseState003 />} */}
      {/* {<MyuseState004 />} */}
      {/* {<MyuseState005 />} */}
      {/* {<MyuseState006 />} */}
      {/* {<MyuseRef001 />} */}
      {/* {<MyuseRef002 />}*/}
      {/* {<MyuseEffect001 />} */}
      {/* {<MyuseEffect002 />} */}
      {<MyuseStatesync001 />}
    </div>
  );
}

export default App;
