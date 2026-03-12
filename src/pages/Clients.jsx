import { FaBuilding, FaLandmark, FaHotel, FaIndustry, FaHospital, FaUniversity, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'
import './Clients.css'

const publicClients = [
    { name: 'STEG', desc: { fr: "Société Tunisienne de l'Électricité et du Gaz", en: 'Tunisian Electricity and Gas Company' }, icon: <FaBolt /> },
    { name: 'Tunisie Télécom', desc: { fr: 'Sfax, Médenine, Tataouine, Zaghouan, Kasserine, Mahdia, Sousse, Monastir, Bizerte...', en: 'Sfax, Medenine, Tataouine, Zaghouan, Kasserine, Mahdia, Sousse, Monastir, Bizerte...' }, icon: <FaBuilding /> },
    { name: 'ONAS', desc: { fr: "Office National de l'Assainissement", en: 'National Sanitation Office' }, icon: <FaLandmark /> },
    { name: 'ONT', desc: { fr: 'Office National de la Télédiffusion', en: 'National Broadcasting Office' }, icon: <FaBuilding /> },
    { name: { fr: 'Présidence du Gouvernement', en: 'Government Presidency' }, desc: { fr: 'Premier Ministère', en: 'Prime Ministry' }, icon: <FaLandmark /> },
    { name: { fr: 'Min. Affaires Étrangères', en: 'Ministry of Foreign Affairs' }, desc: { fr: 'Ministère des Affaires Étrangères', en: 'Ministry of Foreign Affairs' }, icon: <FaLandmark /> },
    { name: { fr: 'Min. de la Santé', en: 'Ministry of Health' }, desc: { fr: 'Ministère de la Santé Publique', en: 'Ministry of Public Health' }, icon: <FaLandmark /> },
    { name: { fr: "Min. de l'Agriculture", en: 'Ministry of Agriculture' }, desc: { fr: "Ministère de l'Agriculture", en: 'Ministry of Agriculture' }, icon: <FaLandmark /> },
    { name: { fr: "Min. de l'Enseignement", en: 'Ministry of Education' }, desc: { fr: "Ministère de l'Enseignement", en: 'Ministry of Education' }, icon: <FaLandmark /> },
    { name: { fr: 'Min. des Finances', en: 'Ministry of Finance' }, desc: { fr: 'Ministère des Finances', en: 'Ministry of Finance' }, icon: <FaLandmark /> },
    { name: { fr: 'Min. de la Culture', en: 'Ministry of Culture' }, desc: { fr: 'Ministère de la Culture', en: 'Ministry of Culture' }, icon: <FaLandmark /> },
    { name: { fr: "Min. de l'Intérieur", en: 'Ministry of Interior' }, desc: { fr: 'Municipalités', en: 'Municipalities' }, icon: <FaLandmark /> },
    { name: 'CNSS', desc: { fr: 'Caisse Nationale de Sécurité Sociale — Siliana', en: 'National Social Security Fund — Siliana' }, icon: <FaBuilding /> },
    { name: 'Hôpital Rabta', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'Hôp. Fattouma Bourguiba', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'Hôp. Aziza Othmana', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'Hôp. Ben Arous', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'Hôp. M. Slim', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'Hôp. Ben Guerden', desc: { fr: 'Centre hospitalier', en: 'Hospital center' }, icon: <FaHospital /> },
    { name: 'SNCFT', desc: { fr: 'Société Nationale des Chemins de Fer Tunisiens', en: 'National Railway Company of Tunisia' }, icon: <FaBuilding /> },
    { name: 'ANPE', desc: { fr: "Agence Nationale Pour l'Emploi", en: 'National Employment Agency' }, icon: <FaBuilding /> },
    { name: 'ATTT', desc: { fr: 'Agence Technique des Transports Terrestres', en: 'Technical Agency for Land Transport' }, icon: <FaBuilding /> },
    { name: 'OCT', desc: { fr: 'Office de Commerce Tunisien — 15 Gouvernorats', en: 'Tunisian Trade Office — 15 Governorates' }, icon: <FaBuilding /> },
    { name: 'ISET Com Ghazala', desc: { fr: 'Institut Supérieur des Études Technologiques', en: 'Higher Institute of Technological Studies' }, icon: <FaUniversity /> },
    { name: { fr: 'Cité des Sciences', en: 'City of Sciences' }, desc: { fr: 'Centre scientifique et culturel', en: 'Scientific and cultural center' }, icon: <FaUniversity /> },
    { name: 'CRDA', desc: { fr: 'Commissariat Régional au Développement Agricole', en: 'Regional Agricultural Development Commission' }, icon: <FaBuilding /> },
    { name: 'Agil', desc: { fr: 'Distribution de carburants', en: 'Fuel distribution' }, icon: <FaBuilding /> },
    { name: { fr: 'Office des Céréales', en: 'Cereals Office' }, desc: { fr: 'Office des Céréales', en: 'Cereals Office' }, icon: <FaBuilding /> },
    { name: { fr: 'Office des Terres Domaniales', en: 'State Lands Office' }, desc: { fr: 'Gestion des terres domaniales', en: 'State land management' }, icon: <FaBuilding /> },
    { name: { fr: 'Centre de Tri Postal', en: 'Postal Sorting Center' }, desc: { fr: 'La Poste Tunisienne', en: 'Tunisia Post' }, icon: <FaBuilding /> },
    { name: 'CERT', desc: { fr: "Centre d'Études et de Recherches", en: 'Study and Research Center' }, icon: <FaUniversity /> },
    { name: { fr: 'Conservation Foncière', en: 'Land Registry' }, desc: { fr: 'Registre foncier', en: 'Land registry' }, icon: <FaLandmark /> },
    { name: { fr: 'Agence des Fréquences', en: 'Frequency Agency' }, desc: { fr: 'Gestion du spectre de fréquences', en: 'Frequency spectrum management' }, icon: <FaBuilding /> },
    { name: { fr: 'Régie des Alcools', en: 'Alcohol Authority' }, desc: { fr: 'Régie des Alcools', en: 'Alcohol Authority' }, icon: <FaBuilding /> },
    { name: { fr: 'Régie du Matériel', en: 'Equipment Authority' }, desc: { fr: 'Régie du Matériel', en: 'Equipment Authority' }, icon: <FaBuilding /> },
]

const privateCategoriesData = {
    fr: [
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
    ],
    en: [
        { name: 'Hotels', desc: 'Hotel Africa and other tourism establishments', icon: <FaHotel /> },
        { name: 'Industrial', desc: 'Factories and industrial complexes', icon: <FaIndustry /> },
        { name: 'Agri-Food', desc: 'Food industry and processing', icon: <FaIndustry /> },
        { name: 'Construction Materials', desc: 'Manufacturing and distribution', icon: <FaBuilding /> },
        { name: 'Glassware', desc: 'Glass industries', icon: <FaIndustry /> },
        { name: 'Sanitary Equipment', desc: 'Tunisia Porcelain and others', icon: <FaBuilding /> },
        { name: 'Press', desc: 'Media and printing', icon: <FaBuilding /> },
        { name: 'Textile', desc: 'Textile industry — COATS Tunisia, GST', icon: <FaIndustry /> },
        { name: 'Automotive', desc: 'VISTEON, Autronic', icon: <FaIndustry /> },
        { name: 'Poultry', desc: 'Sotavi and others', icon: <FaIndustry /> },
    ],
}

const regions = [
    'Tunis', 'Ben Arous', 'Mégrine', 'Sfax', 'Sousse', 'Monastir',
    'Bizerte', 'Zaghouan', 'Kasserine', 'Mahdia', 'Médenine',
    'Tataouine', 'Siliana', 'Akouda', 'Ben Guerden',
]

export default function Clients() {
    const { language, t } = useLanguage()
    const privateCategories = privateCategoriesData[language] || privateCategoriesData.fr

    const getName = (item) => typeof item.name === 'object' ? (item.name[language] || item.name.fr) : item.name
    const getDesc = (item) => typeof item.desc === 'object' ? (item.desc[language] || item.desc.fr) : item.desc

    const publicTitle = language === 'en' ? 'State Institutions & Agencies' : "Institutions & Organismes d'État"
    const publicSubtitle = language === 'en' ? 'Framework contracts with the largest Tunisian institutions.' : 'Contrats cadres avec les plus grandes institutions tunisiennes.'
    const privateTitle = language === 'en' ? 'Private & Industrial Clients' : 'Clients Privés & Industriels'
    const privateSubtitle = language === 'en' ? 'Hotels, industries, agri-food and much more.' : 'Hôtels, industries, agroalimentaires et bien plus.'
    const coverageSubtitle = language === 'en' ? 'Intervention in over 15 governorates across Tunisia.' : 'Intervention dans plus de 15 gouvernorats à travers la Tunisie.'
    const ctaTitle = language === 'en' ? 'Join our satisfied clients' : 'Rejoignez nos clients satisfaits'
    const ctaSubtitle = language === 'en' ? 'Contact us to discuss your electricity and maintenance needs.' : 'Contactez-nous pour discuter de vos besoins en électricité et maintenance.'
    const headerSubtitle = language === 'en' ? 'Over 200 clients have trusted us since 1987' : 'Plus de 200 clients nous font confiance depuis 1987'

    return (
        <div className="clients-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>{t('clients.pageTitle')}<span className="text-red">{t('clients.pageTitleHighlight')}</span></h1>
                    <p>{headerSubtitle}</p>
                </div>
            </section>

            {/* Public Clients */}
            <section className="clients-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">{t('clients.publicLabel')}</div>
                            <h2>{publicTitle}</h2>
                            <p>{publicSubtitle}</p>
                        </div>
                    </ScrollReveal>
                    <div className="clients-grid public-grid">
                        {publicClients.map((client, i) => (
                            <ScrollReveal key={i} delay={Math.min(i * 30, 300)}>
                                <div className="client-card">
                                    <div className="client-icon">{client.icon}</div>
                                    <div className="client-info">
                                        <h4>{getName(client)}</h4>
                                        <p>{getDesc(client)}</p>
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
                            <div className="label">{t('clients.privateLabel')}</div>
                            <h2>{privateTitle}</h2>
                            <p>{privateSubtitle}</p>
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
                            <div className="label">{t('clients.coverageLabel')}</div>
                            <h2>{t('clients.coverageTitle')}</h2>
                            <p>{coverageSubtitle}</p>
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
                                <h2>{ctaTitle}</h2>
                                <p>{ctaSubtitle}</p>
                                <div className="cta-actions">
                                    <Link to="/contact" className="btn btn-primary">
                                        {t('nav.contact')} <FaChevronRight />
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
