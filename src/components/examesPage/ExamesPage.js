import "./examesPage.css";
import { NavLink, Outlet } from "react-router-dom";
function ExamesPages() {
  return (
    <div className="quizes-page">
      <ul className="ul-links-classes">
        <li>
          <NavLink to="الاول الثانوي"> اول ثانوي</NavLink>
        </li>
        <li>
          <NavLink to="الثاني الثانوي"> ثاني ثانوي</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default ExamesPages;


