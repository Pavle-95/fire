import style from './searchBar.module.scss'

const SearchBar = () =>{
    return(
        <div className={style.form}>
            <form>
                <input type="text" placeholder='Search' />
                <input type="text" placeholder='Filter by author name' />       
            </form>
        </div>
    )
}

export default SearchBar;