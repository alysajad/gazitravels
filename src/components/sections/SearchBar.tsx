"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, ChevronDown, ArrowUpRight, Clock, Users } from "lucide-react";

export function SearchBar() {
  const router = useRouter();

  const [journeyType, setJourneyType] = useState("Umrah Package");
  const [duration, setDuration] = useState("14 Days");
  const [customDuration, setCustomDuration] = useState("");
  const [preferredDate, setPreferredDate] = useState("Upcoming Month");
  const [customDate, setCustomDate] = useState("");
  const [travelers, setTravelers] = useState("1 Person");

  const getDurationOptions = (type: string) => {
    switch (type) {
      case "Hajj 2027": return ["30-40 Days (Shifting)", "15-20 Days (Non-Shifting)", "Other"];
      case "Umrah Package": return ["10 Days", "14 Days", "21 Days", "Other"];
      case "Iraq/Iran Ziyarat": return ["7 Days", "10 Days", "15 Days (Arbaeen)", "18 Days (Grand)", "Other"];
      case "Kashmir Tour": return ["5 Days", "7 Days", "10 Days", "Other"];
      default: return ["Other"];
    }
  };

  const getDateOptions = (type: string) => {
    switch (type) {
      case "Hajj 2027": return ["Dhul Hijjah 2027", "Other"];
      case "Umrah Package": return ["Upcoming Month", "Ramadan", "Shawwal", "Other"];
      case "Iraq/Iran Ziyarat": return ["Muharram", "Arbaeen", "Rajab", "Other"];
      case "Kashmir Tour": return ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)", "Other"];
      default: return ["Other"];
    }
  };

  // Reset dependent fields when journey changes
  useEffect(() => {
    setDuration(getDurationOptions(journeyType)[0]);
    setPreferredDate(getDateOptions(journeyType)[0]);
    setCustomDuration("");
    setCustomDate("");
  }, [journeyType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (journeyType === "Hajj 2027") router.push("/hajj-2027");
    else if (journeyType === "Iraq/Iran Ziyarat") router.push("/ziyarat");
    else if (journeyType === "Kashmir Tour") router.push("/kashmir");
    else router.push("/umrah");
  };

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[40px] shadow-floating p-6 md:p-8"
        >
          <h3 className="font-display font-semibold text-xl text-dark mb-6">
            Select <span className="font-bold">Your Journey</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Journey Type */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Journey Type
              </label>
              <div className="relative">
                <select 
                  value={journeyType}
                  onChange={(e) => setJourneyType(e.target.value)}
                  className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-6 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option>Hajj 2027</option>
                  <option>Umrah Package</option>
                  <option>Iraq/Iran Ziyarat</option>
                  <option>Kashmir Tour</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Duration
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                {duration === "Other" ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      autoFocus
                      placeholder="e.g. 12 Days"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="w-full rounded-full bg-gray-50 border border-transparent pl-10 pr-12 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors"
                    />
                    <button 
                      type="button" 
                      onClick={() => setDuration(getDurationOptions(journeyType)[0])}
                      className="absolute right-4 text-gray-400 hover:text-dark text-[10px] font-bold uppercase tracking-wider bg-gray-200 hover:bg-gray-300 px-1.5 py-0.5 rounded-sm transition-colors"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-10 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {getDurationOptions(journeyType).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                )}
                {duration !== "Other" && (
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            {/* Preferred Dates */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Preferred Dates
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                {preferredDate === "Other" ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Custom dates..."
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full rounded-full bg-gray-50 border border-transparent pl-10 pr-12 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors"
                    />
                    <button 
                      type="button" 
                      onClick={() => setPreferredDate(getDateOptions(journeyType)[0])}
                      className="absolute right-4 text-gray-400 hover:text-dark text-[10px] font-bold uppercase tracking-wider bg-gray-200 hover:bg-gray-300 px-1.5 py-0.5 rounded-sm transition-colors"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <select 
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-10 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {getDateOptions(journeyType).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                )}
                {preferredDate !== "Other" && (
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-500">
                Travelers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <select 
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full appearance-none rounded-full bg-gray-50 border border-transparent px-10 py-3.5 text-sm font-medium text-gray-600 focus:border-gray-200 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option>1 Person</option>
                  <option>2 People (Couple)</option>
                  <option>Family (4+)</option>
                  <option>Group (10+)</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end h-[46px]">
              <button
                type="submit"
                className="group h-full inline-flex items-center justify-center gap-2 rounded-full bg-accent pl-6 pr-2 py-2 font-medium text-sm text-dark hover:bg-accent-hover transition-colors duration-fast w-full md:w-auto"
              >
                Search
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
