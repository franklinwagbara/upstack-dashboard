import "./styles/Table.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const Table = ({ data }) => {
  const [sortDir, setSortDir] = useState("asc");
  const [sortColumn, setSortColumn] = useState("id");

  const toggleSortDir = (column) => {
    setSortColumn(column);
    setSortDir((prev) => (prev == "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    if (sortDir === "asc")
      data.sort((a, b) =>
        a[sortColumn].toString().localeCompare(b[sortColumn])
      );
    else
      data.sort(
        (a, b) => -1 * a[sortColumn].toString().localeCompare(b[sortColumn])
      );
  }, [sortDir, sortColumn]);

  const SortIcon = ({ column }) => {
    return (
      <span onClick={() => toggleSortDir(column)}>
        <FontAwesomeIcon
          className={`icon-style ${
            column === sortColumn && sortDir === "desc" ? "sort-active" : ""
          }`}
          icon={faArrowUp}
        />
        <FontAwesomeIcon
          className={`icon-style ${
            column === sortColumn && sortDir === "asc" ? "sort-active" : ""
          }`}
          icon={faArrowDown}
        />
      </span>
    );
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>
              <div>
                <span>Employee ID </span> <SortIcon column={"id"} />
              </div>
            </th>
            <th>
              <div>
                <span>Name </span> <SortIcon column={"name"} />
              </div>
            </th>
            <th>
              <div>
                <span>Email </span> <SortIcon column={"email"} />
              </div>
            </th>
            <th>
              <div>
                <span>Username </span> <SortIcon column={"username"} />
              </div>
            </th>
            <th>
              <div>
                <span>Role </span> <SortIcon column={"role"} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.username}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
