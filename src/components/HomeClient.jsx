'use client'
import {useEffect, useState} from 'react'
import Header from './Header'
import HeroCarousel from './HeroCarousel'

export default function HomeClient(){
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('/data/homepage.json')
      .then(r=>r.json())
      .then(setData)
      .catch(console.error)
  },[])

  if(!data) return <div>Loading...</div>

  return (
    <>
      <Header nav={data.nav} />
      <main>
        <HeroCarousel slides={data.hero.slides} />
        {/* map features, testimonials, etc. from data */}
      </main>
    </>
  )
}
