import { FaBolt, FaTools, FaCog, FaIndustry, FaShieldAlt, FaPlug, FaTachometerAlt, FaLeaf, FaWrench, FaHardHat, FaPhoneAlt, FaChevronRight } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'
import './Services.css'

const servicesData = {
    fr: [
        { icon: <FaBolt />, title: 'Installation Électrique MT/BT', desc: 'Installations et entretien électriques pour bâtiments et industrielles en moyenne et basse tension (MT/BT). Conception et réalisation complète de réseaux électriques.', features: ['Bâtiments résidentiels', 'Installations industrielles', 'Moyenne tension', 'Basse tension'] },
        { icon: <FaTools />, title: 'Armoires & Coffrets Électriques', desc: 'Montage et rénovation de tableaux généraux basse tension (TGBT), armoires et coffrets électriques. Conception sur mesure selon vos besoins.', features: ['TGBT', 'Armoires de commande', 'Coffrets de distribution', 'Rénovation complète'] },
        { icon: <FaCog />, title: 'Rebobinage Moteurs & Alternateurs', desc: 'Rebobinage et entretien des moteurs électriques et alternateurs. Diagnostic complet et réparation professionnelle.', features: ['Moteurs asynchrones', 'Alternateurs', 'Diagnostic complet', 'Tests de performance'] },
        { icon: <FaPlug />, title: 'Postes de Transformation MT/BT', desc: 'Installation, maintenance et entretien des postes de transformation moyenne/basse tension conforme aux normes STEG.', features: ['Installation neuve', 'Maintenance préventive', 'Conformité STEG', 'Mise en service'] },
        { icon: <FaIndustry />, title: 'Assistance & Dépannage Industriel', desc: "Assistance technique et dépannage d'urgence des usines. Intervention rapide 24/7 par notre équipe qualifiée.", features: ['Intervention 24/7', 'Diagnostic sur site', 'Réparation urgente', 'Maintenance préventive'] },
        { icon: <HiLightningBolt />, title: 'Groupes Électrogènes', desc: "Maintenance et entretien électro-mécanique de groupes électrogènes. Installation, mise en service et contrats d'entretien.", features: ['Maintenance électro-mécanique', 'Installation', 'Mise en service', "Contrats d'entretien"] },
        { icon: <FaTachometerAlt />, title: 'Qualité de Puissance', desc: 'Amélioration de la qualité de puissance et traitement des harmoniques. Installation de batteries filtrées avec analyseur CHAUVIN ARNOUX.', features: ['Analyse réseau', 'Filtrage harmoniques', 'Batteries condensateurs', 'Cosfi 0,99 garanti'] },
        { icon: <FaLeaf />, title: "Économie d'Énergie", desc: 'Étude approfondie de votre réseau électrique et mise en place de solutions pour réduire votre consommation énergétique.', features: ['Audit énergétique', "Solutions d'optimisation", 'Réduction des coûts', 'Suivi performance'] },
        { icon: <FaWrench />, title: 'Maintenance Générale', desc: 'Maintenance et entretien de divers équipements électriques. Contrats de maintenance préventive et curative.', features: ['Maintenance préventive', 'Maintenance curative', 'Contrats annuels', 'Rapports détaillés'] },
        { icon: <FaHardHat />, title: 'Travaux Neufs', desc: 'Réalisation de travaux neufs en électricité : installations complètes pour nouveaux projets industriels et bâtiments.', features: ['Études techniques', 'Installation complète', 'Mise en conformité', 'Réception & tests'] },
        { icon: <FaShieldAlt />, title: 'Équipement Électrique MT/BT', desc: "Fourniture et installation d'équipements électriques moyenne et basse tension. Matériel de qualité professionnelle.", features: ['Appareillage MT/BT', 'Câblage', 'Protection électrique', 'Matériel certifié'] },
        { icon: <FaTools />, title: "Location de Main d'Œuvre", desc: 'Mise à disposition de techniciens et ingénieurs qualifiés pour vos projets. Équipes disponibles sur demande.', features: ['Techniciens qualifiés', 'Ingénieurs spécialisés', 'Flexibilité', 'Disponibilité rapide'] },
    ],
    en: [
        { icon: <FaBolt />, title: 'MV/LV Electrical Installation', desc: 'Electrical installations and maintenance for buildings and industrial in medium and low voltage (MV/LV). Complete design and implementation of electrical networks.', features: ['Residential buildings', 'Industrial installations', 'Medium voltage', 'Low voltage'] },
        { icon: <FaTools />, title: 'Electrical Cabinets & Enclosures', desc: 'Assembly and renovation of low voltage general panels (LVGP), cabinets and electrical enclosures. Custom design to meet your needs.', features: ['LVGP', 'Control cabinets', 'Distribution boxes', 'Complete renovation'] },
        { icon: <FaCog />, title: 'Motor & Alternator Rewinding', desc: 'Rewinding and maintenance of electric motors and alternators. Complete diagnosis and professional repair.', features: ['Asynchronous motors', 'Alternators', 'Complete diagnosis', 'Performance tests'] },
        { icon: <FaPlug />, title: 'MV/LV Transformation Stations', desc: 'Installation, maintenance and upkeep of medium/low voltage transformation stations in compliance with STEG standards.', features: ['New installation', 'Preventive maintenance', 'STEG compliance', 'Commissioning'] },
        { icon: <FaIndustry />, title: 'Industrial Troubleshooting', desc: 'Technical assistance and emergency factory troubleshooting. Rapid 24/7 intervention by our qualified team.', features: ['24/7 intervention', 'On-site diagnosis', 'Emergency repair', 'Preventive maintenance'] },
        { icon: <HiLightningBolt />, title: 'Power Generators', desc: 'Electromechanical maintenance of power generators. Installation, commissioning and maintenance contracts.', features: ['Electromechanical maintenance', 'Installation', 'Commissioning', 'Maintenance contracts'] },
        { icon: <FaTachometerAlt />, title: 'Power Quality', desc: 'Power quality improvement and harmonics treatment. Installation of filtered batteries with CHAUVIN ARNOUX analyzer.', features: ['Network analysis', 'Harmonics filtering', 'Capacitor banks', 'Cosfi 0.99 guaranteed'] },
        { icon: <FaLeaf />, title: 'Energy Savings', desc: 'In-depth study of your electrical network and implementation of solutions to reduce your energy consumption.', features: ['Energy audit', 'Optimization solutions', 'Cost reduction', 'Performance monitoring'] },
        { icon: <FaWrench />, title: 'General Maintenance', desc: 'Maintenance and upkeep of various electrical equipment. Preventive and corrective maintenance contracts.', features: ['Preventive maintenance', 'Corrective maintenance', 'Annual contracts', 'Detailed reports'] },
        { icon: <FaHardHat />, title: 'New Construction', desc: 'Implementation of new electrical works: complete installations for new industrial and building projects.', features: ['Technical studies', 'Complete installation', 'Compliance', 'Acceptance & testing'] },
        { icon: <FaShieldAlt />, title: 'MV/LV Electrical Equipment', desc: 'Supply and installation of medium and low voltage electrical equipment. Professional quality materials.', features: ['MV/LV switchgear', 'Wiring', 'Electrical protection', 'Certified material'] },
        { icon: <FaTools />, title: 'Labor Rental', desc: 'Provision of qualified technicians and engineers for your projects. Teams available on request.', features: ['Qualified technicians', 'Specialized engineers', 'Flexibility', 'Quick availability'] },
    ],
}

export default function Services() {
    const { language, t } = useLanguage()
    const services = servicesData[language] || servicesData.fr

    const ctaTitle = language === 'en' ? 'Need a quote or an intervention?' : "Besoin d'un devis ou d'une intervention?"
    const ctaSubtitle = language === 'en' ? 'Our team is at your disposal to study your needs and offer the best solution.' : 'Notre équipe est à votre disposition pour étudier vos besoins et proposer la meilleure solution.'
    const ctaCall = language === 'en' ? 'Call' : 'Appeler'
    const ctaQuote = language === 'en' ? 'Request a Quote' : 'Demander un Devis'

    return (
        <div className="services-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>{t('services.pageTitle')}<span className="text-red">{t('services.pageTitleHighlight')}</span></h1>
                    <p>{t('services.pageSubtitle')}</p>
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
                                <h2>{ctaTitle}</h2>
                                <p>{ctaSubtitle}</p>
                                <div className="cta-actions">
                                    <a href="tel:+21620832832" className="btn btn-primary">
                                        <FaPhoneAlt /> {ctaCall}: 20 832 832
                                    </a>
                                    <Link to="/contact" className="btn btn-outline">
                                        {ctaQuote} <FaChevronRight />
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
