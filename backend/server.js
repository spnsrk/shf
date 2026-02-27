const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const s3 = require("./config/awsConfig");

const imageRoutes = require("./routes/imageRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require('./routes/bookingRoutes');
const donationRoutes = require("./routes/donationRoutes");
const homepageStoryRoutes = require("./routes/homepageStoryRoutes");
const aboutusRoutes1 = require("./routes/aboutBody1Routes");
const aboutusRoutes2 = require("./routes/aboutBody2Routes");
const masonryConfigRoutes = require("./routes/masonryConfigRoutes");
const authRoutes = require("./routes/authRoutes");
const upcomingEventRoutes = require("./routes/upcomingEventRoutes");
const contactUsFormRoutes = require("./routes/contactUsFormRoutes");
const reportAnIssueRoutes = require("./routes/reportAnIssueRoutes");
const registrationformRoutes = require("./routes/registrationFormRoutes");

const mantraRoutes = require("./routes/mantraRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const pdfRoutes = require('./routes/pdfRoutes');
const proxyRoute = require('./routes/proxyRoute');
const publicationAssetsRoutes = require("./routes/publicationAssetsRoutes");

dotenv.config();

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const isProd = process.env.NODE_ENV === "production";
  res.status(500).json({
    message: isProd ? "Internal server error" : (err?.message ?? "Internal server error"),
  });
};

const app = express();
app.set("trust proxy", 1);
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.FRONTEND_ORIGIN ||
      (process.env.NODE_ENV === "production" ? undefined : true),
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

connectDB(); // Database Connection >> db.js

app.use("/api/images", imageRoutes);
app.use("/api/events", eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use("/api/upcomingevents", upcomingEventRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/homepagestory", homepageStoryRoutes);
app.use("/api/aboutus1", aboutusRoutes1);
app.use("/api/aboutus2", aboutusRoutes2);
app.use("/api/masonryconfig", masonryConfigRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contactusform", contactUsFormRoutes);
app.use("/api/reportanissue", reportAnIssueRoutes);
app.use("/api/registrationform", registrationformRoutes);
app.use('/api/download-pdf', pdfRoutes);
app.use('/api', proxyRoute);
app.use("/api/publication-assets", publicationAssetsRoutes);
app.use("/api", mantraRoutes);
app.use("/api", galleryRoutes);

// Serve uploaded files locally in development
if (process.env.NODE_ENV !== 'production') {
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
