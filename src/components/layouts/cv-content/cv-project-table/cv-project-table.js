import React from "react";
import styled from "styled-components";

export class CvProjectTable extends React.Component {
  render() {
    const projectInfo = this.props.projectInfo;
    let rowDefault = [
      <td colSpan="2" className="ta-center cl-grayer">
        No information
      </td>,
    ];

    if (projectInfo) {
      rowDefault = [];
      Object.keys(projectInfo).forEach((key) => {
        rowDefault.push(
          <tr key={key}>
            <td className="head">{key}</td>
            <td>{projectInfo[key]}</td>
          </tr>
        );
      });
    }

    const TableComps = styled.table`
      border-collapse: collapse;
      width: 100%;

      td.head {
        width: 150px;
        font-weight: bold;
      }

      td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #ececec;
      }
    `;

    return (
      <div className="flex flex-d-col mt1">
        <TableComps>
          <tbody>{rowDefault}</tbody>
        </TableComps>
      </div>
    );
  }
}
