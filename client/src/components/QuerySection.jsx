import { useState } from "react";

const QuerySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", area: "", message: "" });
      } else {
        setError(data.message || "Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      setError("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="query-section"
      className="w-full bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch with <span className="text-blue-600">Medcron Healthcare</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a question about our products or partnership opportunities? Reach out to us!
          </p>
          <p className="text-gray-700 font-medium">📍 Based in India</p>
          <p className="text-gray-700 font-medium">
            ✉️ Email: <span className="text-blue-600">medcronhealthcare@gmail.com</span>
          </p>
          <p className="text-gray-700 font-medium">
            📞 Phone: <span className="text-blue-600">+91 1244383379</span>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="Enter your name"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Area */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Working Area/City</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                placeholder="Enter your city or working area"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                rows="4"
                placeholder="Type your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;
