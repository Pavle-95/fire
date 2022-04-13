import style from './searchBar.module.scss'

const SearchBar = () =>{
    return(
        <div className={style.form}>
            <form>
                <input type="text" placeholder='Search' />
                <select id="author">  
                  <option>Filter by author name</option>
  
                </select>
            </form>
        </div>
    )
}

export default SearchBar;