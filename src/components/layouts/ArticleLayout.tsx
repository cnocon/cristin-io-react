import React from "react";
import Layout from "./Layout";
import * as S from "./ArticleLayout.styled";

const ArticleLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Layout>
      <S.ArticleLayout className="article-layout-wrapper">
        { children }
      </S.ArticleLayout>
    </Layout>
  )
}

export default ArticleLayout;