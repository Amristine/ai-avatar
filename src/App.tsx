import { useState } from 'react'
import {
  ArrowDown, ArrowRight, AudioLines, Check, ChevronDown, CirclePlay,
  Globe2, Menu, Mic2, Play, Plus, Sparkles, WandSparkles, X, Zap,
} from 'lucide-react'

const portrait = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=90'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  const scrollToStudio = () => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <div className="announcement">
        <span className="announcement-pill"><Sparkles size={12} /> NEW</span>
        Meet your digital twin. Create your first avatar in minutes.
        <a href="#how-it-works">See how it works <ArrowRight size={13} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Avatara home">
          <span className="brand-mark"><WandSparkles size={19} strokeWidth={2.2} /></span>
          avatara<span className="brand-dot">.</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#showcase" onClick={() => setMenuOpen(false)}>Examples</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="#studio">Log in</a>
          <button className="button button-dark button-small" onClick={scrollToStudio}>Create an avatar <ArrowRight size={15} /></button>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-spark"><Sparkles size={13} /></span> YOUR PRESENCE, REIMAGINED</div>
          <h1>Be everywhere.<br /><span>Without being</span> <em>there.</em></h1>
          <p className="hero-description">Turn a single photo into an AI avatar that speaks, moves, and connects just like you. Your digital presence starts here.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={scrollToStudio}>Create your free avatar <ArrowRight size={17} /></button>
            <a href="#showcase" className="watch-link"><span><Play size={13} fill="currentColor" /></span> See what's possible</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/80?img=47" alt="" />
              <img src="https://i.pravatar.cc/80?img=12" alt="" />
              <img src="https://i.pravatar.cc/80?img=44" alt="" />
              <img src="https://i.pravatar.cc/80?img=5" alt="" />
            </div>
            <div><strong>Made for your next chapter</strong><small>Creators, founders & curious minds</small></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI avatar preview">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-frame">
            <img src={portrait} alt="Portrait preview of an AI avatar" />
            <div className="portrait-shine" />
          </div>
          <div className="float-card speaking-card">
            <span className="card-icon"><AudioLines size={17} /></span>
            <div><strong>Sounds like you</strong><small>Natural voice · 24 languages</small></div>
            <span className="live-dot" />
          </div>
          <div className="float-card ready-card">
            <span className="ready-check"><Check size={14} /></span>
            <div><strong>Avatar ready</strong><small>That was quick!</small></div>
          </div>
          <div className="float-tag tag-top"><Sparkles size={13} /> AI-powered</div>
          <div className="float-tag tag-bottom"><span className="pulse-dot" /> Lifelike motion</div>
        </div>
        <div className="hero-bottom-note"><span>01 / 04</span><span className="note-line" /><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
      </section>

      <section className="trust-strip">
        <p>A new way to show up online</p>
        <div className="trust-items">
          <span><Zap size={16} /> QUICK TO CREATE</span>
          <span><Globe2 size={16} /> SPEAKS YOUR LANGUAGE</span>
          <span><Mic2 size={16} /> YOUR VOICE, YOUR VIBE</span>
          <span><Sparkles size={16} /> MADE TO FEEL HUMAN</span>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <div className="eyebrow">A LITTLE BIT OF MAGIC</div>
          <h2>Your face. Your voice.<br /><span>Your possibilities.</span></h2>
          <p>Everything you need to create content that feels personal, even when you can't be there to make it.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-large">
            <div className="feature-topline"><span className="feature-icon"><WandSparkles size={19} /></span><span className="feature-index">01 / CREATE</span></div>
            <div className="feature-card-copy"><h3>One photo.<br />A whole new you.</h3><p>Upload a portrait and let AI turn it into a digital version of you, ready for the spotlight.</p></div>
            <div className="mini-avatar-preview"><div className="mini-photo"><img src={portrait} alt="" /></div><div className="mini-spark"><Sparkles size={17} /></div><div className="mini-arrow"><ArrowRight size={17} /></div><div className="mini-ai"><WandSparkles size={25} /></div></div>
          </article>
          <article className="feature-card feature-blue">
            <div className="feature-topline"><span className="feature-icon"><AudioLines size={19} /></span><span className="feature-index">02 / SPEAK</span></div>
            <div className="feature-card-copy"><h3>Give your words<br />a voice.</h3><p>Bring your script to life with expressive, natural-sounding speech.</p></div>
            <div className="wave-visual"><div className="wave-label"><span className="wave-live" /> VOICE PREVIEW</div><div className="wave-bars">{Array.from({ length: 42 }, (_, i) => <i key={i} style={{ height: `${12 + Math.abs(Math.sin(i * 1.9) * 44)}px` }} />)}</div><div className="wave-time"><span>00:04</span><span>00:18</span></div></div>
          </article>
          <article className="feature-card feature-pale">
            <div className="feature-topline"><span className="feature-icon"><Globe2 size={19} /></span><span className="feature-index">03 / CONNECT</span></div>
            <div className="feature-card-copy"><h3>Speak to the<br />whole world.</h3><p>Share your message in multiple languages and make every word count.</p></div>
            <div className="language-pills"><span>English <Check size={12} /></span><span>Español</span><span>हिन्दी</span><span>Français</span><span>+ more</span></div>
          </article>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="how-copy">
            <div className="eyebrow">NO STUDIO. NO STRESS.</div>
            <h2>Three steps.<br /><span>One new you.</span></h2>
            <p>We kept things beautifully simple. You bring the photo and the words. We'll take it from there.</p>
            <button className="button button-dark" onClick={scrollToStudio}>Make your first avatar <ArrowRight size={16} /></button>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-number">01</span><div><h3>Upload your photo</h3><p>Choose a clear, front-facing photo. That's your avatar's starting point.</p></div><span className="step-symbol"><Plus size={19} /></span>
            </div>
            <div className="step">
              <span className="step-number">02</span><div><h3>Add your script</h3><p>Type what you want to say or use your own voice recording.</p></div><span className="step-symbol"><AudioLines size={19} /></span>
            </div>
            <div className="step">
              <span className="step-number">03</span><div><h3>Generate & share</h3><p>Watch your avatar come to life, then download and share your video.</p></div><span className="step-symbol"><Sparkles size={19} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section section" id="showcase">
        <div className="showcase-heading">
          <div><div className="eyebrow">IMAGINE THE POSSIBILITIES</div><h2>More you. Less <span>busywork.</span></h2></div>
          <p>From your next big idea to the everyday hello, there's room for your avatar everywhere.</p>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-main"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85" alt="Creative team collaborating" /><div className="showcase-overlay"><span>01 — FOR CREATORS</span><h3>Show up for<br />your audience.</h3></div></article>
          <article className="showcase-card showcase-secondary"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85" alt="Team meeting in a bright office" /><div className="showcase-overlay"><span>02 — FOR TEAMS</span><h3>Make every update<br />feel human.</h3></div></article>
          <article className="showcase-card showcase-tertiary"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" alt="Modern workspace" /><div className="showcase-overlay"><span>03 — FOR BUSINESS</span><h3>Your message,<br />at any scale.</h3></div></article>
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-glow" />
        <div className="studio-content">
          <div className="eyebrow"><Sparkles size={13} /> YOUR STORY STARTS HERE</div>
          <h2>Ready to meet<br />your <em>other you?</em></h2>
          <p>Your first avatar is just a few clicks away. No fancy equipment, no complicated setup.</p>
          <button className="button button-white" onClick={() => alert('Your avatar studio is the next step to connect here.')}>Create my avatar <ArrowRight size={17} /></button>
          <small><Check size={13} /> Start creating in minutes</small>
        </div>
        <div className="studio-decoration"><div className="studio-ring ring-a" /><div className="studio-ring ring-b" /><div className="studio-spark spark-a"><Sparkles /></div><div className="studio-spark spark-b"><Plus /></div><div className="studio-orbit-card"><WandSparkles size={27} /><span>YOUR NEXT<br />CHAPTER</span></div></div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-intro"><div className="eyebrow">GOOD QUESTION</div><h2>Curious?<br /><span>We've got you.</span></h2><p>A few things you might be wondering before you jump in.</p></div>
        <div className="faq-list">
          {[
            ['What is an AI avatar?', 'An AI avatar is a digital version of you that can speak a script and appear in generated videos. You provide a photo and text or audio, and the technology creates the video.'],
            ['What do I need to get started?', 'A clear photo is a great starting point. Depending on the creation flow, you can also add a script or voice recording to make your avatar speak.'],
            ['Can I use my avatar for content?', 'Yes. You can create avatar videos for explainers, social content, announcements, and other creative projects. Always make sure you have the rights and consent needed for the photo and voice you use.'],
            ['Is my photo kept private?', 'Your privacy matters. Before uploading personal images, review the product privacy policy and retention details so you know how your media is stored and used.'],
          ].map(([question, answer], index) => (
            <div className={faqOpen === index ? 'faq-item active' : 'faq-item'} key={question}>
              <button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><span className="faq-toggle">{faqOpen === index ? <X size={16} /> : <Plus size={16} />}</span></button>
              {faqOpen === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="brand" href="#"><span className="brand-mark"><WandSparkles size={19} /></span> avatara<span className="brand-dot">.</span></a><p>Your presence, reimagined.<br />A little more you, everywhere.</p><div className="footer-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a><a href="#studio">Get started</a></div></div>
        <div className="footer-bottom"><span>© 2026 Avatara. Made for what's next.</span><span>Made with a little <Sparkles size={12} /> magic.</span></div>
      </footer>
    </main>
  )
}

export default App