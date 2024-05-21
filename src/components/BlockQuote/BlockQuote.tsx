import React from "react";
import * as S from "./BlockQuote.styled";

const BlockQuote: React.FC<{ alignment?: string, children?: typeof React.Children, text?: string }> = ({ alignment = "right", children, text }) => {
  const filteredPropsByPresent = {
    ...{...(children ?  {children: children} : {})},
    ...{...(alignment ? { alignment: "right" } : {})},
    ...{...(text ? { text: text } : {})},
  }
  const textContent = typeof children === "string" ? children : (typeof text === "string" ? text : "");
  return (
    <S.BlockQuote aria-hidden="true" {...filteredPropsByPresent}>{textContent}</S.BlockQuote>
  )
}

export default BlockQuote;
