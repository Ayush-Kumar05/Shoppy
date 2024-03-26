import React from 'react';
import "./Home.css";
import Product from './Product';

export default function Home() {
  return (
    <div className='home'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzL-0lIK7ZhQRU4v1LX6_noz_n_bu-IbFYrg&usqp=CAU' className='home__image' alt="Not available" />
      <div className='home_row'>
        <Product id="1" title="Rich Dad Poor Dad" price="250" rating={5} image={"https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad.png"} />
        <Product id="2" title="The Lean Startup" price="300" rating={4} image={"https://m.media-amazon.com/images/I/41snmTn9mrL._AC_SY200_.jpg"} />
        <Product id="3" title="JavaScript: The Good Parts" price="200" rating={4} image={"https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg"} />
        <Product id="4" title="Clean Code: A Handbook of Agile Software Craftsmanship" price="350" rating={5} image={"https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg"} />
        <Product id="5" title="Rich Dad Poor Dad" price="250" rating={5} image={"https://m.media-amazon.com/images/I/41ng6Qxd3YL._AC_.jpg"} />
        <Product id="2" title="The Lean Startup" price="300" rating={4} image={"https://m.media-amazon.com/images/I/51Cq1exILLS._AC_SY200_.jpg"} />
        <Product id="3" title="JavaScript: The Good Parts" price="200" rating={4} image={"https://m.media-amazon.com/images/I/61kmAfCCJjL._AC_SY200_.jpg"} />
        <Product id="4" title="Clean Code: A Handbook of Agile Software Craftsmanship" price="350" rating={5} image={"https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg"} />
        <Product id="1" title="Rich Dad Poor Dad" price="250" rating={5} image={"https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad.png"} />
        <Product id="2" title="The Lean Startup" price="300" rating={4} image={"https://m.media-amazon.com/images/I/51Jyw5nuIDL._AC_SY200_.jpg"} />
        <Product id="3" title="JavaScript: The Good Parts" price="200" rating={4} image={"https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_SY200_.jpg"} />
        <Product id="1" title="Rich Dad Poor Dad" price="250" rating={5} image={"https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad.png"} />
        <Product id="2" title="The Lean Startup" price="300" rating={4} image={"https://m.media-amazon.com/images/I/6170LnM3OtL._AC_SY200_.jpg"} />
        <Product id="3" title="JavaScript: The Good Parts" price="200" rating={4} image={""} />
        <Product id="4" title="Clean Code: A Handbook of Agile Software Craftsmanship" price="350" rating={5} image={"https://m.media-amazon.com/images/I/61ELnRmUsCL._AC_SY200_.jpg"} />
      </div>
    </div>
  );
}
