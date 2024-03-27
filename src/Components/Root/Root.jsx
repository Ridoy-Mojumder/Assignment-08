import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Wave from '../../assets/wave.svg'


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[100vh-116px]">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Wave></Wave> */}
            <div>
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;