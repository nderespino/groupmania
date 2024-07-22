import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PostComp from './PostComp';

function BasicExample() {
  return (
    <Card className='mb-3' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;