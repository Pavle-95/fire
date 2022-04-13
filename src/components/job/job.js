import style from  './job.module.scss'

const Job = ({tittle, text}) =>{
    return(
        <>
        <div className={style.div}>
            <h2>{tittle}</h2>
            <p>{text}</p>
            <button>Read more <span>&#8594;</span></button>
        </div>
        </>
    )
}

export default Job;