import React, {useState, useEffect} from 'react';
import style from './displayJobs.module.scss'

import Job from '../job/job';
import Pagination from '../pagination/pagination';




const DisplayJobs = () => {

    const [data, setData] = useState([]);
    const [curentPage, setCurentPage] = useState(1);
    const [jobPerPage] = useState(14)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(resJson =>{       
            setData(resJson);
        })
    },[])
 
    if(data.length === 0){
        return <h2>Loading...</h2>
    }

    // Paginacija
    const indexOfLastJob = curentPage * jobPerPage;
    const indexOffirstJob = indexOfLastJob - jobPerPage
    const currentJobs = data.slice(indexOffirstJob, indexOfLastJob)
    const changePage = pageNumber => setCurentPage(pageNumber);


    return (
        <div>
        <section className={style.section}>

        {currentJobs.map((d,idx) =>{
            return (
                <Job 
                    tittle={currentJobs[idx].title}
                    text={currentJobs[idx].body}
                />
            )
        })}
        </section>
        <Pagination 
            jobsPerPage={jobPerPage}
            totalJobs={data.length}
            changePage={changePage} 
         />
        </div>
        
        
    )
}

export default DisplayJobs;