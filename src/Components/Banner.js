import Image from "next/image";
import logo from "@/assets/bethanys-pie-shop-logo_logomark.png";
const Banner = () => {
  return (
    <nav class="flex flex-row items-center bg-yellow-700 p-4 dark:bg-yellow-900">
          <div class="grow sm:grow-0">
            <Image class="max-w-[100px]" src={logo} alt="logo"/>
            <h1 class="hidden">Bethanys Pie Shop</h1>
          </div>
          <ul class="ml-4 hidden items-center sm:flex sm:grow sm:flex-row sm:flex-wrap">
            <li class="ml-6 text-xs font-bold uppercase text-white">Shop</li>
            <li class="ml-6 text-xs font-bold uppercase text-white">Contact</li>
            <li class="ml-6 text-xs font-bold uppercase text-white">Register</li>
          </ul>
          <div class="text-white sm:hidden">menu</div>
        </nav>
  );
}

export default Banner;