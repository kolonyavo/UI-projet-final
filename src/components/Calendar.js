import './calendar.css';

export default function Calendar(){
    function date(){
        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getFullYear()}`;
        return(
            <p>{date}</p>
        );
    }
    return(
        <>
        <div className="container text-center fs-4 mt-5 calendar">{date()}
                <div className="table-responsive">
                    <table className="table table-bordered text-center text-light">
                        <thead>
                            <tr className="bg-light-gray text-dark">
                                <th className="text-uppercase">Heure
                                </th>
                                <th className="text-uppercase">Lundi</th>
                                <th className="text-uppercase">Mardi</th>
                                <th className="text-uppercase">Mercredi</th>
                                <th className="text-uppercase">Jeudi</th>
                                <th className="text-uppercase">Vendredi</th>
                                <th className="text-uppercase">Samedi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='fs-4'>
                                <td className="align-middle">08:00-10:00</td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>

                            </tr>
                            <tr classNameName='fs-4'>
                                <td className="align-middle">10:00-12:00</td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>

                            </tr>
                            <tr classNameName='fs-4'>
                                <td className="align-middle">13:00-15:00</td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>

                            </tr>
                            <tr classNameName='fs-4'>
                                <td className="align-middle">15:00-16:00</td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>
                                <td>
                                    <span className="padding-5px-tb text-white font-size16 "></span>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></>
    );
}