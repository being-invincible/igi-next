"use client"
import React, { useState } from 'react'
import Footer from '@/app/components/Footer';

import EmblaCarousel from '@/app/components/carousel/EmblaCarousel'
import { Collapse } from 'react-collapse'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineUp } from 'react-icons/ai'

// css
import '@/app/components/carousel/css/embla.css'
import '@/app/components/carousel/css/sandbox.css'
import Navbar02 from '@/app/components/Navbar02'
import GetDictionary from '@/app/utils/dictionaries';
import { Disclosure } from '@headlessui/react'
import Link from 'next/link';


const EachProducts = ({ params: { lang, category, product }}) => {

  category = category.replaceAll("%20", " ");
  product = product.replaceAll("%20", " ");
  const dict = GetDictionary(lang);
  console.log(dict[category]);

  const [open, setOpen] = useState(false);
  const toggle = () => {

    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true)
    }

  }


  const fabric = dict[category].products[product].fabric;
  const design = dict[category].products[product].design;
  const colorCode = dict[category].products[product].colorCode;
  const color = dict[category].products[product].color;
  const size = dict[category].products[product].size;
  const type = dict[category].products[product].type;

  const img = dict[category].products[product].img;

  // Slides
  const OPTIONS = {}
  const SLIDE_COUNT = img.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const category1 = "guest amenities";

  console.log(dict[category].products[product].title)
  // console.log(Object.keys(dict[category].products[product]))


  return (
    <div>
      <Navbar02 lang={lang}/>
      <div className="bg-white pt-20 lg:pt-28">
        <div className="">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 p-0 lg:mx-20">
            {/* <!-- images - start --> */}
            <div className="space-y-4">
              <div className={`relative rounded-lg`}>
                <section className="sandbox__carousel">
                  <EmblaCarousel slides={SLIDES} options={OPTIONS} img={img} />
                </section>
              </div>
            </div>

            {/* <!-- content - start --> */}
            <div className="px-5 md:px-0 pb-8">
              <div className="mb-2 md:mb-5">
                <span className="mb-2 inline-block uppercase text-magic-potion">{dict[category].products[product].category}</span>
                <h2 className="text-2xl font-bold text-tulip-yellow lg:text-3xl mb-2">{dict[category].products[product].title}</h2>
                <div className="h-1 w-20 bg-tulip-yellow rounded"></div>
              </div>

              {/* <!-- description - start --> */}
              <div className="mb-2 md:mb-5">

                <p className="text-magic-potion">
                  {dict[category].products[product].description}
                </p>
              </div>

              <div className="mb-5 md:mb-7 flex items-center gap-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>

                <span className="text-sm">{dict.ship}</span>
              </div>
              {/* <!-- shipping notice - end --> */}

              {/* <!-- buttons - start --> */}
              <div className="flex gap-2.5 mb-5 w-full">

                <Link href={"/"+lang+'/contact'}
                  className="block w-full rounded-full text-center bg-satin-linen px-12 py-3 text-sm font-bold text-magic-potion/80 border-2 border-magic-potion shadow hover:bg-magic-potion hover:border-tulip-yellow hover:text-tulip-yellow"
                >
                  {dict.shopNow}
                </Link>

              </div>
              {/* <!-- buttons - end --> */}

              {/* Weight products */}

              {dict[category].products[product].title == "Body Lotion" || dict[category].products[product].title == "مرطب الجسم" || dict[category].products[product].title == "مرطب الجسم" || dict[category].products[product].title == "Shampoo" || dict[category].products[product].title == "الشامبو" || dict[category].products[product].title == "Shower Gel" || dict[category].products[product].title == "جل الإستحمام" || dict[category].products[product].title == 'Soap' || dict[category].products[product].title == 'الصابون' ? (
                <div
                className='bg-white w-full'

              >
                <Disclosure>
                {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                
                  <Disclosure.Button className={`bg-magic-potion inline-flex w-full justify-between items-center px-5 py-2  ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                  <h2 className='text-alabaster font-semibold text-md'>{dict.productDetails}</h2>
                    <AiOutlineUp className={`fill-tulip-yellow w-5 h-5 ${open ? '-rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-magic-potion text-white rounded-b-lg transition-all delay-500">
                    <div className='grid grid-cols-4 px-5 py-7 gap-y-5'>
                      
                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.weight}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {size.map((s, i) =>
                          <div className="group relative flex flex-col text-center text-tulip-yellow gap-2 border-2 rounded-lg py-2 px-2 hover:border-tulip-yellow">
                            <p className="text-lg font-semibold">{type[i]}</p>
                            <div className="text-xs z-40 absolute top-12 left-0 scale-0 rounded bg-white p-1 w-auto text-magic-potion group-hover:scale-100">{s}</div>
                          </div>

                        )}
                      </div>

                      {/* <div className="col-span-4 text-sm text-alabaster md:text-base">{dict.productNote}</div> */}

                    </div>
                  </Disclosure.Panel>
                  </>
                  )}
                  </Disclosure>
              </div>
              ) : (<div></div>)}

              {/* Table Cover & Chair Cover */}

              {dict[category].products[product].title == "Table Cover" || dict[category].products[product].title == "غطاء الطاولة" || dict[category].products[product].title == "Chair Cover" || dict[category].products[product].title == "غطاء الكرسي" ? (
                <div
                className='bg-white w-full'

              >
                <Disclosure>
                {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                
                  <Disclosure.Button className={`bg-magic-potion inline-flex w-full justify-between items-center px-5 py-2  ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                  <h2 className='text-alabaster font-semibold text-md'>{dict.productDetails}</h2>
                    <AiOutlineUp className={`fill-tulip-yellow w-5 h-5 ${open ? '-rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-magic-potion text-white rounded-b-lg transition-all delay-500">
                    <div className='grid grid-cols-4 px-5 py-7 gap-y-5'>
                      
                    <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.material}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {fabric.map((s, i) =>
                          <div className="group relative flex flex-row text-center text-tulip-yellow gap-2">
                            <p className="text-lg font-semibold">{fabric[i]}</p>
                            {i === fabric.length - 1 ? "" : <p className="text-white">|</p>}

                          </div>

                        )}
                      </div>

                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.design}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {design.map((s, i) =>
                          <div className="group relative flex flex-row text-center text-tulip-yellow gap-2">
                            <p className="text-lg font-semibold">{design[i]}</p>
                            {i === design.length - 1 ? "" : <p className="text-white">|</p>}
                          </div>
                        )}
                      </div>

                      <div className="col-span-4 text-sm text-alabaster md:text-base">{dict.productNote}</div>

                    </div>
                  </Disclosure.Panel>
                  </>
                  )}
                  </Disclosure>
              </div>
              ) : (<div></div>)}

              {/* Comforter set */}

              {dict[category].products[product].title == "Home comforter set" || dict[category].products[product].title == "مجموعة اللحاف لبمنزلي" ? (
                <div
                className='bg-white w-full'

              >
                <Disclosure>
                {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                
                  <Disclosure.Button className={`bg-magic-potion inline-flex w-full justify-between items-center px-5 py-2  ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                  <h2 className='text-alabaster font-semibold text-md'>{dict.productDetails}</h2>
                    <AiOutlineUp className={`fill-tulip-yellow w-5 h-5 ${open ? '-rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-magic-potion text-white rounded-b-lg transition-all delay-500">
                    <div className='grid grid-cols-4 px-5 py-7 gap-y-5'>

                      <div className="col-span-4 text-sm text-alabaster md:text-base">{dict.productCustom}</div>

                    </div>
                  </Disclosure.Panel>
                  </>
                  )}
                  </Disclosure>
              </div>
              ) : (<div></div>)}

              {/* Slippers */}

              {dict[category].products[product].title == "Slippers" || dict[category].products[product].title == "النعال" || dict[category].products[product].title == "Bed Skirt" || dict[category].products[product].title == "تنورة سرير" || dict[category].products[product].title == "Bed Runner With Pillow" || dict[category].products[product].title == "حلية السرير مع تكايا" 
              || dict[category].products[product].title == "Blanket" || dict[category].products[product].title == "البطانية"
              ? (
                <div
                className='bg-white w-full'

              >
                <Disclosure>
                {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                
                  <Disclosure.Button className={`bg-magic-potion inline-flex w-full justify-between items-center px-5 py-2  ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                  <h2 className='text-alabaster font-semibold text-md'>{dict.productDetails}</h2>
                    <AiOutlineUp className={`fill-tulip-yellow w-5 h-5 ${open ? '-rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-magic-potion text-white rounded-b-lg transition-all delay-500">
                    <div className='grid grid-cols-4 px-5 py-7 gap-y-5'>

                      {/* <div className="col-span-4 text-sm text-alabaster md:text-base">{dict.productCustom}</div> */}
                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.size}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {size.map((s, i) =>
                          <div className="group relative flex flex-col text-center text-tulip-yellow gap-2 border-2 rounded-lg py-2 px-2 hover:border-tulip-yellow">
                            <p className="text-lg font-semibold">{type[i]}</p>
                            <div className="text-xs z-40 absolute top-12 left-0 scale-0 rounded bg-white p-1 w-auto text-magic-potion group-hover:scale-100">{s}</div>
                          </div>

                        )}
                      </div>

                    </div>
                  </Disclosure.Panel>
                  </>
                  )}
                  </Disclosure>
              </div>
              ) : (<div></div>)}

              {/* Remove product details */}

              {dict[category].products[product].category == 'Hotel Supplies' || dict[category].products[product].category == 'إمدادات الفنادق' || dict[category].products[product].category == 'Mattresses' || dict[category].products[product].category == 'مراتب' ||
                dict[category].products[product].title == 'Shover Cap' || dict[category].products[product].title == 'قبعة الاستحمام' || dict[category].products[product].title == 'Shaving Kit' || dict[category].products[product].title == 'أدوات الحلاقة' || dict[category].products[product].title == 'Dental Kit' || dict[category].products[product].title == 'طقم الأسنان' || dict[category].products[product].title == 'Comb' || dict[category].products[product].title == 'المشط' || dict[category].products[product].title == 'Shoe Shine' || dict[category].products[product].title == 'تلميع الأحذية' || dict[category].products[product].title == 'Soap' || dict[category].products[product].title == 'الصابون' ||
                dict[category].products[product].title == "Body Lotion" || dict[category].products[product].title == "مرطب الجسم" || dict[category].products[product].title == "مرطب الجسم" || dict[category].products[product].title == "Shampoo" || dict[category].products[product].title == "الشامبو" || dict[category].products[product].title == "Shower Gel" || dict[category].products[product].title == "جل الإستحمام" ||
                dict[category].products[product].title == "Home comforter set" || dict[category].products[product].title == "مجموعة اللحاف لبمنزلي" || dict[category].products[product].title == "Slippers" || dict[category].products[product].title == "النعال" ||
                dict[category].products[product].title == "Bed Skirt" || dict[category].products[product].title == "تنورة سرير" || dict[category].products[product].title == "Bed Runner With Pillow" || dict[category].products[product].title == "حلية السرير مع تكايا" || dict[category].products[product].title == "Blanket" || dict[category].products[product].title == "البطانية" ||
                dict[category].products[product].title == "Table Cover" || dict[category].products[product].title == "غطاء الطاولة" || dict[category].products[product].title == "Chair Cover" || dict[category].products[product].title == "غطاء الكرسي" || dict[category].products[product].title == "Loofah" || dict[category].products[product].title == "الليفة" || dict[category].products[product].title == "Sewing Kit" || dict[category].products[product].title == "طقم أدوات الخياطة"
                ? (
                <div></div>
              ):(
                <div
                className='bg-white w-full'

              >
                <Disclosure>
                {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                
                  <Disclosure.Button className={`bg-magic-potion inline-flex w-full justify-between items-center px-5 py-2  ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                  <h2 className='text-alabaster font-semibold text-md'>{dict.productDetails}</h2>
                    <AiOutlineUp className={`fill-tulip-yellow w-5 h-5 ${open ? '-rotate-180 transform' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-magic-potion text-white rounded-b-lg transition-all delay-500">
                    <div className='grid grid-cols-4 px-5 py-7 gap-y-5'>
                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.material}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {fabric.map((s, i) =>
                          <div className="group relative flex flex-row text-center text-tulip-yellow gap-2">
                            <p className="text-lg font-semibold">{fabric[i]}</p>
                            {i === fabric.length - 1 ? "" : <p className="text-white">|</p>}

                          </div>

                        )}
                      </div>

                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.design}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {design.map((s, i) =>
                          <div className="group relative flex flex-row text-center text-tulip-yellow gap-2">
                            <p className="text-lg font-semibold">{design[i]}</p>
                            {i === design.length - 1 ? "" : <p className="text-white">|</p>}
                          </div>
                        )}
                      </div>

                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.color}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {color.map((s, i) =>
                          <div className="relative group">
                            <button type="button" className={`h-8 w-8 rounded-full border bg-[#ffffff] ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-tulip-yellow hover:ring-2`}></button>
                            <div className="text-xs absolute -top-5 left-5 scale-0 rounded bg-white p-1 w-10 text-magic-potion group-hover:scale-100">{color[i]}</div>
                          </div>
                        )}
                      </div>

                      <div className="col-span-1 text-sm text-alabaster md:text-base">{dict.size}</div>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {size.map((s, i) =>
                          <div className="group relative flex flex-col text-center text-tulip-yellow gap-2 border-2 rounded-lg py-2 px-2 hover:border-tulip-yellow">
                            <p className="text-lg font-semibold">{type[i]}</p>
                            <div className="text-xs z-40 absolute top-12 left-0 scale-0 rounded bg-white p-1 w-auto text-magic-potion group-hover:scale-100">{s}</div>
                          </div>

                        )}
                      </div>

                      <div className="col-span-4 text-sm text-alabaster md:text-base">{dict.productNote}</div>

                    </div>
                  </Disclosure.Panel>
                  </>
                  )}
                  </Disclosure>
              </div>
              )}

              {/* <!-- Details Accordion - Starts --> */}
              
            </div>
          </div>
        </div>
      </div>

      <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default EachProducts