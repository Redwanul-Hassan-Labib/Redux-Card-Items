import React from 'react'
import BillingPage from './BillingPage'
import { useSelector } from 'react-redux'
import Card from './Card'

const CardItems = () => {
     const cards = useSelector(state=>state.card)
  return (
     <div className="py-12  text-black  mx-auto">
    <div className="">
      <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
        <div className="space-y-6 md:w-2/3">
          {cards.length ? (
            cards.map((p) => <Card item={p} key={p.id} />)
          ) : (
            <div>No Product In Your Cart !!!!!!!!!!</div>
          )}
        </div>
        <div className="md:w-1/3">
          <BillingPage />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardItems