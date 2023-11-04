import { useState } from 'react'
import './assets/images/blue.webp'

import './App.css'
import ProductsOverview from './assets/Components/ProductsOverview'



function App() {
  const [url,setUrl]=useState("https://i5.walmartimages.com/asr/7d8e502d-c673-4a6a-9bcc-736d5da8494b_1.5d60ed230e5f75483f4d43998e664add.jpeg")
  const [name,setName]=useState("Red Gear Black")
  const [desc,setDesc]=useState("More comfort in Affordable Price")


  return (
    <>
      <div>
      <h1 className="text-center text-lg  text-black"  >Explore the Wide Range of Products</h1>
      <ProductsOverview presentImg={url} imgUrl={setUrl} itemName={name} setItemName={setName} itemDesc={desc} setItemDesc={setDesc}/>
      
      
     
      
      
       </div>
    </>
  )
}

export default App
