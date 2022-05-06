import "./styles/Content.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCard from "./TableCard";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";

const axiosApi = axios.create({
  baseURL: `http://${window.location.hostname}:3001`,
});

const Content = (props) => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<DisplayTable />}></Route>
      </Routes>
    </div>
  );
};

export default Content;

const DisplayTable = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(employees);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosApi
      .get("/employees/all")
      .then((resp) => setEmployees(resp.data.employees), setLoading(false))
      .catch((error) =>
        console.error(
          error.message,
          ".",
          "Failed to load data from the server!"
        )
      );
  }, []);

  useEffect(() => {
    const filtered = () => {
      if (employees === null || employees.length === 0) return;

      const newResult = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
      );

      setResult(newResult);
    };

    filtered();
  }, [search, employees]);
  return (
    <>
      <div className="table-search">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {loading ? (
        <h3>Loading...</h3>
      ) : result === null || result.length === 0 ? (
        <h3>No Employees Found!</h3>
      ) : (
        <TableCard data={result}></TableCard>
      )}
    </>
  );
};
