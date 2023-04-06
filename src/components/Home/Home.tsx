import styles from "./Home.module.scss";
import loginImg from "../../assets/login/pablo-sign-in 1.png";
import companyLogo from "../../assets/login/Union.png";
import lendsqr from "../../assets/login/lendsqr.png";
// import welcome from "../../assets/login/Welcome.png";

export default function Home() {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.companyLogo}>
          <img src={companyLogo} alt="union" />
        </div>
        <span className={styles.lendsqr}>
          <img src={lendsqr} alt="lendsqr" />
        </span>
        <div className={styles.loginImg}>
          <img src={loginImg} alt="sign-in-logo" />
        </div>

        {/* <div className={styles.loginForm}> */}
        <form className={styles.loginForm}>
          <h2 className={styles.welcome}>Welcome!</h2>
          <p className={styles.welcomeText}> Enter details to login. </p>

          <input type="text" placeholder="Email" className={styles.formInput} />

          <input
            type="password"
            placeholder="Password"
            className={styles.formInput}
          />
          <div className={styles.showPassword}>
            <p className="h-6 font-extralight">show </p>
          </div>

          <p className={styles.password}>Forgot password?</p>

          <button className={styles.button}>LOG IN</button>
        </form>
        {/* </div> */}
      </div>
    </>
  );
}
