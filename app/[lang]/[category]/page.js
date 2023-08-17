import GetDictionary from '@/app/utils/dictionaries';
import React from 'react'
import Navbar02 from '@/app/components/Navbar02';
import ProductCard from '@/app/components/ProductCard';
import Footer from '@/app/components/Footer';

const Category = ({params:{lang,category}}) => {
    category=category.replace("%20"," ");
    const dict = GetDictionary(lang)

    console.log(category);
    
    // Converting JSON Object to Array Map for multiple product card mapping
    const products = dict[category].products;

    return (
        <>

        <Navbar02 />

        <section className='bg-alabaster mt-20 px-5 md:px-20 py-10'>

            {/* Brand Heading */}
            <div className="flex flex-row items-center mb-5 lg:mb-8 gap-5">
            <div className="flex flex-col items-center text-center gap-2">
            <img className='w-20 lg:w-40' src={dict[category].logo} alt="Logo" />
            {/* <h1 class="sm:text-lg text-xl font-medium title-font text-tulip-yellow uppercase">{dict[category]}.title`)}</h1> */}
            </div>
            <div class="">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow uppercase">{dict[category].title}</h1>
                <div class="h-1 w-20 bg-tulip-yellow rounded"></div>
            </div>
            </div>

            {/* About the Brand */}
            <div class="lg:w-full w-full mb-5 lg:mb-8">
                <p class="leading-relaxed text-base text-magic-potion">{dict[category].description}</p>
            </div>

            {/* Divider with Title */}
            <div class="mb-5">
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">{dict.oducts}</h1>
                        <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
                    </div>
            </div>

            {/* Products Grid */}
            <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
            {Object.keys(products).map(key => <ProductCard link={products[key].link} img={products[key].img[0]} title={products[key].title} />)}
            </div> 
        </section>

        <Footer />

        </>
    )
}

export default Category;