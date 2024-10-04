import Image from "next/image";
import { Search } from "lucide-react";
import { Lato } from "next/font/google";
import CalendarComponent from "@/components/calendar";

const latoLight = Lato({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const latoNormal = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fontRose = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Navbar() {
  return (
    <nav
      className={`${latoLight.className} flex items-center justify-between p-6 w-full bg-[#F3F0E9] shadow-lg z-10`}
      style={{ height: "80px" }}
    >
      <a href="/" className="flex items-center">
        <Image
          src="https://ettarracoffee.in/wp-content/uploads/2023/07/WhatsApp_Image_2023-07-31_at_2.58.23_PM-removebg-preview-e1704895455691.png"
          alt="Logo"
          width={250}
          height={250}
        />
      </a>
      <div className="flex items-center gap-12 w-full justify-center">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-3 w-full focus:outline-none focus:border-red-500"
          />
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
        <ul className="flex gap-8 text-red-500 text-lg">
          <li className="hover:text-red-700 transition duration-200 ease-in-out">
            <a href="/story">STORY</a>
          </li>
          <li className="hover:text-red-700 transition duration-200 ease-in-out">
            <a href="/chapters">CHAPTERS</a>
          </li>
          <li className="hover:text-red-700 transition duration-200 ease-in-out">
            <a href="/events">EVENTS</a>
          </li>
          <li className="hover:text-red-700 transition duration-200 ease-in-out">
            <a href="/memberships">MEMBERSHIPS</a>
          </li>
          <li className="hover:text-red-700 transition duration-200 ease-in-out">
            <a href="/partnerships">PARTNERSHIPS</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <a
          href="/login"
          className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out"
        >
          Login
        </a>
        <a
          href="/apply"
          className="bg-red-500 text-white px-4 py-3  hover:bg-red-700 transition duration-200 ease-in-out"
        >
          Apply
        </a>
      </div>
    </nav>
  );
}

export default function NavbarWithVideo() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://res.cloudinary.com/dknwhnbg4/video/upload/q_auto/v1682009187/erja8ylt7irzyibuyqjk.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute text-white scale-125  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-8xl font-sell">The Best moments</p>
          <p className="text-6xl font-rose">in life happen at the</p>
          <p className="text-8xl font-sell">dinner table</p>
        </div>
        <Navbar />
      </div>

      <div className="w-full p-12 text-center text-sm text-red-800">
        <p className={` font-sell text-8xl scale-125`}>Welcome</p>
        <div className={`  ${latoLight.className} text-3xl `}>
          <p>
            We’re a members-only club devoted to the art of the dinner party.
          </p>
          <p>
            At The Supper Club, we surprise and delight our community by hosting
            exquisite dining experiences in spectacular settings around the
            world.
          </p>
          <p>
            We know that time is our members’ most precious resource. Our
            immersive events invite members to savor the best things in life:
            incredible food, inspiring conversations, and the joy of new
            connections.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center px-12 py-16 bg-deep-rust">
        <div className="flex justify-center items-center">
          <Image
            src="/eat.webp"
            alt="Eating Together"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-red-800 pl-20">
          <p className={`font-sell scale-125 text-8xl text-center`}>Join us</p>
          <p className={`${fontRose.className} text-4xl text-center`}>
            Pull Up a <br />
            Chair
          </p>
          <p className="text-sm text-center font-bold pt-3">LEARN MORE</p>
        </div>
      </div>
      <div className="px-20 max-h-24 scale-100">
        <CalendarComponent />
      </div>
    </div>
  );
}
