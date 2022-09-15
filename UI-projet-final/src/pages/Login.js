import { Link } from "react-router-dom";

export default function LogIn(){
    return(
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-info opacity-5 text-dark">
                <div className="card-body p-5 text-center">

                    <div className="md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">S'identifier</h2>
                    <p className="text-dark-50 mb-5">Entrez votre identifiant et votre mot de passe!</p>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" >Identifiant</label>
                        <input type="text" id="typeuserName" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    </div>

                    <Link to="/admin" className="col-sm-6 m-2">
                        <button className="btn btn-outline-dark btn-lg px-5 mt-5" type="submit">S'identifier</button>
                    </Link>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}