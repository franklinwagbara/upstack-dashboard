import "./styles/TableCard.scss";
import Pagination from "./Pagination";
import Table from "./Table";
import { useState } from "react";

const pageSize = 9;

const TableCard = ({ data, children }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const lastIndex = pageNumber * pageSize;
  const startIndex = lastIndex - pageSize;

  const page = data.slice(startIndex, lastIndex);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="table-card">
      <div className="table-heading">Employees Information</div>
      <Table data={page} />
      <div className="table-footer">
        <span>
          Showing {(pageNumber - 1) * pageSize + 1} to{" "}
          {pageSize * pageNumber > data.length
            ? data.length
            : pageSize * pageNumber}{" "}
          of {data.length} entries
        </span>
        <span>
          <Pagination
            pageNumber={pageNumber}
            pageSize={pageSize}
            itemCount={data.length}
            onPageChange={handlePageChange}
          />
        </span>
      </div>
    </div>
  );
};

export default TableCard;
