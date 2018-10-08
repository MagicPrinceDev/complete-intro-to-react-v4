import React from "react";
import Card from "../components/TOCCard";
import Link from "gatsby-link";

import "./index.css";

const IndexPage = props => (
  <div className="index">
    <div className="jumbotron gradient">
      <h1>Complete Intro to React</h1>
      <h2>v4</h2>
    </div>

    <Card
      title="Table of Contents"
      content={props.data.allMarkdownRemark.edges}
    />

    <div className="jumbotron">
      <h2 className="fem-link">
        <a href="https://frontendmasters.com/courses/complete-react-v4/">
          See the video on FrontendMasters.com
        </a>
      </h2>
    </div>
  </div>
);

export const pageQuery = graphql`
  query HomepageTOC {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;