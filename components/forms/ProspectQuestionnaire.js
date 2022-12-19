import React, { useState } from "react";
import * as Yup from "yup";
import scrollTo from "gatsby-plugin-smoothscroll";
import formOptions from "./ProspectQuestionnaireData.json";
import PQProgress from "./PQProgress";
import PQForm1 from "./PQForm1";
import PQForm2 from "./PQForm2";
import PQForm3 from "./PQForm3";
import PQForm4 from "./PQForm4";
import PQPreview from "./PQPreview";
import { Container } from "react-bootstrap";

export default function ProspectQuestionnaire() {

  // Submit to Next.js API endpoint
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formValues1.phone_home)
    const response = await fetch(`/api/test`, {
      method: "POST",
      body: JSON.stringify({
        // Form Values 1
        terms_privacy: formValues1.terms_privacy,
        terms_paperwork: formValues1.terms_paperwork,
        name_first: formValues1.name_first,
        name_middle: formValues1.name_middle,
        name_last: formValues1.name_last,
        name_suffix: formValues1.name_suffix,
        name_maiden: formValues1.name_maiden,
        country: formValues1.country,
        street: formValues1.street,
        city: formValues1.city,
        state: formValues1.state,
        zip: formValues1.zip,
        county: formValues1.county,
        email: formValues1.email,
        phone_home: formValues1.phone_home,
        media_id: formValues1.media_id,
        program_of_interest: formValues1.program_of_interest,
        component: formValues1.component,
        // Form Values 2
        citizenship: formValues2.citizenship,
        registration_number: formValues2.registration_number,
        ssn: formValues2.ssn,
        ethnicity: formValues2.ethnicity,
        race: formValues2.race,
        race_2: formValues2.race_2,
        dob: formValues2.dob,
        gender: formValues2.gender,
        birth_country: formValues2.birth_country,
        birth_city: formValues2.birth_city,
        birth_state: formValues2.birth_state,
        birth_county: formValues2.birth_county,
        marital_status: formValues2.marital_status,
        dependents: formValues2.dependents,
        height: formValues2.height,
        weight: formValues2.weight,
        hair_color: formValues2.hair_color,
        eye_color: formValues2.eye_color,
        education_level: formValues2.education_level,
        high_school: formValues2.high_school,
        community_activity_1: formValues2.community_activity_1,
        community_activity_2: formValues2.community_activity_2,
        gpa: formValues2.gpa,
        college: formValues2.college,
        degree_type: formValues2.degree_type,
        major: formValues2.major,
        current_education_status: formValues2.current_education_status,
        current_employment_status: formValues2.current_employment_status,
        credits: formValues2.credits,
        years_education: formValues2.years_education,
        drivers_license_number: formValues2.drivers_license_number,
        drivers_license_state: formValues2.drivers_license_state,
        drivers_license_expiration: formValues2.drivers_license_expiration,
        selective_service_number: formValues2.selective_service_number,
        // Form Values 3
        recruiter: formValues3.recruiter,
        recruiter_details: formValues3.recruiter_details,
        service: formValues3.service,
        branch: formValues3.branch,
        service_component: formValues3.service_component,
        pay_grade: formValues3.pay_grade,
        rate_mos_job: formValues3.rate_mos_job,
        service_type: formValues3.service_type,
        discharged_separation_date: formValues3.discharged_separation_date,
        time_years: formValues3.time_years,
        time_months: formValues3.time_months,
        time_days: formValues3.time_days,
        discharge_type: formValues3.discharge_type,
        re_code: formValues3.re_code,
        anticipated_separation_date: formValues3.anticipated_separation_date,
        serving_years: formValues3.serving_years,
        serving_months: formValues3.serving_months,
        serving_days: formValues3.serving_days,
        rejected_military: formValues3.rejected_military,
        rejected_details: formValues3.rejected_details,
        asvab: formValues3.asvab,
        asvab_branch: formValues3.asvab_branch,
        asvab_score: formValues3.asvab_score,
        asvab_when: formValues3.asvab_when,
        asvab_where: formValues3.asvab_where,
        // Form Values 4
        crime: formValues4.crime,
        crime_description: formValues4.crime_description,
        legal: formValues4.legal,
        legal_description: formValues4.legal_description,
        drugs: formValues4.drugs,
        drugs_description: formValues4.drugs_description,
        drugs_times: formValues4.drugs_times,
        drugs_last_date: formValues4.drugs_last_date,
        tattoos: formValues4.tattoos,
        tattoos_description: formValues4.tattoos_description,
        overdue: formValues4.overdue,
        declared_bankruptcy: formValues4.declared_bankruptcy,
        child_support: formValues4.child_support,
        child_support_amount: formValues4.child_support_amount,
        firearms: formValues4.firearms,
        beliefs: formValues4.beliefs,
        afraid: formValues4.afraid,
        swimming_confidence: formValues4.swimming_confidence,
        boy_scouts: formValues4.boy_scouts,
        girl_scouts: formValues4.girl_scouts,
        sea_scouts: formValues4.sea_scouts,
        police_explorers: formValues4.police_explorers,
        sea_explorers: formValues4.sea_explorers,
        civil_air_patrol: formValues4.civil_air_patrol,
        naval_sea_cadet_corps: formValues4.naval_sea_cadet_corps,
        coast_guard_auxiliary: formValues4.coast_guard_auxiliary,
        rotc_jrotc: formValues4.rotc_jrotc,
        acknowledgement: formValues4.acknowledgement,
      }),
    })
    // Success
    if (response.ok) {
      console.log(response)
    } else {
      // Failure
      console.log(response)
    }
  }

  const [formValues1, setFormValues1] = useState({
    terms_privacy: true,
    terms_paperwork: true,
    name_first: "Andrew",
    name_middle: "Kean",
    name_last: "Smith",
    name_suffix: "Jr",
    name_maiden: "Leichter",
    country: "US",
    street: "503 W 33rd St",
    city: "Austin",
    state: "TX",
    zip: "78705",
    county: "Travis",
    email: "keansmith@gmail.com",
    phone_home: "7032208845",
    media_id: "BILL",
    program_of_interest: "OFC",
    component: "FT",
  });

  const formSchema1 = Yup.object({
    terms_privacy: Yup.boolean().oneOf(
      [true], 
      "Please acknowledge that you agree to the terms of the Privacy Act"),
    terms_paperwork: Yup.boolean().oneOf(
      [true],
      "Please acknowledge that you agree to the terms of the Paperwork Reduction Act"),
    name_first: Yup.string().required().max(25).label("First Name"),
    name_middle: Yup.string().max(25).label("Middle Name"),
    name_last: Yup.string().required().max(25).label("Last Name"),
    name_suffix: Yup.string().label("Suffix"),
    name_maiden: Yup.string().max(25).label("Maiden Name"),
    country: Yup.string().required().min(2).max(3).label("Country"),
    street: Yup.string()
      .when("country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("Street"),
    city: Yup.string()
      .when("country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("City"),
    state: Yup.string()
      .when("country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("State"),
    county: Yup.string()
      .when("country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("County"),
    zip: Yup.string()
      .when("country", {
        is: "US",
        then: Yup.string().min(5).max(5).required(),
      })
      .label("Zip"),
    email: Yup.string().email().required().label("Email Address"),
    phone_home: Yup.string().required().label("Phone Number"),
    media_id: Yup.string().required().label("How did you first hear about us"),
    program_of_interest: Yup.string().required().label("Program of Interest"),
    component: Yup.string().required().label("Component"),
  });

  const formManager1 = [
    { field: formValues1.terms_privacy, label: "I agree to the terms of the Privacy Act", type: "boolean" },
    {
      field: formValues1.terms_paperwork,
      label: "I agree to the terms of the Paperwork Reduction Act",
      type: "boolean",
    },
    { field: formValues1.name_first, label: "First Name", type: "text", node: "Name_First" },
    { field: formValues1.name_middle, label: "Middle Name", type: "text", node: "Name_Middle" },
    { field: formValues1.name_last, label: "Last Name", type: "text", node: "Name_Last" },
    { field: formValues1.name_suffix, label: "Suffix", type: "text", node: "Name_Suffix" },
    { field: formValues1.name_maiden, label: "Maiden Name", type: "text", node: "Name_Maiden" },
    { field: formValues1.country, label: "Country", type: "select", options: formOptions.countries, node: "Country" },
    { field: formValues1.street, label: "Street", type: "text", node: "Street" },
    { field: formValues1.city, label: "City", type: "text", node: "City" },
    { field: formValues1.state, label: "State", type: "select", options: formOptions.states, node: "State" },
    { field: formValues1.zip, label: "Zip", type: "text", node: "Zip" },
    { field: formValues1.county, label: "County", type: "text", node: "County" },
    { field: formValues1.email, label: "Email", type: "text", node: "Email" },
    { field: formValues1.phone_home, label: "Phone Number", type: "text", node: "Phone_Home" },
    {
      field: formValues1.media_id,
      label: "How did you first hear about us",
      type: "select",
      options: formOptions.media_ids,
      node: "Media_ID",
    },
    {
      field: formValues1.program_of_interest,
      label: "Program of Interest",
      type: "select",
      options: formOptions.programs_of_interest,
      node: "Program_Of_Interest",
    },
    {
      field: formValues1.component,
      label: "Component",
      type: "select",
      options: formOptions.components,
      node: "Component",
    },
  ];

  const [formValues2, setFormValues2] = useState({
    citizenship: "USNB",
    registration_number: "",
    ssn: "123456789",
    ethnicity: "false",
    race: "1",
    race_2: "",
    dob: "1975-06-07",
    gender: "1",
    birth_country: "US",
    birth_city: "Cincinnati",
    birth_state: "OH",
    birth_county: "Hamilton",
    marital_status: 6,
    dependents: 4,
    height: "06-00",
    weight: "218",
    hair_color: "brown",
    eye_color: "green",
    education_level: "BADG",
    high_school: "",
    community_activity_1: "Tennis Team",
    community_activity_2: "Boy Scouts",
    gpa: 75,
    college: "",
    degree_type: "AD",
    major: "",
    current_education_status: "NI",
    current_employment_status: "FT",
    credits: 60,
    years_education: 12,
    drivers_license_number: "ABC123",
    drivers_license_state: "TX",
    drivers_license_expiration: "2020-01-01",
    selective_service_number: "12345",
  });

  const formSchema2 = Yup.object({
    citizenship: Yup.string().required().label("Citizenship"),
    registration_number: Yup.string()
      .when("citizenship", {
        is: "LWPR",
        then: Yup.string().max(25).required(),
      })
      .label("Registration Number"),
    ssn: Yup.string().max(11).label("Social Security Number"),
    ethnicity: Yup.string().required().label("Ethnicity"),
    race: Yup.string().required().label("Race"),
    race_2: Yup.string().label("Race #2"),
    dob: Yup.date().required("Date of Birth"),
    gender: Yup.string().required().label("Gender"),
    birth_country: Yup.string().required().min(2).max(3).label("Birth Country"),
    birth_city: Yup.string()
      .when("birth_country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("Birth City"),
    birth_state: Yup.string()
      .when("birth_country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("Birth State"),
    birth_county: Yup.string()
      .when("birth_country", {
        is: "US",
        then: Yup.string().required(),
      })
      .label("Birth County"),
    marital_status: Yup.string().required().label("Marital Status"),
    dependents: Yup.string().required().label("Number of Dependent Children"),
    height: Yup.string().required().label("Height"),
    weight: Yup.number().required().label("Weight"),
    hair_color: Yup.string().label("Hair Color"),
    eye_color: Yup.string().label("Eye Color"),
    education_level: Yup.string().required().label("Education Level"),
    community_activity_1: Yup.string().max(150).label("Community Activity #1"),
    community_activity_2: Yup.string().max(150).label("Community Activity #2"),
    high_school: Yup.string().max(100).label("High School"),
    gpa: Yup.number().min(0).max(99).required().label("GPA"),
    college: Yup.string().max(100).label("College"),
    degree_type: Yup.string().label("Degree Type"),
    major: Yup.string().max(100).label("Major"),
    current_education_status: Yup.string().required().label("Current Education Status"),
    current_employment_status: Yup.string().required().label("Current Employment Status"),
    credits: Yup.number().min(0).max(200).label("College Credits"),
    years_education: Yup.number().min(0).max(28).required().label("Years Education"),
    drivers_license_number: Yup.string().label("Driver's License Number"),
    drivers_license_state: Yup.string().max(50).label("Driver's License State"),
    drivers_license_expiration: Yup.date().label("Driver's License Expiration"),
    selective_service_number: Yup.string().max(50).label("Selective Service Number"),
  });

  const formManager2 = [
    {
      field: formValues2.citizenship,
      label: "Citizenship",
      type: "select",
      options: formOptions.citizenships,
      node: "US_Citz_Type",
    },
    {
      field: formValues2.registration_number,
      label: "Registration Number",
      type: "text",
      node: "Registration_Number",
    },
    { field: formValues2.ssn, label: "Social Security Number", type: "text", node: "SSN" },
    {
      field: formValues2.ethnicity,
      label: "Ethnicity",
      type: "select",
      options: formOptions.ethnicities,
      node: "Ethnicity",
    },
    { field: formValues2.race, label: "Race", type: "select", options: formOptions.races, node: "Race" },
    { field: formValues2.race_2, label: "Race #2", type: "select", options: formOptions.races, node: "Race2" },
    { field: formValues2.dob, label: "Date of Birth", type: "text", node: "DOB_Date" },
    { field: formValues2.gender, label: "Gender", type: "select", options: formOptions.genders, node: "Gender" },
    {
      field: formValues2.birth_country,
      label: "Birth Country",
      type: "select",
      options: formOptions.countries,
      node: "Birth_Country",
    },
    { field: formValues2.birth_city, label: "Birth City", type: "text", node: "Birth_City" },
    {
      field: formValues2.birth_state,
      label: "Birth State",
      type: "select",
      options: formOptions.states,
      node: "Birth_State",
    },
    { field: formValues2.birth_county, label: "Birth County", type: "text", node: "Birth_County" },
    {
      field: formValues2.marital_status,
      label: "Marital Status",
      type: "select",
      options: formOptions.marital_statuses,
      node: "Marital_Status",
    },
    { field: formValues2.dependents, label: "Dependents", type: "text", node: "Dependants" },
    { field: formValues2.height, label: "Height", type: "select", options: formOptions.heights, node: "Height" },
    { field: formValues2.weight, label: "Weight", type: "text", node: "Weight" },
    {
      field: formValues2.hair_color,
      label: "Hair Color",
      type: "select",
      options: formOptions.hair_colors,
      node: "Hair",
    },
    {
      field: formValues2.eye_color,
      label: "Eye Color",
      type: "select",
      options: formOptions.eye_colors,
      node: "Eye_Color",
    },
    {
      field: formValues2.education_level,
      label: "Education Level",
      type: "select",
      options: formOptions.education_levels,
      node: "Education_Level",
    },
    { field: formValues2.high_school, label: "High School", type: "text", node: "High_School" },
    {
      field: formValues2.community_activity_1,
      label: "Community Activity #1",
      type: "text",
      node: "Community_Activity_1",
    },
    {
      field: formValues2.community_activity_2,
      label: "Community Activity #1",
      type: "text",
      node: "Community_Activity_2",
    },
    { field: formValues2.gpa, label: "GPA", type: "text", node: "GPA" },
    { field: formValues2.college, label: "College", type: "text", node: "College" },
    {
      field: formValues2.degree_type,
      label: "Degree Type",
      type: "select",
      options: formOptions.degree_types,
      node: "Degree_Type",
    },
    { field: formValues2.major, label: "Major", type: "text", node: "Major" },
    {
      field: formValues2.current_education_status,
      label: "Current Education Status",
      type: "select",
      options: formOptions.current_education_statuses,
      node: "Education_Status",
    },
    {
      field: formValues2.current_employment_status,
      label: "Current Employment Status",
      type: "select",
      options: formOptions.current_employment_statuses,
      node: "Employment_Status",
    },
    { field: formValues2.credits, label: "Credits", type: "text", node: "Credits" },
    { field: formValues2.years_education, label: "Years of Education", type: "text", node: "Years_Education" },
    {
      field: formValues2.drivers_license_number,
      label: "Drivers License Number",
      type: "text",
      node: "Drivers_License_Number",
    },
    {
      field: formValues2.drivers_license_state,
      label: "Drivers License State",
      type: "text",
      node: "Drivers_License_State",
    },
    {
      field: formValues2.drivers_license_expiration,
      label: "Drivers License Expiration",
      type: "text",
      node: "Drivers_License_Expiration",
    },
    {
      field: formValues2.selective_service_number,
      label: "Selective Service Number",
      type: "text",
      node: "Selective_Service_Number",
    },
  ];

  const [formValues3, setFormValues3] = useState({
    recruiter: "Y",
    recruiter_details: "Been a while, I've forgotten",
    service: "Y",
    branch: "AFNG",
    service_component: "PT",
    pay_grade: "e2",
    rate_mos_job: "AET",
    service_type: "1",
    discharged_separation_date: "",
    time_years: "",
    time_months: "",
    time_days: "",
    discharge_type: "",
    re_code: "",
    anticipated_separation_date: "",
    serving_years: "5",
    serving_months: "4",
    serving_days: "3",
    rejected_military: "Y",
    rejected_details: "I was feeling sick during my interview",
    asvab: "Y",
    asvab_branch: "AR",
    asvab_score: "32",
    asvab_when: "2022-01-01",
    asvab_where: "Potomac Mills RO",
  });

  const formSchema3 = Yup.object({
    recruiter: Yup.string().required().label("Talked to a Coast Guard Recruiter"),
    recruiter_details: Yup.string().max(150).label("If yes, when and where"),
    service: Yup.string().required().label("Have you served or are you currently serving in another military branch?"),
    branch: Yup.string().label("Branch"),
    service_component: Yup.string().label("Service Component"),
    pay_grade: Yup.string().label("Pay Grade"),
    rate_mos_job: Yup.string().label("Rate/MOS/Job"),
    service_type: Yup.string().label("Service Type"),
    discharged_separation_date: Yup.date().label("Date of Separation"),
    time_years: Yup.number().min(0).max(30).label("Service Years"),
    time_months: Yup.number().min(0).max(11).label("Service Months"),
    time_days: Yup.number().min(0).max(30).label("Service Days"),
    discharge_type: Yup.string().label("Discharge Type"),
    re_code: Yup.string().label("RE Code"),
    anticipated_separation_date: Yup.date().label("Anticipated Separation Date"),
    serving_years: Yup.number().min(0).max(30).label("Remaining Service Years"),
    serving_months: Yup.number().min(0).max(11).label("Remaining Service Months"),
    serving_days: Yup.number().min(0).max(30).label("Remaining Service Days"),
    rejected_military: Yup.string().required().label("Been rejected from joining another military service?"),
    rejected_details: Yup.string()
      .max(150)
      .label(" If Yes, which branch (including Coast Guard), what was the reason, and where did it happen?"),
    asvab: Yup.string().required().label("Have you ever taken the ASVAB?"),
    asvab_branch: Yup.string().label("Branch for?"),
    asvab_score: Yup.number().min(0).label("Score"),
    asvab_when: Yup.date().label("Expiration Date"),
    asvab_where: Yup.string().max(200).label("Name of School/MET Site/MEPS"),
  });

  const formManager3 = [
    {
      field: formValues3.recruiter,
      label: "Recruiter",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Recruiter",
    },
    { field: formValues3.recruiter_details, label: "Recruiter Detail", type: "text", node: "Recruiter_Details" },
    {
      field: formValues3.service,
      label: "Service",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "PriorService",
    },
    { field: formValues3.branch, label: "Branch", type: "select", options: formOptions.branches, node: "Branch_Auto" },
    {
      field: formValues3.service_component,
      label: "Service Component",
      type: "select",
      options: formOptions.service_components,
      node: "Prior_Service_Component",
    },
    {
      field: formValues3.pay_grade,
      label: "Pay Grades",
      type: "select",
      options: formOptions.pay_grades,
      node: "Pay_Grade2",
    },
    {
      field: formValues3.rate_mos_job,
      label: "Rate/MOS/Job",
      type: "select",
      options: formOptions.rate_mos_jobs,
      node: "Rate_MOS_Job",
    },
    {
      field: formValues3.service_type,
      label: "Service Type",
      type: "select",
      options: formOptions.service_types,
    },
    {
      field: formValues3.discharged_separation_date,
      label: "Discharged Separation Date",
      type: "text",
      node: "Discharged_Separation_Date",
    },
    { field: formValues3.time_years, label: "Time Years", type: "text", node: "Time_Years" },
    { field: formValues3.time_months, label: "Time Months", type: "text", node: "Time_Month" },
    { field: formValues3.time_days, label: "Time Days", type: "text", node: "Time_Days" },
    {
      field: formValues3.discharge_type,
      label: "Discharge Type",
      type: "select",
      options: formOptions.discharge_types,
      node: "DischargeType",
    },
    { field: formValues3.re_code, label: "RE Code", type: "select", options: formOptions.re_codes, node: "RECode" },
    {
      field: formValues3.anticipated_separation_date,
      label: "Anticipated Separation Date",
      type: "text",
      node: "Anticipated_Separation_Date",
    },
    { field: formValues3.serving_years, label: "Serving Years", type: "text", node: "Serving_Years" },
    { field: formValues3.serving_months, label: "Serving Months", type: "text", node: "Serving_Months" },
    { field: formValues3.serving_days, label: "Serving Days", type: "text", node: "Serving_Days" },
    {
      field: formValues3.rejected_military,
      label: "Rejected Military",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Rejected_Military",
    },
    { field: formValues3.rejected_details, label: "Rejected Details", type: "text", node: "Rejected_Details" },
    {
      field: formValues3.asvab,
      label: "ASVAB",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "ASVAB_Taken",
    },
    {
      field: formValues3.asvab_branch,
      label: "ASVAB Branch",
      type: "select",
      options: formOptions.asvab_branches,
      node: "ASVAB_Branch",
    },
    { field: formValues3.asvab_score, label: "ASVAB Score", type: "text", node: "ASVAB_Score" },
    { field: formValues3.asvab_when, label: "ASVAB When", type: "text", node: "ASVAB_When" },
    { field: formValues3.asvab_where, label: "ASVAB Where", type: "text", node: "ASVAB_Where" },
  ];

  const [formValues4, setFormValues4] = useState({
    crime: "Y",
    crime_description: "DWI",
    violations: [
      { type: "DWI", date: "2021-02-02" },
      { type: "Failure to Yield", date: "2021-02-02" },
    ],
    legal: "Y",
    legal_description: "Assault and Battery",
    drugs: "Y",
    drugs_description: "Caffeine, Alcohol and Weed",
    drugs_times: "2",
    drugs_last_date: "2022-01-01",
    tattoos: "Y",
    tattoos_description: "Eagle on my back",
    overdue: "Y",
    declared_bankruptcy: "Y",
    child_support: "Y",
    child_support_amount: "1400",
    debts: [
      { company: "Chase", description: "Mortgage", debt_total: 100000, debt_monthly: 1000 },
      { company: "", description: "", debt_total: null, debt_monthly: null },
      { company: "", description: "", debt_total: null, debt_monthly: null },
    ],
    firearms: "Y",
    beliefs: "Y",
    afraid: "Y",
    swimming_confidence: "2",
    boy_scouts: true,
    girl_scouts: true,
    sea_scouts: true,
    police_explorers: true,
    sea_explorers: false,
    civil_air_patrol: true,
    naval_sea_cadet_corps: false,
    coast_guard_auxiliary: false,
    rotc_jrotc: false,
    explanations: [
      { exp: "aaa" }
    ],
    acknowledgement: true,
  });

  const formSchema4 = Yup.object({
    crime: Yup.string()
      .required()
      .label("Have you ever been arrested, charged, or convicted of a crime (whether as a juvenile or an adult)"),
    crime_description: Yup.string().max(254).label("If yes, when and where"),
    legal: Yup.string()
      .required()
      .label(
        "Do you have any legal action pending, including court cases, lawsuits, child support or custody adjudications, etc"
      ),
    legal_description: Yup.string().max(254).label("If yes, please briefly explain."),
    drugs: Yup.string().required().label("Have you ever used, possessed, or experimented with illegal drugs"),
    drugs_description: Yup.string().max(254).label("If yes, please list which substances"),
    drugs_times: Yup.number().min(0).label("How many times"),
    drugs_last_date: Yup.date().label("Approximate Date Last Used"),
    tattoos: Yup.string().required().label("Do you have any Tattoos, Piercings, Gages, Brandings or Mutilations"),
    tattoos_description: Yup.string().max(254).label("If yes, please describe (include size, content, and location)"),
    overdue: Yup.string().required().label("Overdue/late payments or payments in collection"),
    declared_bankruptcy: Yup.string().required().label("Declared Bankruptcy"),
    child_support: Yup.string().required().label("Do you pay child support or alimony"),
    child_support_amount: Yup.string().max(254).label("How much per month"),
    // debts
    firearms: Yup.string()
      .required()
      .label("Do you object to carrying firearms/weapons to perform Coast Guard duties?"),
    beliefs: Yup.string()
      .required()
      .label("Do you have any religious or other beliefs prevent you from being available for duty 24/7"),
    afraid: Yup.string().required().label("Are you afraid of the water"),
    swimming_confidence: Yup.number().required().label("Rate your swimming confidence"),
    // explanations
    acknowledgement: Yup.boolean().oneOf(
      [true],
      "Please certify that the information I have provided is truthful and accurate to the best of my knowledge and I understand that any false information that I provide may be the grounds for termination of any future enlistment/commissioning contracts with the United States Coast Guard."
    ),
  });

  const formManager4 = [
    {
      field: formValues4.crime,
      label: "Have you ever been arrested, charged, or convicted of a crime (whether as a juvenile or an adult)",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Crime",
    },

    { field: formValues4.crime_description, label: "If yes, when and where", type: "text", node: "Crime_Description" },
    /* Violations array */
    {
      field: formValues4.legal,
      label:
        "Do you have any legal action pending, including court cases, lawsuits, child support or custody adjudications, etc",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Legal",
    },
    { field: formValues4.legal_description, label: "If yes, please briefly explain.", type: "text", node: "Legal_Description" },
    {
      field: formValues4.drugs,
      label: "Have you ever used, possessed, or experimented with illegal drugs",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Drugs",
    },
    { field: formValues4.drugs_description, label: "If yes, please list which substances", type: "text", node: "Drugs_Description" },
    { field: formValues4.drugs_times, label: "How many times", type: "text", node: "Drugs_Times" },
    { field: formValues4.drugs_last_date, label: "Approximate Date Last Used", type: "text", node: "Drugs_Last_Date" },
    {
      field: formValues4.tattoos,
      label: "Do you have any Tattoos, Piercings, Gages, Brandings or Mutilations",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Tattoos",
    },
    {
      field: formValues4.tattoos_description,
      label: "If yes, please describe (include size, content, and location)",
      type: "text",
      node: "Tattoos_Description",
    },
    {
      field: formValues4.overdue,
      label: "Overdue/late payments or payments in collection",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Overdue",
    },
    {
      field: formValues4.declared_bankruptcy,
      label: "Declared Bankruptcy",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Declared_Bankruptcy",
    },
    {
      field: formValues4.child_support,
      label: "Do you pay child support or alimony?",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Child_Support",
    },
    { field: formValues4.child_support_amount, label: "How much per month", type: "text", node: "Child_Support_Amount" },

    /* Debts array */
    {
      field: formValues4.firearms,
      label: "Do you object to carrying firearms/weapons to perform Coast Guard duties?",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Firearms",
    },
    {
      field: formValues4.beliefs,
      label: "Do you have any religious or other beliefs prevent you from being available for duty 24/7",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Beliefs",
    },
    {
      field: formValues4.afraid,
      label: "Are you afraid of the water",
      type: "select",
      options: formOptions.yes_no_unsure,
      node: "Afraid",
    },
    {
      field: formValues4.swimming_confidence,
      label: "Rate your swimming confidence",
      type: "select",
      options: formOptions.swimming_confidences,
      node: "Swimming_Confidence",
    },
  ];
  const formManager4Array = [
    {
      field: formValues4.boy_scouts,
      label: "Boy Scouts",
      type: "boolean",
      node: "ActivityBoyScouts",
    },
    { field: formValues4.girl_scouts, label: "Girl Scouts", type: "boolean", node: "ActivityGirlScouts" },
    { field: formValues4.sea_scouts, label: "Sea Scouts", type: "boolean", node: "ActivitySeaScouts" },
    { field: formValues4.police_explorers, label: "Police Explorers", type: "boolean", node: "ActivityPoliceExplorers" },
    { field: formValues4.sea_explorers, label: "Sea Explorers", type: "boolean", node: "ActivitySeaExplorers" },
    { field: formValues4.civil_air_patrol, label: "Civil Air Patrol", type: "boolean", node: "ActivityCivilAirPatrol" },
    { field: formValues4.naval_sea_cadet_corps, label: "Naval Sea Cadet Corps", type: "boolean", node: "ActivityNavalSeaCadet" },
    { field: formValues4.coast_guard_auxiliary, label: "Coast Guard Auxiliary", type: "boolean", node: "ActivityCoastGuardAuxiliary" },
    { field: formValues4.rotc_jrotc, label: "ROTC/JROTC", type: "boolean", node: "ActivityRotcJrotc" },
    {
      field: formValues4.acknowledgement,
      label:
        "I hereby certify that the information I have provided is truthful and accurate to the best of my knowledge and I understand that any false information that I provide may be the grounds for termination of any future enlistment/commissioning contracts with the United States Coast Guard.",
      type: "boolean",
      node: "Acknowledgement",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const moveStep = (step) => {
    scrollTo("#pq");
    setCurrentStep(step);
  };

  const steps = [
    <PQForm1
      initialValues={formValues1}
      validationSchema={formSchema1}
      updateData={setFormValues1}
      formOptions={formOptions}
      moveStep={moveStep}
      key={0}
    />,
    <PQForm2
      initialValues={formValues2}
      validationSchema={formSchema2}
      updateData={setFormValues2}
      formOptions={formOptions}
      moveStep={moveStep}
      key={1}
    />,
    <PQForm3
      initialValues={formValues3}
      validationSchema={formSchema3}
      updateData={setFormValues3}
      formOptions={formOptions}
      moveStep={moveStep}
      key={2}
    />,
    <PQForm4
      initialValues={formValues4}
      validationSchema={formSchema4}
      updateData={setFormValues4}
      formOptions={formOptions}
      moveStep={moveStep}
      key={3}
    />,
    <PQPreview
      formManager1={formManager1}
      formManager2={formManager2}
      formManager3={formManager3}
      formManager4={formManager4}
      formManager4Array={formManager4Array}
      formOptions={formOptions}
      moveStep={moveStep}
      handleSubmit={handleSubmit}
      key={4}
    />,
  ];

  const stepTitles = [
    "Contact Details and Interest",
    "Biographical Details",
    "Military and ASVAB Information",
    "Additional Background Information",
    "Review Application",
  ];

  return (
    <Container id="pq" className="container-inner">
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <PQProgress stepTitles={stepTitles} currentStep={currentStep} moveStep={moveStep} />
      <div id="pq-form">{steps[currentStep]}</div>
    </Container>
  );
}
