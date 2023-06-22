import { RouteObject } from "react-router-dom";
import DLayout from "../pages/Dashboard/d-layout";
import DHome from "../pages/Dashboard/d-home";
import DRoom from "../pages/Dashboard/d-room";


const routerDashboard: RouteObject[] = [
    {
        path: '/dashboard',
        element: <DLayout />,
        children: [
            {
                path: '',
                element: <DHome />
            },
            {
                path: 'room',
                element: <DRoom />
            }
        ]
        
    }
]

export default routerDashboard