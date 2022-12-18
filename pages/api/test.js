import { drupal } from "/lib/drupal"

export default async function handler( request, response ) { 
  try {   
    if (request.method === "POST") {
      const body = JSON.parse(request.body)
      const url = drupal.buildUrl("/webform_rest/submit")
      // Submit to Drupal.
      const result = await drupal.fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify({
          webform_id: "test",
          ...body
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!result.ok) {
        throw new Error()
      }
      response.status(200).end()
    }
  } catch (error) {
    return response.status(400).json(error.message)
  }
}

/** 
  // If you decide to go direct
  const handleSubmit = async(event) => {
    
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
*/