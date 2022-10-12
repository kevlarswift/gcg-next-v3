import React from "react"
import { Table } from 'react-bootstrap'

export default function EligibilityRequirementsEnlisted () {
  return (
    <Table striped bordered hover>
    <tbody>
      <tr>
        <td>Age</td>
        <td>17-36 (Active-Duty)<br />17-40 (Reserve)</td>
      </tr>
      <tr>
        <td>Citizenship</td>
        <td>Must be a U.S. citizen or Lawful Permanent Resident.</td>
      </tr>
      <tr>
        <td>Dependents</td>
        <td>Active-Duty:<br />Single: No primary custody dependents<br />Married: No more than 2 dependents other than spouse.<br /><br />Reserve:<br />No more than 7 dependents.</td>
      </tr>
      <tr>
        <td>GPA</td>
        <td>No requirement</td>
      </tr>
      <tr>
        <td>Education</td>
        <td>Must have a high school degree or equivalent.</td>
      </tr>
      <tr>
        <td>Military Service</td>
        <td>No more than 14 years of non-Coast Guard active-duty military service.  Members currently in another military service (or Reserve) must have an approved DD368 (conditional release).</td>
      </tr>
      <tr>
        <td>Medical Requirements</td>
        <td>Must meet accession physical standards.</td>
      </tr>
      <tr>
        <td>Qualifying Test Score</td>
        <td>Minimum ASVAB AFQT: 32</td>
      </tr>
      <tr>
        <td>Program-specific Requirements</td>
        <td>
          Active-Duty: No additional requirements
          <br />
          Reserve: Must meet educational or experience qualifications of a specific Reserve program
        </td>
      </tr>
    </tbody>
  </Table>
  )
}
