import React from 'react'
import Header from "../../header/Header";
import Herosection from '../../herosection/Herosection';
import styles from './Publication.module.css'
import Footer from "../../footer/Footer";

const Pressrelease = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/media/herosectionimage.png"
        heading="Press Release"
        description="Home/ Press Release"
      />
      <div className={styles.MainPage} style={{paddingBottom: '60px'}}>
        <div className={styles.MainPageContent}>
          <div className="textpart my-8 md:my-16 px-4 sm:mx-8 xl:mx-44 mb-0">
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4">Shout Outs</p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Press Release</h2>
          </div>
          <p className="px-4 sm:mx-8 xl:mx-44">The Scottish Hindu Foundation regularly issues press releases to keep the community informed about its activities, events, and initiatives. These press releases highlight significant cultural events, such as festivals, religious ceremonies, and community gatherings, fostering a sense of unity and cultural pride among Scottish Hindus. By disseminating this information, the Scottish Hindu Foundation ensures that both the Hindu community and the wider public stay updated on its efforts to enrich cultural diversity and support social cohesion in Scotland.</p>

        </div>
        <img src="/Images/SHYF/media/pressrelease1.png" />
      </div>
      <Footer/>
    </div>
  )
}

export default Pressrelease

{/* <img src="/Images/SHYF/media/pressrelease1.png" alt="" /> */ }