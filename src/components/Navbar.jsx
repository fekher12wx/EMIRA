import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('emira-theme') === 'dark'
    })
    const [langOpen, setLangOpen] = useState(false)
    const location = useLocation()
    const { language, changeLanguage, t } = useLanguage()

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/services', label: t('nav.services') },
        { path: '/clients', label: t('nav.references') },
        { path: '/contact', label: t('nav.contact') },
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setLangOpen(false)
    }, [location])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('emira-theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
            localStorage.setItem('emira-theme', 'light')
        }
    }, [darkMode])

    const langs = [
        { code: 'fr', label: 'FR', flag: '🇫🇷' },
        { code: 'en', label: 'EN', flag: '🇬🇧' },
    ]

    const currentLang = langs.find(l => l.code === language)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src="/logo.png" alt="EMIRA Logo" className="navbar-logo" />
                    <div className="navbar-brand-text">
                        <span className="brand-name">EMIRA</span>
                        <span className="brand-sub">Electro Maintenance</span>
                    </div>
                </Link>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="navbar-actions">
                    {/* Language Selector */}
                    <div className="lang-selector">
                        <button
                            className="lang-toggle"
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            <span className="lang-flag">{currentLang?.flag}</span>
                            <span className="lang-code">{currentLang?.label}</span>
                        </button>
                        {langOpen && (
                            <div className="lang-dropdown">
                                {langs.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`lang-option ${language === lang.code ? 'active' : ''}`}
                                        onClick={() => {
                                            changeLanguage(lang.code)
                                            setLangOpen(false)
                                        }}
                                    >
                                        <span className="lang-flag">{lang.flag}</span>
                                        <span>{lang.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                        title={darkMode ? 'Mode clair' : 'Mode sombre'}
                    >
                        {darkMode ? <HiSun /> : <HiMoon />}
                    </button>

                    <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
