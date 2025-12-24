import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import contentRoutes from "./routes/content.js";

import { loadContent } from "./services/contentStore.js";

await loadContent();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/chats", chatRoutes);
app.use("/api/content", contentRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})