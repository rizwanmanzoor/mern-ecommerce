import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" richColors />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Admin Layout */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
