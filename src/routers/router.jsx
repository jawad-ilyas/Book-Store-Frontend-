import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Home } from '../pages';
import Login from '../component/Login';
import Register from '../component/Register';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <h1>About</h1>
            },
            {
                path: "contact",
                element: <h1>Contact</h1>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "Checkout",
                element: <CheckoutPage />
            },
        ]
    }
])

export default router;