import { useNavigate } from "react-router-dom"
import styles from "./card.module.css"
import classNames from "classnames"

const Search_card = ({Poster,Title,Year,Type}) => {

  const navigation=useNavigate();
  const more=()=>{
    navigation(`/specific/${Title}`);
  }
  return (
    <div className={styles.card}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <div className={styles.img_cont}>
                <img src={Poster} alt="img" className={styles.img}/>

            </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cont}>
                  <span className={styles.key}>Title : &nbsp;</span>
                  <span className={styles.title}>{Title}</span>
                </div>
                <div className={classNames(styles.cont,styles.space)}>
                    <div className={styles.released}>{Year}</div>
                </div>
                <div className={styles.cont}>
                  <span className={styles.key}>Type : &nbsp;</span>
                  <span className={styles.lan}>{Type}</span>
                </div>
                <div className={classNames(styles.cont,styles.space)}>
                  <button className={styles.more} onClick={more}>More</button>
                  <button className={styles.add}>Add to Mylist</button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Search_card