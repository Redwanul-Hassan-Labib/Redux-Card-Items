import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct'

const Home = () => {

    const products = useSelector(state => state.products)
  return (
    <div className='py-5 text-black'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 '>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4'>
                    {
                        products.length ? products.map((productitems , index  )=>(
                            <ProductCard key={index} productitems={productitems}/>
                        )) : <p>Product Not Found</p>
                    }
                </div>
            </div>
            
            <div>
                <AddProduct/>
            </div>
        </div>
    </div>
  )
}

export default Home