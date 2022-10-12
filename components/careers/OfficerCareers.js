import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function OfficerCareers() {
  const query = useStaticQuery(graphql`
    {
      ratings: allNodeOfficerCareer(sort: { order: ASC, fields: title }, filter: { status: { eq: true } }) {
        edges {
          node {
            id
            title
            body {
              summary
            }
            path {
              alias
            }
          }
        }
      }
    }
  `);

  const [allItems] = useState(query.ratings.edges);

  return (
    <div className="careers">
      <div className="items">
        {allItems.map((item) => (
          <Link to={item.node.path.alias} key={item.node.id} className="career">
            <div>
              <h3>{item.node.title}</h3>
              <p className="description">{item.node.body.summary}</p>
            </div>
            <p className="details">DETAILS &gt;</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
