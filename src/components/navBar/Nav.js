import "./nav.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                width="50"
                height="50"
                src="../logo-transparent.webp"
                alt="logo"
              ></img>
            </Link>
          </div>
          <nav>
            <ul className="links">
              <li>
                <NavLink to="/">الصفحة الرئيسية</NavLink>
              </li>
              <li>
                <NavLink to="الاختبارات">الاختبارات</NavLink>
              </li>
              <li>
                <NavLink to="/الدرجات">عرض الدرجات</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Nav;
