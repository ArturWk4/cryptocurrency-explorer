import React from "react";

import { GECKO_ORDER } from "../../utils/constants";
import { connect } from "react-redux";
import { setOrder } from "../../store/coins/actions";

const OrderSelect = ({ selectedValue, setOrder }) => (
  <div className="mb-3">
    <select
      defaultValue={selectedValue}
      onChange={({ target }) => setOrder(target.value)}
      className="browser-default custom-select"
    >
      {GECKO_ORDER.map(e => (
        <option key={e.value} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  </div>
);

const mapStateToProps = ({ coins }) => ({ selectedValue: coins.order });

export default connect(mapStateToProps, { setOrder })(OrderSelect);
