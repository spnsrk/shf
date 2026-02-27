import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    return (
        <div className="flex flex-col md:flex-row mx-4 my-12 lg:mx-36 justify-start mt-12 md:mt-20 mb-16 md:mb-32 gap-8 md:gap-12">
            <div className="md:w-[40%] relative mx-4 md:m-6">
                <img src="/Images/homepage/Group 1171275514.png"/>
            </div>

            <div className="md:w-[35%] mt-6 md:mt-0 mx-4 md:ml-0">
                <h1 className="font-montserrat text-sm font-bold text-[#252A34] mb-2" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                }}>We have a Shop</h1>
                <h1 className="font-playfair text-3xl font-bold text-[#252A34] mb-3">Shopping Made Easy</h1>
                <p className="font-nunito text-[rgba(37,42,52,0.5)] text-xs lg:text-sm" style={{marginTop : '20px', marginBottom: '20px'}}>Coming Soon an array of products to give as festive gifts or for that special occasion. The Foundation works with young up and coming Hindu Artists to refresh and promote unique designs and concepts.</p>
                <p className="font-nunito text-[rgba(37,42,52,0.5)] text-xs lg:text-sm" style={{marginTop : '20px', marginBottom: '20px'}}>Click on the Link Below.</p>
                <Link to="/shop">
                    <button className=" mt-4 px-10 py-2 rounded-md bg-[#F4911F] text-white">
                        Shop Now
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Shop;
