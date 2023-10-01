import RepoInfo from "../components/RepoInfo";
import { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";

const noneSelected = "--";

const ProjectsPage = (props) => {
    
    const [currentPage, setCurrentPage] = useState(0); //issue
    // const currentPage = useRef(0);

    const [currentData, setCurrentData] = useState([]);

    function filterData(criteria){
        setCurrentData(criteria == noneSelected ? props.repoData : props.repoData.filter(repo => repo.allLanguages.includes(criteria)));
        if (!currentData){
            setCurrentPage(0);
        }
    };
    
    function handleFilter(event){
        filterData(event);
    };

//good
    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = currentData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(currentData.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % currentData.length;
        setItemOffset(newOffset);

        setCurrentPage(event.select);
        // currentPage.current = (event.selected);
    
    };

    
    useEffect(() => {

        // currentPage.current = 0;
        
        console.log("useEffect played");
        console.log(currentPage)

    }, [currentData]);
    


    return ( 
        <div className="repo-main">
            <h2>Do I have what you're looking for?</h2>

            <div>
                <label>Language: </label>
                <select onChange={(event) => handleFilter(event.target.value)}>
                    <option value={noneSelected}>--</option>
                    <option value={"JavaScript "}>JavaScript</option>
                    <option value={"Java "}>Java</option>
                    <option value={"Python "}>Python</option>
                    <option value={"C# "}>C#</option>
                </select>
            </div>
            
            <ul className="repo-list">
                {currentItems &&
                currentItems.map((data, index) => {
                    if (data && data.allLanguages){
                        return (
                            <RepoInfo data={data} key={index}/>
                        )
                    }
                    else{
                        return null;
                    }
                })}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    previousLabel="< Previous"
                    
                    //issue
                    
                    disableInitialCallback={true}
                    forcePage={currentPage}
                    onPageChange={handlePageClick}


                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num changer"
                    nextLinkClassName="page-num changer"
                    activeClassName="active"

                />
            </ul>
        </div>
    );
}

export default ProjectsPage;