import { BrowserRouter, Routes, Route } from "react-router-dom";

import Editor from "../pages/Editor"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="editor/:projectId/:pageId" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
