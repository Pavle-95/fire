import style from './displayJobs.module.scss'
import Job from '../job/job';

const DisplayJobs = () => {



    return (
        <section className={style.section}>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
        </section>
    )
}

export default DisplayJobs;