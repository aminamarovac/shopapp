import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

export function CounterComponent() {
  const count = useSelector(selectCount);
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CounterComponent
