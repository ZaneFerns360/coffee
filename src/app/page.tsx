import Image from "next/image";
import { Search } from "lucide-react";
import { Lato } from "next/font/google";

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

function Navbar() {
  return (
    <nav
      className={`${latoLight.className} flex items-center justify-between p-6 w-full bg-white shadow-lg z-10`}
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
          className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out"
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
        <Navbar />
      </div>

      <div className="w-full p-12 bg-white text-center text-sm text-[#b7410e]">
        <p>Welcome</p>
        <p>We’re a members-only club devoted to the art of the dinner party.</p>
        <p>
          At The Supper Club, we surprise and delight our community by hosting
          exquisite dining experiences in spectacular settings around the world.
        </p>
        <p>
          We know that time is our members’ most precious resource. Our
          immersive events invite members to savor the best things in life:
          incredible food, inspiring conversations, and the joy of new
          connections.
        </p>
      </div>
    </div>
  );
}
