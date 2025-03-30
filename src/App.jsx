import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/support/Support.jsx";
import TransactionPage from "./pages/Transaction/Transaction.jsx";
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
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
