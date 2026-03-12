import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBolt, FaTools, FaCog, FaIndustry, FaShieldAlt, FaPhoneAlt, FaChevronRight, FaCheckCircle, FaStar, FaHandshake } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

function Counter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                let start = 0
                const step = end / (duration / 16)
                const timer = setInterval(() => {
                    start += step
                    if (start >= end) {
                        setCount(end)
                        clearInterval(timer)
                    } else {
                        setCount(Math.floor(start))
                    }
                }, 16)
            }
        }, { threshold: 0.5 })

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const services = [
    {
        icon: <FaBolt />,
        title: 'Installation Électrique',
        desc: 'Installations et entretien électriques bâtiments et industrielles MT/BT.',
    },
    {
        icon: <FaTools />,
        title: 'Armoires Électriques',
        desc: 'Montage et rénovation de tableaux, armoires et coffrets électriques.',
    },
    {
        icon: <FaCog />,
        title: 'Rebobinage Moteurs',
        desc: 'Rebobinage et entretien des moteurs électriques et alternateurs.',
    },
    {
        icon: <FaIndustry />,
        title: 'Dépannage Industriel',
        desc: 'Assistance technique et dépannage d\'urgence des usines 24/7.',
    },
    {
        icon: <HiLightningBolt />,
        title: 'Groupes Électrogènes',
        desc: 'Maintenance et entretien électro-mécanique groupes électrogènes.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Qualité de Puissance',
        desc: 'Amélioration de la qualité, traitement des harmoniques, économie d\'énergie.',
    },
]

const clients = [
    'STEG', 'Tunisie Télécom', 'ONAS', 'ONT',
    'Ministère de la Santé', 'Ministère de l\'Agriculture',
    'CNSS', 'Hôpital Rabta', 'OCT', 'SNCFT',
]

export default function Home() {
    return (
        <div className="home">
            {/* ====== HERO ====== */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-grid-overlay"></div>
                    <div className="hero-gradient"></div>
                </div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <FaBolt /> Depuis 1987 — Plus de 35 ans d'expertise
                        </div>
                        <h1>
                            Expert en <span className="text-red">Solutions</span>{' '}
                            <span className="text-red">Électriques</span> Industrielles
                        </h1>
                        <p className="hero-subtitle">
                            EMIRA — Electro Maintenance Intervention Rapide. Votre partenaire de confiance
                            pour l'installation, la maintenance et le dépannage électrique en Tunisie.
                            Agréé STEG et B2/C3.
                        </p>
                        <div className="hero-actions">
                            <Link to="/services" className="btn btn-primary">
                                Nos Services <FaChevronRight />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Contactez-Nous
                            </Link>
                        </div>
                        <div className="hero-trust">
                            <FaCheckCircle />
                            <span>Agrément B2/C3</span>
                            <FaCheckCircle />
                            <span>Agréé STEG</span>
                            <FaCheckCircle />
                            <span>Urgence 24/7</span>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-logo-wrap">
                            <div className="hero-logo-glow"></div>
                            <img src="/logo.png" alt="EMIRA Logo" className="hero-logo-img" />
                        </div>
                    </div>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ====== STATS ====== */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <ScrollReveal>
                            <div className="stat-card">
                                <div className="stat-icon"><FaStar /></div>
                                <div className="stat-number"><Counter end={35} suffix="+" /></div>
                                <div className="stat-label">Années d'Expérience</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <div className="stat-card">
                                <div className="stat-icon"><FaHandshake /></div>
                                <div className="stat-number"><Counter end={200} suffix="+" /></div>
                                <div className="stat-label">Clients Satisfaits</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="stat-card">
                                <div className="stat-icon"><FaTools /></div>
                                <div className="stat-number"><Counter end={15} suffix="" /></div>
                                <div className="stat-label">Gouvernorats Couverts</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={300}>
                            <div className="stat-card">
                                <div className="stat-icon"><FaBolt /></div>
                                <div className="stat-number"><Counter end={1000} suffix="+" /></div>
                                <div className="stat-label">Projets Réalisés</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ====== SERVICES ====== */}
            <section className="services-preview">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Ce que nous faisons</div>
                            <h2>Nos Services Professionnels</h2>
                            <p>Une gamme complète de solutions électriques pour tous vos besoins industriels et bâtiments.</p>
                        </div>
                    </ScrollReveal>
                    <div className="services-grid">
                        {services.map((service, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <Link to="/services" className="service-link">
                                        En savoir plus <FaChevronRight />
                                    </Link>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <div className="services-cta">
                        <Link to="/services" className="btn btn-navy">
                            Voir Tous Nos Services <FaChevronRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== CLIENTS ====== */}
            <section className="clients-preview">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-title">
                            <div className="label">Ils nous font confiance</div>
                            <h2>Nos Partenaires & Clients</h2>
                            <p>Contrats cadres avec les plus grandes institutions tunisiennes.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="clients-ticker">
                            <div className="ticker-track">
                                {[...clients, ...clients].map((client, i) => (
                                    <div key={i} className="client-badge">{client}</div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                    <div className="clients-cta">
                        <Link to="/clients" className="btn btn-primary">
                            Toutes Nos Références <FaChevronRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== CTA ====== */}
            <section className="cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-box">
                            <div className="cta-content">
                                <h2>Quelque soit votre problème, nous avons la solution!</h2>
                                <p>Besoin d'une intervention rapide? Notre équipe est disponible 24/7 pour tous vos besoins électriques.</p>
                                <div className="cta-actions">
                                    <a href="tel:+21620832832" className="btn btn-primary">
                                        <FaPhoneAlt /> Appeler: 20 832 832
                                    </a>
                                    <Link to="/contact" className="btn btn-outline">
                                        Demander un Devis
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
