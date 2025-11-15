import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Home } from '../pages';
import Login from '../component/Login';
import Register from '../component/Register';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import SingleBook from '../pages/book/SingleBook';
import PrivateRoutes from './PrivateRoutes';
import Order from '../pages/order/Order';
import AdminRoutes from './AdminRoutes';
import AdminLogin from '../component/AdminLogin';

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
                element: (
                    <PrivateRoutes>
                        <CheckoutPage />
                    </PrivateRoutes>
                )
            },
            {
                path: "book/:id",
                element: <SingleBook />
            },
            {
                path: "order/:email",
                element: <Order />
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "/dashboard",
        element: (
            <AdminRoutes>
                <div>Dashboard Home</div>
            </AdminRoutes>
        ),
        children: [
            {
                path: "",
                element: (
                    <AdminRoutes>
                        <div>Dashboard Home</div>
                    </AdminRoutes>
                )
            },
            {
                path: "create-book",
                element: (
                    <AdminRoutes>
                        <div>create book</div>
                    </AdminRoutes>
                )
            },
            {
                path: "edit/:id",
                element: (<AdminRoutes>
                    <div>edit book</div>
                </AdminRoutes>)
            },
            {
                path: "delete/:id",
                element: (<AdminRoutes>
                    <div>delete book</div>
                </AdminRoutes>)
            },
        ]
    }
])

export default router;