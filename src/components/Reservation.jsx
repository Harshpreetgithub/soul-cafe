import React, { useState } from "react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up — swap this for a real API call (e.g. fetch to
    // your reservations endpoint, or a service like Formspree) when ready.
    setSubmitted(true);
  }

  return (
    <section id="reserve" className="bg-cream px-6 sm:px-10 lg:px-16 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-semibold">
            Reserve Your Table
          </h2>
          <p className="mt-3 text-muted">A quick note is all we need — we'll confirm by phone.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-espresso/10 bg-white/50 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Full Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="input-field rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="input-field rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Date</label>
            <input
              type="date"
              required
              className="input-field rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Party Size</label>
            <select className="input-field rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-sm">
              <option>1 person</option>
              <option defaultValue>2 people</option>
              <option>3 people</option>
              <option>4 people</option>
              <option>5+ people</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-muted">Special Request</label>
            <textarea
              rows={3}
              placeholder="Window seat, birthday cake, dietary notes…"
              className="input-field rounded-lg border border-espresso/15 bg-cream px-4 py-3 text-sm resize-none"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-medium"
            >
              Request Reservation
            </button>
            {submitted && (
              <p className="mt-4 text-sm text-sage">
                Thanks — we'll call you shortly to confirm your table.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
