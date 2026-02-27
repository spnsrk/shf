import React from "react";
import Header from "../../header/Header";
import Herosection from "../../herosection/Herosection";
import Footer from "../../footer/Footer";
import Img1 from "../../../../public/Images/SHYF/university/Group 1171275512.png";
import styles from "./NAICpage.module.css";

const NAICpage = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/university/hero section.png"
        heading="National And International Conferences"
        description="Home / National And International Conferences"
      />
      <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '100px' }}>
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Roots and Networks</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-3xl font-bold font-playfair">Volunteering and Networking</h2>
      </div>

      <div className={styles.NAICpageMainPage}>
        <div className={styles.NAICpageMainPageImage1}>
          <img src={Img1} alt="National And International Conferences" />
        </div>

        <div className={styles.NAICpageMainPageContent}>
          <p>
          Volunteering within the Scottish Hindu Foundation, infused with Shraddha (Dharma and sincerity), holds a unique cultural and spiritual significance. It becomes a powerful way to connect with both the local community and the global ethos of Sewa (selfless service) central to Hindu philosophy. By approaching service with devotion, volunteers not only help address local needs but also express the core values of compassion, unity, and respect that resonate with Hindu teachings.
          </p>
          <p>
          Networking through these efforts helps build bridges between Scotland’s diverse communities, fostering mutual understanding and cultural exchange. It opens doors for cross-cultural dialogue, creating a platform where people can share traditions, knowledge, and skills. This collaboration strengthens community bonds and promotes a more inclusive society.
          </p>

          <p>
            For the Scottish Hindu Foundation, volunteering offers a way to
            serve while deepening cultural ties, expanding connections, and
            leaving a lasting positive impact on both the Scottish and Hindu
          </p>
          
          <h2>Make a point, join at our conferences</h2>
          <p>
          Attending international conferences such as the World Hindu Congress in Bangkok and the Action for Harmony conference in London offers invaluable opportunities for the Scottish Hindu Foundation. These global events provide a platform to engage with thought leaders, share best practices, and contribute to meaningful discussions on issues affecting the Hindu diaspora and broader society. By participating, the Foundation not only represents Scotland’s Hindu community but also strengthens its connections within the global Hindu network.
          </p>
          <p>
          Looking ahead, the Scottish Hindu Foundation aspires to not just attend but organize such prestigious events, showcasing Scotland as a welcoming hub for innovation, spirituality, and leadership. This ambition aligns with the Foundation's goal to attract the brightest minds and souls to Scotland, fostering a vibrant exchange of ideas and initiatives. These conferences serve as bridges for collaboration, allowing the Foundation to expand its influence and inspire collective action for positive change both locally and globally.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NAICpage;
