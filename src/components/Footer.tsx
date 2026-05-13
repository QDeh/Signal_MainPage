import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column is-two-fifths is-hidden-mobile"> <span className="copyright">© 2013-2026 Signal,
                        organisme à but non lucratif.</span><br/> «&nbsp;Signal&nbsp;», les logos Signal et autres
                    marques Signal sont des marques commerciales ou des marques déposées de la Signal Technology
                    Foundation aux États-Unis et dans d’autres pays. <a href="/brand/">Cliquez&nbsp;ici pour en savoir
                        plus</a>. <br/> <br/> Contacts presse&nbsp;: <a
                        href="mailto:press@signal.org">press@signal.org</a></div>
                <div className="column"> <strong>Organisation</strong>
                    <ul>
                        <li> <a href="/fr/donate/">Faire un don</a></li>
                        <li> <a href="/workworkwork/">Carrières</a></li>
                        <li> <a href="/blog/">Blog</a></li>
                        <li> <a href="/brand/">Actifs de la marque</a></li>
                        <li> <a href="/legal/">Conditions générales d’utilisation et règles de confidentialité</a></li>
                    </ul>
                </div>
                <div className="column"> <strong>Téléchargement</strong>
                    <ul>
                        <li> <a href="/fr/download/android/">Android</a></li>
                        <li> <a href="/fr/download/ios/">iPhone &amp; iPad</a></li>
                        <li> <a href="/fr/download/windows/">Windows</a></li>
                        <li> <a href="/fr/download/macos/">Mac</a></li>
                        <li> <a href="/fr/download/linux/">Linux</a></li>
                    </ul>
                </div>
                <div className="column"> <strong>Réseaux sociaux</strong>
                    <ul>
                        <li> <a href="https://bsky.app/profile/signal.org" target="_blank">Bluesky</a></li>
                        <li> <a href="https://github.com/signalapp" target="_blank">GitHub</a></li>
                        <li> <a href="https://www.instagram.com/signal_app/" target="_blank">Instagram</a></li>
                        <li> <a href="https://mastodon.world/@signalapp" target="_blank">Mastodon</a></li>
                        <li> <a href="https://x.com/signalapp" target="_blank">X</a></li>
                    </ul>
                </div>
                <div className="column"> <strong>Aide</strong>
                    <ul>
                        <li> <a href="https://support.signal.org/hc/fr">Centre d’assistance</a></li>
                        <li> <a href="https://community.signalusers.org/">Communauté</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}