import { useEffect, useState } from "react"
import styles from "./search.module.css"
import axios from "axios"
import Search_card from "../Search_card/Search_card"
import { useParams } from "react-router-dom"

const Search = () => {

  const {name}=useParams();

  const [data,setdata]=useState([]);


   useEffect(()=>{
    fetching_data();
   },[])

   const fetching_data=async()=>{
    const data=await axios.get(`https://www.omdbapi.com/?apikey=d08eb348&s=${name}`);
    setdata(data.data.Search);
   }

  return (
    <div className={styles.search}>
        <div className={styles.container}>

          {
            data.map((value,index)=>{
              return <Search_card key={index} Poster={value.Poster} Year={value.Year} Title={value.Title} Type={value.Type}/>
             })
          }
        
           
        </div>
    </div>
  )
}

export default Search