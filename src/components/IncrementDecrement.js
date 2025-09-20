import { useEffect, useState } from "react";

function IncrementDecrement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //The code that we want to run
    console.log("The count is:", count);

    //Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <>
      <div style={{ marginLeft: "10px" }}>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
export default IncrementDecrement;
