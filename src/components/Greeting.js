import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>It's good to see you </Output>}
      {changedText && <Output>changed!</Output>}
      <button onClick={changeTextHandler}>change text!</button>
    </div>
  );
};

export default Greeting;
