import React, { Component } from 'react';
import "./NavbarStyle.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class  Test extends Component{
render() {
    return (
           <div>
                 <div className='row'>
<div className='col-lg-4'>

 <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</div>

<div className='col-lg-4'>

</div>
<div className='col-lg-4'>
right side
</div>

                 </div>


                 <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>


           </div>
    )

}
}
export default Test;