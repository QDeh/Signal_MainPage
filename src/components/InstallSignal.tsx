import signalIphone from '../assets/signal-iphone.png'
import signalPixel from '../assets/signal-pixel.png'
import Button from './Button.tsx'
import './InstallSignal.css'

export default function Install(){
    return(
        <section className="hero-main">
            <div className="hero-body">
                <div className="container">
                        <div className="text-column">
                            <h1>Exprimez-vous librement</h1>
                            <p className="body1">Ici commence une expérience de messagerie vraiment différente. Entrez dans un
                                monde où la confidentialité et la protection de la vie privée sont de véritables priorités.
                                Retrouvez toutes les fonctionnalités que vous attendez et découvrez celles dont vous ne
                                pourrez plus vous passer.</p>
                            <p> <br/> <Button name="Installer Signal" link="/fr/download/"/></p>
                        </div>
                        <div className="column-mobile-screenshots"> 
                            <img className="screenshot1" src={signalIphone}/>
                            <img className="screenshot2" src={signalPixel}/>
                        </div>
                </div>
            </div>
        </section>
    )
}