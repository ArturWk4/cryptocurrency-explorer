import React from "react";

import { GECKO_ORDER } from "../../utils/constants";
import { connect } from "react-redux";
import { setOrder } from "../../store/coins/actions";

const OrderSelect = ({ selectedValue, setOrderAction }) => (
  <div className="mb-3">
    <select
      defaultValue={selectedValue}
      onChange={({ target }) => setOrderAction(target.value)}
      className="browser-default custom-select"
    >
      {GECKO_ORDER.map(orderItem => (
        <option key={orderItem.value} value={orderItem.value}>
          {orderItem.label}
        </option>
      ))}
    </select>
  </div>
);

const mapStateToProps = ({ coins }) => ({ selectedValue: coins.order });

export default connect(mapStateToProps, { setOrderAction: setOrder })(
  OrderSelect
);
