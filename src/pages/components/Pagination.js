/* import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function PaginatedItems({ itemsPerPage, count, leagues }) {
  console.log('111', count)
  let items = count;
  console.log('1112', itemsPerPage) // сколько на странице отображается
  console.log('1113', leagues) 

 // const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
  
    setPageCount(Math.ceil(items / itemsPerPage));
    console.log('111', pageCount);
  
  }, [itemOffset, itemsPerPage]);

  function receivedData() {
              // const data = res.data;
              // const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              // const postData = slice.map(pd => <React.Fragment>
              //     <p>{pd.title}</p>
              //     <img src={pd.thumbnailUrl} alt=""/>
              // </React.Fragment>)

            setPageCount(Math.ceil(items / itemsPerPage));
            console.log('222', pageCount);
  }

  function handlePageClick (e) {
    console.log('eee', e)
      const selectedPage = e.selected;
      // const offset = selectedPage * itemsPerPage;
      const offset = selectedPage * itemsPerPage - 1; //с какого элемента будет отображатся
      receivedData()

      for (let i = 0; i <= itemsPerPage; i++) {
        offset = offset + 1
        let abc = leagues[offset];
        <React.Fragment>
            <p>{leagues[offset]}</p>
         </React.Fragment>
        
     }
  };
 




  return (
    <>
       <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
    </>
  );
}

export default PaginatedItems; */


/* 
import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../../styles/pagination.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }


  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .then(res => {

              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <React.Fragment>
                  <p>{pd.title}</p>
                  <img src={pd.thumbnailUrl} alt=""/>
              </React.Fragment>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }

  render() {
      return (
          <div>
              {this.state.postData}
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
 */