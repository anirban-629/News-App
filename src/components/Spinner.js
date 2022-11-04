import React from "react";
import spinner from "./spinner.gif";
export default function Spinner(props) {
  return (
    <div className="text-center">
      <img style={{ width: "80px" }} src={spinner} alt="loading" />
    </div>
  );
}
