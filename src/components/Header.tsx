import signalLogo from '../assets/logo.png'
import solidGlobe from '../assets/solid_globe.svg'
import './Header.css'

export default function Header(){
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
                <a className='logo-link' href="/fr/#signal"> 
                    <img className="signal-logo" src={signalLogo}/> 
                </a>
                <ul className="navbar-list">
                    <li className='navbar-item-link'><a className="navbar-item" href="/fr/download/">Installer Signal</a></li> 
                    <li className='navbar-item-link'><a className="navbar-item" href="https://support.signal.org/hc/fr">Aide</a></li>
                    <li className='navbar-item-link'><a className="navbar-item" href="/blog/">Blog</a></li>
                    <li className='navbar-item-link'><a className="navbar-item" href="/docs/">Développeurs</a></li>
                    <li className='navbar-item-link'><a className="navbar-item" href="/workworkwork/">Carrières</a></li>
                    <li className='navbar-item-link'><a className="navbar-item" href="/fr/donate/">Faire un don</a></li>
                    <li className='navbar-item-link'><a className="navbar-item" href="#" aria-haspopup="true" aria-expanded="false" aria-label="Change Language" id="language-selector"><img className="icon-globe" src={solidGlobe}/> Français</a></li>
                </ul>
            </div>
        </nav>
    )
}