import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons';
import Link from 'next/link';

const About1 = ({ setSelectedPage, aboutTitle, aboutContent, button02, button03 }) => {
    return (
        <section
            id='about'
            className='md:grid md:grid-cols-2 md:justify-between md:items-center md:h-full gap-16 py-0 lg:pt-40 lg:pb-10 mx-5 lg:mx-20'
        >
            <div className='order-1 lg:order-2 z-30 mt-8 md:mt-0'>
                <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow'>
                    {aboutTitle}
                </h2>
                <div className="h-1 w-20 bg-tulip-yellow rounded"></div>
                <p className='mt-5 mb-8 text-sm text-left md:text-start font-montserrat font-medium text-magic-potion'>
                    {aboutContent}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <Link
                        href="#products"
                        className="block w-full rounded-full bg-tulip-yellow px-12 py-3 text-sm font-medium text-white shadow hover:bg-mettalic-gold focus:outline-none focus:ring sm:w-auto"
                    >
                        {button03}
                    </Link>

                    <Link
                        href="#services"
                        className="block w-full rounded-full bg-satin-linen px-12 py-3 text-sm font-bold text-magic-potion/80 border-2 border-magic-potion shadow hover:bg-magic-potion hover:border-tulip-yellow focus:outline-none focus:ring sm:w-auto"
                    >
                        {button02}
                    </Link>
                </div>
                <SocialMediaIcons />
            </div>

            <div
                >
                <div className="p-2.5 bg-magic-potion/20">
                    <div
                        className="overflow-hidden cursor-pointer rounded-sm relative group z-0 before:absolute before:w-full before:max-w-[500px] md:before:max-w-[800px]  before:h-full"
                    >
                        <img
                            alt="First Product"
                            className="object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[450px] md:max-w-[800px]"
                            src="/roomkeeping-man.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About1