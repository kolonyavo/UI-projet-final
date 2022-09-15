import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function AdhModif() {
    return (
        <>
            <Navbar />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-sm-8">
                            <div className="card bg-secondary opacity-5 text-dark">
                                <div className="card-body p-5 text-center">

                                    <div className="md-5 mt-md-4">

                                        <h2 className="fw-bold mb-5 text-uppercase text-light">Adherent</h2>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >ID:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >Email:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >First name:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >Last Name:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >Number phone:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4 d-flex column">
                                            <label className="form-label col-sm-2 fs-5 text-light" >Status:</label>
                                            <input type="text" id="typeuserName" className="form-control form-control-lg" />
                                        </div>

                                        <Link to="/admin">
                                            <button className="btn btn-outline-light btn-lg mt-4" type="submit">Modifier</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}