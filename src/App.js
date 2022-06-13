import "./App.css";
import User from "./components/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import SearchUser from "./components/Layout/SearchUser";
import { UserProvider } from "./components/context/UserContext";
import Home from "./components/pages/Home";
import UserResults from "./components/user/UserResults";
import Login from "./components/user/login/LoginForm";
import Register from "./components/user/register/Register";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <div className='flex flex-col justify-between h-screen'>
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>

              <Route path='/users/:id' element={<UserResults />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
