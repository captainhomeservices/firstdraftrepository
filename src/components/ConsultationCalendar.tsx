import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface ConsultationCalendarProps {
  onSelectTime: (date: string, time: string) => void;
}

const ConsultationCalendar: React.FC<ConsultationCalendarProps> = ({ onSelectTime }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const consultationDays = [1, 3, 5]; // Monday, Wednesday, Friday
  const timeSlots = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const isAvailableDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return false;

    const dayOfWeek = date.getDay();
    return consultationDays.includes(dayOfWeek);
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (isAvailableDate(date)) {
      setSelectedDate(date);
      setSelectedTime('');
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      setSelectedTime(time);
      const dateStr = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      onSelectTime(dateStr, time);

      // Scroll to form
      const formElement = document.getElementById('consultation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null);
    setSelectedTime('');
  };

  const prevMonth = () => {
    const today = new Date();
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);

    // Don't go to previous month if it's before current month
    if (prevMonthDate.getMonth() < today.getMonth() && prevMonthDate.getFullYear() <= today.getFullYear()) {
      return;
    }

    setCurrentMonth(prevMonthDate);
    setSelectedDate(null);
    setSelectedTime('');
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-12"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const isAvailable = isAvailableDate(date);
    const isSelected = selectedDate?.getDate() === day &&
                       selectedDate?.getMonth() === currentMonth.getMonth();

    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={!isAvailable}
        className={`
          h-12 rounded-lg text-sm font-medium transition-all
          ${isAvailable
            ? isSelected
              ? 'bg-teal-600 text-white shadow-lg transform scale-105'
              : 'bg-green-100 text-green-800 hover:bg-green-200 hover:shadow-md'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <div className="flex items-center justify-center mb-6">
        <Calendar className="h-6 w-6 text-teal-600 mr-2" />
        <h3 className="text-2xl font-bold text-gray-900">
          Schedule Your Consultation
        </h3>
      </div>

      <p className="text-center text-gray-600 mb-6">
        Available Monday, Wednesday & Friday from 12:00 PM - 4:00 PM
      </p>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors"
        >
          ← Previous
        </button>
        <h4 className="text-lg font-semibold text-gray-900">{monthName}</h4>
        <button
          onClick={nextMonth}
          className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarDays}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="border-t pt-6">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-5 w-5 text-teal-600 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900">
              Select a Time
            </h4>
          </div>
          <p className="text-center text-gray-600 mb-4">
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`
                  px-4 py-3 rounded-lg font-medium transition-all
                  ${selectedTime === time
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationCalendar;
