import React from "react";
import companyLogo from "../../assets/login/Union.png";
import lendsqr from "../../assets/login/lendsqr.png";
import bell from "../../assets/dashboard/Notification-Icon.png";
import avatar from "../../assets/dashboard/image 4.png";
import dropdown from "../../assets/dashboard/Drop-Down.png";
import styles from "./TopNav.module.scss";

export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.companyLogo}>
        <img src={companyLogo} alt="union" />
      </div>
      <span className={styles.lendsqr}>
        <img src={lendsqr} alt="lendsqr" />
      </span>
      <div className={styles.searchbar}>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="search for anything"
          />
          <div className="input-group-append">
            <span className={styles.searchButton}>
              <button className="btn">
                <i className="fas fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.active}>Docs</div>
      <div>
        <img src={bell} alt="bell" className={styles.bell} />
      </div>
      <div className={styles.avatarDiv}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
      <div>
        <p className={styles.avatarText}>Adedeji</p>
      </div>
      <span className={styles.dropdownMenu}>
        <img src={dropdown} alt="dropdown" />
      </span>
    </nav>
  );
}
