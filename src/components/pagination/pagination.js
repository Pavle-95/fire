import React from "react";
import style from "./pagination.module.scss"

const Pagination = ({ jobsPerPage, totalJobs, changePage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length === 0) {
        return (<h2>Loading...</h2>)
    }

    return (
        <div className={style.pagination}>
            <ul>
                {pageNumbers.map((number) => {
                    return (
                        <li>
                            <a onClick={() => changePage(number)} href="/">{number}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination;