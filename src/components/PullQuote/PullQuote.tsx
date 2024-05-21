import React from "react";
import BlockQuote from "../BlockQuote/BlockQuote";

const PullQuote: React.FC<{ alignment?: string, children: any }> = ({ alignment = "right", children }) => <BlockQuote alignment={alignment}>{children}</BlockQuote>;

export default PullQuote;