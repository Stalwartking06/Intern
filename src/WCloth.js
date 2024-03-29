import React, { useState } from 'react';
import Style from './ProductCart.module.css'

export default function WCloth() {
    const [data,setData]=useState([])
    fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((result)=>
    {
        result.json().then((data1)=>
        {
            setData(data1)
        })
    })

    const [selectedImage, setSelectedImage] = useState("images/product1.png");

    function handleClick(imageSrc) {
        setSelectedImage(imageSrc);
    }
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

  return (
     
    <div className={Style.A}>
          {
            data.map((item)=>
          
    <div className={Style.hero}>
    <div className={Style.row}>
        <div className={Style.col}>
            <div className={Style.slider}>
                <div className={Style.product}>
                <img src={item.image}/>
                <img src={item.image}/>
                <img src={item.image}/>
                <img src={item.image}/>
                </div>
                <div className={Style.preview}>
                {/* <img key={selectedImage} src={selectedImage} id="imagebox" alt="" /> */}
                <img src={item.image}/>
                </div>
            </div>
        </div>

            <div className={Style.col}>

                <div className={Style.content}>
                    <p className={Style.brand}>Brand: Varanga</p>
                    <h2>{item.title}</h2>
                    <div className={Style.rating}>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    <p className={item.title}>Category:{item.category} RS/-</p>
                    <p className={Style.price}>Price:{item.price*65} RS/-</p>
                    <p>{item.description}</p>
                    <p>Rating : {item.rating.rate}</p>
                    <p>Size: <select name="size">
                            <option value="select size">select size</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select></p>
                    <p>Quantity: <input type="text" value="1"/></p>
                    <button type="button">
                        <i className="fa fa-shopping-cart"></i>
                        Add to cart</button>
                </div>
            </div>
        </div>
    </div>
   )
}

    </div>
  )
}
