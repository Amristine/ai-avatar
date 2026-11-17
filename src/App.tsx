import { useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown, Image, Menu, Mic2, Play, Sparkles, Video, X } from 'lucide-react'

const portrait = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=90'
const scenes = [
  { name: 'For creators', title: 'Show up, even on busy days.', copy: 'Create intros, updates and social videos without setting up a camera every time.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85' },
  { name: 'For teams', title: 'Make every message feel personal.', copy: 'Turn product updates, explainers and announcements into presenter-led videos.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { name: 'For educators', title: 'Give every lesson a familiar face.', copy: 'Introduce learning material with a consistent digital presenter your audience can recognize.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85' },
]
const faqs = [
  ['What is an AI avatar?', 'An AI avatar is a digital presenter that can deliver a script in a generated video. Avatara is being built to make that process straightforward.'],
  ['What do I need to get started?', 'You will need a clear photo of yourself or someone who has explicitly agreed to have their likeness used, plus the script or audio for your video.'],
  ['Can I use generated videos commercially?', 'Commercial usage will depend on the product plan and the rights to the photo, voice and other assets you provide. Review the terms before publishing commercially.'],
  ['Can I create an avatar of another person?', 'Only with their informed permission. Do not use the product to impersonate someone or create misleading content.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const closeMenu = () => setMenuOpen(false)
  const goToCreate = () => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <header className="header">
        <a className="wordmark" href="#" aria-label="Avatara home"><span className="wordmark-mark">a</span>vatara<span className="wordmark-period">.</span></a>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#use-cases" onClick={closeMenu}>Use cases</a>
          <a href="#how" onClick={closeMenu}>How it works</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <a className="nav-cta" href="#get-started">Get started <ArrowUpRight size={13}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero">
        <div className="hero-scenery" aria-hidden="true"/>
        <div className="hero-glow" aria-hidden="true"/>
        <div className="hero-content">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-chip chip-photo"><Image size={15}/><b>PHOTO</b></span>
            <span className="orbit-chip chip-voice"><Mic2 size={15}/><b>VOICE</b></span>
            <span className="orbit-chip chip-video"><Video size={15}/><b>VIDEO</b></span>
          </div>
          <div className="hero-eyebrow"><span/> A MORE HUMAN WAY TO CREATE VIDEO</div>
          <h1>Your face. Your voice.<br/><em>Your story.</em></h1>
          <p>Turn a photo and a message into an AI avatar video.<br className="desktop-break"/> Create, share and show up — wherever your story takes you.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={goToCreate}>Create your avatar <ArrowRight size={15}/></button>
            <a className="watch-link" href="#product"><span><Play size={10} fill="currentColor"/></span> See how it works</a>
          </div>
          <div className="hero-note">Made for creators, teams and educators</div>
        </div>
        <a className="scroll-cue" href="#product"><span>SCROLL TO EXPLORE</span><i><ArrowRight size={12}/></i></a>
      </section>

      <section className="intro-band" id="product">
        <span className="intro-label">MEET AVATARA</span>
        <p>A familiar face. A message worth sharing. <em>Video creation that feels more personal — and takes less setup.</em></p>
        <a href="#how">Explore the process <ArrowRight size={14}/></a>
      </section>

      <section className="product-section section">
        <div className="section-intro-row">
          <div><span className="section-kicker">01 — THE AVATARA EXPERIENCE</span><h2>One photo is all<br/>it <em>takes to begin.</em></h2></div>
          <p>Your portrait gives your avatar a face. Your script gives it something to say. Avatara brings both together in a video made to feel personal.</p>
        </div>
        <div className="product-showcase">
          <div className="showcase-photo">
            <img src={portrait} alt="Portrait illustrating an avatar source photo"/>
            <span className="showcase-tag">01 / YOUR PORTRAIT</span>
            <div className="photo-note"><span>Start with a photo</span><small>Choose an image you have permission to use.</small></div>
          </div>
          <div className="showcase-connector"><span><Sparkles size={19}/></span><i/></div>
          <div className="showcase-screen">
            <div className="screen-top"><span className="screen-dot"/><span className="screen-dot"/><span className="screen-dot"/><small>AVATARA STUDIO</small></div>
            <div className="screen-preview"><img src={portrait} alt="Illustrative AI avatar video preview"/><span className="preview-play"><Play size={18} fill="currentColor"/></span><span className="preview-label">VIDEO PREVIEW</span></div>
            <div className="screen-bottom"><div><span>YOUR AVATAR VIDEO</span><strong>Your message, brought to life.</strong></div><span className="screen-duration">00:24</span></div>
          </div>
          <div className="showcase-caption">A simple creative flow — from the image you choose to the message you want to share.</div>
        </div>
        <div className="feature-row">
          <article><span className="feature-icon"><Image size={18}/></span><div><strong>Your likeness</strong><p>Start with a portrait you own or have permission to use.</p></div></article>
          <article><span className="feature-icon"><Mic2 size={18}/></span><div><strong>Your message</strong><p>Bring the words with a script or audio recording.</p></div></article>
          <article><span className="feature-icon"><Video size={18}/></span><div><strong>Your video</strong><p>Review the result and share it with your audience.</p></div></article>
        </div>
        <p className="visual-disclaimer">Concept preview for illustration. It is not a live generated video.</p>
      </section>

      <section className="statement-section">
        <div className="statement-image"><img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1500&q=85" alt="Sunlit open landscape"/></div>
        <div className="statement-overlay"/>
        <div className="statement-inner"><span className="section-kicker">02 — MORE THAN A VIDEO</span><h2>Show up with<br/><em>a little more you.</em></h2><p>For the update you need to send, the lesson you want to teach, or the idea that deserves a face and a voice.</p><a href="#use-cases">Find your use for Avatara <ArrowRight size={15}/></a></div>
        <span className="statement-index">A NEW WAY TO BE PRESENT</span>
      </section>

      <section className="use-section section" id="use-cases">
        <div className="section-intro-row use-intro">
          <div><span className="section-kicker">03 — MADE FOR YOUR WORLD</span><h2>One avatar.<br/><em>Many stories.</em></h2></div>
          <p>From a creator’s next post to a team’s product update, make every message feel a little more human.</p>
        </div>
        <div className="use-grid">{scenes.map((scene,index)=><article className="use-card" key={scene.name}><div className="use-image"><img src={scene.image} alt={scene.name}/><span className="use-number">0{index+1}</span><div className="use-image-shade"/><div className="use-image-copy"><small>{scene.name}</small><h3>{scene.title}</h3><p>{scene.copy}</p><a href="#get-started">Make it yours <ArrowUpRight size={15}/></a></div></div></article>)}</div>
      </section>

      <section className="how-section" id="how">
        <div className="how-inner">
          <div className="how-title"><span className="section-kicker">04 — SIMPLE BY DESIGN</span><h2>From photo<br/>to <em>hello.</em></h2><p>No studio setup. No complicated production checklist. Just three clear steps to get your message ready.</p><a href="#get-started" className="text-cta">Start creating <ArrowRight size={15}/></a></div>
          <div className="how-list">
            <article><span className="how-number">01</span><div className="how-step-icon"><Image size={20}/></div><div><h3>Choose your portrait</h3><p>Upload a clear image of yourself or someone who has given consent.</p></div><ArrowUpRight size={18}/></article>
            <article><span className="how-number">02</span><div className="how-step-icon"><Mic2 size={20}/></div><div><h3>Add the words</h3><p>Write a script or add audio to give your avatar its message.</p></div><ArrowUpRight size={18}/></article>
            <article><span className="how-number">03</span><div className="how-step-icon"><Video size={20}/></div><div><h3>Create and share</h3><p>Review your video and share it wherever your audience is.</p></div><ArrowUpRight size={18}/></article>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-heading"><span className="section-kicker">A FEW THINGS TO KNOW</span><h2>Curious?<br/><em>We’ve got you.</em></h2><p>Some quick answers before you create your first avatar.</p><div className="faq-aside"><span><Sparkles size={17}/></span><div><strong>Made to feel simple.</strong><small>Have another question? We’d love to hear from you.</small><a href="mailto:hello@ai-avatar.app">Talk to our team <ArrowUpRight size={13}/></a></div></div></div>
        <div className="faq-list">{faqs.map(([question,answer],index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)} aria-expanded={faqOpen===index}><span className="faq-index">0{index+1}</span><span className="faq-question">{question}</span><span className="faq-toggle">{faqOpen===index?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div>
      </section>

      <section className="final-cta" id="get-started">
        <div className="cta-image"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=85" alt="Soft sunlit landscape"/></div><div className="cta-image-shade"/>
        <div className="final-cta-inner"><span className="section-kicker">YOUR STORY STARTS HERE</span><h2>Ready to put<br/><em>yourself in the picture?</em></h2><p>Create a video that carries your face, your voice and your message.</p><a className="light-button" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={16}/></a><span className="cta-note">Only use images and voices you have permission to use.</span></div>
        <div className="cta-stamp"><span>AVA</span><strong>YOUR<br/>STORY</strong><small>MADE PERSONAL</small></div>
      </section>

      <footer className="footer"><a className="wordmark" href="#"><span className="wordmark-mark">a</span>vatara<span className="wordmark-period">.</span></a><span>© 2026 Avatara. Create with care.</span><div><a href="#product">Product</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div></footer>
    </main>
  )
}

export default App
