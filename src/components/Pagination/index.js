import React, { memo } from "react";
import { MDBPageItem, MDBPagination } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPaginationNumbers } from "../../utils/pagination";

const Pagination = props => {
  const { num, paginationLength } = props;

  return (
    <MDBPagination className="mb-5">
      {num !== 1 && (
        <MDBPageItem>
          <Link className="page-link" to={`/${num - 1}`} aria-hidden="true">
            &laquo;
          </Link>
        </MDBPageItem>
      )}
      {getPaginationNumbers(num).map(
        paginationNum =>
          paginationNum > 0 &&
          paginationNum <= paginationLength && (
            <MDBPageItem active={num === paginationNum} key={paginationNum}>
              <Link className="page-link" to={`/${paginationNum}`}>
                {paginationNum}
              </Link>
            </MDBPageItem>
          )
      )}
      {num < paginationLength && (
        <MDBPageItem>
          <Link className="page-link" to={`/${num + 1}`} aria-hidden="true">
            &raquo;
          </Link>
        </MDBPageItem>
      )}
    </MDBPagination>
  );
};

Pagination.propTypes = {
  num: PropTypes.number.isRequired,
  paginationLength: PropTypes.number.isRequired
};

export default memo(Pagination);
