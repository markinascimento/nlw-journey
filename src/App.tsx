// -> Routing lib
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// -> Pages
import { CreateTrip } from "./pages/create-trip";
import TripDetails from './pages/trip-details';

const router = createBrowserRouter([
  { path: '/', element: <CreateTrip /> },
  { path: '/trips/:tripId', element: <TripDetails /> }
])

export function App() {
  return (
    <RouterProvider router={router} /> 
  )
}
