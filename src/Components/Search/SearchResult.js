import React from 'react'
import Table from './Table'

function SearchResult(props) {
    return (
        <div className="searchResult">
            <h2>Search Result</h2>
            <Table searchVal={props.searchVal} searchBy={props.searchBy}></Table>
        </div>
    )
}

export default SearchResult