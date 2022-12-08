import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import CryptoJS from "crypto-js";

const PQPreview = ({ formManager1, formManager2, formManager3, formManager4, formManager4Array, moveStep }) => {
  
  const transformFieldValue = (field) => {
    switch (field.type) {
      case "text":
        return field.field;
      case "boolean":
        if (field.field) {
          return "True";
        } else {
          return "False";
        }
      case "select":
        if (field.field) {
          let item = field.options.find((o) => o.value === field.field);
          return item.label;
        } else {
          return "";
        }
      default:
        return field.field;
    }
  };

  const [message, setMessage] = useState("");
  const [codedMessage, setCodedMessage] = useState("");


  const handleSubmit = async(event) => {
    
    event.preventDefault()
    
    // FORMAT MESSAGE 
    let formMessage = '<?xml version="1.0" encoding="utf-16" standalone="yes"?>';
    formMessage += "<NewLeads><NewLead>";
    formMessage += "<Schema_Version>2.0</Schema_Version><DataSource>11</DataSource>";

    formManager1.map((field) => {
      // Do not return values for the two Terms and Conditions fields
      if (field.node) {
        formMessage += "<" + field.node + ">" + field.field + "</" + field.node + ">";
      }
    });
    formManager2.map((field) => {
      formMessage += "<" + field.node + ">" + field.field + "</" + field.node + ">";
    });
    formManager3.map((field) => {
      formMessage += "<" + field.node + ">" + field.field + "</" + field.node + ">";
    });
    formManager4.map((field) => {
      formMessage += "<" + field.node + ">" + field.field + "</" + field.node + ">";
    });
    formMessage += "<Activities>";
    formManager4Array.map((field) => {
      formMessage += "<" + field.node + ">" + field.field + "</" + field.node + ">";
    });
    formMessage += "</Activities>";
    formMessage += "</NewLead></NewLeads>";
    setMessage(formMessage);
    
    // ENCRYPT MESSAGE
    const key = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_DAH_KEY);
    const iv = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_DAH_IV);
    const encrypted = CryptoJS.AES.encrypt(formMessage, key, { iv: iv, mode: CryptoJS.mode.CBC });
    const wrappedXML = '<?xml version="1.0"?><LeadData><InitialContact>' + encrypted.toString() + '</InitialContact></LeadData>';
    setCodedMessage(wrappedXML);

    // SUBMIT MESSAGE
    const endpoint = process.env.NEXT_PUBLIC_LEADS_ENDPOINT;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        'Accept': 'application/xml'
      },
      body: wrappedXML,
    }

    const response = await fetch(endpoint, options);
    
    const result = await response.json()
    setCodedMessage(result.data)
    alert(`Is this your full name: ${result.data}`)
  };

  return (
    <div>
      <h2>Review your Data</h2>
      <div className="mb-4">
        <h3>Contact Details and Interest</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <td width="50%">Question</td>
              <td width="50%">Response</td>
            </tr>
          </thead>
          <tbody>
            {formManager1.map((field, index) => {
              return (
                <tr key={index}>
                  <td>{field.label}</td>
                  <td>{transformFieldValue(field)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={() => moveStep(0)}>Return to Contact Details and Interest</Button>
      </div>

      <div className="mb-4">
        <h3>Biographical Details</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <td width="50%">Question</td>
              <td width="50%">Response</td>
            </tr>
          </thead>
          <tbody>
            {formManager2.map((field, index) => {
              return (
                <tr key={index}>
                  <td>{field.label}</td>
                  <td>{transformFieldValue(field)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={() => moveStep(1)}>Return to Biographical Details</Button>
      </div>

      <div className="mb-4">
        <h3>Military Service and ASVAB</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <td width="50%">Question</td>
              <td width="50%">Response</td>
            </tr>
          </thead>
          <tbody>
            {formManager3.map((field, index) => {
              return (
                <tr key={index}>
                  <td>{field.label}</td>
                  <td>{transformFieldValue(field)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={() => moveStep(2)}>Return to Military Service and ASVAB</Button>
      </div>

      <div className="mb-4">
        <h3>Additional Background Information</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <td width="50%">Question</td>
              <td width="50%">Response</td>
            </tr>
          </thead>
          <tbody>
            {formManager4.map((field, index) => {
              return (
                <tr key={index}>
                  <td>{field.label}</td>
                  <td>{transformFieldValue(field)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="form-actions">
          <Button onClick={() => moveStep(3)}>Return to Additional Background Information</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <p>Coded Message</p>
      <pre>{codedMessage}</pre>
    </div>
  );
};

export default PQPreview;

/*

<Driving_Violations>
<Violation>
<Violation_Type>Speeding</Violation_Type>
<Violation_Date>2019-10-31</Violation_Date></Violation>
<Violation>
<Violation_Type>Failure to yield</Violation_Type>
<Violation_Date>2018-02-14</Violation_Date></Violation>
</Driving_Violations>

<Debts>
<Debt>
<Company>Chase</Company>
<Description>Mortgage</Description>
<Total>150000</Total>
<Monthly>2145</Monthly>
</Debt>
<Debt>
<Company>UHCU</Company>
<Description>Car Payment</Description>
<Total>13500</Total>
<Monthly>525</Monthly>
</Debt>
</Debts>

<Additional_Explanations>
<Explanation>I have so many different issues.</Explanation>
<Explanation>Question 13. I am terrified of the water and won't go near it.</Explanation>
</Additional_Explanations>

*/
