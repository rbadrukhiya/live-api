import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setdata] = useState([])
  const [spin , setspin] = useState(false)
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=500')
      .then(function (response) {
        // handle success
        console.log(response);
        setspin(true)
        setdata(response.data.results)
        console.log(data)
      })
      .catch(function (error) {
        // handle erro
        console.log(error);
      })
  }, [])
 
  if(spin)
  {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-between row-col-sm-3 align-items-center">
            {
              data.map((i) => {
                return (
                  <>
                    <div className="col-4 ">
                      <div className="box">
                        <div className="img text-center">
                          <img src={i.picture.large} alt="" />
                        </div>
                        <div className="name mt-3">
                          <p><i class="fa-solid fa-user"> </i> Name : {i.name.title} : {i.name.last}</p>
                        </div>
                        <div className="email">
                          <p><i class="fa-solid fa-envelope"></i> Email :  {i.email}</p>
                        </div>
                        <div className="contact">
                          <p><i class="fa-solid fa-phone"></i> Landline  {i.phone}</p>
                        </div>
                        <div className="phone">
                          <p><i class="fa-solid fa-mobile"></i> Phone : {i.cell}</p>
                        </div>
                        <div className="city">
                          <p>  <i class="fa-solid fa-city"></i> City : {i.location.city}</p>
                        </div>
                        <div className="country">
                          <p> <i class="fa-solid fa-earth-americas"></i> Country : {i.location.country}</p>
                        </div>
                        <div className="postcode">
                          <p><i class="fa-solid fa-address-card"></i> Post Code : {i.location.postcode}</p>
                        </div>
                        <div className="registered">
                          <p> <i class="fa-solid fa-registered"></i> Register : {i.registered.date}</p>
                        </div>
  
                      </div>
  
  
                    </div>
                  </>
                )
              })
            }
  
  
  
          </div>
        </div>
  
      </div>
    );
  }
  else
  {
    return(

      <>
     
      <div class="lds-spinner d-flex justify-content-center align-items-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </>
    )
  }
}

export default App;
