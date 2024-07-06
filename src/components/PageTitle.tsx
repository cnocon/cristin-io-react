import React from "react";

const PageTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className="text-center h1">{text}</h2>
  )
}

export default PageTitle;