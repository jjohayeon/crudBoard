import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
  td:nth-child(2) {
    cursor: pointer;
  }
`;

const List = ({ list }) => {
  const thead = ["id", "title", "date"];
  const history = useHistory();

  return (
    <div className="container">
      <ListBox>
        <table>
          <colgroup>
            <col width="10%"></col>
            <col width="70%"></col>
            <col width="20%"></col>
          </colgroup>
          <thead>
            <tr>
              {thead.map((i) => (
                <th key={i}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((i) => (
              <tr key={i.id}>
                <td>{i?.id}</td>
                <td
                  onClick={() => {
                    history.push(`/single/${i.id}`);
                  }}
                >
                  {i?.title}
                </td>
                <td>{i?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListBox>
    </div>
  );
};
export default List;
