import "./styles/Pagination.scss";
import { useState } from "react";

const Pagination = ({ pageNumber, pageSize, itemCount, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  const pages = new Array(pageCount);

  for (let i = 1; i <= pageCount; i++) pages[i] = i;

  return (
    <ul className="pagination">
      <li
        onClick={() =>
          onPageChange(pageNumber - 1 > 0 ? --pageNumber : pageNumber)
        }
      >
        Previous
      </li>
      {pages.map((page) => (
        <li
          onClick={() => onPageChange(page)}
          className={`page-item ${pageNumber === page ? "active" : ""}`}
          key={page}
        >
          {page}
        </li>
      ))}
      <li
        onClick={() =>
          onPageChange(pageNumber + 1 <= pageCount ? ++pageNumber : pageNumber)
        }
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
