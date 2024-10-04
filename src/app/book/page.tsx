"use client";

import React, { useState } from "react";
import {
  Star,
  Share,
  Bookmark,
  Clock,
  Calendar,
  Users,
  ChevronDown,
} from "lucide-react";

const RestaurantBooking = () => {
  const [selectedTab, setSelectedTab] = useState("Book a Table");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const tabs = [
    "Overview",
    "Order Online",
    "Reviews",
    "Photos",
    "Menu",
    "Book a Table",
  ];
  const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Restaurant Info */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <img
          src="res.avif"
          alt="Restaurant main"
          className="col-span-2 w-full h-full object-cover rounded-l-lg"
        />
        <div className="grid grid-rows-2 gap-2">
          <img
            src="res2.avif"
            alt="Dish 1"
            className="w-full h-full object-cover rounded-tr-lg"
          />
          <img
            src="res3.webp"
            alt="Dish 2"
            className="w-full h-full object-cover rounded-br-lg"
          />
        </div>
      </div>

      <div className="px-4">
        <h1 className="text-3xl font-bold mb-2">
          Yazu - Pan Asian Supper Club
        </h1>

        <div className="text-sm text-gray-600 mb-2">
          Thai, Korean, Japanese, Chinese, Sichuan, Asian, Sushi, Desserts
        </div>

        <div className="text-sm text-gray-500 mb-4">
          Andheri Lokhandwala, Andheri West, Mumbai
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="bg-green-700 text-white px-2 py-1 rounded-md flex items-center mr-2">
              <Star size={16} className="mr-1" /> 4.5
            </span>
            <span className="text-sm text-gray-600">3,336 Dining Ratings</span>
          </div>
          <div className="flex items-center">
            <span className="bg-green-700 text-white px-2 py-1 rounded-md flex items-center mr-2">
              <Star size={16} className="mr-1" /> 4.3
            </span>
            <span className="text-sm text-gray-600">
              4,401 Delivery Ratings
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 whitespace-nowrap ${
                selectedTab === tab
                  ? "text-red-500 border-b-2 border-red-500 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Booking Section */}
        {selectedTab === "Book a Table" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Select your booking details
            </h2>

            <div className="flex gap-4 mb-6">
              {[
                { icon: Calendar, text: "Today" },
                { icon: Users, text: "1 guest" },
                { icon: Clock, text: "Lunch" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex-1 p-3 border rounded-md flex items-center justify-between  border-gray-400 hover:border-gray-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-center">
                    <Icon size={18} className="mr-2 text-gray-500" />
                    <span>{text}</span>
                  </div>
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-3">Select slot</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  className={`p-3 border rounded-md transition-colors ${
                    selectedSlot === slot
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  <div className="font-medium">{slot}</div>
                  <div className="text-sm text-gray-500">1 offer</div>
                </button>
              ))}
            </div>

            <button className="w-full py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition-colors">
              Proceed to cart
            </button>
          </div>
        )}
        <hr className="border-gray-200 my-8" />

        <div className="text-sm text-gray-500 mb-8 leading-relaxed">
          <p className="mb-4">
            Related to Yazu - Pan Asian Supper Club, Andheri Lokhandwala,
            Andheri West
          </p>
          <p>
            Restaurants in Mumbai, Mumbai Restaurants, Andheri Lokhandwala,
            Andheri West restaurants, Best Andheri Lokhandwala, Andheri West
            restaurants, Andheri West restaurants, Casual Dining in Mumbai,
            Casual Dining near me, Casual Dining in Andheri West, Casual Dining
            in Andheri Lokhandwala, Andheri West, Bar in Mumbai, Bar near me,
            Bar in Andheri West, Bar in Andheri Lokhandwala, Andheri West, in
            Mumbai, near me, in Andheri West, in Andheri Lokhandwala, Andheri
            West, Order food online in Andheri Lokhandwala, Andheri West, Order
            food online in Mumbai, Order food online in Andheri West, New Year
            Parties in Mumbai, Christmas' Special in Mumbai
          </p>
          <p className="mt-4">
            Restaurants around Andheri Lokhandwala, Andheri West
          </p>
          <p>
            Amboli restaurants, Veera Desai Area restaurants, 7 Bungalows,
            Andheri West restaurants, Versova, Andheri West restaurants
          </p>
          <p className="mt-4">Frequent searches leading to this page</p>
          <p>
            yazu, yazu andheri, yazu restaurantl menu mumbai, yazu restaurant,
            yazu panasian supper club
          </p>
          <p className="mt-4">Top Stores</p>
          <p>Lower Parel</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBooking;
