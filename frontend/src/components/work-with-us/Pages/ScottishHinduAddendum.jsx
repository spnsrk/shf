import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './ScottishHinduAddendum.module.css'
import Header from '../../header/Header'
import Herosection from '../../herosection/Herosection'
import Img1 from '../../../../public/Images/work-with-us/Group 1171275507.png'
import Footer from '../../footer/Footer'
// import { API_URL } from "../../../config";

const ScottishHinduAddendum = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(`/workwithus/scottish-hindu-addendum/view-pdf`);
  };

  const handlePdfDownload = () => {
    // PDF download disabled - button kept for UI consistency
    // window.open(`${API_URL}/download-pdf/1`, "_blank");
  };

  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/work-with-us/Rectangle 2908.png"
        heading="Scottish Hindu Addendum"
        description="Home / Scottish Hindu Addendum"
      />

      <div className={styles.AddendumMainPage}>
        <div className={styles.AddendumMainPageContent}>
          <div className={styles.AddendumMainPageHeading}>
            <div className={styles.slogan}>
              <p>A Brighter Future, Stronger Together</p>
              <hr
                className="md:w-16  w-12 b  ml-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }}
              />
            </div>
            <h1>Scottish hindu addendum</h1>
          </div>

          <div className={styles.ContentHeading}>
            <h1>Our Framework</h1>
            <p>The Scottish Hindu Addendum, developed by the Scottish Hindu Foundation, emphasizes the Dharmic Framework. This framework, rooted in Hindu philosophy, guides the community’s interactions and aspirations. It fosters understanding and cultural exchange between the Hindu community and wider Scottish society, reflecting a harmonious blend of heritage, spirituality, and upliftment.</p>
            <p>
              This Addendum is written with a “Dharmic Framework”. A Dharmic Framework in a political context refers to the application of principles and values derived from Dharmic religions such as Hinduism, Buddhism, Jainism, and Sikhism to the realm of politics.
            </p>
            <p>Dharma emphasizes righteousness, moral duty, and the pursuit of truth, which can be transposed onto political and economic frameworks that prioritize ethical governance, justice, and the welfare of all beings. In a Dharmic Political Framework, leaders are expected to uphold Dharma, or moral duty above all else.</p>
            <p>
              This includes maintaining integrity, honesty, and transparency in their actions, and making decisions that benefit the community as a whole rather than serving personal or partisan interests.
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

        <div className={styles.AddendumMainPageImage}>
          <img src={Img1} alt="Scottish Hindu Youth Foundation" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScottishHinduAddendum;