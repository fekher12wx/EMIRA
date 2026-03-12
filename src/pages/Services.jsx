import { FaBolt, FaTools, FaCog, FaIndustry, FaShieldAlt, FaPlug, FaTachometerAlt, FaLeaf, FaWrench, FaHardHat, FaPhoneAlt, FaChevronRight } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Services.css'

const services = [
    {
        icon: <FaBolt />,
        title: 'Installation Électrique MT/BT',
        desc: 'Installations et entretien électriques pour bâtiments et industrielles en moyenne et basse tension (MT/BT). Conception et réalisation complète de réseaux électriques.',
        features: ['Bâtiments résidentiels', 'Installations industrielles', 'Moyenne tension', 'Basse tension'],
    },
    {
        icon: <FaTools />,
        title: 'Armoires & Coffrets Électriques',
        desc: 'Montage et rénovation de tableaux généraux basse tension (TGBT), armoires et coffrets électriques. Conception sur mesure selon vos besoins.',
        features: ['TGBT', 'Armoires de commande', 'Coffrets de distribution', 'Rénovation complète'],
    },
    {
        icon: <FaCog />,
        title: 'Rebobinage Moteurs & Alternateurs',
        desc: 'Rebobinage et entretien des moteurs électriques et alternateurs. Diagnostic complet et réparation professionnelle.',
        features: ['Moteurs asynchrones', 'Alternateurs', 'Diagnostic complet', 'Tests de performance'],
    },
    {
        icon: <FaPlug />,
        title: 'Postes de Transformation MT/BT',
        desc: 'Installation, maintenance et entretien des postes de transformation moyenne/basse tension conforme aux normes STEG.',
        features: ['Installation neuve', 'Maintenance préventive', 'Conformité STEG', 'Mise en service'],
    },
    {
        icon: <FaIndustry />,
        title: 'Assistance & Dépannage Industriel',
        desc: 'Assistance technique et dépannage d\'urgence des usines. Intervention rapide 24/7 par notre équipe qualifiée.',
        features: ['Intervention 24/7', 'Diagnostic sur site', 'Réparation urgente', 'Maintenance préventive'],
    },
    {
        icon: <HiLightningBolt />,
        title: 'Groupes Électrogènes',
        desc: 'Maintenance et entretien électro-mécanique de groupes électrogènes. Installation, mise en service et contrats d\'entretien.',
        features: ['Maintenance électro-mécanique', 'Installation', 'Mise en service', 'Contrats d\'entretien'],
    },
    {
        icon: <FaTachometerAlt />,
        title: 'Qualité de Puissance',
        desc: 'Amélioration de la qualité de puissance et traitement des harmoniques. Installation de batteries filtrées avec analyseur CHAUVIN ARNOUX.',
        features: ['Analyse réseau', 'Filtrage harmoniques', 'Batteries condensateurs', 'Cosfi 0,99 garanti'],
    },
    {
        icon: <FaLeaf />,
        title: 'Économie d\'Énergie',
        desc: 'Étude approfondie de votre réseau électrique et mise en place de solutions pour réduire votre consommation énergétique.',
        features: ['Audit énergétique', 'Solutions d\'optimisation', 'Réduction des coûts', 'Suivi performance'],
    },
    {
        icon: <FaWrench />,
        title: 'Maintenance Générale',
        desc: 'Maintenance et entretien de divers équipements électriques. Contrats de maintenance préventive et curative.',
        features: ['Maintenance préventive', 'Maintenance curative', 'Contrats annuels', 'Rapports détaillés'],
    },
    {
        icon: <FaHardHat />,
        title: 'Travaux Neufs',
        desc: 'Réalisation de travaux neufs en électricité : installations complètes pour nouveaux projets industriels et bâtiments.',
        features: ['Études techniques', 'Installation complète', 'Mise en conformité', 'Réception & tests'],
    },
    {
        icon: <FaShieldAlt />,
        title: 'Équipement Électrique MT/BT',
        desc: 'Fourniture et installation d\'équipements électriques moyenne et basse tension. Matériel de qualité professionnelle.',
        features: ['Appareillage MT/BT', 'Câblage', 'Protection électrique', 'Matériel certifié'],
    },
    {
        icon: <FaTools />,
        title: 'Location de Main d\'Œuvre',
        desc: 'Mise à disposition de techniciens et ingénieurs qualifiés pour vos projets. Équipes disponibles sur demande.',
        features: ['Techniciens qualifiés', 'Ingénieurs spécialisés', 'Flexibilité', 'Disponibilité rapide'],
    },
]

export default function Services() {
    return (
        <div className="services-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>Nos <span className="text-red">Services</span></h1>
                    <p>Une gamme complète de solutions électriques pour tous vos besoins</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-full">
                <div className="container">
                    <div className="services-full-grid">
                        {services.map((service, i) => (
                            <ScrollReveal key={i} delay={i * 60}>
                                <div className="service-full-card">
                                    <div className="sfc-header">
                                        <div className="sfc-icon">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p className="sfc-desc">{service.desc}</p>
                                    <ul className="sfc-features">
                                        {service.features.map((f, j) => (
                                            <li key={j}><FaShieldAlt /> {f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-box">
                            <div className="cta-content">
                                <h2>Besoin d'un devis ou d'une intervention?</h2>
                                <p>Notre équipe est à votre disposition pour étudier vos besoins et proposer la meilleure solution.</p>
                                <div className="cta-actions">
                                    <a href="tel:+21620832832" className="btn btn-primary">
                                        <FaPhoneAlt /> Appeler: 20 832 832
                                    </a>
                                    <Link to="/contact" className="btn btn-outline">
                                        Demander un Devis <FaChevronRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
