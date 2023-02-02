import { Route, Routes } from "react-router-dom";
import About from "./components3/About";
import Dashboard from "./components3/Dashboard";
import Home from "./components3/Home";
import Layout from "./components3/Layout";
import NoMatch from "./components3/NoMatch";
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
