import React from 'react'
import resume from '../assets/bed.pdf'
import './Shop.css';



const Shop = () => {
  return (
   <><div>Shop315
      
       <div>Home</div>
       <a href={resume} download='resume' target='_blank'>
      <button type="button" className="btn btn-dangerbg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Download Resume</button>
    </a>

<div>


<h3>Contact Form</h3>

<div class="container w-30" align="middle">

<label for="fname">First name:</label>
  <input  type="text" id="fname" name="fname" value="John" /><br></br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe"></input><br></br>



    <input type="submit" value="Submit"/>

    
  
</div>
<div>

  
</div>


</div>
    
         
  {/* <a>https://drive.google.com/file/d/14RbQmuyscU0y6zgiY1MYe9Ec78ZXL6Hd/view?usp=sharing</a> */}      

   

    </div>


    <div>

      
    </div>

    <div class="sm:col-span-4 " align="middle">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-insetg0 sm:max-w-md">
             
         <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-blue-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Shop