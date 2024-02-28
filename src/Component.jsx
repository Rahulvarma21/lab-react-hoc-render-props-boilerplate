import React, { useState } from "react";

const WrappedComponent = (OriginalComponent) => {
  function newComponent() {
    const [state, setState] = useState(0);

    const handleClick = () => {
      setState(state + 1);
    };

    return <OriginalComponent state={state} handleClick={handleClick} />;
  }

  return newComponent;
};

export default WrappedComponent;
