import React from "react";
import styles from "./Map.module.css";

const Map = ({ mapName }) => {

    return (

        <div className={styles.mapContainer}>
            <div className={` ${styles.dNone} ${mapName === "Hindu Mandir Glasgow" && styles.dBlock}
            `}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8955.082538463761!2d-4.298254512841827!3d55.86664580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888442b65324fcb%3A0x77af006515340355!2sOm%20Hindu%20Mandir!5e0!3m2!1sen!2sin!4v1736516613928!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={` ${styles.dNone}  ${mapName === "Aberdeen Hindu Temple" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.3333222097845!2d-2.18155292349447!3d57.1826409809653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488413ba39f6cb99%3A0x95fbc70d504254fd!2sAberdeen%20Hindu%20Temple!5e0!3m2!1sen!2sin!4v1715863297241!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Edinburgh Hindu Mandir & Cultural Centre" && styles.dBlock}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.772418116061!2d-3.1718659235776827!3d55.970645975191616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b80f03d39825%3A0x5500a9d5f8dd704e!2sEdinburgh%20Hindu%20Mandir%20and%20Cultural%20Centre!5e0!3m2!1sen!2sin!4v1715864068103!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Tayside Hindu Cultural Community Centre" && styles.dBlock}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.6897157479657!2d-2.996472722935917!3d56.45587807335258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865cb681f75aa5%3A0xb561b24e7e77b1!2sDundee%20Hindu%20Cultural%20%26%20Community%20Centre!5e0!3m2!1sen!2sin!4v1736516149299!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Mother Earth Hindu Temple" && styles.dBlock}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1690261484173!2d-4.332306122976753!3d55.772936173091644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884900119e1a93%3A0x6f8423e8a565e36c!2sMother%20Earth%20Hindu%20Temple%20Glasgow!5e0!3m2!1sen!2sin!4v1736516346332!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={` ${styles.dNone} ${mapName === "Sri Mangala Vinayagar Hindu Temple & Community Centre" && styles.dBlock}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.7993058227676!2d-4.254731322970158!3d55.88349587313283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488844152264333b%3A0x5c5ce0813fd823e!2sSri%20Mangala%20Vinayagar%20Hindu%20temple%20%26%20Community%20Centre!5e0!3m2!1sen!2sin!4v1736516683041!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={`${styles.dNone} ${mapName === "Pashupati Nath Temple" && styles.dBlock}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.6681357244036!2d-4.407745506266745!3d55.85683189818406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888492cac4a8701%3A0xe6e2dcb8fd4cc464!2sPASHUPATINATH%20TEMPLE!5e0!3m2!1sen!2sin!4v1736516880989!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className={`${styles.dNone} ${mapName === "ISKCON Karuna Bhavan Temple" && styles.dBlock}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.7630582667175!2d-3.898511514695818!3d55.63737528156973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48881191f461a07b%3A0x2e26641b5895f0a9!2sISKCON%20Karuna%20Bhavan%20Temple!5e0!3m2!1sen!2sin!4v1736516925722!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>




    )
}

export default Map;