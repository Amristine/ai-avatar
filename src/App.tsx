import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Image, Menu, Mic2, Play, ShieldCheck, Sparkles, Video, X } from 'lucide-react'

const portrait = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=90'
const scenes = [
  { name: 'For creators', title: 'Show up, even on busy days.', copy: 'Create intros, updates and social videos without setting up a camera every time.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=88' },
  { name: 'For teams', title: 'Make every message feel personal.', copy: 'Turn product updates, explainers and announcements into presenter-led videos.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=88' },
  { name: 'For educators', title: 'Give every lesson a familiar face.', copy: 'Introduce learning material with a consistent digital presenter your audience can recognize.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=88' },
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

      <section className="chapter-section" id="product">
        <div className="chapter-heading">
          <div>
            <span className="section-kicker">INSIDE AVATARA</span>
            <h2>Make video feel<br/><em>more like you.</em></h2>
          </div>
          <p>A thoughtful way to turn a portrait and a message into something people can watch, hear and connect with.</p>
        </div>

        <div className="chapter-list">
          <article className="chapter-row">
            <div className="chapter-preview preview-avatar">
              <img src={portrait} alt="Portrait illustrating an AI avatar"/>
              <span className="preview-pill">AVATARA / STUDIO</span>
              <div className="avatar-preview-card"><span className="avatar-live-dot"/><div><b>Avatar preview</b><small>Portrait ready to animate</small></div><span className="avatar-check"><Check size={12}/></span></div>
              <span className="preview-play"><Play size={13} fill="currentColor"/></span>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">01 <i/> THE EXPERIENCE</span>
              <h3>One photo.<br/><em>A whole new presence.</em></h3>
              <p>Start with a portrait and a message. Bring them together in an AI avatar video that feels more personal than another talking-head recording.</p>
              <a href="#how">Explore the process <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-creators">
              <img src={scenes[0].image} alt="A creator working at a laptop"/>
              <span className="preview-pill">FOR CREATORS</span>
              <div className="preview-image-caption"><span>Keep your ideas moving.</span><small>Make room for more creating.</small></div>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">02 <i/> YOUR PRESENCE</span>
              <h3>Show up, even<br/><em>when life gets busy.</em></h3>
              <p>Create intros, updates and social videos without setting up a camera every time. Keep your content moving while you focus on the next idea.</p>
              <a href="#get-started">Create for your audience <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-teams">
              <img src={scenes[1].image} alt="A creative team collaborating together"/>
              <span className="preview-pill">TEAMS & EDUCATORS</span>
              <div className="preview-image-caption"><span>One familiar face.</span><small>Messages that feel more human.</small></div>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">03 <i/> MANY STORIES</span>
              <h3>Make every message<br/><em>feel more human.</em></h3>
              <p>From product updates and team announcements to lessons and explainers, give the message a familiar face and a consistent voice.</p>
              <a href="#get-started">Find your use for Avatara <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-workflow">
              <div className="workflow-window">
                <div className="workflow-top"><span/><span/><span/><small>YOUR CREATION FLOW</small></div>
                <div className="workflow-items">
                  <div><span className="workflow-icon"><Image size={15}/></span><span><b>Choose a portrait</b><small>A photo you can use</small></span><i>01</i></div>
                  <div><span className="workflow-icon"><Mic2 size={15}/></span><span><b>Add your message</b><small>Script or audio</small></span><i>02</i></div>
                  <div><span className="workflow-icon"><Video size={15}/></span><span><b>Make your video</b><small>Review and share</small></span><i>03</i></div>
                </div>
              </div>
              <span className="workflow-spark"><Sparkles size={15}/></span>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">04 <i/> SIMPLE BY DESIGN</span>
              <h3>From first photo<br/><em>to first hello.</em></h3>
              <p>Choose a portrait, add the words you want to say, then generate and review your video. A clear path from idea to finished message.</p>
              <a href="#get-started">Start creating <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-questions">
              <div className="questions-window">
                <span className="questions-kicker">A FEW THINGS TO KNOW</span>
                <strong>Good questions.<br/><em>Clear answers.</em></strong>
                <div className="question-line"><span>What do I need to get started?</span><i>+</i></div>
                <div className="question-line"><span>Can I use my video commercially?</span><i>+</i></div>
                <div className="question-line"><span>Can I create an avatar of someone else?</span><i>+</i></div>
              </div>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">05 <i/> BEFORE YOU BEGIN</span>
              <h3>A few questions.<br/><em>Thoughtfully answered.</em></h3>
              <p>Learn what you need to get started, how to use your own assets, and why permission matters when creating an avatar.</p>
              <a href="#faq">Read the FAQs <ArrowUpRight size={15}/></a>
            </div>
          </article>
        </div>
        <div className="chapter-footnote"><ShieldCheck size={15}/><span>Created with care. Use only photos and voices you have permission to use.</span></div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-intro">
            <span className="section-kicker">GOOD TO KNOW</span>
            <h2>Before you<br/><em>press create.</em></h2>
            <p>A few straightforward answers to help you get started with confidence.</p>
            <a href="mailto:hello@ai-avatar.app">Still have a question? <ArrowUpRight size={14}/></a>
          </div>
          <div className="faq-list">{faqs.map(([question,answer],index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)} aria-expanded={faqOpen===index}><span className="faq-number">0{index+1}</span><span>{question}</span><span className="faq-toggle">{faqOpen===index?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="final-cta" id="get-started">
        <div className="final-cta-inner">
          <span className="section-kicker">YOUR STORY STARTS HERE</span>
          <h2>Ready to put<br/><em>yourself in the picture?</em></h2>
          <p>Create a video that carries your face, your voice and your message.</p>
          <a className="light-button" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={16}/></a>
          <span className="cta-note">Only use images and voices you have permission to use.</span>
        </div>
        <div className="cta-product-preview">
          <div className="cta-preview-top"><span/><span/><span/><small>AVATARA / PREVIEW</small></div>
          <div className="cta-preview-image"><img src={portrait} alt="Illustrative avatar portrait preview"/><span className="cta-preview-play"><Play size={18} fill="currentColor"/></span><span className="cta-preview-caption">ILLUSTRATIVE PREVIEW</span></div>
          <div className="cta-preview-controls"><div><span>YOUR NEXT VIDEO</span><b>Ready when you are.</b></div><div className="cta-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
        </div>
        <span className="cta-decoration" aria-hidden="true">a.</span>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#"><span className="wordmark-mark">a</span>vatara<span className="wordmark-period">.</span></a>
        <span>© 2026 Avatara. Create with care.</span>
        <div><a href="#product">Product</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div>
      </footer>
    </main>
  )
}

export default App
