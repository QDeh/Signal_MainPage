import Animation from '../assets/animation.png'
import './Securite.css'

export default function Securite(){
    return (
        <section className="section-information">
        <div className="container">
                <div className="column-is-one-third">
                    <h2>Zéro compromis sur la sécurité</h2>
                    <p className="body1"> Nous avons développé une méthode de chiffrement de&nbsp;bout en&nbsp;bout
                        ultramoderne, qui s’appuie sur notre protocole open&nbsp;source pour assurer la sécurité de vos
                        conversations. Nous ne pouvons ni lire vos messages, ni écouter vos appels. En clair&nbsp;: vous
                        seul y avez accès. Et personne d’autre. La confidentialité n’est pas une option
                        facultative&nbsp;: elle fait partie de notre ADN. Intégrée au cœur de Signal dès sa conception,
                        elle s’applique à tous les messages, à tous les appels, tout le temps.</p>
                </div>
                <div className='animation-column'>
                <div className="column"> <img src={Animation} className='animation'/></div>
                </div>
            </div>
    </section>
    )
}