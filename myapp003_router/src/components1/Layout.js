import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* Link가 path의미 */}
          </li>

          <li>
            {/* <a>요소는 전체를 모드 렌더링하므로  <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href="/dashboard">Dashboard</a>  */}
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
      {/* 같은 path(url)로 연결되어있는 element를 출력할 수 있는 것 */}
    </div>
  );
};
export default Layout;
