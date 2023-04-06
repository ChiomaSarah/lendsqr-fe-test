import styles from "./Sidebar.module.scss";
// import companyLogo from "../../assets/login/Union.png";
// import lendsqr from "../../assets/login/lendsqr.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = ["customers", "accounts", "settings"];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              {/* <img src={samanthaImg} alt="samantha" /> */}
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}