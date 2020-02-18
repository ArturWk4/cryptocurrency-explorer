import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GECKO_ORDER } from "../../utils/constants";
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

OrderSelect.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setOrderAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ coins }) => ({ selectedValue: coins.order });

export default connect(mapStateToProps, { setOrderAction: setOrder })(
  OrderSelect
);
