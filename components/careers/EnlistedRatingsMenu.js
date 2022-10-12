import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

export default function EnlistedRatingsMenu({ data }) {
  const router = useRouter();
  const handleSelect = (event) => {
    router.push(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="formEnlistedCareer">
        <Form.Select aria-label="Choose another Enlisted Career" onChange={handleSelect}>
          <option value="/careers/enlisted"> - Choose another Enlisted Career - </option>
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
