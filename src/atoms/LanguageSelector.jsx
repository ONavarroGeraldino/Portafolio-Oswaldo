import { useLanguage } from '../shared/context/LanguageContext';
import './LanguageSelector.css';

export function LanguageSelector() {
    const { lang, setLang, t } = useLanguage();
    const languages = ['es', 'en', 'ja'];

    return (
        <div className="language-selector">
            {languages.map((code) => (
                <button
                    key={code}
                    className={`lang-btn ${lang === code ? 'active' : ''}`}
                    onClick={() => setLang(code)}
                    aria-label={`Switch to ${t.lang[code]}`}
                >
                    {t.lang[code]}
                </button>
            ))}
        </div>
    );
}
