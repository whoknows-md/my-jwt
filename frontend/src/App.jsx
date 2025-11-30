import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BlogRoutes from "./routes/BlogRoutes";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Blog routes */}
            {BlogRoutes &&
              BlogRoutes.map(({ path, element }) => (
                <Route key={path} path={`/blog/${path}`} element={element} />
              ))}

            <Route path="*" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default App;
