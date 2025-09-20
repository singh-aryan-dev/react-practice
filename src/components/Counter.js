import { useRef, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  let num = useRef(0);

  function handleClick(e) {
    e.stopPropagation();
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    num.current++;
    console.log(num.current);
  }

  return (
    <>
      <h1 style={{ color: "white", marginLeft: "10px" }}>
        {number}         {num.current}
      </h1>
      <button style={{ marginLeft: "10px" }} onClick={handleClick}>
        Add
      </button>
    </>
  );
} //
export default Counter;
