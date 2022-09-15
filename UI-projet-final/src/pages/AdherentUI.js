import Calendar from "../components/Calendar";

export default function AdherentUI() {
    return (
        <>
            <nav class="navbar bg-info sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Cours Particuliers</a>
                </div>
            </nav>
            <Calendar />
        </>
    );
}