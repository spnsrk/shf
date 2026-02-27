import React from 'react'
import Header from "../../header/Header";
import Herosection from '../../herosection/Herosection';
import styles from './Publication.module.css'
import Footer from "../../footer/Footer";
import { API_URL } from "../../../config";

const Publication = () => {
  const apiBaseUrl = API_URL;

  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/media/herosectionimage.png"
        heading="Publications"
        description="Home/ Publications"
      />

      <div className={styles.MainPage}>
        <div className={styles.MainPageContent}>
          <div className={`textpart my-8 md:my-16 sm:mx-8 xl:mx-44 ${styles.sectionHeader}`}>
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat" style={{ marginBottom: '15px' }}>Dharmic Solutions</p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
            </div>
            <h2 className="text-3xl font-bold font-playfair" style={{ marginBottom: '15px' }}>Publications</h2>
          </div>
          <p className={styles.introParagraph}>The Scottish Hindu Foundation’s white paper publications represent a thoughtful and scholarly approach to addressing contemporary issues from a Dharmic framework. Rooted in the principles of dharma—the universal moral order—the Foundation’s publications aim to offer insights that harmonize modern societal challenges with ancient Hindu wisdom. These white papers cover a range of topics, from community cohesion and interfaith dialogue to environmental sustainability, education, and social justice.</p>
          <p className={styles.introParagraph}>Writing from a Dharmic perspective means emphasizing values such as ahimsa (non-violence), seva (selfless service), and satyam (truth). The Foundation’s papers integrate these principles with practical solutions, ensuring that the proposed ideas not only address the issues at hand but also uphold ethical and spiritual integrity. By applying Dharmic values, these publications encourage readers to see challenges holistically, considering the well-being of the individual, society, and the environment.</p>
          <p className={styles.introParagraph}>These white papers serve as a bridge between Hindu philosophy and contemporary policymaking, offering a unique perspective that is often underrepresented in mainstream discussions. They are also tools for advocacy, providing guidance to decision-makers, community leaders, and educators on how to incorporate Dharmic insights into their work, thus fostering a more harmonious and inclusive society in Scotland and beyond.</p>

        </div>
        <img className={styles.sideImage} src="/Images/SHYF/media/Group 1171275520.png" alt="Publications" />
      </div>

      <h1 className={styles.sectionTitle}>Forthcoming Publications</h1>
      <div className={styles.MainPg2}>
        <div className={styles.MainPgimg2}>
          <img src="/Images/SHYF/media/image 30.png" alt="The Internship image 1" />
        </div>
        <div className={styles.paragraphs1}>
          <h1 style={{
            color: "#252A34",
            fontFamily: "Playfair Display",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "50px",
            textTransform: "capitalize",
            marginBottom: '20px',
          }}>Scotland: India-Middle East Corridor</h1>
          <p>
            Discover the untapped potential of the Scotland-India-Middle East trade corridor for Tourism and Trade in North India . This white paper explores previously untapped markets, growth opportunities, and strategic solutions to overcome challenges in expanding the reach of premium brands in these dynamic regions. Dive into the future of global trade and the pivotal role of Scottish and Indian Premium Brands in connecting these vibrant markets.
          </p>
        </div>
      </div>

      <h1 className={styles.sectionTitle}>Yoga Day Publications</h1>

      <div className={styles.MainPg2}>
        <div className={styles.MainPgimg2}>
          <img
            src={`${apiBaseUrl}/publication-assets/yoga25`}
            alt="Scottish International Yoga Day 2025"
          />
        </div>
        <div className={styles.paragraphs1}>
          <h1 style={{
            color: "#252A34",
            fontFamily: "Playfair Display",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "50px",
            textTransform: "capitalize",
            marginBottom: '8px',
          }}>
            Scottish International Yoga Day 2025
          </h1>
          <p>
            Our nationwide celebration of Scotland’s International Yoga Day 2025 brought together communities across Scotland for yoga sessions, wellness workshops, and mindfulness practices. From sunrise sessions in Edinburgh to community gatherings in Glasgow, practitioners of all levels united to honour this ancient tradition. The day showcased yoga’s power to promote physical health, mental clarity, and social connection. Featuring diverse activities from dynamic flows to restorative meditation, our 2025 celebration reflected Scottish values of inclusivity and community spirit.
          </p>
          <a
            className={styles.publicationCta}
            href="https://online.fliphtml5.com/msyzm/ugee/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Publication
          </a>
        </div>
      </div>

      <div className={styles.MainPg2}>
        <div className={styles.MainPgimg2}>
          <img
            src={`${apiBaseUrl}/publication-assets/yoga24`}
            alt="Scottish International Yoga Day 2024"
          />
        </div>
        <div className={styles.paragraphs1}>
          <h1 style={{
            color: "#252A34",
            fontFamily: "Playfair Display",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "50px",
            textTransform: "capitalize",
            marginBottom: '8px',
          }}>
            Scottish International Yoga Day 2024
          </h1>
          <p>
            Relive the magic of Yoga Day 2024, our landmark celebration that united yoga enthusiasts across Scotland. This special day featured transformative yoga sessions, wellness workshops, and community gatherings for participants of all ages and abilities. From dynamic Vinyasa flows to gentle chair yoga, the event showcased yoga’s universal appeal and accessibility. Local instructors, health professionals, and community leaders collaborated to create meaningful experiences that highlighted both traditional yogic practices and modern applications. Our 2024 celebration laid the foundation for Scotland’s growing yoga community, demonstrating how this ancient practice fosters physical vitality, mental peace, and social connection throughout our diverse Scottish communities.
          </p>
          <a
            className={styles.publicationCta}
            href="https://online.fliphtml5.com/msyzm/jspc/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Publication
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publication
