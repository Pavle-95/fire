import style from  './job.module.scss'


const Job = ({tittle, text, currentJob}) =>{

        const goTo = () =>{
        sessionStorage.setItem('body', currentJob.body)
        sessionStorage.setItem('title', currentJob.title)
    }
    return(
        <>
            <div className={style.div} onClick={goTo}>
                <h2>{tittle}</h2>
                <p>{text}</p>
                <button>Read more <span>&#8594;</span></button>
            </div>
        </>
    )
}

export default Job;