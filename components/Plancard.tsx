import Image from 'next/image';
import React from 'react'

interface plancardProps {
    name: string;
    description: string;
    btnText?: string;
    price?: string;
    features: string[];
    color: string;
}


const Plancard = ({ name, description, price, features, color, btnText = "Start Trials" }: plancardProps) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className='flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 lg:rounded-5xl text-white'>
            <h2 className='mb-5 text-x font-semibold'>{name}</h2>
            <div className='mb-5 flex item-end text-3xl font-bold'>
                {price ? (
                    <>
                        <div>
                            ${price}
                        </div>
                    </>
                ) : ('Free')
                }
            </div>
            <p className='mb-5'>{description}</p>
            <ul className='mb-10 flex flex-col gap-y-2'>
                {features.map((features) => (
                    <li className='flex items-center'>
                        <Image
                            src="tick-circle-svgrepo-com.svg"
                            alt="tick-circle-svgrepo-com.svg"
                            width={7}
                            height={7}
                            className="mr-3 h-7 w-7 current-color"
                        />
                        {features}
                    </li>
                ))}
            </ul>
            <button className='mt-auto rounded-xl py-3 px-6 text-lg  bg-black font-medium text-white'>{btnText}</button>
        </div>
    )
}

export default Plancard
