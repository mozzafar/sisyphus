import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Loader from './Loader';



const Profile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        if (response.status === 200 && response.data != null) {
          console.log('Data:', response.data);
          setData(response.data);
          setLoading(false);
        } else {
          console.error('Request failed with status code:', response.status);
          setError('Failed to fetch data');
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  } 

  if (error || data.length === 0) {
    return <div>{error ? `Error: ${error}` : 'No data available'}</div>;
  }

  return (
    <div className="container col-xl-10 col-12 mt-5" id="outer-card-container">
      
      <h1 align="center">This Data  is Coming from API</h1>
      <div id="card-main-container" className="mb-3">
        <table>
          <thead>
            <tr>
              <th className="text-center">Title</th>
              <th className="text-center">Price</th>
              <th className="text-center">Description</th>
              <th className="text-center">Category</th>
              <th className="text-center">Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">{item.category}</td>
                <td className="text-center">
                  <div className="w-43 h-43">
                    <img src={item.image} alt="API Fetched Image" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  

/* <div class="bg-red-400 ">





<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

{data.map(item => (
              <tr key={item.id}>
                
  <div class="w-72  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={item.image} alt="API Fetched Image"  class="h-80 w-72 p-[10px] object-cover rounded-t-md" />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">{item.titel} </span>
       <p class="text-lg font-bold text-black truncate block capitalize">Price:   {item.price}</p>
        <p class="text-lg font-bold text-black truncate block capitalize">Description: {item.description}</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">Category:{item.category}</p>
          
         
        </div>
      </div>
    </a>
  </div>
        
              </tr>
            ))}


  </section>
 
</div> */

  );
}

export default Profile;
