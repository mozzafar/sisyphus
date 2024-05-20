import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import myimg1 from '../assets/myimg.png';
import myimg2 from '../assets/myimg.png';
import myimg3 from '../assets/myimg.png';
import logo from '../assets/myimg.png';
import image from '../assets/image.jpg';

const images = [
  { url: myimg1 },
  { url: myimg2 },
  { url: myimg3 },
  { url: logo },
  { url: image },
  {url:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'},
{url:'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}
  // Add more images as needed
];

const Cart = () => {
  return (
    <div>
      <div>Cart</div>
      <SimpleImageSlider
        width={800}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Cart;
