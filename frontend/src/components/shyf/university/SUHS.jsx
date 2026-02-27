import React from 'react'
import Header from '../../header/Header'
import Herosection from '../../herosection/Herosection'
import Footer from '../../footer/Footer'
import styles from './SUHS.module.css'
// import Card from '../../homepage/Card';
import ReusableCard from '../../work-with-us/ReusableCard'


const SUHS = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/university/hero section.png"
        heading="Scottish Universities Hindu Socities"
        description="Home/University"
      />

      <div className={styles.MainPage}>
        <div className={styles.MainPageContent}>
          <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '100px' }}>
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Home away From Home</p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
            </div>
            <h2 className="text-3xl font-bold font-playfair">Scottish Universities: Hindu Societies</h2>
          </div>

          <div className={styles.MainPageContentText}>
            <p>
              The Scottish Hindu Foundation is dedicated to creating a welcoming and supportive environment for Hindu students coming to study at Scottish universities, offering them a "home away from home." Moving to a new country for education can be both exciting and challenging, and the Foundation plays a key role in helping students transition smoothly into their academic and personal lives in Scotland. Through community outreach, the Foundation provides guidance, cultural connection, and a sense of belonging, ensuring that students feel supported in their new environment.
            </p>
            <p>
              In collaboration with university Hindu societies, the Foundation actively engages with students to address their needs, whether it's through organizing cultural events, offering mentorship, or providing resources for spiritual and mental well-being. These collaborations foster a strong sense of community, where students can maintain their cultural identity while also integrating into Scottish life. The Foundation offers opportunities for students to participate in festivals, pujas, and discussions on Hindu philosophy, ensuring they stay connected to their roots.
            </p>
          </div>
        </div>

        <div className={styles.imagecontainer}>
          <img src="/Images/SHYF/university/grouppic.png" alt="" classname="img1" />
        </div>
      </div>

      <div className={styles.OurWorkSection}>
        <div className={styles.OurWorkHeading}>
          <h1>Future Proofing</h1>
          <hr className="b" style={{ width: "922px", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)", border: "none", margin: "0 auto" }} />
        </div>

        <div
          className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-12 md:gap-y-0 md:gap-5 lg:gap-x-12"
          style={{ gap: "30px", marginTop: "70px", marginBottom: "100px" }}
        >
          <ReusableCard
            src="/Images/SHYF/university/image (10).png"
            title="The Future Leaders Forum"
            description="Find out more about The Foundations Future Leaders Forum, creating spaces and opportunities for the next generation of Hindu Leaders to grown."
          />
          <ReusableCard
            src="/Images/SHYF/university/unsplash_Za9K8pNVepw (4).png"
            title="National and International Conferences"
            description="Representing Scottish Hindus is an honour and privileged Find out More about the Foundations work."
            linkTo="/shyf/university/NAICpage"
          />
          <ReusableCard
            src="/Images/SHYF/university/unsplash_Za9K8pNVepw (5).png"
            title="The Internship"
            description="Find out more about the Foundations Forthcoming Internship Programme based on the Ancient Hindu Gurukul model."
            linkTo="/shyf/university/internship"
          />
        </div>
      </div>
      {/* <div className={styles.maincontent1}>
        <div className={styles.mainpg1}>
          

          <div className={styles.writting1}>
              <p>The Scottish Hindu Foundation is dedicated to creating a welcoming and supportive environment for Hindu students coming to study at Scottish universities, offering them a "home away from home." Moving to a new country for education can be both exciting and challenging, and the Foundation plays a key role in helping students transition smoothly into their academic and personal lives in Scotland. Through community outreach, the Foundation provides guidance, cultural connection, and a sense of belonging, ensuring that students feel supported in their new environment. 
              </p>
              <p>
              In collaboration with university Hindu societies, the Foundation actively engages with students to address their needs, whether it's through organizing cultural events, offering mentorship, or providing resources for spiritual and mental well-being. These collaborations foster a strong sense of community, where students can maintain their cultural identity while also integrating into Scottish life. The Foundation offers opportunities for students to participate in festivals, pujas, and discussions on Hindu philosophy, ensuring they stay connected to their roots.
              </p>

          </div>
         <div className={styles.imagecontainer}>
            <img src="/Images/SHYF/university/grouppic.png" alt=""  classname="img1"/>
         </div>
        </div>

      </div>
      <div className={styles.allcards}>
        <div className={styles.card1}>
          <Card
              src="/Images/SHYF/university/boximg1.png"
              title="Scottish Universities: Hindu Societies"
              description="Find out more about Hindu Societies on Scottish university Campuses, a Home Away From Home. "
          />
        </div>
        <div className={styles.card2}>
          <Card
              src="/Images/SHYF/university/boximg2.png"
              title="National and International Conferences"
              description="Representing Scottish Hindus is an honour and privileged Find out More about the Foundations work. "
          />
        </div>
        <div className={styles.card3}>
          <Card
              src="/Images/SHYF/university/boximg3.png"
              title="The Internship"
              description="Find out more about the Foundations Forthcoming Internship Programme based on the Ancient Hindu Gurukul model. "
          />
        </div>
      </div> */}

      <Footer />
    </div>
  )
}

export default SUHS

