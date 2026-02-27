import React from 'react'
import styles from './YogaClubs.module.css'
import Header from '../../header/Header'
import Herosection from '../../herosection/Herosection'
import Img1 from '../../../../public/Images/work-with-us/Rectangle 15.png'
import Img2 from '../../../../public/Images/work-with-us/Rectangle 16.png'
import Img3 from '../../../../public/Images/work-with-us/Rectangle 17.png'
import Img4 from '../../../../public/Images/work-with-us/Rectangle 18.png'
import Footer from '../../footer/Footer'


const YogaClubs = () => {
    return (
        <div>
            <Header />
            <Herosection
                imageUrl="/Images/work-with-us/Rectangle 2908 copy.png"
                heading="Yoga Clubs"
                description="Home / Yoga Clubs"
            />

            <div className="textpart my-8 md:my-16 sm:mx-8 xl:mx-44" style={{ marginLeft: '100px' }}>
                <div className="inline-flex gap-2 justify-center items-center">
                    <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Grow with</p>
                    <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
                </div>
                <h2 className="text-3xl font-bold font-playfair">Yoga clubs</h2>
            </div>

            <div className={styles.PageContent}>
                <div className={styles.Heading}>
                    <h1>Be The Best You</h1>
                    <p>The Hindu Parents Council seeks to partner with schools to create yoga clubs, promoting mindfulness, wellness, and physical well-being while fostering a supportive, inclusive environment for students.</p>
                </div>

                <div className={styles.PageCards}>
                    <div className={styles.Card}>
                        <img src={Img1} />
                        <h1>YOGA</h1>
                        <p>From Ashtanga to Vinyasa make movement, a daily ritual.</p>
                    </div>
                    <div className={styles.Card}>
                        <img src={Img2} />
                        <h1>EMOTIONAL INTELLIGENCE</h1>
                        <p>Find mindful sessions for relaxing, restful sleep etc.</p>
                    </div>
                    <div className={styles.Card}>
                        <img src={Img3} />
                        <h1>MEDITATION</h1>
                        <p>Find guided techniques for meditation routines.</p>
                    </div>
                    <div className={styles.Card}>
                        <img src={Img4} />
                        <h1>SKILLS</h1>
                        <p>Learn how to hand stretch, stretch to splits with guided instructions.</p>
                    </div>
                </div>

                <div className={styles.PageText} style={{paddingBottom: '100px'}}>
                    <p>The Hindu Parents council wishes to encourage Yoga in Scottish schools. Yoga clubs offer students a space to cultivate mindfulness, physical well-being, and emotional balance. Through guided practices, students develop focus, reduce stress, and build self-confidence in a supportive, inclusive environment. Yoga enhances academic performance, promotes teamwork, and fosters a calm, positive atmosphere for learning and growth. Partner with us to bring the benefits of yoga to your school community.</p>
                    <p>The Hindu Parents Council is committed to supporting schools in establishing meaningful yoga programs by connecting them with qualified yoga teachers and trusted suppliers. We aim to ensure that schools have access to experienced instructors who are well-versed in both the physical and mindfulness aspects of yoga, as well as resources such as mats and other essential supplies. By collaborating with schools, we hope to create enriching yoga experiences that promote student well-being, inclusive, and holistic development, while honoring the traditional roots of the practice.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default YogaClubs
