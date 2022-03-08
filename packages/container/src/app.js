import React, { useRef, useEffect } from "react";
import { mount } from "marketingAlias/MarketingApp";

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <>
      <h1>RajaDey from Containerssssssssddsssssssssssssssssssss</h1>
      <hr />
      <div ref={ref}></div>
    </>
  );
};

export default App;
