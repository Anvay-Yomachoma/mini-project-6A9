import React, { useState } from 'react'
import Header from './../Header';
import SearchResult from './SearchResult';


function Search() {
    // State which holds the value of the selected radio button
    const [searchBy, setSearchBy] = useState(["usn", "eg.1DS19CS001"]);
    // State which tells whether to display the Result projects or not
    const [displayResult, setDisplayResult] = useState(false);
    // Value typed in the Search Bar by the user
    const [searchVal,setSearchVal] = useState("") ;

    const regex = /1DS\d\dCS\d\d\d/i;

    // Called when the value of Radio button changes
    const handleChange = (e) => {
        setSearchVal("") ;
        if (e.target.value === "usn")
            setSearchBy(["usn", "eg.1DS19CS001"]);
        else if (e.target.value === "projectTitle")
            setSearchBy(["projectTitle", "eg.Courier Management System"]);
        if (e.target.value === "subName")
            setSearchBy(["subName", "eg.Computer Networks"]);
    }
    // Called when clicked on the Search button
    const handleSubmit = () => {
        let searchValue = document.querySelector(".searchBar").value ;

        // Validating the Search Bar value using alerts
        if(!searchValue){
            if(searchBy[0]=="usn")
                alert(`Enter the USN`);
            else if(searchBy[0]=="projectTitle")
                alert(`Enter the Project Title`);
            if(searchBy[0]=="subName")
                alert(`Enter the Subject Name`);
            return ;
        }
        // Validating the USN
        if(searchBy[0]=="usn"){
            if(!regex.test(searchValue)) {
                alert("Enter a Valid USN!") ;
                return ;
            }
        }
        // If the value is validated
        setDisplayResult(true) ;
        setSearchVal(searchValue) ;
    }
  

    return (
        <div>
            <Header links={[{ name: "", href: "" }, { name: "LOGOUT", href: "/facultylogin" }]}></Header>

            <div className="search">
                <h2>Project Archive</h2>
                <div>
                    <section>
                        <input type="text" placeholder={searchBy[1]} className="searchBar" />
                        <button className="searchBtn" onClick={handleSubmit}>Search </button>
                    </section>
                    <section className="radioBtns">
                        <p>Search by :</p>
                        <input type="radio" name="searchBy" value="usn" checked={searchBy[0] === "usn"} onChange={(e) => handleChange(e)} />
                        <label>USN</label>
                        <input type="radio" name="searchBy" value="projectTitle" checked={searchBy[0] === "projectTitle"} onChange={(e) => handleChange(e)} />
                        <label>Project Title</label>
                        <input type="radio" name="searchBy" value="subName" checked={searchBy[0] === "subName"} onChange={(e) => handleChange(e)} />
                        <label>Subject Name</label>
                    </section>
                </div>
            </div>
            
            {displayResult && <SearchResult searchVal={searchVal} searchBy={searchBy}></SearchResult>}
        </div>
    )
}

export default Search