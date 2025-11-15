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
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import ManageBooks from '../pages/dashboard/manageBooks/ManageBooks';
import AddBook from '../pages/dashboard/addBook/AddBook';
import UpdateBook from '../pages/dashboard/EditBook/UpdateBook';

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
                <DashboardLayout />
            </AdminRoutes>
        ),
        children: [
            {
                path: "",
                element: (
                    <AdminRoutes>
                        <Dashboard />
                    </AdminRoutes>
                )
            },
            {
                path: "add-new-book",
                element: (
                    <AdminRoutes>
                        <div><AddBook /></div>
                    </AdminRoutes>
                )
            },
            {
                path: "edit-book/:id",
                element: (<AdminRoutes>
                    <UpdateBook />
                </AdminRoutes>)
            },
            {
                path: "delete/:id",
                element: (<AdminRoutes>
                    <div>delete book</div>
                </AdminRoutes>)
            },
            {
                path: "manage-books",
                element: (<AdminRoutes>
                    <ManageBooks />
                </AdminRoutes>)
            },
        ]
    }
])

export default router;