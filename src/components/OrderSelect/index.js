import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GECKO_ORDER } from "../../utils/constants";
import { setOrder } from "../../store/coins/actions";

const OrderSelect = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(({ coins }) => coins.order);
  const changeOrder = useCallback(
    ({ target }) => dispatch(setOrder(target.value)),
    [dispatch]
  );
  return (
    <div className="mb-3">
      <select
        defaultValue={selectedValue}
        onChange={changeOrder}
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
};

export default OrderSelect;
