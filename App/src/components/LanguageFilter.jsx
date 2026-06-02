import '../styles/LanguageFilter.css';

const LANGUAGES = ['Tamil', 'English', 'Hindi', 'Malayalam', 'Telugu'];

export default function LanguageFilter({ selectedLanguage, onLanguageChange }) {
  return (
    <div className="language-filter">
      <h3>🌍 Languages</h3>
      <div className="language-buttons">
        {LANGUAGES.map(language => (
          <button
            key={language}
            className={`language-btn ${selectedLanguage === language ? 'active' : ''}`}
            onClick={() => onLanguageChange(language)}
          >
            {language}
          </button>
        ))}
        <button
          className={`language-btn all-btn ${selectedLanguage === null ? 'active' : ''}`}
          onClick={() => onLanguageChange(null)}
        >
          All
        </button>
      </div>
    </div>
  );
}
