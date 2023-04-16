import styles from "./footer.module.css";
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {RiDiscordFill} from "react-icons/ri"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.follow_cont}>
                <div className={styles.head}>Follow Us</div>
                <div className={styles.logo}><FaFacebookSquare size={25}/></div>
                <div className={styles.logo}><FaInstagramSquare size={25}/></div>
                <div className={styles.logo}><FaTwitterSquare size={25}/></div>
                <div className={styles.logo}><RiDiscordFill size={25}/></div>
            </div>
            <hr className={styles.line}/>
            <div className={styles.rule_cont}>
                <div className={styles.rule}>Condition of Use</div>
                <div className={styles.rule}>Privacy Policy</div>
            </div>
            <div className={styles.name}>
                @2023 HeroVinay
            </div>
        </div>
    </div>
  )
}

export default Footer