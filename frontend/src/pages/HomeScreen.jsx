import React from 'react'
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';
import CallToActionSection from './../components/homeComponents/CallToActionSection';
const HomeScreen = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
    </div>
  )
}

export default HomeScreen