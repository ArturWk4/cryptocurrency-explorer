import React from "react";
import { MDBPageItem, MDBPagination } from "mdbreact";
import { Link } from "react-router-dom";
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
        e =>
          e > 0 &&
          e <= paginationLength && (
            <MDBPageItem active={num === e} key={e}>
              <Link className="page-link" to={`/${e}`}>
                {e}
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

export default Pagination;
