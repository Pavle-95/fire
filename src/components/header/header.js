import style from '../header/header.module.scss'

const Header = ({number}) =>{
    return(
        <div className={style.div}>
            <h1>Post found: {number}</h1>
        </div>
    )
}

export default Header;