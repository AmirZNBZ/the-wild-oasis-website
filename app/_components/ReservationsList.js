"use client";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
import { useOptimistic } from "react";
function ReservationsList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (curBooking, bookingId) => {
    return curBooking.filter((booking) => booking.id !== bookingId);
  });

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default ReservationsList;
