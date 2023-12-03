import { Route, Routes } from "react-router-dom";
import './index.css'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
