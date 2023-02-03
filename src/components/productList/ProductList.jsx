import React from 'react'
import './ProductList.css'
import Product from "../product/Product";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Skin & Beauty. It's YouniQue</h1>
      <p className="pl-desc">
        Patsy is a creative cosmetologist and beautician that your skin has been waiting for.
        Beautiful Products, stunning skin  & a whole lot more awaits
        you.
      </p>
    </div>
    <div className="pl-list">
      {products.map((item) => (
        <Product key={item.id} img={item.img}/>
      ))}
    </div>
  </div>
  )
}

export default ProductList