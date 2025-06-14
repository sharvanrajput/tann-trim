"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";





import icon1 from "@/public/img/icon1.png";
import icon2 from "@/public/img/icon2.png";
import icon3 from "@/public/img/icon3.png";
import icon4 from "@/public/img/icon4.png";
import icon5 from "@/public/img/icon5.png";
import icon6 from "@/public/img/icon6.png";
import icon7 from "@/public/img/icon7.png";
import icon8 from "@/public/img/icon8.png";

import save from "@/public/img/save.png";
import user from "@/public/img/user.png";
import search from "@/public/img/search.png";
import cart from "@/public/img/cart.png";

const catogarydata = [
    { icon: icon1, name: "All Bags" },
    { icon: icon2, name: "Vanity Pouch" },
    { icon: icon3, name: "Tote Bag" },
    { icon: icon4, name: "Duffle Bag" },
    { icon: icon5, name: "Laptop Sleeve" },
    { icon: icon6, name: "Messenger Bags" },
    { icon: icon7, name: "Slings Bgs" },
    { icon: icon8, name: "Handbags" },
];


const Catogary = () => {

const [isopen, Setisopen] = useState(true);

const phonenav = () => {
    Setisopen(!isopen)
}


    return (
        <header className='py-5'>
            <div className="container">
                <div>
                    <div className="flex justify-between  text-white w-full">
                        <div className='text-3xl'>TANN TRIM</div>
                        <div className="xl:block hidden">

                            <ul className='flex gap-5  '>
                                <li className='cursor-pointer'>
                                    <Image src={search} height={"20px"} width={"20px"} alt="" />
                                </li>
                                <li className='cursor-pointer'>
                                    <Image src={user} height={"20px"} width={"20px"} alt="" />
                                </li>
                                <li className='cursor-pointer'>
                                    <Image src={save} height={"20px"} width={"20px"} alt="" />
                                </li>


                                <li className='cursor-pointer'>
                                    <Image src={cart} height={"20px"} width={"20px"} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="xl:hidden block">
                            <MdOutlineMenu className='text-white text-3xl' onClick={phonenav} />
                        </div>
                    </div>
                </div>
                <div className="xl:block hidden">
                    <ul className='flex justify-center gap-3 text-white'>
                        <li className='text-xl cursor-pointer'>Bags</li>
                        <li className='text-xl cursor-pointer'>Travel</li>
                        <li className='text-xl cursor-pointer'>Accesories</li>
                        <li className='text-xl cursor-pointer'>Gifting</li>
                        <li className='text-xl cursor-pointer'>Jewelery</li>
                    </ul>
                </div>
                <div className="catogary xl:flex hidden  flex-wrap justify-center gap-6 md:justify-evenly">
                    {catogarydata.map((item, index) => (
                        <div className="catgory_box text-center w-1/3 sm:w-1/3 md:w-auto self-end" key={index}>
                            <div className="icon">
                                <Image src={item.icon} alt={item.name} className="mx-auto" width={80} height={80} />
                            </div>
                            <div className="proname text-xl text-white mt-2 text-sm md:text-base">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`fixed ${isopen ? "left-[-100%]" : "left-0"} top-0 transition-all transition-discrete-5 z-20 bg-black p-3  xl:hidden block w-[300px]`}>
                    <div className="flex justify-between  mb-3 text-white w-full">
                        <div className='text-3xl'>TANN TRIM</div>
                       
                        <div className="xl:hidden block">
                            <RxCross2 className='text-white text-3xl' onClick={phonenav} />
                        </div>
                    </div>
                    <ul className=' justify-center gap-3 mb-3 text-white'>
                        <li className='text-xl mb-2'>Bags</li>
                        <li className='text-xl mb-2'>Travel</li>
                        <li className='text-xl mb-2'>Accesories</li>
                        <li className='text-xl mb-2'>Gifting</li>
                        <li className='text-xl mb-2'>Jewelery</li>
                    </ul>
                    <ul className='flex gap-5 mb-3  '>
                        <li className=''>
                            <Image src={search} height={"20px"} width={"20px"} alt="" />
                        </li>
                        <li className=''>
                            <Image src={user} height={"20px"} width={"20px"} alt="" />
                        </li>
                        <li className=''>
                            <Image src={save} height={"20px"} width={"20px"} alt="" />
                        </li>


                        <li className=''>
                            <Image src={cart} height={"20px"} width={"20px"} alt="" />
                        </li>
                    </ul>

                        <div className="catogary grid grid-cols-2 mb-3  flex-wrap justify-center gap-6 md:justify-evenly">
                            {catogarydata.map((item, index) => (
                                <div className="catgory_box text-center w-1/3 sm:w-1/3 md:w-auto self-end" key={index}>
                                    <div className="icon">
                                        <Image src={item.icon} alt={item.name} className="mx-auto" width={80} height={80} />
                                    </div>
                                    <div className="proname text-xl text-white mt-2 text-sm md:text-base">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>



            </div>

        </header>
    );
};

export default Catogary;
