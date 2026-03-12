import { FaAward, FaUsers, FaHistory, FaPhoneAlt, FaEnvelope, FaBolt, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

const timeline = [
    { year: '1987', title: 'Fondation', desc: 'Création de EMIRA SARL à Mégrine, spécialisée en maintenance électrique.' },
    { year: '1990s', title: 'Expansion', desc: 'Premiers contrats cadres avec la STEG et les institutions gouvernementales.' },
    { year: '2000s', title: 'Croissance', desc: 'Extension des activités à 15 gouvernorats. Contrats avec Tunisie Télécom, ONAS, ONT.' },
    { year: '2010s', title: 'Diversification', desc: 'Ajout des services de qualité de puissance, batteries filtrées et économie d\'énergie.' },
    { year: 'Aujourd\'hui', title: 'Leader', desc: 'Plus de 35 ans d\'expertise, équipe qualifiée, interventions rapides 24/7.' },
]

const team = [
    {
        name: 'Maher ZOUARI',
        role: 'Gérant',
        phone: '20 832 832 / 50 832 259',
        icon: <FaUsers />,
    },
    {
        name: 'Imen Maaoui',
        role: 'Ingénieur INSAT',
        phone: '52 515 171',
        icon: <FaAward />,
    },
    {
        name: 'Habib ben AMOR',
        role: 'Technicien Supérieur Génie Élec.',
        phone: '98 286 558 / 53 227 260',
        icon: <FaUsers />,
    },
]

const certifications = [
    {
        title: 'Agrément B2/C3',
        desc: 'Ministère de l\'Équipement et de l\'Habitat',
        icon: <FaAward />,
    },
    {
        title: 'Agréée STEG',
        desc: 'Société Tunisienne de l\'Électricité et du Gaz',
        icon: <FaCheckCircle />,
    },
    {
        title: 'SARL — 150.000 DT',
        desc: 'Société à Responsabilité Limitée au capital de 150.000 DT',
        icon: <FaBolt />,
    },
]

export default function About() {
    return (
        <div className="about-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>À Propos de <span className="text-red">EMIRA</span></h1>
                    <p>صيانة الكترو كهربائية و تدخلات سريعة</p>
                    <p>Electro Maintenance Intervention Rapide — Depuis 1987</p>
                </div>
            </section>

            {/* Company Info */}
            <section className="about-intro">
                <div className="container">
                    <div className="about-intro-grid">
                        <ScrollReveal>
                            <div className="about-logo-side">
                                <img src="/logo.png" alt="EMIRA Logo" className="about-logo" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <div className="about-text-side">
                                <div className="label"><FaBolt /> Notre Histoire</div>
                                <h2>Plus de 35 ans d'expertise électrique</h2>
                                <p>
                                    Fondée en 1987, <strong>EMIRA</strong> (Electro Maintenance Intervention Rapide)
                                    est une société tunisienne spécialisée dans les installations électriques,
                                    la maintenance industrielle et le dépannage d'urgence.
                                </p>
                                <p>
                                    Basée à Mégrine sur la Route de Sousse Km6, nous intervenons à travers
                                    tout le territoire tunisien avec une équipe qualifiée d'ingénieurs et de techniciens.
                                </p>
                                <p>
                                    Notre devise : <em>"Quelque soit votre problème, nous avons la solution"</em>
                                </p>
                                <div className="about-highlights">
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Agrément B2/C3</span>
                                    </div>
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Agréée STEG</span>
                                    </div>
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>15 Gouvernorats</span>
                                    </div>
                                    <div className="highlight">
                                        <FaCheckCircle />
                                        <span>Urgence 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Notre Parcours</div>
                            <h2>L'histoire d'EMIRA</h2>
                        </div>
                    </ScrollReveal>
                    <div className="timeline">
                        {timeline.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="timeline-content">
                                        <div className="timeline-year">{item.year}</div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="team-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Notre Équipe</div>
                            <h2>Les Responsables</h2>
                            <p>Une équipe qualifiée à votre service.</p>
                        </div>
                    </ScrollReveal>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="team-card">
                                    <div className="team-avatar">{member.icon}</div>
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <a href={`tel:+216${member.phone.split(' / ')[0].replace(/\s/g, '')}`} className="team-phone">
                                        <FaPhoneAlt /> {member.phone}
                                    </a>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="certifications-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Nos Agréments</div>
                            <h2>Certifications & Agréments</h2>
                        </div>
                    </ScrollReveal>
                    <div className="cert-grid">
                        {certifications.map((cert, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="cert-card">
                                    <div className="cert-icon">{cert.icon}</div>
                                    <h3>{cert.title}</h3>
                                    <p>{cert.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
