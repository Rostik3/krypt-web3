import { Navbar, Welcome, Footer, Services, Transactions } from "./Components";
import {
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={
          <>
            <div className="gradient-bg-welcome">
              <Navbar />
              <Welcome />
            </div>
            <Services />
            <Transactions />
            <Footer />
          </>
        } />
        <Route path="login" element={
          <>
            <Login />
            <Footer heightIfLoginPage='h-[30vh]'/>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App;
