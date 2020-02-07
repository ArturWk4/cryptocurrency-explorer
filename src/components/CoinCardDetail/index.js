import React from "react";

import dangerouslyCreateInnerHTML from "../../utils/dangerouslyCreateInnerHTML";

const CoinCardDetail = ({ data }) =>
  data.every(e => !e.startsWith("undefined")) && (
    <div className="text-center">
      {data.map((e, idx) => (
        <span
          key={e}
          className={
            !idx ? "crypto-details crypto-details-header" : "crypto-details"
          }
          dangerouslySetInnerHTML={dangerouslyCreateInnerHTML(e)}
        ></span>
      ))}
    </div>
  );

export default CoinCardDetail;
