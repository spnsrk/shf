import React from 'react';
import Header from '../header/Header';
import Herosection from '../herosection/Herosection';
import Card from '../homepage/Card';
import Footer from '../footer/Footer'
import Img1 from '../../../public/Images/SHYF/image.png';
import styles from './ShfyPage.module.css';

const ShfyPage = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="\Images/SHYF/hero section.png"
        heading="Scottish Hindu Youth Foundation"
        description="Home / Scottish Hindu Youth Foundation"
      />
      <div className={styles.shfyMainPage}>
        <div className={styles.shfyMainPageImage}>
          <img src={Img1} alt="Scottish Hindu Youth Foundation" />
        </div>
        <div className={styles.shfyMainPageContent}>
          <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '0px', marginTop: '0px', marginBottom: '0px'}}>
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">New  Generation</p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
            </div>
            <h2 className="text-3xl font-bold font-playfair">Scottish hindu youth foundation</h2>
          </div>
          <p>
            The Scottish Hindu Foundation (SHF) has taken a visionary step towards nurturing the next generation with its Youth Foundation, drawing inspiration from iconic figures like Swami Vivekananda, who emphasized the harmonious development of both knowledge and practical skills.
          </p>

          <p>
            The Youth Foundation aspires to create a platform where young individuals can delve into the richness of Hinduism while simultaneously honing essential life skills. Informed by the spirit of Swami Vivekananda's teachings, the Youth Foundation encourages a comprehensive approach to education.
          </p>

          <p>
            It offers a safe space for exploration, where the youth can delve into the depths of Hindu philosophy, traditions, and values. Simultaneously, the foundation recognizes the importance of practical skills in navigating the complexities of the modern world. With an emphasis on skill cultivation, the Youth Foundation provides opportunities for the acquisition of leadership, communication, and critical thinking skills.
          </p>

          <p>
            Through workshops, mentorship programs, and hands-on experiences, the foundation equips the youth with tools that extend beyond religious understanding, preparing them for the challenges of the future while fostering a deep appreciation for their cultural and spiritual heritage.
          </p>

          <p>
            This holistic vision reflects the SHF's commitment to shaping a well-rounded, capable, and culturally connected next generation.
          </p>
        </div>
      </div>

      {/* <div className={styles.shfyMainPageAOE}>

      </div> */}
      <div className="mx-4 my-12 lg:mx-36">
        <div className="upperPart 2xl:">
          <div className="inline-flex gap-2">
            <p className="text-gray-700 text-md font-semibold font-montserrat">
            Investing Today
            </p>
            <hr className="w-[60px] border-t-1 border-gray-400 my-4 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold font-playfair">Find Out more</h2>
        </div>

        {/* CARDS */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-12 md:gap-y-0 md:gap-5 lg:gap-x-12">
          <Card
            src="/Images/SHYF/unsplash_Za9K8pNVepw (9).png"
            title="Future Leaders Forum"
            description="Find out more about The Foundations Future Leaders Forum, creating spaces and opportunities for the next generation of Hindu Leaders to grown."
            linkTo = "/shyf/university/FutureLeadersForum"
          />
          <Card
            src="/Images/SHYF/unsplash_Za9K8pNVepw (10).png"
            title="University"
            description="Find Out More about the Foundations Work with Hindu University Societies and Creating a Home Away from Home for Hindu Students."
            linkTo = "/shyf/university/SUHS"
          />
          <Card
            src="/Images/SHYF/unsplash_Za9K8pNVepw (11).png"
            title="Media"
            description="Find out More about the Scottish Hindu Foundations Communications, Stay Up to date or get in touch."
            linkTo = "/shyf/media/Media"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShfyPage;

