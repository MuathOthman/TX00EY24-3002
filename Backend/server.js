const express = require("express");
const connectDB = require("./config/db");
const userLogger = require("./middleware/userLogger");
const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(userLogger);
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/users", require("./routes/userRoutes"), require("./routes/propertyRoutes"));
app.use("/api/property", require("./routes/propertyRoutes"));
app.use("/api/chart1", require("./routes/chart1Routes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
