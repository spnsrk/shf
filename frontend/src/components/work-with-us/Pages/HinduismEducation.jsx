import React from 'react';
import styles from './DharmocracyWorks.module.css';
import Header from '../../header/Header';
import Herosection from '../../herosection/Herosection';
import Img1 from '../../../../public/Images/work-with-us/Group 1171275511.png';
import Footer from '../../footer/Footer';

const HinduismEducation = () => {
    return (
        <div>
            <Header />
            <Herosection
                imageUrl="/Images/work-with-us/Rectangle 2907.png"
                heading="Hinduism Education"
                description="Home / Hinduism Education"
            />
            <div className='flex justify-between mb-[100px]'>
                <div className="textpart mt-[100px] ml-[100px] mr-[50px]">
                    <div className="inline-flex gap-2 justify-center items-center">
                        <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Wisdom & Community</p>
                        <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
                    </div>
                    <h2 className="text-3xl font-bold font-playfair">Education: Hinduism</h2>
                    
                    <div className={styles.ContentHeading}>
                        <p>The Hindu Parents Council is deeply committed to ensuring that Hinduism is taught with accuracy and depth in Scottish schools, meeting the high standards set by the Scottish education system. We believe that a proper understanding of Hindu philosophy, culture, and traditions not only fosters inclusive Scottish principles but also promotes greater cultural awareness and respect among students. </p>
                        <p>To support schools and teachers in delivering high-quality religious education, we aim to provide comprehensive resources, including accurate teaching materials, guidance on Hindu practices, and access to knowledgeable experts. Our goal is to ensure that educators feel confident and well-equipped to teach Hinduism in a way that reflects its rich history and diversity. By partnering with schools, we can help ensure that Hinduism is represented authentically and meaningfully, giving students a deeper understanding of this major world religion while maintaining the rigorous educational standards expected in Scotland.</p>
                    </div>
                </div>
                <img src={Img1} className="w-[50%] h-auto" />
            </div>
            <Footer/>
        </div>
    )
}

export default HinduismEducation
