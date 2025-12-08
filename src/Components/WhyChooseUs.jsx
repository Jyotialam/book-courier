import React from 'react';
import { FaStore, FaWallet, FaBoxOpen, FaComments } from "react-icons/fa";

const WhyChooseUs = () => {
    const items = [
        {
            icon: <FaStore size={45} />,
            title: "Fast shipping",
            desc: "Quick delivery at your doorstep",
        },
        {
            icon: <FaWallet size={45} />,
            title: "Best prices",
            desc: "Affordable rates for every book",
        },
        {
            icon: <FaBoxOpen size={45} />,
            title: "Secure packing",
            desc: "Damage-free and safe packaging",
        },
        {
            icon: <FaComments size={45} />,
            title: "Customer support",
            desc: "Friendly help whenever you need",
        },
    ];

    return (
        <div className="bg-[#91CE6C]">
            <h2 className="text-3xl font-semibold text-green-900 text-center pt-5">
                    Why Choose Us..?
                </h2>
            <div className="w-11/12 mx-auto px-4 py-12">
             
                
                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-5">
                            <div className="text-green-900">{item.icon}</div>
                            <div className='flex flex-col gap-2 text-left'>
                            <h3 className="text-lg font-semibold text-green-900">
                                {item.title}
                            </h3>
                            
                            <p className="text-green-900 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
