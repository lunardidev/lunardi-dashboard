import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { Container } from "./styles";

const GridDataTable = props => {
  const { dataTable, pageSize, pagination } = props;

  const [tableHead] = useState(
    dataTable[0].columns.map(config => config.title)
  );
  const [tableBody] = useState(dataTable[0].columns.map(config => config.name));
  const [tableJson] = useState(dataTable[1].data);
  const [dataRetrieve, setDataRetrieve] = useState([]);

  // The selected page number
  const [pageNumber, setPageNumber] = useState(1);

  // Entries of per page
  //const [pageSize] = useState(dataTable[0].pageSize);

  // css grid-template-columns
  const [gridTemplateColumns] = useState(
    dataTable[0].columns.map(config => config.column).join(" ")
  );

  const [totalItems] = useState(tableJson.length);
  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    // calculate start and end item indexes
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = dataTable[1].data.slice(startIndex, endIndex + 1);

    setDataRetrieve(pages);
  }, [dataTable, pageNumber, pageSize, totalItems]);

  const setPage = (e, number) => {
    e.preventDefault();
    setPageNumber(number);
  };

  const paginationView = () => {
    let pages = [];

    if (totalPages <= 1 || pagination === false) {
      return pages;
    }

    for (let i = 1; i < totalPages + 1; i++) {
      pages.push(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={i}
          href="#"
          className={pageNumber === i ? "selected" : null}
          onClick={e => setPage(e, i)}
        >
          {i}
        </a>
      );
    }
    return pages;
  };

  return (
    <Container columns={gridTemplateColumns}>
      <div>
        {tableHead.map(title => (
          <span key={title}>{title}</span>
        ))}
      </div>

      {dataRetrieve.map(data => {
        return (
          <div key={data.id}>
            {tableBody.map(name => {
              return <span key={name}>{data[name]}</span>;
            })}
          </div>
        );
      })}

      <section className="pagination">
        <>{paginationView()}</>
      </section>
    </Container>
  );
};

GridDataTable.propTypes = {
  dataTable: PropTypes.array,
  pageSize: PropTypes.number,
  pagination: PropTypes.bool
};

export default withTheme(GridDataTable);
