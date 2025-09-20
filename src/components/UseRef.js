import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
      <button onClick={() => window.print()}>Print</button>
    </>
  );
}

export default UseRef;
