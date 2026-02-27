import styles from "../contact/Form1.module.css";
import { useRef } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import swal from "sweetalert2";
import React from "react";

const ReportForm = () => {
    const nameEl = useRef();
    const emailEl = useRef();
    const problemEl = useRef();
    const phoneEl = useRef();
    const messageEl = useRef();

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);

    const showAlert = (title, text, icon) => {
        swal.fire({
            title,
            text,
            icon,
            didOpen: () => {
                const confirmButton = document.querySelector(".swal2-confirm");
                if (confirmButton) {
                    confirmButton.style.backgroundColor = "rgba(244, 145, 31, 1)";
                    confirmButton.style.color = "#fff";
                    confirmButton.style.borderRadius = "5px";
                    confirmButton.style.boxShadow = "none";
                }
            },
        });
    };

    const handleContactus = async (e) => {
        e.preventDefault();

        const name = nameEl.current.value;
        const email = emailEl.current.value;
        const problemtype = problemEl.current.value;
        const phone = phoneEl.current.value;
        const message = messageEl.current.value;

        if (!name || !validateName(name)) {
            showAlert("Error", "Please enter a valid name (letters and spaces only)", "info");
            return;
        }

        if (!email || !validateEmail(email)) {
            showAlert("Error", "Please enter a valid email address in the format 'example@domain.com'", "info");
            return;
        }

        if (!problemtype) {
            showAlert("Error", "Please select a problem type", "info");
            return;
        }

        if (!phone || !validatePhone(phone)) {
            showAlert("Error", "Please enter a valid phone number", "info");
            return;
        }

        if (!message) {
            showAlert("Error", "Please enter your message", "info");
            return;
        }

        try {
            const result = await axios.post(
                `${API_URL}/reportanissue`,
                { name, email, problemtype, phone, message },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (result.status === 200 || result.status === 201) {
                showAlert("Thank You", "We've received your submission and will look into it soon.", "success");

                // Clear form fields
                nameEl.current.value = "";
                emailEl.current.value = "";
                problemEl.current.value = "";
                phoneEl.current.value = "";
                messageEl.current.value = "";
            } else {
                showAlert("Error", "Something went wrong. Please try again later.", "error");
            }
        } catch (err) {
            console.error(err);
            showAlert("Error", "Unable to submit the form. Please try again later.", "error");
        }
    };

    return (
        <div className="lg:mx-24 xl:mx-40 my-20">
            <div className="m-6 lg:mx-6 xl:mx-[7.6rem]">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={styles.haveAquestionText}>Fill The Form</p>
                    <hr
                        className="w-20 b  ml-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", height: "0.1rem" }}
                    />
                </div>
                <h1 className={styles.contactusText}>Report An Issue</h1>
            </div>

            <div className="m-6 justify-items-center md:flex md:justify-center">
                <div className="w-[90%] md:w-[40%] xl:w-[28%] image-container mt-5 mb-2">
                    <div className={styles.imageContainer}>
                        <div className="flex justify-center">
                            <img
                                style={{
                                    maxWidth: "350px",
                                    width: "100%",
                                    height: "auto",
                                    aspectRatio: "1",
                                    objectFit: "cover",
                                    flexShrink: 0,
                                    borderRadius: "0px 0px 100px 0px",
                                }}
                                className={styles.girlImage}
                                src="/Images/report-an-issue/report-an-issue-img.jpg"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:w-[60%] xl:w-[50%] htmlForm-container ml-2 md:ml-5 mt-2">
                    <p
                        style={{
                            color: "#2F2211",
                            fontFamily: "Nunito Sans, sans-serif",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "25px",
                        }}
                    >
                        Having problems? Our team will be happy to listen to you and resolve your problems.
                    </p>

                    <form onSubmit={handleContactus}>
                        <div className={styles.horizontalInputContainer}>
                            <div className="name w-full">
                                <div className={`mt-2 ${styles.nameContainer}`}>
                                    <img
                                        className={styles.nameLogo}
                                        src="/Images/contact-us/name.svg"
                                        alt="Name"
                                    />
                                    <label htmlFor="name" className={styles.fieldName}>
                                        Name
                                    </label>
                                </div>
                                <input ref={nameEl} type="text" id="name" className={styles.nameInput} />
                            </div>

                            <div className="email w-full">
                                <div className={`mt-2 ${styles.nameContainer}`}>
                                    <img
                                        className={styles.nameLogo}
                                        src="/Images/contact-us/email.svg"
                                        alt="Email"
                                    />
                                    <label htmlFor="email" className={styles.fieldName}>
                                        Email Address
                                    </label>
                                </div>
                                <input ref={emailEl} id="email" type="text" className={styles.nameInput} />
                            </div>
                        </div>

                        <div className={styles.horizontalInputContainer}>
                            <div className="name w-full">
                                <div className={`mt-3 ${styles.nameContainer}`}>
                                    <img
                                        className={styles.locationIcon}
                                        src="/Images/report-an-issue/problem-type.svg"
                                        alt="Problem Type"
                                    />
                                    <label htmlFor="location" className={styles.fieldName}>
                                        Problem type
                                    </label>
                                </div>
                                <input ref={problemEl} id="location" type="text" className={styles.nameInput} />
                            </div>

                            <div className="email w-full">
                                <div className={`mt-3 ${styles.nameContainer}`}>
                                    <img
                                        className={styles.nameLogo}
                                        src="/Images/contact-us/phone.svg"
                                        alt="Phone"
                                    />
                                    <label htmlFor="phone" className={styles.fieldName}>
                                        Phone number
                                    </label>
                                </div>
                                <input ref={phoneEl} id="phone" type="text" className={styles.nameInput} />
                            </div>
                        </div>

                        <div className="message">
                            <div className={`mt-3 ${styles.nameContainer}`}>
                                <img
                                    className={styles.nameLogo}
                                    src="/Images/contact-us/msg.svg"
                                    alt="Message"
                                />
                                <label htmlFor="message" className={styles.fieldName}>
                                    Message
                                </label>
                            </div>
                            <textarea
                                ref={messageEl}
                                className={styles.messageInput}
                                id="message"
                                name="message"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.submitBtn} type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}; 

export default ReportForm;