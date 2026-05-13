import NoAdvertising from '../assets/No-Ads.png'
import './NoAds.css'

export default function NoAds(){
    return(
        <section className="section-information">
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column-is-one-third">
                        <h2>Zéro publicité. Zéro cookie de suivi. Vraiment.</h2>
                        <p className="body1"> Ici, aucune publicité, aucune affiliation marketing, zéro cookie de suivi
                            dystopique. Respirez... Et ne pensez qu’à l’essentiel&nbsp;: partager de précieux moments avec
                            ceux et celles qui comptent pour vous.</p>
                    </div>
                    <div className="column"> <img src={NoAdvertising} className='no-ads'/></div>
                </div>
            </div>
        </section>
    )
}