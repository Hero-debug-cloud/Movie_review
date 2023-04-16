import styles from "./navbar.module.css";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, useState } from "react";

const Navbar = () => {

 const searchname=useRef();
  const navigation=useNavigate();

  const searching=()=>{
    navigation(`/search/${searchname.current.value}`);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.logo_cont}>
              {/* <img src="" alt="" /> */}
              {/* img */}
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.search_cont}>
            <input
              type="text"
              placeholder="Enter Something..."
              className={styles.input}
              ref={searchname}
            />
            <div className={styles.search} onClick={searching}>
              <HiSearch />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.noti}>
              <IoMdNotifications size={29} />
            </div>
            <div className={styles.use}>
              <div className={styles.user_logo}>
                <FaUserAlt size={24} />
              </div>
              <div className={styles.name}>test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
