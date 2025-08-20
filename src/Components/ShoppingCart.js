import Image from "next/image";
import HeroImage from "../assets/hero-01.jpg"
import Banner from "./Banner";
import { client } from "../../tina/__generated__/client";
// import fs from 'fs';
// import path from 'path';

const ShoppingCart = ({postsData}) => {
    return(
        <body class="bg-pink-100 dark:bg-pink-900">
    {<Banner></Banner>}
    <main>
      <div class="relative w-full">
        {/* <!-- Hero Image Container --> */}
        <div class="relative w-full">
          <Image class="block w-full" src={HeroImage} alt="Hero Image" />

          {/* <!-- Logomark Positioned Relative to Hero Image --> */}
          <Image class="absolute left-1/2 max-h-[150px] w-[20vw] max-w-[129px] -translate-x-1/2 -translate-y-1/2 transform" src={HeroImage} alt="Bethany's Pie Shop Logomark" />
        </div>

        {/* <!-- Title and Description --> */}
        <h2 class="mb-4 mt-20 text-center text-3xl font-extrabold dark:text-white">{postsData.post.title}</h2>
        <p class="text-center text-lg font-normal dark:text-white">{postsData.post.title}</p>
      </div>

      <section class="flex flex-row flex-wrap justify-center gap-4">
        <div class="box-border w-[300px] p-4">
          <Image class="box-border w-[300px] h-[300px] object-cover " src={postsData.post.beautifulImage} width={postsData.post.beautifulImageWidth} height={postsData.post.beautifulImageHeight} alt="Hero Image"/>
          <button class="w-full bg-pink-300 py-3 text-xs font-bold uppercase before:content-['+_'] dark:bg-pink-600 dark:text-white">Add to cart</button>
          <div class="flex flex-row py-2">
            <p class="text-1xl flex-grow font-extrabold dark:text-white">Classic Apple Pie</p>
            <p class="dark:text-white">$12.95</p>
          </div>
        </div>

        <div class="box-border w-[300px] p-4">
          <Image class="box-border h-[300px] w-[300px] object-cover" src={HeroImage} alt="Hero Image"/>
          <button class="w-full bg-pink-300 py-3 text-xs font-bold uppercase before:content-['+_'] dark:bg-pink-600 dark:text-white">Add to cart</button>
          <div class="flex flex-row py-2">
            <p class="text-1xl flex-grow font-extrabold dark:text-white">Pumpkin Pie</p>
            <p class="dark:text-white">$12.95</p>
          </div>
        </div>

        <div class="box-border w-[300px] p-4">
          <Image class="box-border h-[300px] w-[300px] object-cover" src= {HeroImage} alt="Hero Image"/>
          <button class="w-full bg-pink-300 py-3 text-xs font-bold uppercase before:content-['+_'] dark:bg-pink-600 dark:text-white">Add to cart</button>
          <div class="flex flex-row py-2">
            <p class="text-1xl flex-grow font-extrabold dark:text-white">Chocolate Pecan Pie</p>
            <p class="dark:text-white">$12.95</p>
          </div>
        </div>
      </section>
    </main>
  </body>
    );
}
export default ShoppingCart;

