import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Form from "./Form";
import Join from "./Join";
import React from 'react';


const Work = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="/Images/work-with-us/Rectangle 2907 (2).png"
                heading="Work with us"
                description="Home / Work with us"
            />
            <Join />
            <Form />
            <Footer />
        </>

    )
}

export default Work; 