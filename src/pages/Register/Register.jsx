import styles from "./register.module.css";


const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Register
        </h1>
        <div className={styles.container}>
          <div className={styles.username}>
            <label className={styles.naming}>Username</label>
            <br/>
            <input type="text" placeholder="Enter you Username" className={styles.input}/>
          </div>
          <div className={styles.email}>
            <label className={styles.naming}>E-mail</label>
            <br/>
            <input type="text" placeholder="Enter your Email" className={styles.input}/>
          </div>
          <div className={styles.password}>
            <label className={styles.naming}>Password</label>
            <br/>
            <input type="password" placeholder="Enter your Password" className={styles.input}/>
            <div className={styles.show_cont}>
              <input type="checkbox" name="pass" className={styles.check}/>
              <span className={styles.pass_content}>Show Password</span>
            </div>
          </div>
        </div>
        <button className={styles.submit}>SignUp</button>
        <div className={styles.tandc}>By continuing, you agree to our Terms and Conditions and Privacy 
Statement</div>
      </div>
    </div>
  )
}

export default Register