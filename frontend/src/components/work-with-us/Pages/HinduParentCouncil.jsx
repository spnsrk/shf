import React from 'react';
import styles from './DharmocracyWorks.module.css';
import Header from '../../header/Header';
import Herosection from '../../herosection/Herosection';
import Img1 from '../../../../public/Images/work-with-us/Group 1171275510.png';
import Img2 from '../../../../public/Images/work-with-us/HPC 1.png';
import ReusableCard from '../ReusableCard';
import Footer from '../../footer/Footer';

const HinduParentCouncil = () => {
  return (
    <div>
            <Header />
            <Herosection
                imageUrl="/Images/work-with-us/Rectangle 2908.png"
                heading="Hindu Parent Council"
                description="Home / Hindu Parent Council"
            />
            <div className={styles.DharmocracyMainPage}>
                <div className={styles.DharmocracyMainPageContent}>
                    <div className={styles.DharmocracyMainPageHeading}>
                        <img src={Img2} alt="Dharmocracy Works" className="w-full max-w-[381px] h-auto" />
                    </div>

                    <div className={styles.ContentHeading}>
                        <h1 style={{fontSize: '22px'}}>Nurturing Roots, Inspiring Growth</h1>
                        <p>The Scottish Hindu Foundation's Hindu Parent Council exemplifies a unique initiative in British society, fostering a supportive community for parents underpinned by a Dharmic ethos.</p>
                        <p>
                        At its core, the council prioritizes mental health, recognizing the challenges faced by parents in contemporary times. By offering a platform for open discussions and sharing experiences, the council aims to break down the stigma surrounding mental health and create a nurturing environment where individuals can seek guidance without judgment.
                        </p>
                        <p>Moreover, the council emphasizes access to existing support structures for new parents. In collaboration with healthcare providers and community resources, the Scottish Hindu Foundation ensures that parents receive comprehensive assistance, from prenatal care to postpartum support.</p>
                        <p>
                        This holistic approach acknowledges the multifaceted needs of new parents and strives to make essential services readily available. Crucially, the Hindu Parent Council aspires to build a village of parents united by a common Dharmic ethos.
                        </p>
                        <p>
                        This communal approach seeks to foster a sense of shared responsibility, where experienced parents mentor newcomers, creating a support network that extends beyond immediate family. By embracing the values of dharma, the council promotes a harmonious and interconnected community, reflecting the rich tapestry of Hindu cultural principles within the diverse landscape of British society.
                        </p>
                    </div>
                </div>

                <div className={styles.DharmocracyMainPageImage}>
                    <img src={Img1} alt="Scottish Hindu Youth Foundation" />
                </div>
            </div>
            <div className={styles.OurWorkSection}>
                <div className={styles.OurWorkHeading}>
                    <h1>Our Projects</h1>
                    <hr style={{ width: "100%", maxWidth: "922px", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)", border: "none", margin: "0 auto" }} />
                </div>

                <div
                    className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-8 md:gap-y-0 md:gap-5 lg:gap-x-12 px-4 mb-12 md:mb-24"
                >
                    <ReusableCard
                        src="/Images/work-with-us/unsplash_Za9K8pNVepw (14).png"
                        title="Yoga Clubs"
                        description="Find Out More... About School Yoga clubs, Learn yoga techniques, improve flexibility, reduce stress, and enhance focus in our supportive community. Join us and bring balance to your school life."
                        linkTo="/workwithus/yoga-clubs"
                    />
                    <ReusableCard
                        src="/Images/work-with-us/unsplash_Za9K8pNVepw (3).png"
                        title="Hinduism Education"
                        description="Find out More... The Councils work to foster to contribute to improving knowledge about Hinduism and a balanced, inclusive, and inspiring learning environment."
                        linkTo="/workwithus/hinduism-education"
                    />
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default HinduParentCouncil
