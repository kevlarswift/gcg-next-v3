import { useState } from "react";
import Link from "next/link";
import { Form } from "react-bootstrap";
import Map from "./map";
import haversine from "haversine";
import sortBy from "lodash.sortby";
import careersStyles from "/components/careers/Careers.module.scss";
import recruiterStyles from "./FindRecruiter.module.scss";

export default function FindRecruiter({ nodes }) {
  const [data, setData] = useState();
  const [zip, setZip] = useState();
  //const [state, setState] = useState("");
  //const [stateOptions] = useState(query.state_options);
  const [allOffices] = useState(nodes);
  const [currentRecruitingOffices, setCurrentRecruitingOffices] = useState(nodes);
  const [nearbyOffices, setNearbyOffices] = useState(currentRecruitingOffices);
  const [center, setCenter] = useState({ lat: 38, lng: -96 });
  const [zoom, setZoom] = useState(4);

  const findNearestOffice = (lat, lng) => {
    setCenter({ lat: lat, lng: lng });
    setZoom(6);
    const sortedRecruitingOffices = allOffices.map((office) => {
      let userPos = {
        latitude: lat,
        longitude: lng,
      };
      let officePos = {
        latitude: office.field_geolocation.lat,
        longitude: office.field_geolocation.lng,
      };
      return {
        ...office,
        distance: Math.round(haversine(officePos, userPos, { unit: "mile" })),
      };
    });
    const sortedOffices = sortBy(sortedRecruitingOffices, "distance").splice(0, 5);
    setNearbyOffices(sortedOffices);
  };

  const handleZipChange = (event) => {
    if (event.target.value.length === 5) {
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?components=country:US%7Cpostal_code:" +
          event.target.value +
          "&key=AIzaSyBB4CvVPT2yxac4JWz2DsaguUnMh8wxKcI"
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length) {
            setCenter(data.results[0].geometry.location);
            setZip(event.target.value);
            findNearestOffice(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
          } else {
            setData("No results for zip code: " + event.target.value);
          }
        });
    }
  };
  {
    /**
  const handleStateChange = (event) => {
    let currentStateOption = stateOptions.edges.filter((stateOption) => {
      return stateOption.node.title === event.target.value;
    });
    let currentStateROs = currentStateOption[0].node.relationships.field_recruiting_office.map((ro) => ro.id);
    let currentROs = allOffices.filter((ro) => {
      return currentStateROs.includes(ro.node.id);
    });
    setState(event.target.value);
    setCenter({
      lat: currentStateOption[0].node.field_geofield.lat,
      lng: currentStateOption[0].node.field_geofield.lon,
    });
    setCurrentRecruitingOffices(currentROs);
  };
 */
  }
  return (
    <div className={recruiterStyles.findRecruiter}>
      <div className={recruiterStyles.upper} id="map">
        <Map
          allOffices={allOffices}
          center={center}
          setCenter={setCenter}
          zoom={zoom}
          setZoom={setZoom}
          nearbyOffices={nearbyOffices}
          setNearbyOffices={setNearbyOffices}
          findNearestOffice={findNearestOffice}
        />
        <div className={recruiterStyles.nearestRos}>
          <h3>Nearest Recruiting Offices:</h3>
          <div style={{ paddingBottom: "2rem" }}>
            <Form>
              <Form.Group controlId="formSelectRecruitingOfficeByZip">
                <Form.Label>Search by Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  aria-label="Search by Zip Code"
                  htmlSize={5}
                  onChange={handleZipChange}></Form.Control>
                <Form.Text>{data}</Form.Text>
              </Form.Group>
            </Form>
          </div>

          {!!nearbyOffices ? (
            <div>
              <ul>
                {nearbyOffices.map((office, index) => {
                  return (
                    <li key={index}>
                      <Link href={office.path.alias}>
                        <a>
                          {office.title}: {office.distance} miles
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      {/** 
      <Form style={{ padding: "32px 0" }}>
        <Form.Group controlId="formSelectRecruitingOfficeByState">
          <Form.Label>Search by State</Form.Label>
          <Form.Select aria-label="Search by State" onChange={handleStateChange}>
            <option value={null}>Search by State</option>
            {stateOptions.edges.map((edge, index) => (
              <option key={index} value={edge.node.title}>
                {edge.node.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
 */}
      <div className={careersStyles.careers}>
        <div className={careersStyles.items}>
          {currentRecruitingOffices?.map((office, index) => (
            <div to={office.path.alias} key={index} className={careersStyles.career}>
              <div>
                <h3>
                  <Link href={office.path.alias}>
                    <a>{office.title}</a>
                  </Link>
                </h3>
                <div className={careersStyles.description}>
                  {!!office.field_address ? (
                    <p>
                      {!!office.field_address.organization ? (
                        <span>
                          {office.field_address.organization}
                          <br />
                        </span>
                      ) : null}
                      {!!office.field_address.address_line1 ? (
                        <span>
                          {office.field_address.address_line1}
                          <br />
                        </span>
                      ) : null}
                      {!!office.field_address.address_line2 ? (
                        <span>
                          {office.field_address.address_line2}
                          <br />
                        </span>
                      ) : null}
                      {!!office.field_address.locality ? (
                        <span>
                          {office.field_address.locality}, {office.field_address.administrative_area}{" "}
                          {office.field_address.postal_code}
                          <br />
                        </span>
                      ) : null}
                    </p>
                  ) : null}

                  <p>
                    {!!office.field_phone ? (
                      <span>
                        <a href={`tel:+{office.field_phone}`}>{office.field_phone}</a>
                        <br />
                      </span>
                    ) : null}
                    {!!office.field_email ? (
                      <span className={careersStyles.email}>
                        <a href={`mailto: ${office.field_email}`}>{office.field_email}</a>
                        <br />
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
              <p className={careersStyles.details}>
                <Link href={office.path.alias}>
                  <a>DETAILS &gt;</a>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
