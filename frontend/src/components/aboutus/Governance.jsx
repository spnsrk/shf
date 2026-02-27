import React from "react";
import styles from "./Governance.module.css"
const Governance = () => {
    return (
        <>
            <div className={styles.bgContainer}>
                <div className={styles.mainContainer}>
                    <div className={`grid  grid-cols-1 md:grid-cols-2 mt-10 `}>

                        <div className={styles.textContainer}>
                            <div className="md-m-0 m-5">

                                <h1 className={styles.heading} >Our Governance </h1>
                                <p style={{ color: "#444", fontFamily: "Inter", textAlign: 'justify', fontSize: "16px", fontStyle: "normal", fontWeight: 300, lineHeight: "26px", textTransform: "capitalize",marginBottom: '50px'}} className="mt-3">
                                The Scottish Hindu Foundation is registered as a Community Interest Company. By registering as a CIC, the Scottish Hindu Foundation strengthens its position as all recognized and sustainable social enterprise, furthering its ability to fulfill its mission of promoting and preserving Hindu culture in Scotland. The Foundation is governed through a constitution, an executive team which is Democratic elected and a board of trustees. 
                                </p>
                                <img className={styles.arrowImage} src="/Images/work-with-us-2/arrow.png" alt="" />

                            </div>
                        </div>


                        <div className={styles.imageContainer}>
                            <img className={styles.image} src="/Images/work-with-us-2/work-with-us.png" alt="image" />
                            <div className={styles.bgColor}></div>
                        </div>



                    </div>

                </div>
            </div>


        </>


    )
}

export default Governance;
