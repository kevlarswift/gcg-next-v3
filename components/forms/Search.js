import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import styles from "./Search.module.scss";

export default function Search() {
  const [formSearchInput, setSearchInput] = useState({ keywords: "" });
  const [status, setStatus] = useState();
  const [results, setResults] = useState([]);

  async function onSubmit(values) {
    setStatus("loading...");
    const response = await fetch("/api/search/next", {
      method: "POST",
      body: JSON.stringify({
        params: {
          filter: {
            fulltext: values.keywords,
          },
        },
      }),
    });
    if (!response.ok) {
      return setStatus("error");
    }
    setStatus("success");
    const results = await response.json();
    setResults(results);
  }

  return (
    <div>
      <Formik initialValues={formSearchInput} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <legend>Search</legend>
            <fieldset className="fieldset">
              <Row className="form-group mb-3">
                <Col xs={9}>
                  <Field className="form-control" id="keywords" name="keywords" autoFocus={true} />
                </Col>
                <Col xs={3}>
                  <Button type="submit" data-cy="btn-submit">
                    {status === "loading" ? "Please wait..." : " Submit"}
                  </Button>
                </Col>
              </Row>
            </fieldset>
          </Form>
        )}
      </Formik>

      <div className={styles.upper} id="form">
        {status === "error" ? <div>An error occured. Please try again.</div> : null}

        {!results.length ? (
          <p data-cy="search-no-results">No results found.</p>
        ) : (
          <div className={styles.results}>
            <h3 data-cy="search-results">Found {results.length} result(s).</h3>
            {results.map((node) => (
              <div key={node.id} className="">
                <article className="" data-cy="search-result">
                  <Link href={node.path.alias}>
                    <a>
                      <h4>{node.title}</h4>
                    </a>
                  </Link>
                  <p>{node.field_subtitle}</p>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
