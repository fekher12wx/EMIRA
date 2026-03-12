import { createContext, useContext, useState } from 'react'
import translations from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('emira-lang') || 'fr'
    })

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem('emira-lang', lang)
    }

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]
        for (const k of keys) {
            value = value?.[k]
        }
        return value || key
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}
