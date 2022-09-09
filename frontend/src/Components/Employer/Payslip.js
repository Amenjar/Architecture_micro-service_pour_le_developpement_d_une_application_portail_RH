import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import { ComponentToPrint } from "./ComponentToPrint";

const Payslip = () => {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <ReactToPrint
        trigger={() => (
          <button
            style={{
              width: "20%",
              height: "40px",
              margin: "10px auto",

              justifyContent: "center",
              display: "block",
              color: "#fff",
              background: "#573b8a",
              fontSize: "1em",
              fontWeight: "bold",
              marginTop: "20px",
              outline: "none",
              border: "none",
              borderRadius: "5px",
              transition: ".2s ease-in",
              cursor: "pointer",
            }}
          >
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default Payslip;
