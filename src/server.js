const { app } = require("./app");
const { dbConnect } = require("./utils/dbConnect");

const port = process.env.PORT || 5000;

const serverStarts = async () => {
  try {
    await dbConnect();
    app.listen(port, () => {
      console.log("🔰 MongoDB connect on port", port);
    });
  } catch (error) {
    console.log("DB ERROR", error);
  }
};

serverStarts();