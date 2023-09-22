import "./App.css";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { UserContextProvider } from "./contexts/user.context";

export default function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}
