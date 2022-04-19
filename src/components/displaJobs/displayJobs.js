import React, { useState, useEffect } from 'react';
import style from './displayJobs.module.scss'
import styleJob from '../job/job.module.scss'
import { Link } from 'react-router-dom';

import Job from '../job/job';
import Pagination from '../pagination/pagination';




const DisplayJobs = () => {

    const [data, setData] = useState([]);
    const [curentPage, setCurentPage] = useState(1);
    const [jobPerPage] = useState(14);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();
            })
            .then(resJson => {
                setData(resJson);
            })
    }, [])

    if (data.length === 0) {
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
                {currentJobs.map((d, idx) => {
                    return (
                        <Link to='single' className={styleJob.div} style={{ textDecoration: 'none' }}>
                            <Job
                                tittle={currentJobs[idx].title}
                                text={currentJobs[idx].body}
                                currentJob={currentJobs[idx]}
                            />
                        </Link>
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