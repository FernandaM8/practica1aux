import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <Navbar></Navbar>
            <div className="header-principal">
                <div>
                    <h1>LA LEYENDA DEL MAR AZUL</h1>
                    <p>
                        Legend of the Blue Sea (en hangul,푸른 바다의 전설; romanización revisada del coreano, Puleun badaui jeonseol)​ es una serie de televisión surcoreana de fantasía emitida por SBS entre 2016 y 2017, cuya trama está inspirada en una leyenda clásica de la era Joseon obtenida desde la colección Eou Yadam (어우야담) de Yoo Mong-in, que narra sobre un hombre que libera una sirena cautiva, desarrollándose la historia de la serie entre el año 1598 y el presente, momento en que la sirena regresa y en la modernidad se encuentra con el doppelgänger de aquel hombre.​​
                        <br/>
                        Protagonizada por Jeon Ji-hyun y Lee Min-ho,​ la trama y guion de The Legend of the Blue Sea fueron creados Park Ji-eun (My Love from the Star) y dirigida por Jin Hyuk (Doctor Stranger), en grabaciones que se llevaron a cabo principalmente en Seúl y las provincias de Chungcheong del Norte y Jeju, también fue filmada en Palaos y en localizaciones de Cataluña y Galicia, donde se desarrolló el inicio de la serie, que fue transmitida en su país de origen desde el 16 de noviembre de 2016, hasta el 26 de enero de 2017.​​
                    </p>
                </div>
                <div>
                    <img src="./dorama.jfif" alt="majadito" />
                </div>
            </div>
        </header>
    );
}