const User = require("../models/user");

// Save booking
exports.createBooking = async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.json({ message: "Booking Saved ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};