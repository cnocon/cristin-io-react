import React from "react";
import PullQuote from "../components/PullQuote/PullQuote";
import ArticleLayout from "../components/layouts/ArticleLayout";

export const WritingSample = () => {
  return (
    <ArticleLayout>
      <header>
        <h1>Women in Computing are Losing Ground</h1>
        <p><strong>Author: </strong>Cristin O'Connor</p>
        <p><strong>Published: </strong><time dateTime="2021-04-18T12:00:00 GMT-0700">April 18, 2021 at 12pm</time></p>
      </header>
      <section>
      <aside>
        <p className="drop-cap">The notion of a female recession piqued my interest last week when I learned the <a href="https://www.womentechcouncil.com/" target="_blank" rel="noopener noreferrer">Women Tech Council</a> was hosting a <a href="https://www.womentechcouncil.com/first-female-recession/" target="_blank" rel="noopener noreferrer">virtual summit</a> on the topic recently, focusing on the impact on Women in Tech. I knew women's progress in computer science had been slow, but I'd assumed things were getting better over time, despite the impact of the global Coronavirus pandemic.</p>


        <p>Instead, speakers at the summit opened my eyes to an unpleasant truth. I was wrong. The <a href="https://www.womentechcouncil.com/impact-report/" target="_blank" rel="noopener noreferrer">pandemic has only amplified inequality</a>.</p>
      </aside>

      <h2>The Current Climate</h2>

      <p>The problems women in tech face, ranging from inequalities in child care responsibilities to workforce regression, have only worsened during the pandemic (Figure 1).</p>

      <figure>
        <img src="/images/figure-1.jpg" alt="Graphic showing the pandemic has worsened inequalities experienced by women" />
        <figcaption>
          <strong>Figure 1.</strong> The pandemic has worsened inequalities experienced by women.
        </figcaption>
      </figure>

      <p>Overall, <a href="https://www.cnbc.com/2021/02/08/womens-labor-force-participation-rate-hit-33-year-low-in-january-2021.html" target="_blank" rel="noopener noreferrer">women's labor force participation is at a 33-year low</a> in the United States, and women in STEM may be among the hardest hit.</p>

      <p>As before the pandemic, women are still disproportionately underrepresented in tech. In 2020, women made up over 50% of the U.S. workforce, but composed only 29% of those working in STEM fields, according to <a href="https://uwhr.utah.edu/utah-women-and-stem/" target="_blank" rel="noopener noreferrer">a study led by Susan Madsen</a>, a Utah State University professor and founder of the Utah Women & Leadership project. (1)</p>

      <p>The number of women relative to men in computing was already locked into a steady decline in the 30 years before the pandemic. Given that the past year's workforce disruptions have resulted in catastrophic rates of attrition among women in the workforce, we can draw a final conclusion: The gender gap in computing for 2020 will likely be even wider than before, adding another year to over two decades of tragic decline.</p>

      <p>This massive discrepancy raised a number of questions in my head, but I was especially interested in how the trends for women in STEM as a whole – which includes the fields of engineering, life and physical sciences, math and social science, in addition to computing – compare to trends for women in computing.</p>

      <p>As of 2019, the most recent data available, women in computing were faring worse than women in STEM generally across a number of metrics.</p>

      <h2>Declining Participation of Women in Computing Compared to STEM Fields Overall</h2>

      <p>Women held only 26% of computing jobs in 2019, 3 percentage points fewer than women in STEM overall. Women in engineering have seen measly gains since 1990, while women in computing have been steadily declining since 1990, Census Bureau data show. (2) Women in all other STEM fields, which typically pay less, have experienced steady increases for the last 20 years.</p>

      <figure><img src="/images/women-in-stem-graph.jpg" alt="Percentage of Women in STEM Jobs from 1970-2019" /><figcaption>Percentage of Women in STEM Jobs from 1970-2019</figcaption></figure>

      <p>Notably, the two worst performing fields, Engineering and Computing, are also the largest, making up a whopping 80% of the STEM workforce in 2019 and skewing the overall percentage of women in STEM downward.</p>

      <p>The importance of increasing the number of women in Computing and Engineering is underscored by the fact that gains made in these fields will have the greatest impact on the percentage of women in STEM overall.</p>

      <h2>Gender Pay Gap in Computing Wider Than Rest of STEM</h2>

      <p>Women working in computing had the highest median annual earnings of all STEM and STEM-related fields, faring 1.3 percentage points better than women in all STEM fields on average, according to data from the Census Bureau's 2019 American Community Survey (3).</p>

      <p>The income gap lies somewhere in the middle compared to the rest of STEM, with women in computing earning 85.4% of men's average pay, compared with 84.1% for women in STEM overall. Based on this data, women in computing are faring better than women in STEM overall. However, the data looks very different if you remove the income data from computing from the overall STEM calculations.</p>

      <PullQuote alignment="right">
        More important, however, is the fact that the discrepancy in pay for women in computing fields is great enough to widen the overall pay gap across all STEM fields by 0.6 percentage points.
      </PullQuote>

      <p>In fact, the average ratio of female median income to that of males improves for STEM overall when incomes from the computing field are excluded. When computing field incomes are excluded, women in STEM do better, making 86.0% as much as their male counterparts.</p>

      <p>The result is only a slight improvement over the computing field's 85.4%. More important, however, is the fact that the discrepancy in pay for women in computing fields is great enough to widen the overall pay gap across all STEM fields by 0.6%.</p>

      <h2>Conclusion</h2>

      <p>The COVID-19 crisis has only amplified the pre-pandemic vulnerabilities and inequalities experienced by women, <a href="https://www.womentechcouncil.com/first-female-recession/" target="_blank" rel="noopener noreferrer">Dr. Madsen told the Women Tech Council conference</a>. (4) And while we'll have to wait for the U.S. Census Bureau to release 2020 census data to say for certain, it seems safe to make one major deduction about how women in computing are faring in 2020 compared to previous years:</p>

      <PullQuote alignment="right">
        The gender gap in computing for 2020 will likely be even wider than before, adding another year to over two decades worth of tragic decline.
      </PullQuote>

      <article>
        <h3>References</h3>

        <ol>
          <li>1. “Utah Women and STEM.” Utah Women & Leadership Project, Utah Valley University, 2020, www.usu.edu/uwlp/files/infographics/stem.pdf.</li>
          <li>2. U.S. Census Bureau. “Women Making Gains in STEM Occupations but Still Underrepresented.” The United States Census Bureau, 26 Jan. 2021 https://www.census.gov/library/stories/2021/01/women-making-gains-in-stem-occupations-but-still-underrepresented.html</li>
          <li>3. “STEM and STEM-Related Occupations by Sex and Median Earnings: ACS 2019 data, United States Census Bureau. https://www.census.gov/data/tables/time-series/demo/income-poverty/stem-occ-sex-med-earnings.html</li>
          <li>4. Madsen, Susan. “Research & Policy Brief.” Utah Women & Leadership Project. WTC Virtual Summit: The First Female Recession, the Impact on Women in Tech, 12 Mar. 2021.</li>
        </ol>

        <h3>Additional Sources</h3>

        <ol>
          <li>"Tech in 2021: The Top Three Trends Impacting Technology Teams in 2021 and Beyond.” Pluralsight, 2021.</li>

          <li>“2020 Developer Survey.” Stack Overflow, Stack Overflow, 2020, insights.stackoverflow.com/survey/2020.</li>
        </ol>
      </article>
      </section>
    </ArticleLayout>
  )
}