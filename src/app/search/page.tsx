"use client";
import React, { useState, useMemo } from "react";
import { Search, Calendar, Clock, Users, ChevronDown } from "lucide-react";
import debounce from "lodash.debounce";

type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  imageUrl: string;
};

type SelectorOption = {
  value: string;
  label: string;
};

const dateOptions: SelectorOption[] = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "next-week", label: "Next Week" },
];

const timeOptions: SelectorOption[] = [
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "19:00", label: "7:00 PM" },
];

const peopleOptions: SelectorOption[] = [
  { value: "1", label: "1 Person" },
  { value: "2", label: "2 People" },
  { value: "4", label: "4 People" },
];

const dummyRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Spice Haven",
    cuisine: "Indian",
    location: "Mumbai Central",
    rating: 4.5,
    imageUrl: "pic1.jpg",
  },
  {
    id: "2",
    name: "Sushi Express",
    cuisine: "Japanese",
    location: "Bandra West",
    rating: 4.3,
    imageUrl: "pic2.jpg",
  },
  {
    id: "3",
    name: "La Pizzeria",
    cuisine: "Italian",
    location: "Juhu",
    rating: 4.7,
    imageUrl: "pic3.jpg",
  },
];

// Dropdown Component
const Dropdown: React.FC<{
  options: SelectorOption[];
  value: string;
  onChange: (value: string) => void;
  icon: React.ElementType;
  label: string;
}> = ({ options, value, onChange, icon: Icon, label }) => (
  <div className="relative">
    <label className="sr-only">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none w-full bg-white border border-gray-300 py-2 pl-8 pr-10 rounded-md shadow-sm text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
      aria-label={label}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
      <Icon size={18} className="text-gray-500" />
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <ChevronDown size={18} className="text-gray-500" />
    </div>
  </div>
);

// RestaurantCard Component
const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img
      src={restaurant.imageUrl}
      alt={restaurant.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
      <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
      <p className="text-gray-500 mb-2">{restaurant.location}</p>
      <div className="flex items-center">
        <span className="bg-green-700 text-white px-2 py-1 rounded-md flex items-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {restaurant.rating}
        </span>
        <span className="text-sm text-gray-600">Excellent</span>
      </div>
    </div>
  </div>
);

const RestaurantSelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("today");
  const [selectedTime, setSelectedTime] = useState<string>("12:00");
  const [selectedPeople, setSelectedPeople] = useState<string>("2");

  const debouncedSearchTerm = useMemo(
    () => debounce((value) => setSearchTerm(value), 300),
    [],
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchTerm(event.target.value);
  };

  const filteredRestaurants = useMemo(
    () =>
      dummyRestaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  return (
    <div className="max-w-8xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Find a Restaurant
      </h1>

      <div className="flex flex-wrap gap-4 justify-center items-center bg-[url('/bg.png')] p-6 rounded-lg">
        <Dropdown
          options={dateOptions}
          value={selectedDate}
          onChange={setSelectedDate}
          icon={Calendar}
          label="Select Date"
        />
        <Dropdown
          options={timeOptions}
          value={selectedTime}
          onChange={setSelectedTime}
          icon={Clock}
          label="Select Time"
        />
        <Dropdown
          options={peopleOptions}
          value={selectedPeople}
          onChange={setSelectedPeople}
          icon={Users}
          label="Select People"
        />
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-2 top-2.5 text-gray-500"
            />
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search for restaurants..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
              aria-label="Search restaurants"
            />
          </div>
          <button
            onClick={() => console.log("Search pressed")}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantSelector;
