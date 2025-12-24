import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Summary from "./pages/Summary";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}
