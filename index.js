import axios from "axios";
import express from "express";



const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://random.dog/woof.json");
    res.render("index.ejs", { img: result.data.url });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
