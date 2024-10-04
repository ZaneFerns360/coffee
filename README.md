"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  Clock,
  Users,
  ChevronDown,
  Filter,
  X,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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

  {
    id: "4",
    name: "Spice Haven",
    cuisine: "Indian",
    location: "Mumbai Central",
    rating: 4.5,
    imageUrl: "pic1.jpg",
  },
  {
    id: "5",
    name: "Sushi Express",
    cuisine: "Japanese",
    location: "Bandra West",
    rating: 4.3,
    imageUrl: "pic2.jpg",
  },
  {
    id: "6",
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
  <div className="relative w-full lg:w-52">
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

const cuisineOptions = [
  "All",
  "Indian",
  "Japanese",
  "Italian",
  "Mexican",
  "Chinese",
  "Thai",
  "French",
];
const priceRangeOptions = ["$", "$$", "$$$", "$$$$"];

const FilterSidebar = ({ filters, setFilters, applyFilters, resetFilters }) => (
  <div className="filter-sidebar">
    <div className="flex justify-between items-center mb-6">
      <h2>Filters</h2>
      <button onClick={resetFilters} className="text-red-600 font-medium">
        Reset
      </button>
    </div>

    <div>
      <h3>Cuisine</h3>
      <div className="grid grid-cols-1 gap-2">
        {cuisineOptions.map((cuisine) => (
          <div key={cuisine} className="flex items-center">
            <Checkbox
              id={cuisine}
              checked={filters.cuisines.includes(cuisine)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setFilters({
                    ...filters,
                    cuisines: [...filters.cuisines, cuisine],
                  });
                } else {
                  setFilters({
                    ...filters,
                    cuisines: filters.cuisines.filter((c) => c !== cuisine),
                  });
                }
              }}
            />
            <label htmlFor={cuisine} className="ml-2">
              {cuisine}
            </label>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3>Price Range</h3>
      <div className="flex space-x-2">
        {priceRangeOptions.map((price) => (
          <button
            key={price}
            className={`px-4 py-2 rounded-md border ${
              filters.priceRange.includes(price)
                ? "bg-red-500 text-white"
                : "border-gray-300 text-gray-600"
            }`}
            onClick={() => {
              if (filters.priceRange.includes(price)) {
                setFilters({
                  ...filters,
                  priceRange: filters.priceRange.filter((p) => p !== price),
                });
              } else {
                setFilters({
                  ...filters,
                  priceRange: [...filters.priceRange, price],
                });
              }
            }}
          >
            {price}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h3>Minimum Rating</h3>
      <Slider
        min={0}
        max={5}
        step={0.5}
        value={[filters.minRating]}
        onValueChange={([value]) =>
          setFilters({ ...filters, minRating: value })
        }
      />
      <p className="text-gray-500 mt-2">{filters.minRating} stars and above</p>
    </div>

    <div>
      <h3>Distance</h3>
      <Slider
        min={0}
        max={20}
        step={1}
        value={[filters.maxDistance]}
        onValueChange={([value]) =>
          setFilters({ ...filters, maxDistance: value })
        }
      />
      <p className="text-gray-500 mt-2">Within {filters.maxDistance} km</p>
    </div>

    <button className="apply-btn" onClick={applyFilters}>
      Apply Filters
    </button>
  </div>
);

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => (
  <div className="bg-white rounded-lg shadow-md  w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={restaurant.imageUrl}
      alt={restaurant.name}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.cuisine} Cuisine</p>

      <div className="flex items-center mt-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <p className="ml-2 text-gray-800">{restaurant.rating} stars</p>
      </div>

      <div className="flex justify-between text-gray-600">
        <p className="price-range">Price: {restaurant.priceRange || "$$"}</p>
        <p className="distance">{restaurant.distance || 5} km away</p>
      </div>

      <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
        Reserve a Table
      </button>
    </div>
  </div>
);
const RestaurantSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedPeople, setSelectedPeople] = useState("2");
  const [filters, setFilters] = useState({
    cuisines: [],
    priceRange: [],
    minRating: 0,
    maxDistance: 20,
  });
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const debouncedSearchTerm = useMemo(
    () => debounce((value) => setSearchTerm(value), 300),
    [],
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchTerm(event.target.value);
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      cuisines: [],
      priceRange: [],
      minRating: 0,
      maxDistance: 20,
    };
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  };

  const filteredRestaurants = useMemo(
    () =>
      dummyRestaurants.filter(
        (restaurant) =>
          (searchTerm === "" ||
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisine
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) &&
          (appliedFilters.cuisines.length === 0 ||
            appliedFilters.cuisines.includes("All") ||
            appliedFilters.cuisines.includes(restaurant.cuisine)) &&
          restaurant.rating >= appliedFilters.minRating,
        // Add more filter conditions here (e.g., price range, distance)
      ),
    [searchTerm, appliedFilters],
  );

  return (
    <div className="max-w-8xl mx-auto bg-gray-100 min-h-screen ">
      <h1 className="text-4xl font-extrabold py-8 text-center">
        Find Your Perfect Restaurant
      </h1>

      <div className="flex flex-wrap gap-4 justify-center bg-gray-800 text-white items-center bg-white p-6 shadow-md mb-8">
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
          <Button className=" w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
            Search
          </Button>
        </div>
      </div>
      <div className="flex  justify-center gap-4 ">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSelector;
