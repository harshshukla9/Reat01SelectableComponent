import React from 'react'

const ProductsOverview = ({presentImg,imgUrl,itemName,setItemName,itemDesc,setItemDesc}) => {
  return (
    <>
    <div class="flex w-full h-full mt-6 overflow-hidden sm:flex flex-col">
 
  <div class="flex w-1/2 h-1/2 fixed lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
    <div class=" flex items-center justify-center">
      <div class="transition duration-150 ease-in hover:opacity-90">
        <img
          src={presentImg}
          alt="Nike Air Max 95 By You--0"   git iniy
          class="aspect-[16/9] w-full rounded-md "
        />
      </div>
      
     
    </div>
    <div class="col-span-4  lg:pt-0">
      <div class="mb-7 border-b border-gray-300 pb-7">
        <h2 class="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
        {itemName}
        </h2>
        <p class="text-body text-sm leading-6  lg:text-base lg:leading-8">
         {itemDesc}
        </p>
        <div class="mt-5 flex items-center ">
          <div class="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            7000 INR
          </div>
          <span class="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            10000 INR
          </span>
        </div>
      </div>
      
    </div>
  </div>



                                {/* selectable Components */}
  <div class="w-1/2 h-1/2 relative left-[600px] flex flex-wrap items-start   ">
    <div class=" w-1/2  rounded-md border">
      <button onClick={()=>{imgUrl("https://i5.walmartimages.com/asr/92009521-d436-4d46-a238-640e8c364f2e.9772a82f9be390b152daa159b63baa24.jpeg")
      ,setItemName(" Blood Red"),setItemDesc("Enjoy Comfort with long term Gaming Hours")}}>
      <img
        src="https://i5.walmartimages.com/asr/92009521-d436-4d46-a238-640e8c364f2e.9772a82f9be390b152daa159b63baa24.jpeg"
        alt="Laptop"
        class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      </button>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          Blood red
        </h1>
        <p class="mt-1 text-sm text-gray-600">
        Enjoy Comfort with long Gaming Hours
        </p>
       
        <button
          type="button"
          class="w-full mt-1 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <div class=" w-1/2  rounded-md border">
      <button onClick={()=>{imgUrl("https://images-na.ssl-images-amazon.com/images/I/71IOfVIARnL.jpg")
      ,setItemName("Black Phantom"),setItemDesc("Enjoy Comfort with long term Gaming Hours")}}>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71IOfVIARnL.jpg"
        alt="Laptop"
        class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      </button>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          Phantom Black
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          More Comfort In Affordable price
        </p>
       
        <button
          type="button"
          class="w-full mt-1 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <div class=" w-1/2  rounded-md border">
      <button onClick={()=>{imgUrl("https://i5.walmartimages.com/asr/d4f6c6ff-30a1-4f36-a5cf-17f1b901d48c.6df7b392602336e4e64402ea2b2ba341.jpeg")
      ,setItemName("Red Gear"),setItemDesc("Read gear baby pink")}}>
      <img
        src="https://i5.walmartimages.com/asr/d4f6c6ff-30a1-4f36-a5cf-17f1b901d48c.6df7b392602336e4e64402ea2b2ba341.jpeg"
        alt="Laptop"
        class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      </button>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          Red Gear
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          Read gear baby pink
        </p>
        
        <button
          type="button"
          class="w-full mt-1 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <div class=" w-1/2  rounded-md border">
      <button onClick={()=>{imgUrl("https://i5.walmartimages.com/asr/7d8e502d-c673-4a6a-9bcc-736d5da8494b_1.5d60ed230e5f75483f4d43998e664add.jpeg")
      ,setItemName(" Red Gear Black pearl Chair"),setItemDesc(" Red gear Black pearl Chair")}}>
      <img
        src="https://i5.walmartimages.com/asr/7d8e502d-c673-4a6a-9bcc-736d5da8494b_1.5d60ed230e5f75483f4d43998e664add.jpeg"
        alt="Laptop"
        class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      </button>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
        Red Gear Black pearl
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          Red Gear Black pearl Chair 
        </p>
       
        <button
          type="button"
          class="w-full mt-1 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
    
    

    
   
  </div>


  </div>
  </>

  )
}

export default ProductsOverview
