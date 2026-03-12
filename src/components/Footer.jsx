import { Link } from 'react-router-dom'
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaBolt, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col">
                            <div className="footer-brand">
                                <img src="/logo.png" alt="EMIRA" className="footer-logo" />
                                <h3>EMIRA</h3>
                            </div>
                            <p className="footer-desc">
                                Electro Maintenance Intervention Rapide — Plus de 30 ans d'expertise
                                en installations électriques et maintenance industrielle en Tunisie.
                            </p>
                            <div className="footer-badge">
                                <FaBolt />
                                <span>SARL au capital 150.000 DT</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4>Navigation</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Accueil</Link></li>
                                <li><Link to="/about">À Propos</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/clients">Références</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Nos Services</h4>
                            <ul className="footer-links">
                                <li><Link to="/services">Installation Électrique</Link></li>
                                <li><Link to="/services">Maintenance Industrielle</Link></li>
                                <li><Link to="/services">Rebobinage Moteurs</Link></li>
                                <li><Link to="/services">Groupes Électrogènes</Link></li>
                                <li><Link to="/services">Dépannage d'Urgence</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>Route de Sousse Km6, Mégrine 2033</span>
                                </li>
                                <li>
                                    <FaPhone />
                                    <a href="tel:+21671432099">71 432 099</a>
                                </li>
                                <li>
                                    <FaFax />
                                    <span>71 433 458</span>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <a href="mailto:emira@emira.tn">emira@emira.tn</a>
                                </li>
                            </ul>
                            <div className="footer-emergency">
                                <FaPhone className="pulse-icon" />
                                <div>
                                    <span className="emergency-label">Urgences 24/7</span>
                                    <a href="tel:+21620832832" className="emergency-number">20 832 832</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} EMIRA — Tous droits réservés. Fondée en 1987.</p>
                    <button className="scroll-top" onClick={scrollToTop} aria-label="Retour en haut">
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}
