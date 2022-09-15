import { Link } from "react-router-dom";
import '../App.css';

export default function Home() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="d-flex flex-column mb-3">
                <div className="p-5 pb-3">
                    <h1 className="text-center text-info pt-5">Continuer en tant que</h1>
                </div>
                <div className="p-2 text-center">
                    <Link to="/home" className="m-3">
                        <button className="btn btn-outline-info">
                            <h4 className="p-2">Etudiant</h4>
                        </button>
                    </Link>
                    <Link to="/login" className="m-3">
                        <button className="btn btn-outline-info">
                            <h4 className="p-2">Admin</h4>
                        </button>
                    </Link>
                </div>
                <div className="p-4 pb-3 text-center"><p className="fs-5 fst-italic text-info opacity-75">Gestion de cours particuliers chez HEI</p></div>
            </div>
            </div>
        </>
    );
}