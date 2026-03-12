import { useState } from 'react'
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCheckCircle, FaTimes, FaBolt, FaTools, FaCog, FaPlug, FaIndustry, FaShieldAlt, FaTachometerAlt, FaLeaf, FaWrench, FaHardHat } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

const servicesList = [
    { id: 'install_mt_bt', label: 'Installation Électrique MT/BT', icon: <FaBolt /> },
    { id: 'armoires', label: 'Armoires & Coffrets Électriques', icon: <FaTools /> },
    { id: 'rebobinage', label: 'Rebobinage Moteurs & Alternateurs', icon: <FaCog /> },
    { id: 'transformateurs', label: 'Postes de Transformation MT/BT', icon: <FaPlug /> },
    { id: 'depannage', label: 'Assistance & Dépannage Industriel', icon: <FaIndustry /> },
    { id: 'groupes', label: 'Groupes Électrogènes', icon: <HiLightningBolt /> },
    { id: 'qualite', label: 'Qualité de Puissance & Harmoniques', icon: <FaTachometerAlt /> },
    { id: 'energie', label: 'Économie d\'Énergie', icon: <FaLeaf /> },
    { id: 'maintenance', label: 'Maintenance Générale', icon: <FaWrench /> },
    { id: 'travaux_neufs', label: 'Travaux Neufs', icon: <FaHardHat /> },
    { id: 'equipement', label: 'Équipement Électrique MT/BT', icon: <FaShieldAlt /> },
    { id: 'main_oeuvre', label: 'Location de Main d\'Œuvre', icon: <FaTools /> },
]

// ── EmailJS Configuration ──
const EMAILJS_SERVICE_ID = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_2riz65j'
const EMAILJS_PUBLIC_KEY = 'MgeYOJUHpcIvrHUqs'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)
    const [showServiceModal, setShowServiceModal] = useState(false)
    const [selectedServices, setSelectedServices] = useState([])

    const subjectLabels = {
        devis: 'Demande de Devis',
        intervention: "Demande d'Intervention",
        maintenance: 'Contrat de Maintenance',
        info: "Demande d'Information",
        urgence: 'Urgence',
        autre: 'Autre',
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setError(false)

        const selectedLabels = servicesList
            .filter(s => selectedServices.includes(s.id))
            .map(s => s.label)

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || 'Non renseigné',
                subject: subjectLabels[formData.subject] || formData.subject,
                message: formData.message,
                services: selectedLabels.length > 0 ? selectedLabels.join(' • ') : 'Aucun service spécifique',
                date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            }, EMAILJS_PUBLIC_KEY)

            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 6000)
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            setSelectedServices([])
        } catch (err) {
            console.error('EmailJS Error:', err)
            setError(true)
            setTimeout(() => setError(false), 5000)
        } finally {
            setSending(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        // Show service modal when "Demande de Devis" is selected
        if (name === 'subject' && value === 'devis') {
            setShowServiceModal(true)
        }
    }

    const toggleService = (serviceId) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        )
    }

    const confirmServices = () => {
        const selectedLabels = servicesList
            .filter(s => selectedServices.includes(s.id))
            .map(s => s.label)
            .join(', ')

        setFormData(prev => ({
            ...prev,
            message: prev.message
                ? `${prev.message}\n\nServices demandés: ${selectedLabels}`
                : `Services demandés: ${selectedLabels}`
        }))
        setShowServiceModal(false)
    }

    return (
        <div className="contact-page">
            {/* Header */}
            <section className="page-header">
                <div className="page-header-bg"></div>
                <div className="container page-header-content">
                    <h1>Contactez-<span className="text-red">Nous</span></h1>
                    <p>Nous sommes à votre disposition pour toute demande</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <ScrollReveal>
                            <div className="contact-info">
                                <h2>Nos Coordonnées</h2>
                                <p className="info-subtitle">
                                    N'hésitez pas à nous contacter pour toute demande de devis,
                                    d'information ou d'intervention.
                                </p>

                                <div className="info-cards">
                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <h4>Adresse</h4>
                                            <p>Route de Sousse Km6<br />Mégrine 2033, Tunisie</p>
                                        </div>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <h4>Téléphone</h4>
                                            <a href="tel:+21671432099">71 432 099</a>
                                        </div>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaFax />
                                        </div>
                                        <div>
                                            <h4>Fax</h4>
                                            <p>71 433 458</p>
                                        </div>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <a href="mailto:emira@emira.tn">emira@emira.tn</a><br />
                                            <a href="mailto:emira.maher@yahoo.com">emira.maher@yahoo.com</a>
                                        </div>
                                    </div>

                                    <div className="info-card">
                                        <div className="info-icon">
                                            <FaClock />
                                        </div>
                                        <div>
                                            <h4>Horaires</h4>
                                            <p>Lun - Sam: 8h00 - 18h00<br />Urgences: 24/7</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Emergency Box */}
                                <div className="emergency-box">
                                    <FaPhoneAlt className="emergency-icon" />
                                    <div>
                                        <span className="emergency-label">Urgences 24/7</span>
                                        <a href="tel:+21620832832" className="emergency-number">20 832 832</a>
                                        <span className="emergency-sep"> / </span>
                                        <a href="tel:+21650832259" className="emergency-number">50 832 259</a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={100}>
                            <div className="contact-form-wrap">
                                <h2>Envoyez-nous un message</h2>
                                <p className="form-subtitle">Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.</p>

                                {submitted && (
                                    <div className="success-message">
                                        <FaCheckCircle />
                                        <span>Votre message a été envoyé avec succès! Nous vous contacterons bientôt.</span>
                                    </div>
                                )}

                                {error && (
                                    <div className="error-message">
                                        <FaTimes />
                                        <span>Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nom Complet *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Votre nom"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="votre@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Téléphone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="XX XXX XXX"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Sujet *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                <option value="devis">Demande de Devis</option>
                                                <option value="intervention">Demande d'Intervention</option>
                                                <option value="maintenance">Contrat de Maintenance</option>
                                                <option value="info">Demande d'Information</option>
                                                <option value="urgence">Urgence</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Selected Services Tags */}
                                    {selectedServices.length > 0 && (
                                        <div className="selected-services">
                                            <label>Services sélectionnés:</label>
                                            <div className="service-tags">
                                                {selectedServices.map(id => {
                                                    const service = servicesList.find(s => s.id === id)
                                                    return (
                                                        <span key={id} className="service-tag">
                                                            {service?.label}
                                                            <button type="button" onClick={() => toggleService(id)} className="tag-remove">
                                                                <FaTimes />
                                                            </button>
                                                        </span>
                                                    )
                                                })}
                                                <button
                                                    type="button"
                                                    className="add-service-btn"
                                                    onClick={() => setShowServiceModal(true)}
                                                >
                                                    + Modifier
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="form-group full">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Décrivez votre besoin..."
                                            rows="5"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
                                        {sending ? 'Envoi en cours...' : 'Envoyer le Message'}
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="map-section">
                <ScrollReveal>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.2!2d10.2389!3d36.7678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4b4e4e4e4e4e%3A0x0!2sRoute+de+Sousse+Km+6+M%C3%A9grine!5e0!3m2!1sfr!2stn!4v1234567890"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EMIRA Location"
                    ></iframe>
                </ScrollReveal>
            </section>

            {/* Service Selection Modal */}
            {showServiceModal && (
                <div className="modal-overlay" onClick={() => setShowServiceModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Sélectionnez les services souhaités</h3>
                            <button className="modal-close" onClick={() => setShowServiceModal(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <p className="modal-subtitle">Cochez les services pour lesquels vous souhaitez un devis.</p>
                        <div className="modal-services-grid">
                            {servicesList.map(service => (
                                <label
                                    key={service.id}
                                    className={`modal-service-item ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedServices.includes(service.id)}
                                        onChange={() => toggleService(service.id)}
                                    />
                                    <span className="modal-service-icon">{service.icon}</span>
                                    <span className="modal-service-label">{service.label}</span>
                                    <span className="modal-service-check">
                                        <FaCheckCircle />
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <span className="modal-count">
                                {selectedServices.length} service{selectedServices.length !== 1 ? 's' : ''} sélectionné{selectedServices.length !== 1 ? 's' : ''}
                            </span>
                            <button className="btn btn-primary" onClick={confirmServices}>
                                Confirmer la sélection
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
