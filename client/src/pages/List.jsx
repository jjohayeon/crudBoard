import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  table {
    margin-top: 80px;
    width: 80%;
  }
  th {
    background: #000;
    color: #fff;
    padding: 15px 0;
  }
  td {
    padding: 15px 0;
    border-bottom: 1px solid #9999;
  }
`

const List = ({ list, setList }) => {
  const thead = ['id', 'title', 'date']
  const listArray = [...list]
  console.log(listArray)
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setList(response.data)
    })
  }, [])

  return (
    <div className="container">
      <ListBox>
        <table>
          <colgroup>
            <col width="10%"></col>
            <col width="70%"></col>
            <col width="20%"></col>
          </colgroup>
          <tr>
            {thead.map((i) => (
              <th>{i}</th>
            ))}
          </tr>
          {listArray.map(function (i) {
            return (
              <tr>
                <td>{i?.id}</td>
                <td>{i?.title}</td>
                <td>{i?.date}</td>
              </tr>
            )
          })}
        </table>
      </ListBox>
    </div>
  )
}
export default List
