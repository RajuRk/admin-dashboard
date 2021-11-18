import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Allstudent from "./components/Allstudent";
import Addstudent from "./components/Addstudent";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    value={{
                      monthly: "30,000",
                      annual: "2,00,000",
                      task: "50%",
                      pending: "18",
                    }}
                  />
                }
              />
              <Route path="/all-student" element={<Allstudent />}></Route>
              <Route path="/add-student" element={<Addstudent />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
