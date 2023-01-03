import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

export default function OfficerCareersMenu({ data }) {
  
  const router = useRouter();
  const handleSelect = (event) => {
    router.push(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="formOfficerCareer">
        <Form.Select aria-label="Choose another Officer Career" onChange={handleSelect}>
          <option value="/careers/officer"> - Choose another Officer Career - </option>
          {data.map((node, index) => (
            <option value={node.path.alias} key={index}>
              {node.title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
