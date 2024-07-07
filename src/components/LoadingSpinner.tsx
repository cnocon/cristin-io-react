import React from "react";

const LoadingSpinner: React.FunctionComponent<{ isLoading: boolean, height: string, width: string }> = ({ isLoading, height = "250px", width = "340px" }) => {
  return (
  <div style={{height: height, justifyContent: "center", alignItems: "center",  display: isLoading ? "flex" : "none"}}>
    <div className="text-center spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
};

export default LoadingSpinner;
