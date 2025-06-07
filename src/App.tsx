import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Workspace from "./pages/workspace/workspace";
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
