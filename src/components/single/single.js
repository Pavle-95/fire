
import style from './single.module.scss'


const Single = ({header, body} ) =>{
    return(
        <article className={style.single}>
            <h1>Non quam lacus suspendisse faucibus interdum posuere.</h1>
            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolorLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
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