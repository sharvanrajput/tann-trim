"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import carticon from '@/public/img/addtocardicon.png';
import bookmark from '@/public/img/Bookmark.png';

const ProductCard = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProduct(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <>
            <div className="grid place-content-center ">
                <div className="h-[50%]">

                    <div class="loader"></div>;
                </div>
            </div>
        </>

    }

    return (
        <section className="product_cards py-[80px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                    {products.map((product) => (
                        <div className="product_card bg-[#131313]" key={product.id}>
                            <div className="product_image bg-white w-full relative h-[250px]">
                                <div className="w-[40px] absolute right-0   bg-white z-10 h-auto  pt-5">
                                    <Image src={bookmark} className='mx-auto' alt="cart icon" />
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className='z-0 relative'
                                />
                            </div>
                            <div className="product_info p-3 text-white">
                                <h4 className='text-2xl'>{product.title.slice(0, 15)}...</h4>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="product_price text-lg font-bold">${product.price} <small className='line-through'>${product.price * 2}</small><small className='text-green-600'> (50% off)</small> </span>
                                    <Image src={carticon} alt="Add to cart" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
