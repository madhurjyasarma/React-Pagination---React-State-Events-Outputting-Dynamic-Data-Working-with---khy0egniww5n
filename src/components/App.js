import React, { useState } from 'react'
import '../styles/App.css';
import { PaginationButtonsList } from './PaginationButtonsList';
import { PostList } from './PostList';
const App = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div id="main">
      <PostList page={currentPage}/>
      <PaginationButtonsList setCurrentPage={setCurrentPage} />
    </div>
  )
}


export default App;
