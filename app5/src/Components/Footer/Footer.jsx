
import "../Footer/Footer.css";

export default function Footer(){
    return <footer className="Footer">
        <div className="container Footer d-flex">
            <div className="w-25">
                <h4 className="px-5">LOCATION</h4>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>

            <div className="w-25">
                <h4>AROUND THE WEB</h4>
                <i className="fa-brands fa-facebook"/>
                <i className="fa-brands fa-twitter"/>
                <i className="fa-brands fa-linkedin"/>
                <i className="fa-solid fa-globe"/>
            </div>

            <div className="w-25">
                <h4 className="px-5">ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        

    </footer>
}

