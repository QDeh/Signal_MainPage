import NonProfit from '../assets/Nonprofit503.png'
import Button from './Button'
import './Price.css'

export default function Price(){
    return(
        <section className="section-information">
        <div className="container">
                <div className="column-is-hidden-touch"> <img src={NonProfit} className="price"/>
                </div>
                <div className="column-price">
                    <h2>Une appli gratuite pour tous</h2>
                    <p className="body1"> Signal est un organisme indépendant à but non lucratif. Nous ne sommes liés à
                        aucune grande entreprise technologique et ne serons jamais achetés par l’une d’elles. Pour
                        continuer à développer notre application, nous dépendons des subventions, mais aussi des dons de
                        personnes comme vous. <br/> <br/> 
                        <Button name="Faire un don à Signal" link="/fr/donate"/>
                    </p>
                </div>
        </div>
    </section>
    )
}