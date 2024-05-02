import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./pages/Detail";
import EditPost from "./pages/EditPost";
import AddPost from "./pages/AddPost";

const EditPage = EditPost(Detail)
const AddPage = AddPost(Detail)

export const router = createBrowserRouter([
    {path:"/", element: <App/>},
    {path:"/:id", element: <EditPage/>},
    {path:"/add", element: <AddPage/>}
])