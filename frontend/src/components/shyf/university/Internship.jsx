import React from 'react'
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Herosection from '../../herosection/Herosection';
import styles from './Intenship.module.css';
import Img1 from "../../../../public/Images/SHYF/university/2Capture 1.png";
import Img2 from "../../../../public/Images/SHYF/university/Internshipimage2.png";

const Internship = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/university/hero section.png"
        heading="The Internship"
        description="Home/The Internship"
      />

      <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '100px' }}>
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Empowerment</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-3xl font-bold font-playfair">The Internship</h2>
      </div>

      <div className={styles.MainPg1}>
        <div className={styles.paragraphs1}>
          <p>
            The Scottish Hindu Foundation's forthcoming internship program is an exciting opportunity for a select group of individuals to gain hands-on experience while exploring projects that align with their field of study. This unique program offers interns the chance to apply their academic knowledge in real-world settings, while also gaining insights from a Hindu cultural and philosophical perspective
          </p>
          <p>
            Participants will have the opportunity to work closely with experienced members of the community, learning from their expertise and contributing to impactful initiatives that serve the Foundation's mission of promoting unity, harmony, and cultural exchange in Scotland. Interns will engage with projects that may span various sectors-whether it be community development, education, arts, or social services-tailoring their work to their own academic interests and future career aspirations.
          </p>
          <p>
            In addition to the professional experience, interns will have the chance to reflect on and integrate key lessons from their studies, blending them with the wisdom of Hindu values such as seva (selfless service), dharma (duty), and ahimsa (non-violence). This blend of academic and cultural learning will help foster well-rounded leaders who can make meaningful contributions to both their careers and the broader community, creating a lasting impact
          </p>
        </div>
        <div className={styles.MainPgimg1}>
          <img src={Img1} alt="The Internship image 1" />
        </div>
      </div>
      <h1
        style={{
          paddingLeft: "100px",
          color: "#252A34",
          fontFamily: "Playfair Display",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "50px",
          textTransform: "capitalize",
          marginBottom: '40px',
        }}
      >
        Our Inspiration
      </h1>
      <div className={styles.MainPg2}>
        <div className={styles.MainPgimg2}>
          <img src={Img2} alt="The Internship image 1" />
        </div>
        <div className={styles.paragraphs1}>
          <p>
          The Scottish Hindu Foundation's internship program is inspired by the traditional Gurukul model, where learning is immersive and guided by mentorship. In a Gurukul, students would live and learn under the guidance of a teacher, gaining both theoretical knowledge and practical skills through close interaction. 
          </p>
          <p>
          Adapting it for present day this program fosters a holistic approach to learning, emphasizing personal growth, responsibility, and the application of values like seva (service) and dharma (duty), creating a nurturing environment for both intellectual and spiritual development.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Internship
