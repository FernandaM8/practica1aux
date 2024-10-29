export default function Navbar() {
    return(
        <nav>
            <div>
                <h1 className="logo">LOGO</h1>
            </div>
            <div>
                <ul>
                    <li><a href="">PRINCIPAL</a></li>
                    <li><a href="">CALIFICACION</a></li>
                    <li><a href="">SEGUIDORAS</a></li>
                    <li><a href="">MIS DORAMAS</a></li>
                </ul>
            </div>
            <div>
                <button className="btn">Iniciar Sesion</button>
                <button className="btn">Registrarse</button>
            </div>
        </nav>
    );
}