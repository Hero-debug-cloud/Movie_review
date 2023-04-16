import styles from "./card.module.css";
import classNames from "classnames";

const Category_card = () => {

  return (
    <div className={styles.card}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <div className={styles.img_cont}>
                <img src="" alt="img" className={styles.img}/>

            </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cont}>
                  <span className={styles.key}>Title : &nbsp;</span>
                  <span className={styles.title}>testing</span>
                </div>
                <div className={classNames(styles.cont,styles.space)}>
                    <div className={styles.released}>416541</div>
                    <div className={styles.runtime}>125min</div>
                </div>
                <div className={styles.cont}>
                  <span className={styles.key}>Language : &nbsp;</span>
                  <span className={styles.lan}>english</span>
                </div>
                <div className={styles.cont}>
                  <span className={styles.key}>Director : &nbsp; </span>
                  <span className={styles.dic}>hero vinay</span>
                </div>
                
                <div className={styles.cont}>
                  <span className={styles.key}>IMDB Rating : &nbsp; </span>
                  <span className={styles.rating}>9.9</span>
                </div>
                <div className={classNames(styles.cont,styles.space)}>
                  <button className={styles.more}>More</button>
                  <button className={styles.add}>Add to Mylist</button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Category_card