import { Outlet } from "react-router-dom";
import SidBar from "../../../components/SidBar/SidBar";


const Dashboard = () => {
    return <div>
        
        <div className="flex ">
            <div className="w-[18%]">
                <SidBar />
            </div>

            <div className="w-[82%]">
                <Outlet />
            </div>
        </div>
    </div>;
};

export default Dashboard;