import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../config";

function AdminForm() {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    eventImage: null,
    isPaid: false,
    amount: "",
    slots: "",
    eventLocation: "",
    eventDate: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    duration: "",
    eventType: "",
    eventPDF: null,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;

    if (name === "eventImage" && file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    if (name === "eventPDF" && file) {
      setPdfPreview(file);
    }

    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      payload.append("eventTitle", formData.eventTitle);
      payload.append("eventDescription", formData.eventDescription);
      if (formData.eventImage) payload.append("eventImage", formData.eventImage);
      if (formData.eventPDF) payload.append("eventPDF", formData.eventPDF);
      payload.append("isPaid", formData.isPaid);
      if (formData.isPaid) payload.append("amount", formData.amount);
      payload.append("slots", formData.slots);
      payload.append("eventLocation", formData.eventLocation);
      payload.append("eventDate", formData.eventDate);
      payload.append("eventTimeFrom", formData.eventTimeFrom);
      payload.append("eventTimeTo", formData.eventTimeTo);
      payload.append("duration", formData.duration);
      payload.append("eventType", formData.eventType);

      const response = await axios.post(`${API_URL}/events`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResponseMessage(`Event created successfully: ${response.data.eventTitle}`);
      setFormData({
        eventTitle: "",
        eventDescription: "",
        eventImage: null,
        isPaid: false,
        amount: "",
        slots: "",
        eventLocation: "",
        eventDate: "",
        eventTimeFrom: "",
        eventTimeTo: "",
        duration: "",
        eventType: "",
        eventPDF: null,
      });
      setImagePreview(null);
    } catch (error) {
      setResponseMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Event Creation</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*"
              name="eventImage"
              onChange={handleFileChange}
              className="hidden"
              id="eventImage"
            />
            <label
              htmlFor="eventImage"
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Click to upload
            </label>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Event Preview"
                  className="max-w-full h-auto rounded-lg shadow"
                />
              </div>
            )}
            <p className="text-xs text-gray-500 mt-2">Max file size should not exceed 2MB</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input
            type="text"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Paid Event</label>
          <select
            name="isPaid"
            value={formData.isPaid ? "Yes" : "No"}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "isPaid",
                  value: e.target.value === "Yes",
                },
              })
            }
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <div className="flex space-x-4">
            <input
              type="time"
              name="eventTimeFrom"
              value={formData.eventTimeFrom}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
              placeholder="From"
            />
            <input
              type="time"
              name="eventTimeTo"
              value={formData.eventTimeTo}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
              placeholder="To"
            />
          </div>
        </div>

        {formData.isPaid && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Charge Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min="0"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Slots Available</label>
          <input
            type="number"
            name="slots"
            value={formData.slots}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="E.g., 2 hours"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          >
            <option value="">Select Event Type</option>
            <option value="Fixed Event">Fixed Event</option>
            <option value="Upcoming Event">Upcoming Event</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center" style={{ borderRadius: "8px", background: "#F1F1F5" }}>
            <input
              type="file"
              accept="application/pdf"
              name="eventPDF"
              onChange={handleFileChange}
              className="hidden"
              id="eventPDF"
            />
            <label
              htmlFor="eventPDF"
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Click to upload PDF
            </label>
          </div>
          {pdfPreview && (
            <div className="mt-4">
              <a
                href={URL.createObjectURL(pdfPreview)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {pdfPreview.name}
              </a>
            </div>
          )}
        </div>


        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#1E1E1E] font-[Source Sans Pro] text-[14px] font-normal leading-[19.2px] tracking-[0.14px]"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Submit
          </button>
        </div>
      </form>

      {responseMessage && (
        <div
          className={`mt-6 p-4 text-center text-sm font-semibold rounded-lg ${responseMessage.startsWith("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
}

export default AdminForm;