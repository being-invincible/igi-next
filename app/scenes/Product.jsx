import React from 'react'
import Link from 'next/link'

// slideToScroll CSS
import '../components/slideToScroll/css/embla.css'
import '../components/slideToScroll/css/sandbox.css'

// slideToScroll Component
import EmblaCarousel from '../components/slideToScroll/EmblaCarousel'

import {AiOutlineRight, AiOutlineDown} from 'react-icons/ai'


const Product = ({ products, productsContent, dict }) => {

    const products1 = dict['bed linen'].products;
    const products2 = dict['guest amenities'].products;
    const products3 = dict['homes'].products;
    const products4 = dict['mattresses'].products;
    const products5 = dict['hotel supplies'].products;

    // Extracting First Images from Each category of products & storing it as array
    let img1 = []
    let link01 = []
    let title01 = []
    // Pushing the values to 1st product's array
    Object.keys(products1).forEach(key => {
        img1.push(products1[key].img[0])
        title01.push(products1[key].title)
        link01.push(products1[key].link)
    })

    let img2 = []
    let link02 = []
    let title02 = []
    // Pushing the values to 2nd product's array
    Object.keys(products2).forEach(key => {
        img2.push(products2[key].img[0])
        title02.push(products2[key].title)
        link02.push(products2[key].link)
    })

    let img3 = []
    let link03 = []
    let title03 = []
    // Pushing the values to 3rd product's array
    Object.keys(products3).forEach(key => {
        img3.push(products3[key].img[0])
        title03.push(products3[key].title)
        link03.push(products3[key].link)
    })

    let img4 = []
    let link04 = []
    let title04 = []
    // Pushing the values to 3rd product's array
    Object.keys(products4).forEach(key => {
        img4.push(products4[key].img[0])
        title04.push(products4[key].title)
        link04.push(products4[key].link)
    })

    let img5 = []
    let link05 = []
    let title05 = []
    // Pushing the values to 3rd product's array
    Object.keys(products5).forEach(key => {
        img5.push(products5[key].img[0])
        title05.push(products5[key].title)
        link05.push(products5[key].link)
    })
    

    // Slides
    const OPTIONS = {}
    const SLIDE_COUNT1 = img1.length
    const SLIDE_COUNT2 = img2.length
    const SLIDE_COUNT3 = img3.length
    const SLIDE_COUNT4 = img4.length
    const SLIDE_COUNT5 = img5.length
    
    const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys())
    const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
    const SLIDES3 = Array.from(Array(SLIDE_COUNT3).keys())
    const SLIDES4 = Array.from(Array(SLIDE_COUNT4).keys())
    const SLIDES5 = Array.from(Array(SLIDE_COUNT5).keys())

    return (

        <section id='products' class="text-gray-600 mx-5 lg:mx-20">
            <div class="container py-10 lg:pb-10 lg:pt-28">
                <div class="flex flex-wrap w-full mb-10">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow">{products}</h1>
                        <div class="h-1 w-20 bg-tulip-yellow rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-magic-potion">{productsContent}</p>
                </div>

                {/* First Category of Products */}
                <div class="mb-5">
                    <Link href={dict.langsuffix+"/bed linen"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['bed linen'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">IGI Linen</h1>
                        </div>
                        
                        <div className="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='sandbox01'>
                <section className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES1} options={OPTIONS} images={img1} titles={title01} links={link01} />
                </section>

                <Link href={dict.langsuffix+"/bed linen"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Second Category of Products */}
                <div class="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/guest amenities"}>
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-3/4 lg:w-3/12'>
                            <img className='w-10' src={dict['guest amenities'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Guest Amenities</h1>
                        </div>
                        
                        <div class="h-0.5 w-1/4 lg:w-7/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <section className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES2} options={OPTIONS} images={img2} titles={title02} links={link02} />
                </section>

                <Link href={dict.langsuffix+"/guest amenities"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Third Category of Products */}
                <div>
                <div class="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/homes"}>
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['homes'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Home</h1>
                        </div>
                        
                        <div class="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <section className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES3} options={OPTIONS} images={img3} titles={title03} links={link03} />
                </section>
                </div>

                <Link href={dict.langsuffix+"/homes"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Fourth Category of Products */}
                <div>
                <div class="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/mattresses"}>
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['mattresses'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Mattress</h1>
                        </div>
                        
                        <div class="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <section className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES4} options={OPTIONS} images={img4} titles={title04} links={link04} />
                </section>
                </div>

                <Link href={dict.langsuffix+"/mattresses"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Fifth Category of Products */}
                <div className=''>
                <div class="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/hotel supplies"}>
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-3/4 lg:w-3/12'>
                            <img className='w-10' src={dict['hotel supplies'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Hotel supplies</h1>
                        </div>
                        
                        <div class="h-0.5 w-1/4 lg:w-7/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <section className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES5} options={OPTIONS} images={img5} titles={title05} links={link05} />
                </section>
                </div>

                <Link href={dict.langsuffix+"/hotel supplies"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>
                
                {/* <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >

                    <div class="">
                        <Link to="/bed sheet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={dict[`${"bed sheet"}.img.0`}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed sheet"}.title`)}</h2>
                    </div>

                    <div class="">
                        <Link to="/fitted bed sheet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"fitted bed sheet"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"fitted bed sheet"}.title`)}</h2>
                    </div>

                    <div class="">
                    <Link to="/duvet">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"duvet"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"duvet"}.title`)}</h2>

                    </div>

                    <div class="">
                    <Link to="/duvet covers">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"duvet covers"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"duvet covers"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/bed runner">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Bed Runner"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"bed runner"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed runner"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow cases">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Pillow Cases"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow cases"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow cases"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/pillow protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Pillow Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"pillow protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"pillow protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/mattress protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Mattress Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"mattress protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"mattress protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                        <Link to="/mattress encasement protectors">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Mattress Encasement Protectors"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"mattress encasement protectors"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"mattress encasement protectors"}.title`)}</h2>

                    </div>

                    <div class="">
                    <Link to="/bed skirt">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Product - Bed Skirt"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src={t(`${"bed skirt"}.img.0`)}
                            />
                        </div>
                        </Link>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{t(`${"bed skirt"}.title`)}</h2>

                    </div>

                </div> */}

                {/* <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >


                    <div class="">

                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.unsplash.com/photo-1574421233376-06f2ccf017f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                            />
                        </div>

                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Towel</h2>



                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/close-up-towels-held-hands_23-2148223773.jpg?w=740&t=st=1682854464~exp=1682855064~hmac=33e36da94a76d0ce7bac85ba2bc687ff5d7aa8774ed2766b76dd2d0dd28d8cdd"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Hand Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.pexels.com/photos/3872899/pexels-photo-3872899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Face Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/luxury-pool-poolside-outdoor-blue_1203-5577.jpg?w=740&t=st=1682854987~exp=1682855587~hmac=fe3f4af6d1d76ff86b86b8088361412ad9c824e3574fd9ff6fd24390b0cd2a94"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pool Towel</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/free-photo/white-cotton-bathroom-mat-home-decor_53876-133338.jpg?w=740&t=st=1682855024~exp=1682855624~hmac=cf378488a675fad58a5f752f6f4b7d85c7c43b0ee24a32729ad8f58f485d7f32"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Mat</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.pexels.com/photos/306739/pexels-photo-306739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bathrobe</h2>

                    </div>

                    <div class="">
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Product"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://img.freepik.com/premium-photo/white-home-slippers-lying-blue-rug_537415-92.jpg?w=740"
                            />
                        </div>
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Hotel Slippers</h2>

                    </div>

                </div> */}

            {/* </div> */}

        {/* Best Selling
        <div id='best-selling' class="container py-10 lg:py-10">
        <div class="mb-8">
            <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">Best Selling</h1>
                <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
            </div>
            </div>
            
            <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
                    
                
            <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="https://img.freepik.com/free-photo/luxury-pool-poolside-outdoor-blue_1203-5577.jpg?w=740&t=st=1682854987~exp=1682855587~hmac=fe3f4af6d1d76ff86b86b8088361412ad9c824e3574fd9ff6fd24390b0cd2a94"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pool Towel</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/duvet.jpg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Duvet</h2>
                    
                </div>

                <div class="">
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="/pillow.jpeg"
                        />   
                    </div>
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Pillow</h2>
                    
                </div>

                <div class="">
                    
                    <div
                    class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                    >
                        <img
                            alt="First Product"
                            class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                            src="https://images.unsplash.com/photo-1574421233376-06f2ccf017f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                        />   
                    </div>
                    
                    <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">Bath Towel</h2>
                    
                    
                    
                </div>

            </div> */}
        </div>
        </section>


    )
}

export default Product