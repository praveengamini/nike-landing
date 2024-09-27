import React from 'react'
import CustomerReviews from './sections/CustomerReviews'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import Nav from './sections/Nav'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
const App = () => {
  return (
   <main className='relative'>
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='bg-pale-blue padding'>
      <SpecialOffer />
    </section>
    <section className='padding'>
      <CustomerReviews />
    </section>
    <section className='padding'>
      <Subscribe />
    </section>
    <section className='bg-black padding-x py-10'>
      <Footer />
    </section>

   </main>
  )
}

export default App
