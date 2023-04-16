import { useParams } from "react-router-dom";
import styles from "./specific.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Specific = () => {

    const {name}=useParams();

    const [datas,setdata]=useState({value:""});


    useEffect(()=>{
       fetching_data();
    },[name])

    const fetching_data=async()=>{
        const data=await axios.get(`https://www.omdbapi.com/?apikey=d08eb348&t=${name}`)
       //convert it to the array and display it ;
       setdata({value:data.data});
    }
  return (
    <div className={styles.specific}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.img_cont}>
              <img src={datas.value.Poster} alt="img" className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.group1}>
              <h1 className={styles.title}>{datas.value.Title}</h1>
            </div>
            <div className={styles.group}>
              <div className={styles.sub1}>
                <div className={styles.key}>Year :&nbsp;</div>
                <div className={styles.value}>{datas.value.Year}</div>
              </div>
              <div className={styles.sub2}>
                <div className={styles.key}>Rated :&nbsp;</div>
                <div className={styles.value}>{datas.value.Rated}</div>
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.sub1}>
                <div className={styles.key}>Released&nbsp;:&nbsp;</div>
                <div className={styles.value}>{datas.value.Released}</div>
              </div>
              <div className={styles.sub2}>
                <div className={styles.key}>Runtime&nbsp;:&nbsp;</div>
                <div className={styles.value}>{datas.value.Runtime}</div>
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.sub1}>
                <div className={styles.key}>Genre&nbsp;:&nbsp;</div>
                <div className={styles.value}>{datas.value.Genre}</div>
              </div>
              <div className={styles.sub2}>
                <div className={styles.key}>Language&nbsp;:&nbsp;</div>
                <div className={styles.value}>{datas.value.Language}</div>
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.sub1}>
                <div className={styles.key}>IMDB Rating :&nbsp;</div>
                <div className={styles.value}>{datas.value.imdbRating}</div>
              </div>
              <div className={styles.sub2}>
                <div className={styles.key}>IMDB Votes :&nbsp;</div>
                <div className={styles.value}>{datas.value.imdbVotes}</div>
              </div>
            </div>

            <div className={styles.group3}>
              <div className={styles.key}>Plot&nbsp;:&nbsp;</div>
              <div className={styles.value}>
               {datas.value.Plot}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reviews}>

        </div>
      </div>
    </div>
  );
};

export default Specific;
