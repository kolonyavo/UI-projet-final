import Calendar from "../components/Calendar";
import Navbar from "../components/Navbar";

export default function Admin() {
    return (
        <>
            <Navbar/>
            <div className="container m-2 text-center m-5">
                <Calendar />
            </div>
        </>
    );
}