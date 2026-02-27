import React from "react";
import Header from "../../header/Header";
import Herosection from "../../herosection/Herosection";
import Card from "../../homepage/Card";
import Footer from "../../footer/Footer";
import Img1 from "../../../../public/Images/SHYF/university/FutureLeadersForum.png";
import styles from "./FutureLeadersForum.module.css";

const FutureLeadersForum = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/university/hero section.png"
        heading="The Future Leaders Forum"
        description="Home / The Future Leaders Forum"
      />

      <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '100px' }}>
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">New  Generation</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-3xl font-bold font-playfair">Future Leaders Forum</h2>
      </div>

      <div className={styles.flfMainPage}>
        <div className={styles.flfMainPageContent}>
          <p>
            The Scottish Hindu Foundation's Future Leaders Forum is dedicated to
            nurturing young leaders by enhancing their leadership skills and
            cultural understanding. This forum offers a dynamic platform for
            youth to participate in engaging discussions, interactive workshops,
            and valuable networking opportunities.
          </p>
          <p>
            Attendees learn about effective leadership, community service, and
            the rich cultural heritage of Hinduism. This initiative aims to
            prepare the next generation to make significant contributions to
            society, building a sense of responsibility, diversity, and
            inclusion. By empowering young minds, the forum helps build a
            stronger, more cohesive community, ready to face future challenges
            with confidence and integrity.
          </p>
        </div>

        <div className={styles.flfMainPageImage}>
          <img src={Img1} alt="The Future Leaders Forum" />
        </div>
      </div>

      <div className={styles.exploreSection}>
        <div className={styles.heading}>
          <h1>Explore Beyond Limits</h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/Networking.png" alt="Image 1" />
            </div>
            <div className={styles.textWrapper}>
              <p>Networking</p>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/ExpGuests.png" alt="Image 2" />
            </div>
            <div className={styles.textWrapper}>
              <p>Expert Guests</p>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/QandA.png" alt="Image 3" />
            </div>
            <div className={styles.textWrapper}>
              <p>Questions & Answers</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.flfMainPage}>
        
        <div className={styles.flfMainPageImage}>
          <img src={Img1} alt="The Future Leaders Forum" />
        </div>

        <div className={styles.flfMainPageContent}>
          <p>
            The Scottish Hindu Foundation’s Future Leaders Forum is dedicated to
            nurturing young leaders by enhancing their leadership skills and
            cultural understanding. This forum offers a dynamic platform for
            youth to participate in engaging discussions, interactive workshops,
            and valuable networking opportunities.
          </p>
          <p>
            Attendees learn about effective leadership, community service, and
            the rich cultural heritage of Hinduism. This initiative aims to
            prepare the next generation to make significant contributions to
            society, building a sense of responsibility, diversity, and
            inclusion. By empowering young minds, the forum helps build a
            stronger, more cohesive community, ready to face future challenges
            with confidence and integrity.
          </p>
        </div>
      </div>

<div className={styles.exploreSection}>
        <div className={styles.heading}>
          <h1>Explore Beyond Limits</h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/Networking.png" alt="Image 1" />
            </div>
            <div className={styles.textWrapper}>
              <p>Networking</p>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/ExpGuests.png" alt="Image 2" />
            </div>
            <div className={styles.textWrapper}>
              <p>Expert Guests</p>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <img src="/Images/SHYF/university/QandA.png" alt="Image 3" />
            </div>
            <div className={styles.textWrapper}>
              <p>Questions & Answers</p>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default FutureLeadersForum;
