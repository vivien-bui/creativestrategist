import AmbientBackdrop from '../components/AmbientBackdrop';
import { SparkleDoodle } from '../components/Doodles';
import './ContactSection.css';

const CONTACT_EMAIL = 'phuongvivien@gmail.com';

export default function ContactSection({ onNavigate }) {
  return (
    <footer id="contact" data-screen-label="Contact" className="contact">
      <AmbientBackdrop variant="contact" />
      <div className="contact__inner">
        <div className="contact__grid">
          <div className="contact__primary">
            <p className="contact__eyebrow">
              <SparkleDoodle className="contact__eyebrow-mark" size={16} /> Currently taking agency contracts
            </p>
            <h2 className="contact__heading">
              Let's make something people want <br /> to{' '}
              <span className="contact__emphasis">talk about.</span>
            </h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact__cta">
              Start an enquiry →
            </a>
          </div>

          <div className="contact__details">
            <div className="contact__ledger">
              <div className="contact__row">
                <span className="contact__row-label">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact__row-link">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="contact__row">
                <span className="contact__row-label">Based in</span>
                <span>Sydney, Australia</span>
              </div>
              <div className="contact__row">
                <span className="contact__row-label">Availability</span>
                <span>Agency contracts · open now</span>
              </div>
              <div className="contact__row contact__row--last">
                <span className="contact__row-label">Elsewhere</span>
                <span className="contact__social">
                  <a href="#" className="contact__row-link">Instagram</a>
                  <a href="#" className="contact__row-link">LinkedIn</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__foot">
          <span className="contact__copyright">© 2026 · Made with warm light</span>
          <a
            href="#hero"
            className="contact__top-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
