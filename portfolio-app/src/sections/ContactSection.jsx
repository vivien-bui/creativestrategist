import { useRef } from 'react';
import './ContactSection.css';

const CONTACT_EMAIL = 'phuongvivien@gmail.com';

export default function ContactSection({ onNavigate }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendMessage = () => {
    const name = nameRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';
    const msg = messageRef.current?.value ?? '';
    const subject = encodeURIComponent('Portfolio enquiry' + (name ? ' — ' + name : ''));
    const body = encodeURIComponent(msg + (email ? '\n\nReply to: ' + email : ''));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" data-screen-label="Contact" className="contact">
      <div className="contact__inner">
        <p className="contact__eyebrow">✳ Currently taking agency contracts</p>
        <h2 className="contact__heading">Let's make something people want to talk about.</h2>

        <div className="contact__grid" data-r="contact-grid">
          <div>
            <p className="contact__lede">
              For agency contracts, freelance strategy sprints, or a coffee chat - my inbox is open.
            </p>
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

          <div className="contact__card">
            <div className="contact__card-title">Start the conversation</div>
            <div className="contact__form">
              <input ref={nameRef} placeholder="Your name" className="contact__input" />
              <input ref={emailRef} placeholder="Your email" className="contact__input" />
              <textarea ref={messageRef} placeholder="What are we making?" rows={4} className="contact__input contact__textarea" />
              <button type="button" onClick={sendMessage} className="contact__submit">
                Send it over →
              </button>
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
