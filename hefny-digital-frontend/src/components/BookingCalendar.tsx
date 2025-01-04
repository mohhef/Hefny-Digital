"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from "@/components/ui/button";

moment.locale("en");
const localizer = momentLocalizer(moment);

export default function BookingCalendar() {
  const t = useTranslations("bookingCalendar");
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  const { messages, formats } = useMemo(
    () => ({
      messages: {
        week: t("week"),
        work_week: t("workWeek"),
        day: t("day"),
        month: t("month"),
        previous: t("previous"),
        next: t("next"),
        today: t("today"),
        agenda: t("agenda"),
      },
      formats: {
        monthHeaderFormat: (date: Date) => moment(date).format("MMMM YYYY"),
        weekdayFormat: (date: Date) => moment(date).format("ddd"),
      },
    }),
    [t]
  );

  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedSlot(start);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      // Here you would typically call an API to book the slot
      console.log(`Booking slot: ${selectedSlot}`);
      alert(
        t("bookingConfirmation", { date: moment(selectedSlot).format("LLLL") })
      );
    }
  };
  
  return (
    <div className="h-[600px]">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        selectable
        onSelectSlot={handleSelectSlot}
        messages={messages}
        formats={formats}
      />
      {selectedSlot && (
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            {t("selectedDate")} {moment(selectedSlot).format("LLLL")}
          </p>
          <Button className="mt-2" onClick={handleBooking}>
            {t("bookButton")}
          </Button>
        </div>
      )}
    </div>
  );
}
