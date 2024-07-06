import React, { ReactNode } from "react";

export type IFlexWrapperProps = {
  wrap: boolean,
  justifyContent?: string,
  children: ReactNode,
  id: string
}
const FlexWrapper: React.FunctionComponent<IFlexWrapperProps> = ({ children, wrap = true, justifyContent = "space-between", id = "flex-wrapper" }) => {
  
  return (
    <div 
        id={id}
        className="flex-wrapper"
        style={{
          flexWrap: wrap ? "wrap" : "nowrap",
          justifyContent,
          display: "flex" 
        }}
      >
        {children}
      </div>
  )
}

export default FlexWrapper;