import Homepage from "./pages/Homepage"
import DetailMovie from "./pages/DetailMovie"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
