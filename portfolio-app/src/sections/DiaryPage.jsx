import DiaryLoader from '../components/DiaryLoader';
import './DiaryPage.css';

export default function DiaryPage({ onNavigate }) {
  const handleClose = () => {
    onNavigate('home');
  };

  return (
    <div className="diary-page">
      <button className="diary-page__close" onClick={handleClose} aria-label="Close diary">
        ← Back
      </button>
      <DiaryLoader />
    </div>
  );
}
