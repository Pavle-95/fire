
import { useState, useEffect } from 'react';
import style from './single.module.scss'


const Single = () =>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    useEffect(()=>{
        setTitle(sessionStorage.getItem('title'))
        setBody(sessionStorage.getItem('body'))
    })

    return(
        <article className={style.single}>
            <h1>{title}</h1>
            <p>{body}</p>
            <hr />
            <div className={style.buttons}>
                <button><span>&#8592;</span>Previous article</button>
                <button>Next article <span>&#8594;</span></button>
            </div>
            <section>
                <div>
                    <h4>Autor name</h4>
                    <h2>John Doe</h2>
                </div>
                <div>
                    <h4>Address</h4>
                    <h2>Gwenborotugh, 998899-231, Kulas light</h2>
                </div>
            </section>
                <h3>Comments</h3>
                <div className={style.comments}>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam sapiente natus sed, facere soluta quas quo non maxime, veritatis dolorem facilis quod cupiditate, veniam explicabo reprehenderit perferendis ullam! Eos?</p>
                </div>
                <div className={style.comments}>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam sapiente natus sed, facere soluta quas quo non maxime, veritatis dolorem facilis quod cupiditate, veniam explicabo reprehenderit perferendis ullam! Eos?</p>
                </div>
                <div className={style.comments}>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam sapiente natus sed, facere soluta quas quo non maxime, veritatis dolorem facilis quod cupiditate, veniam explicabo reprehenderit perferendis ullam! Eos?</p>
                </div>
        </article>

    )
}

export default Single;