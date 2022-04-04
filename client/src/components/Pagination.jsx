import React from 'react'
import styled from 'styled-components'

const PaginationBox = styled.div``

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit)
  return (
    <div className="container">
      <h1>페이지네이션</h1>
    </div>
  )
}

export default Pagination
