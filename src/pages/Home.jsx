import React from 'react'


const Home = () => {
  return (
    <div class="bg-red-400 ">

<div class="text-center p-10">
  <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
  
</div>


<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">


  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="Product" class="h-80 w-72 object-cover rounded-t-md" />
      <div class="px-4 py-3 w-72">
    
        <p class="text-lg font-bold text-black truncate block capitalize">React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components</p>
   
      </div>
    </a>
  </div>
 
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://quintagroup.com/cms/js/js-image/javascript-logo.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
       
        <p class="text-lg font-bold text-black truncate block capitalize">JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else</p>
  
      </div>
    </a>
  </div>
 
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://miro.medium.com/v2/resize:fit:538/1*va6jiyWpCyF2yCAPzjnlCA.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
        
        <p class="text-lg font-bold text-black truncate block capitalize">Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.</p>
    
      </div>
    </a>
  </div>
 
  <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
        
        <p class="text-lg font-bold text-black truncate block capitalize">HTML is the standard markup language for creating Web pages</p>
      
      </div>
    </a>
  </div>

 

</section>


{/* <div class="text-center py-20 px-10">
  <h2 class="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative" class="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
</div> */}
      
    </div>
    
  )
}

export default Home
