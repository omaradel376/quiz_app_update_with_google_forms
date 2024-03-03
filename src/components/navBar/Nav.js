import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo"><Link to="/"><img width="50" height="50" src="../logo-transparent.webp" alt="logo"></img></Link></div>
          <nav>
            <ul className="links">
              <li><Link to="/">الصفحة الرئيسية</Link></li>
              <li><Link to="الاختبارات">الاختبارات</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Nav;
