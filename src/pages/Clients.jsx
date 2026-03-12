import { FaBuilding, FaLandmark, FaHotel, FaIndustry, FaHospital, FaUniversity, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Clients.css'

const publicClients = [
    { name: 'STEG', desc: 'Société Tunisienne de l\'Électricité et du Gaz', icon: <FaBolt /> },
    { name: 'Tunisie Télécom', desc: 'Sfax, Médenine, Tataouine, Zaghouan, Kasserine, Mahdia, Sousse, Monastir, Bizerte...', icon: <FaBuilding /> },
    { name: 'ONAS', desc: 'Office National de l\'Assainissement', icon: <FaLandmark /> },
    { name: 'ONT', desc: 'Office National de la Télédiffusion', icon: <FaBuilding /> },
    { name: 'Présidence du Gouvernement', desc: 'Premier Ministère', icon: <FaLandmark /> },
    { name: 'Min. Affaires Étrangères', desc: 'Ministère des Affaires Étrangères', icon: <FaLandmark /> },
    { name: 'Min. de la Santé', desc: 'Ministère de la Santé Publique', icon: <FaLandmark /> },
    { name: 'Min. de l\'Agriculture', desc: 'Ministère de l\'Agriculture', icon: <FaLandmark /> },
    { name: 'Min. de l\'Enseignement', desc: 'Ministère de l\'Enseignement', icon: <FaLandmark /> },
    { name: 'Min. des Finances', desc: 'Ministère des Finances', icon: <FaLandmark /> },
    { name: 'Min. de la Culture', desc: 'Ministère de la Culture', icon: <FaLandmark /> },
    { name: 'Min. de l\'Intérieur', desc: 'Municipalités', icon: <FaLandmark /> },
    { name: 'CNSS', desc: 'Caisse Nationale de Sécurité Sociale — Siliana', icon: <FaBuilding /> },
    { name: 'Hôpital Rabta', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'Hôp. Fattouma Bourguiba', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'Hôp. Aziza Othmana', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'Hôp. Ben Arous', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'Hôp. M. Slim', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'Hôp. Ben Guerden', desc: 'Centre hospitalier', icon: <FaHospital /> },
    { name: 'SNCFT', desc: 'Société Nationale des Chemins de Fer Tunisiens', icon: <FaBuilding /> },
    { name: 'ANPE', desc: 'Agence Nationale Pour l\'Emploi', icon: <FaBuilding /> },
    { name: 'ATTT', desc: 'Agence Technique des Transports Terrestres', icon: <FaBuilding /> },
    { name: 'OCT', desc: 'Office de Commerce Tunisien — 15 Gouvernorats', icon: <FaBuilding /> },
    { name: 'ISET Com Ghazala', desc: 'Institut Supérieur des Études Technologiques', icon: <FaUniversity /> },
    { name: 'Cité des Sciences', desc: 'Centre scientifique et culturel', icon: <FaUniversity /> },
    { name: 'CRDA', desc: 'Commissariat Régional au Développement Agricole', icon: <FaBuilding /> },
    { name: 'Agil', desc: 'Distribution de carburants', icon: <FaBuilding /> },
    { name: 'Office des Céréales', desc: 'Office des Céréales', icon: <FaBuilding /> },
    { name: 'Office des Terres Domaniales', desc: 'Gestion des terres domaniales', icon: <FaBuilding /> },
    { name: 'Centre de Tri Postal', desc: 'La Poste Tunisienne', icon: <FaBuilding /> },
    { name: 'CERT', desc: 'Centre d\'Études et de Recherches', icon: <FaUniversity /> },
    { name: 'Conservation Foncière', desc: 'Registre foncier', icon: <FaLandmark /> },
    { name: 'Agence des Fréquences', desc: 'Gestion du spectre de fréquences', icon: <FaBuilding /> },
    { name: 'Régie des Alcools', desc: 'Régie des Alcools', icon: <FaBuilding /> },
    { name: 'Régie du Matériel', desc: 'Régie du Matériel', icon: <FaBuilding /> },
]

const privateCategories = [
    { name: 'Hôtels', desc: 'Hôtel Africa et autres établissements touristiques', icon: <FaHotel /> },
    { name: 'Industrielles', desc: 'Usines et complexes industriels', icon: <FaIndustry /> },
    { name: 'Agroalimentaires', desc: 'Industrie alimentaire et transformation', icon: <FaIndustry /> },
    { name: 'Matériaux de Construction', desc: 'Fabrication et distribution', icon: <FaBuilding /> },
    { name: 'Verrerie', desc: 'Industries verrières', icon: <FaIndustry /> },
    { name: 'Matériel Sanitaire', desc: 'Tunisie Porcelaine et autres', icon: <FaBuilding /> },
    { name: 'Presse Écrite', desc: 'Médias et imprimeries', icon: <FaBuilding /> },
    { name: 'Confection', desc: 'Industrie textile — COATS Tunisie, GST', icon: <FaIndustry /> },
    { name: 'Automobile', desc: 'VISTEON, Autronic', icon: <FaIndustry /> },
    { name: 'Aviculture', desc: 'Sotavi et autres', icon: <FaIndustry /> },
]

const regions = [
    'Tunis', 'Ben Arous', 'Mégrine', 'Sfax', 'Sousse', 'Monastir',
    'Bizerte', 'Zaghouan', 'Kasserine', 'Mahdia', 'Médenine',
    'Tataouine', 'Siliana', 'Akouda', 'Ben Guerden',
]



export default function Clients() {
    return (
        <div className="clients-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>Nos <span className="text-red">Références</span></h1>
                    <p>Plus de 200 clients nous font confiance depuis 1987</p>
                </div>
            </section>

            {/* Public Clients */}
            <section className="clients-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Secteur Public</div>
                            <h2>Institutions & Organismes d'État</h2>
                            <p>Contrats cadres avec les plus grandes institutions tunisiennes.</p>
                        </div>
                    </ScrollReveal>
                    <div className="clients-grid public-grid">
                        {publicClients.map((client, i) => (
                            <ScrollReveal key={i} delay={Math.min(i * 30, 300)}>
                                <div className="client-card">
                                    <div className="client-icon">{client.icon}</div>
                                    <div className="client-info">
                                        <h4>{client.name}</h4>
                                        <p>{client.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Clients */}
            <section className="clients-section clients-private">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Secteur Privé</div>
                            <h2>Clients Privés & Industriels</h2>
                            <p>Hôtels, industries, agroalimentaires et bien plus.</p>
                        </div>
                    </ScrollReveal>
                    <div className="clients-grid private-grid">
                        {privateCategories.map((cat, i) => (
                            <ScrollReveal key={i} delay={i * 60}>
                                <div className="client-card private">
                                    <div className="client-icon private-icon">{cat.icon}</div>
                                    <div className="client-info">
                                        <h4>{cat.name}</h4>
                                        <p>{cat.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Map */}
            <section className="coverage-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Zone d'Intervention</div>
                            <h2>Couverture Nationale</h2>
                            <p>Intervention dans plus de 15 gouvernorats à travers la Tunisie.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="regions-grid">
                            {regions.map((region, i) => (
                                <div key={i} className="region-badge">
                                    <FaMapMarkerAlt />
                                    {region}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="clients-cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-box">
                            <div className="cta-content">
                                <h2>Rejoignez nos clients satisfaits</h2>
                                <p>Contactez-nous pour discuter de vos besoins en électricité et maintenance.</p>
                                <div className="cta-actions">
                                    <Link to="/contact" className="btn btn-primary">
                                        Contactez-Nous <FaChevronRight />
                                    </Link>
                                    <a href="tel:+21620832832" className="btn btn-outline">
                                        <FaPhoneAlt /> 20 832 832
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
