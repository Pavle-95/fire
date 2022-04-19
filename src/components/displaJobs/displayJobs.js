import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import style from './displayJobs.module.scss'
import { Link } from 'react-router-dom';

import Job from '../job/job';
import Pagination from '../pagination/pagination';
import Single from '../single/single';




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
                            pera={currentJobs[idx].id}
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