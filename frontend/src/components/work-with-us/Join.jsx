import React from 'react'

const Join = () => {
    const sectionTextStyle = { color: '#252A34', textAlign: 'justify', fontFamily: '"Nunito Sans"', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '30px', marginTop: '20px', marginBottom: '20px' };

    return (
        <div>
            <div className="textpart my-8 md:my-16 mx-4 sm:mx-8 xl:mx-44">
                <div className="inline-flex gap-2 justify-center items-center">
                    <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">Ground Up</p>
                    <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair">Work With Us</h2>

                <p style={sectionTextStyle}>
                    The Scottish Hindu Foundation is built on the idea of using today&apos;s resources to tackle tomorrow&apos;s challenges and embrace future opportunities. At the core of our approach is a commitment to traditional Hindu values and wisdom, which guide us in supporting our community, respecting the heritage, and growing sustainably.
                    By drawing on the resilience and teachings of Hindu philosophy, we&apos;re creating a framework that not only addresses current needs but also anticipates future paths, ensuring a stronger, united community. Through collaboration, cultural preservation, and mindful planning, we aim to build a lasting foundation that weaves together the past, present, and future.
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 md:pb-12">
                    <img
                        src="/Images/work-with-us/Group 1171275514 (1).png"
                        className="w-full md:w-1/2"
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold font-playfair">
                            Local Mandir/ Organisations
                        </h1>
                        <p style={sectionTextStyle}>
                            The Scottish Hindu Foundation is built on collaboration with local Mandirs. We encourage those interested in joining our journey to first become active members of their local Mandirs. By participating in your local mandir, you not only connect with your immediate community but also lay the groundwork for greater involvement. It&apos;s through these initial connections that the Foundation can engage individuals in meaningful ways, offering them pathways to participate in regional projects and Foundation initiatives.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 md:pb-12">
                    <img
                        src="/Images/work-with-us/Group 1171275515 (1).png"
                        className="w-full md:w-1/2"
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold font-playfair">
                            Community Projects
                        </h1>
                        <p style={sectionTextStyle}>
                            From there, if you&apos;re keen to take on more responsibility, there are plenty of opportunities to contribute to regional programs and projects we undertake with various organizations. This work can span a range of activities, from arts and culture projects to interfaith and charitable initiatives&mdash;strengthening bonds within and beyond our Hindu community.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 md:pb-12">
                    <img
                        src="/Images/work-with-us/Group 1171275517 (1).png"
                        className="w-full md:w-1/2"
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold font-playfair">
                            The Scottish Hindu Foundation
                        </h1>
                        <p style={sectionTextStyle}>
                            Finally, for those interested in shaping the future of our Foundation, the most dedicated and impactful participants will have the opportunity to join the Foundation itself when positions open. We welcome you to become leaders in our community, helping us fulfill our mission of service, advocacy, and cultural preservation for Hindus across Scotland.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="pt-8 md:pt-24">
                        <h1 className="font-montserrat text-xl md:text-[28px] font-bold leading-tight md:leading-[60px] capitalize text-[#252A34]">
                            Make A Difference!
                        </h1>
                        <p className="max-w-md font-nunito mt-3" style={{ color: 'rgba(37, 42, 52, 0.50)', textAlign: 'justify', fontFamily: '"Nunito Sans"', fontSize: '16px', fontWeight: '400', lineHeight: '30px' }}>
                            The Scottish Hindu Foundation is always looking for talent and those who looking to serve the Scottish Community through the Foundation. If you are interested in working with fill out the contact form below and get in touch and lets make a difference together.
                        </p>
                    </div>
                    <img src="/Images/work-with-us/Group 1171275522.png" className="w-full md:w-auto md:max-w-[50%]" />
                </div>
            </div>
        </div>
    )
}

export default Join
