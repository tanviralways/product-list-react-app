import { useState } from "react";
import("./counter.css");

export default function Counter() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  const handelIncrement1 = () => {
    setCount1((preValue) => preValue + 1);
  };

  const handelIncrement2 = () => {
    setCount2((preValue) => preValue + 1);
  };
  const handelIncrement3 = () => {
    setCount3((preValue) => preValue + 1);
  };
  const handelDecrement1 = () => {
    setCount2((preValue) => {
      if (preValue >= 1) {
        return preValue - 1;
      } else {
        return 0;
      }
    });
  };

  const handelDecrement2 = () => {
    setCount2((preValue) => {
      if (preValue >= 1) {
        return preValue - 1;
      } else {
        return 0;
      }
    });
  };
  const handelDecrement3 = () => {
    setCount3((preValue) => {
      if (preValue >= 1) {
        return preValue - 1;
      } else {
        return 0;
      }
    });
  };

  const total = count1 + count2 + count3;
  const resetAll = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  };

  return (
    <>
      <div className="count">
        <h1 className="counter">
          {(() => {
            if (count1 < 33) {
              return <h1>{count1}</h1>;
            } else {
              return <h1>33</h1>;
            }
          })()}
        </h1>
        <h1 className="counter">
          {(() => {
            if (count2 < 33) {
              return <h1>{count2}</h1>;
            } else {
              return <h1>33</h1>;
            }
          })()}
        </h1>
        <h1 className="counter">
          {(() => {
            if (count3 < 33) {
              return <h1>{count3}</h1>;
            } else {
              return <h1>34</h1>;
            }
          })()}
        </h1>
      </div>
      <div className="flex">
        <button className="btn">
          <span onClick={handelDecrement1}>-</span> Subahanllah
          <span onClick={handelIncrement1}>+</span>
        </button>
        <button className="btn">
          <span onClick={handelDecrement2}>-</span> Alhamdulillah
          <span onClick={handelIncrement2}>+</span>
        </button>
        <button className="btn">
          <span onClick={handelDecrement3}>-</span> Allahuakbar
          <span onClick={handelIncrement3}>+</span>
        </button>
      </div>
      <div className="flex">
        <button className="btn reset">Total {total}</button>
        <button onClick={resetAll} className="btn reset">
          Reset all
        </button>
      </div>
    </>
  );
}
