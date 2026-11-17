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
        <div className="section-heading">
          <span className="section-kicker">01 / THE EXPERIENCE</span>
          <h2>From a single photo<br/><em>to a whole new presence.</em></h2>
          <p>Bring your portrait and your words together in a simple creative flow.</p>
        </div>
        <div className="experience-panel">
          <div className="experience-portrait">
            <img src={portrait} alt="Example portrait used to illustrate an AI avatar"/>
            <span className="image-label">YOUR PHOTO</span>
            <div className="portrait-caption"><span>One clear portrait</span><small>Start with an image you have permission to use.</small></div>
          </div>
          <div className="experience-flow">
            <div className="flow-icon"><Image size={17}/></div><span/>
            <div className="flow-spark"><Sparkles size={18}/></div><span/>
            <div className="flow-icon"><Mic2 size={17}/></div><span/>
            <div className="flow-icon flow-result"><Video size={17}/></div>
          </div>
          <div className="experience-output">
            <img src={portrait} alt="Illustrative avatar video portrait"/>
            <div className="output-shade"/>
            <span className="image-label">YOUR AVATAR VIDEO</span>
            <div className="output-play"><Play size={16} fill="currentColor"/></div>
            <div className="output-caption"><span>Your message, brought to life.</span><small>Script or audio becomes the story.</small></div>
          </div>
        </div>
        <div className="process-legend">
          <div><span>01</span><strong>Choose your look</strong><small>A photo you have permission to use</small></div>
          <div><span>02</span><strong>Add your message</strong><small>Bring a script or audio</small></div>
          <div><span>03</span><strong>Create your video</strong><small>Review and share your result</small></div>
        </div>
        <p className="visual-disclaimer">Visuals are illustrative and do not represent a live generated avatar result.</p>
      </section>

      <section className="statement-section">
        <div className="statement-inner">
          <span className="section-kicker">02 / WHY AVATARA</span>
          <h2>Be there for the message.<br/><em>Even when you can’t be on camera.</em></h2>
          <p>Make space for the ideas you want to share, the people you want to reach, and the moments that deserve your presence.</p>
        </div>
        <div className="statement-sun" aria-hidden="true"/>
      </section>

      <section className="use-section section" id="use-cases">
        <div className="section-heading use-heading">
          <span className="section-kicker">03 / MADE FOR YOUR WORLD</span>
          <h2>One avatar.<br/><em>Many ways to show up.</em></h2>
          <p>From a quick update to a thoughtful lesson, make video feel a little more human.</p>
        </div>
        <div className="use-grid">{scenes.map((scene, index) => <article className="use-card" key={scene.name}><div className="use-image"><img src={scene.image} alt={scene.name}/><span>0{index+1}</span><a href="#get-started" aria-label={'Get started for '+scene.name}><ArrowUpRight size={17}/></a></div><div className="use-copy"><span>{scene.name}</span><h3>{scene.title}</h3><p>{scene.copy}</p></div></article>)}</div>
      </section>

      <section className="how-section" id="how">
        <div className="how-inner">
          <div className="how-title"><span className="section-kicker">04 / SIMPLE BY DESIGN</span><h2>Three steps.<br/><em>One more you.</em></h2><p>A straightforward path from your first photo to a video ready to share.</p></div>
          <div className="how-list">
            <article><span>01</span><div><h3>Choose your portrait</h3><p>Upload a clear image of yourself or someone who has given consent.</p></div><ArrowUpRight size={17}/></article>
            <article><span>02</span><div><h3>Give your avatar a message</h3><p>Add a script or audio to shape what your avatar says.</p></div><ArrowUpRight size={17}/></article>
            <article><span>03</span><div><h3>Generate and share</h3><p>Review your video, make it yours, and share it with your audience.</p></div><ArrowUpRight size={17}/></article>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-heading"><span className="section-kicker">A FEW THINGS TO KNOW</span><h2>Good questions.<br/><em>Clear answers.</em></h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)} aria-expanded={faqOpen===index}><span>{question}</span><span>{faqOpen===index?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div>
      </section>

      <section className="final-cta" id="get-started">
        <div className="final-cta-inner"><span className="section-kicker">YOUR NEXT VIDEO STARTS HERE</span><h2>Let your story<br/><em>travel further.</em></h2><p>Be among the first to experience a more personal way to create video.</p><a className="light-button" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={16}/></a><span className="cta-note">Use only photos and voices you have permission to use.</span></div>
        <div className="cta-orbit" aria-hidden="true"><span/><span/><span/></div>
      </section>

      <footer className="footer"><a className="wordmark" href="#"><span className="wordmark-mark">a</span>vatara<span className="wordmark-period">.</span></a><span>© 2026 Avatara. Create with care.</span><div><a href="#product">Product</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div></footer>
    </main>
  )
}

export default App
