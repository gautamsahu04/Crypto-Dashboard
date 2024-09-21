import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
