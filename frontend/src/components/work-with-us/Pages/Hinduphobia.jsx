import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Hinduphobia.module.css'
import Header from '../../header/Header'
import Herosection from '../../herosection/Herosection'
import Img1 from '../../../../public/Images/work-with-us/Group 1171275508.png'
import Footer from '../../footer/Footer'
// import { API_URL } from "../../../config";

const Hinduphobia = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(`/contactus`);
  };

  const handlePdfDownload = () => {
    // PDF download disabled - button kept for UI consistency
    // window.open(`${API_URL}/download-pdf/2`, "_blank");
  };
  return (
    <div>
      <Header />
      <Herosection 
        imageUrl="/Images/work-with-us/Rectangle 2908.png"
        heading="Hinduphobia and Hate Crime Legislation"
        description="Home / Hinduphobia and Hate Crime Legislation"
      />

      <div className={styles.HinduPhobiaMainPage}>
        <div className={styles.HinduPhobiaMainPageContent}>
          <div className={styles.HinduPhobiaMainPageHeading}>
            <div className={styles.slogan}>
              <p>Advocacy</p>
              <hr className="md:w-16  w-12 b  ml-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }} />
            </div>
            <h1>Hinduphobia and Hate Crime Legislation</h1>
          </div>

          <div className={styles.ContentHeading}>
            <h1>Raising Awareness and Driving Change</h1>
            <p>Our journey started with engaging the Scottish Government in their consultation late consultation phase of the legislation. Inviting the Foundation to present the challenges our community faces. This kicked off a deep dive into research and analysis to truly understand and document these issues.</p>
            <p>
              A team assembled it gathering data and insights from both local and global sources. By connecting with Hindu organizations around the world, it created a collaborative space to share best practices and discuss key issues. This global conversation enriched the perspective and ensured our report was comprehensive and relevant.
            </p>
            <p>Legal consultations were a crucial part of our journey. We worked to understand the implications of our findings and developed a clear definition and classification of Hinduphobia. These consultations made sure our report was thorough and legally sound, setting a strong foundation for future advocacy and policy making.
            </p>
            <p>
              All the Foundations efforts culminated in a detailed report aimed at protecting future generations of Scottish Hindus. This report, a testament to our team's hard work, was submitted to the government and warmly received by then-First Minister Humza Yousaf.
            </p>
            <p>
              The Foundation was thrilled to have former Prime Minister Rishi Sunak write a foreword for our report, recognizing its significance and potential impact. Additionally, Hindu organizations from across Scotland added an afterword, sharing their views and reinforcing the importance of our findings.
            </p>
            <p>
              This collective effort has been key to advancing the cause of Scottish Hindus. We are incredibly grateful to everyone involved, including the Scottish Government, legal experts, international Hindu organizations, and community members. Together, we've made a big step towards a safer, more inclusive Scotland for all.
            </p>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton} onClick={handleExploreMore}>
              Explore More
            </button>
            <button className={styles.actionButton} onClick={handlePdfDownload}>
              Download PDF
            </button>
          </div>
        </div>

        <div className={styles.HinduPhobiaMainPageImage}>
          <img src={Img1} alt="Scottish Hindu Youth Foundation" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hinduphobia
