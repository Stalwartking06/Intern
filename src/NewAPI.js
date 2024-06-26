import React, { useEffect, useState } from 'react';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { Ripple } from "mdb-ui-kit";
import { useNavigate } from "react-router-dom";

initMDB({ Dropdown, Collapse });
initMDB({ Ripple });


export default function NewAPI() {
    const [apidata, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, []);
    function getId(pid){
      const data={pid:pid,add:"indore"}
      // console.log(pid)
      navigate("/item",{state:data});

    }

    async function getData() {
        try {
            const result = await fetch("https://fakestoreapi.com/products");
            const data = await result.json();
            setData(data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    }

    return (
 <div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Mapping over the fetched data and rendering cards */}
            {apidata.map((item) => (
    <div key={item.id} className="col">
                    <div className="card">
                       <center> <img src={item.image} className="card-img-top" alt={item.title} style={{height:"200px",width:"200px"}}/></center>
                        <div className="card-body">
                        <h5 className="card-title" style={{color:"blue"}}>{item.title}</h5><br/>
                        <p className="card-text" style={{color:"red"}}><b>Category:</b> {item.category}</p>
                        <p className="card-text" style={{color:"red"}}><b>Rating:</b>{item.rating.rate}</p>

                            <h6 className="card-title" style={{color:"green"}}>Price: {item.price*65}Rs</h6>
                            <p className="card-text">{item.description}</p>
                        <center><button type="button" className="btn btn-secondary" onClick={()=>getId(item.id)} data-mdb-ripple-init>Viev Details..!!  {item.id}</button></center>

                        </div>
                    </div>
    </div>
            ))}
</div>

<footer className="text-center bg-body-tertiary">
  <div className="container pt-4">
    <section className="mb-4">
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i      ></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i      ></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i      ></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i ></a>
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i></a>
    </section>
  </div>

  <div className="text-center p-3" >
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
        
        </div>
        
    );
}
