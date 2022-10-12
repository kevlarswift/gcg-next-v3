import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Form } from "react-bootstrap";

const Officers = () => {
  const query = useStaticQuery(graphql`
    {
      officers: allNodeOfficerProgram(sort: { order: ASC, fields: title }, filter: { status: { eq: true } }) {
        edges {
          node {
            id
            title
            path {
              alias
            }
            field_abbreviation
            field_active
            field_reserve
            body {
              summary
              processed
            }
            relationships {
              field_officer_category {
                id
                name
              }
            }
          }
        }
      }
      terms: allTaxonomyTermOfficerCategory(sort: { order: ASC, fields: name }) {
        edges {
          node {
            name
            id
            description {
              processed
            }
          }
        }
      }
    }
  `);

  const activeButtonClass = { backgroundColor: "#005CB9", borderColor: "#005CB9", color: "#FFFFFF" };

  let categories = [];
  {
    query.terms.edges.map((edge) => {
      return categories.push([edge.node.name, edge.node.description.processed]);
    });
  }
  categories.unshift(["All", "<p>Select and use this thing like this</p>"]);

  const [allItems] = useState(query.officers.edges);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [selectedIDX, setSelectedIDX] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0][0]);
  const [selectedMessage, setSelectedMessage] = useState(categories[0][1]);

  const handleCategory = (i) => {
    setSelectedIDX(i);
    setSelectedCategory(i);
    setSelectedMessage(categories[i][1]);
    if (i !== 0) {
      setFilteredItems(
        allItems.filter((edge) => {
          return edge.node.relationships.field_officer_category.name === categories[i][0];
        })
      );
    } else {
      setFilteredItems(allItems);
    }
  };
  const handleSelect = (event) => {
    handleCategory(Number(event.target.value));
  };

  return (
    <Container className="container-inner careers">
      <div className="dropdown lg:hidden">
        <div className="btn-row">
          <Form>
            <Form.Group controlId="formOfficerCareerCategory">
              <Form.Select aria-label="Select an Officer Career Category" value={selectedIDX} onChange={handleSelect}>
                {categories.map((category, idx) => (
                  <option value={idx} key={idx}>{category[0]}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="btns">
          <div className="btn-row">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="btn"
                  onClick={() => handleCategory(index)}
                  style={selectedCategory === category[0] ? activeButtonClass : null}>
                  {category[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="message border-l-solid border-l-[4px] border-l-royal"
        dangerouslySetInnerHTML={{ __html: selectedMessage }}
      />

      <div className="items">
        {filteredItems.map((item, idx) => (
          <Link to={item.node.path.alias} key={item.node.id} className="career">
            <h3>
              {item.node.title}
              {!!item.node.field_abbreviation ? ` (${item.node.field_abbreviation})` : null}
            </h3>
            {/**
          <div className="hero">
            { !!(item.node.relationships.field_rate_hero) ? (
              <img src={item.node.relationships.field_rate_hero.image_style_uri[7].rate} width="100%" alt={item.node.field_rate_hero.alt} />
              ) : null
            }
          </div>
           */}
            <div className="active-reserve">
              <div className={`${item.node.field_active ? "text-black" : "text-gray"}`}>ACTIVE-DUTY</div>
              <div className="block md:hidden">|</div>
              <div className={`${item.node.field_reserve ? "text-black" : "text-gray"}`}>RESERVE</div>
            </div>
            <p className="description">{item.node.body.summary}</p>
            <p className="category">{item.node.relationships.field_officer_category.name}</p>
            <p className="details">DETAILS &gt;</p>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Officers;
