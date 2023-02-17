import { NavLink, Outlet } from "react-router-dom";
//스타일 지정시 Link아닌 NavLink 사용해야함

const activeStyle = ({ isActive }) => ({
  color: isActive ? "green" : "",
  fontSize: isActive ? "2rem" : "",
});
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
            {/* Link가 path의미 */}
          </li>

          <li>
            {/* <a>요소는 전체를 모드 렌더링하므로  <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href="/dashboard">Dashboard</a>  */}
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/nothing-here" style={activeStyle}>
              Nothing Here
            </NavLink>
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
