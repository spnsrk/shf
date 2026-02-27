import React from 'react'
import Header from "../../header/Header";
import Herosection from '../../herosection/Herosection';
import styles from './Media.module.css'
import ReusableCard from '../../work-with-us/ReusableCard'
import Footer from "../../footer/Footer";

const Media = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/media/herosectionimage.png"
        heading="Media"
        description="Home/ Media"
      />

      <div className={styles.MainPage}>
        <div className={styles.MainPageContent}>
          <div className="textpart my-8 md:my-16 px-4 sm:mx-8 xl:mx-44 mb-0">
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4">New Era</p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Media</h2>
          </div>
          <p className="px-4 sm:mx-8 xl:mx-44">The Scottish Hindu Foundation serves as a strategic platform for disseminating information to the Hindu community and key stakeholders across Scotland. Acting as a trusted conduit, we provide updates on events, initiatives, and cultural milestones, fostering dialogue and collaboration. Our media efforts highlight the contributions of Scotland’s Hindu community, promote cultural understanding, and ensure effective communication with diverse audiences. Stay informed through our professional updates and outreach initiatives.</p>

        </div>
        <img src="/Images/SHYF/media/Group 1171275505 (2).png" />
      </div>

      <div className="textpart my-8 md:my-16 px-4 sm:mx-8 xl:mx-44 mb-0">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4">Sub-Domains</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Further Information</h2>
      </div>
      <div
        className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-8 md:gap-y-0 md:gap-5 lg:gap-x-12 px-4 mb-12 md:mb-24"
      >
        <ReusableCard
          src="/Images/SHYF/media/image (11).png"
          title="Press Release"
          description="Find out more... Read past press releases about events, activities, and initiatives, highlighting significant cultural milestones like festivals, ceremonies, and gatherings to foster unity and pride among Scottish Hindus."
          linkTo="/about/media/pressrelease"
        />
        <ReusableCard
          src="/Images/SHYF/media/unsplash_Za9K8pNVepw (12).png"
          title="Publications"
          description="Find out more... Browse publications from the Scottish Hindu Foundation, showcasing key initiatives, community activities, and cultural milestones. These works highlight our commitment to unity, heritage, and cultural understanding across Scotland."
          linkTo="/about/media/Publication"
        />
        <ReusableCard
          src="/Images/SHYF/media/unsplash_Za9K8pNVepw (13).png"
          title="Visit local mandir"
          description="Find out more... Visit your local Mandir to explore Hindu traditions, engage in cultural and spiritual activities, and connect with the community."
          linkTo="/about/media/Visitlocalmandir"
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Media
