import React from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const events = [
  { date: 1, title: "Check-in: Room 101", type: "check-in" },
  { date: 3, title: "Check-out: Room 203", type: "check-out" },
  { date: 5, title: "Spa Appointment", type: "personal" },
  { date: 10, title: "Business Conference", type: "work" },
  { date: 12, title: "Room Service Order", type: "personal" },
  { date: 15, title: "Wedding Reception", type: "event" },
  { date: 18, title: "Guest Feedback Meeting", type: "work" },
  { date: 20, title: "Staff Training", type: "work" },
  { date: 22, title: "Live Music Night", type: "event" },
  { date: 25, title: "VIP Dinner", type: "event" },
  { date: 28, title: "Movie Night", type: "personal" },
  { date: 30, title: "End of Month Review", type: "work" },
];

const holidays = [6, 13, 20, 27]; // Special event days

const CalendarComponent = () => {
  const daysInMonth = 31;
  const firstDayOfMonth = 1; // Monday

  const generateCalendarDays = () => {
    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-1 sm:p-2"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const event = events.find((e) => e.date === i);
      const isHoliday = holidays.includes(i);
      days.push(
        <div
          key={i}
          className={`p-1 sm:p-2 border border-gray-800 ${isHoliday ? "bg-[#F3F0E9]" : ""} flex flex-col`}
        >
          <div
            className={`font-bold ${isHoliday ? "text-red-600" : "text-red-800"} font-sharp text-xl sm:text-2xl`}
          >
            {i}
          </div>
          {event && (
            <div
              className={`text-sm mt-auto ${
                event.type === "work"
                  ? "text-red-400"
                  : event.type === "personal"
                    ? "text-gray-400"
                    : "text-red-600 font-bold"
              } font-sharp`}
            >
              {event.title}
            </div>
          )}
        </div>,
      );
    }
    return days;
  };

  return (
    <div className="w-full px-20  h-screen flex flex-col  bg-[#F3F0E9]  text-red-800 overflow-hidden">
      <div className="flex justify-between items-center bg-[#F3F0E9] px-4 sm:px-6 py-2 sm:py-4">
        <button className="text-red-800 hover:text-red-200 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-4xl sm:text-5xl font-bold flex items-center font-sharp">
          <Calendar size={24} className="mr-2 sm:mr-3" />
          October 2024
        </h2>
        <button className="text-red-800 hover:text-red-200 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex-grow grid grid-cols-7 gap-1 p-2 sm:p-4 bg-[#F3F0E9]">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center font-bold text-red-600 text-sm sm:text-lg font-sharp"
          >
            {day}
          </div>
        ))}
        {generateCalendarDays()}
      </div>
    </div>
  );
};

export default CalendarComponent;
