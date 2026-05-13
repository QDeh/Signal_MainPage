import Media from '../assets/Media.png'
import Calls from '../assets/Calls.png'
import Stickers from '../assets/Stickers.png'
import Groups from '../assets/Groups.png'
import FeatureTile from './FeatureTile'
import './Features.css'

export default function Features(){
    return(
        <section className="section-features">
            <div className="container">
                <div className="columns is-centered">
                    <div className="tile-outside">
                        <FeatureTile name="Des échanges illimités" link={Media} description="Partagez gratuitement des messages texte, des messages vocaux, des photos, des
                                vidéos et des GIF. Signal utilise la connexion de données de votre téléphone, ce qui vous
                                épargne les coûts liés à l’envoi de SMS et de MMS."/>
                    </div>
                    <div className="tile-outside">
                        <FeatureTile name="Exprimez-vous librement" link={Calls} description="Passez des appels vocaux et vidéo de très grande qualité, que vos
                                interlocuteurs se trouvent à l’autre bout de la ville ou à l’autre bout du monde. Le tout,
                                gratuitement."/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="columns is-centered">
                    <div className="tile-outside">
                        <FeatureTile name="Une confidentialité à 360°&nbsp;– même pour les stickers" link={Stickers} description="Avec nos stickers chiffrés, exprimez-vous encore plus librement. Vous êtes même
                                libre de créer et de partager vos propres packs de stickers."/>
                        
                    </div>
                    <div className="tile-outside">
                        <FeatureTile name="Des groupes pour se retrouver" link={Groups} description="Avec les conversations de groupe, garder le contact avec votre famille, vos
                                amis et vos collègues n’a jamais été aussi simple."/>
                    </div>
                </div>
            </div>
        </section>
    )
}