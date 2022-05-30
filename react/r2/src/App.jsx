import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";
import LoginPage from "./Components/LoginPage";
import LogoutPage from "./Components/LogoutPage";


function App() {

    return (
        <BrowserRouter>
        <Routes>
        <Route index element={<Front show="all"/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="leaf" element={<Front show="leaf"/>} />
        <Route path="spike" element={<Front show="spike"/>} />
        <Route path="palm" element={<Front show="palm"/>} />
        <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Back/>
                </RequireAuth>
              }
            />
        </Routes>
        </BrowserRouter>
    )
}
export default App;