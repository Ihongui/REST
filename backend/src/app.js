const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const app = express();

app.use(express.json());

app.use("/routes/auth", authRoutes);
app.use("/routes/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
