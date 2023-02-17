import { Route, Routes } from "react-router-dom";
import About from "./components1/About";
import Dashboard from "./components1/Dashboard";
import Home from "./components1/Home";
import Layout from "./components1/Layout";
import NoMatch from "./components1/NoMatch";
//v6
// npm install react-router-dom
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        {/*  <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> */}

        <Route path="/" element={<Layout />}>
          {/* prefix값과 같은 원리 */}
          <Route index element={<Home />} />
          {/* Layout과 같은 path이므로 index로 처리 빈공간으로 놔두기도 함 */}
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
