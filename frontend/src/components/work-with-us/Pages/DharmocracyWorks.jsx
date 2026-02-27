import React from 'react';
import styles from './DharmocracyWorks.module.css';
import Header from '../../header/Header';
import Herosection from '../../herosection/Herosection';
import Img1 from '../../../../public/Images/work-with-us/Group 1171275509.png';
import Img2 from '../../../../public/Images/work-with-us/1 3723479.png';
import ReusableCard from '../ReusableCard';
import Footer from '../../footer/Footer';

const DharmocracyWorks = () => {

    return (
        <div>
            <Header />
            <Herosection
                imageUrl="/Images/work-with-us/Rectangle 2908.png"
                heading="Dharmocracy Works"
                description="Home / Dharmocracy Works"
            />
            <div className={styles.DharmocracyMainPage}>
                <div className={styles.DharmocracyMainPageContent}>
                    <div className={styles.DharmocracyMainPageHeading}>
                        <img src={Img2} alt="Dharmocracy Works" />
                    </div>

                    <div className={styles.ContentHeading}>
                        <h1>How We Work</h1>
                        <p>The Scottish Hindu Foundation (SHF) stands as a beacon for civic engagement within the Hindu community through its innovative Dharmocracy initiative. Dharmocracy Works, a portmanteau of "Dharma" and "Democracy," underscores the foundation's commitment to educating the Hindu community on the workings of democracy, encouraging active participation, and emphasizing the importance of voting.</p>
                        <p>
                            Dharmocracy Works serves as an educational platform, demystifying the democratic process for the Hindu community in Scotland. Through workshops, seminars, and outreach programs, the foundation elucidates the principles of democracy, elucidating how individuals can play an integral role in shaping the political landscape. This initiative recognizes that a well-informed citizenry is fundamental to a thriving democracy.
                        </p>
                        <p>The SHF, through Dharmocracy Works, empowers the Hindu community to actively engage in civic life by highlighting the significance of voting. By articulating how the democratic process aligns with Dharmic values of justice, equality, and social responsibility.</p>
                        <p>
                            The foundation fosters a sense of duty among its members. In doing so, it cultivates a community that not only understands the democratic system but actively contributes to it, ensuring the voices of the Scottish Hindu community are heard in the broader democratic discourse.
                        </p>
                    </div>

                    <div className={styles.GetEnvolved}>
                        <h3>How To Get Involved:</h3>
                        <p>To get involved simply complete a short form on the Scottish Hindu Foundation Website.</p>
                        <div className="email justify-center items-center hidden md:block">
                            <a
                                href="mailto:info@scottishhindufoundation.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-white transition duration-300 inline-flex gap-2 justify-center items-center"
                                style={{ color: "#454545" }}
                            >
                                <img src="/Images/email.png" alt="Email Icon" style={{ width: "20px", marginTop: "5px" }} />
                                <p className="text-base underline">
                                    info@scottishhindufoundation.com
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.DharmocracyMainPageImage}>
                    <img src={Img1} alt="Scottish Hindu Youth Foundation" />
                </div>
            </div>
            <div className={styles.OurWorkSection}>
                <div className={styles.OurWorkHeading}>
                    <h1>Our Works</h1>
                    <hr style={{ width: "100%", maxWidth: "922px", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.25)", border: "none", margin: "0 auto" }} />
                </div>

                <div
                    className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-y-8 md:gap-y-0 md:gap-5 lg:gap-x-12 px-4 mb-12 md:mb-24"
                > 
                    <ReusableCard
                        src="/Images/work-with-us/unsplash_Za9K8pNVepw.png"
                        title="Scottish Hindu Addendum"
                        description="Find out More... The Scottish Hindu Addendum for the General Election 2024. Explore the Dharmic Framework and Key Areas of Policy."
                        linkTo="/workwithus/scottish-hindu-addendum"
                        downloadUrl=""
                    />
                    <ReusableCard
                        src="/Images/work-with-us/unsplash_Za9K8pNVepw (2).png"
                        title="Hinduphobia and Hate Crime Legislation"
                        description="Find out More... Representing the Scottish Hindu Community is a core mission of the Scottish Hindu Foundation. Read more about the Foundations work on Hinduphobia. "
                        linkTo="/workwithus/hinduphobia-legislation"
                        downloadUrl=""
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DharmocracyWorks;