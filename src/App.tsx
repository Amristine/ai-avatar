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

      <section className="chapter-section" id="product">
        <div className="chapter-heading">
          <span className="section-kicker">INSIDE AVATARA</span>
          <h2>A more personal way<br/><em>to show up.</em></h2>
          <p>Explore what you can create, how it comes together, and where your avatar can take your message.</p>
        </div>

        <div className="chapter-list">
          <article className="chapter-row">
            <div className="chapter-preview preview-photo">
              <img src={portrait} alt="Portrait preview for the avatar creation experience"/>
              <span className="preview-pill">THE AVATARA EXPERIENCE</span>
              <span className="preview-corner"><Sparkles size={14}/></span>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">01 / THE EXPERIENCE</span>
              <h3>One photo.<br/><em>A whole new presence.</em></h3>
              <p>Start with a portrait and a message. Bring them together in an AI avatar video that feels more personal than another talking-head recording.</p>
              <a href="#how">Explore the process <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview">
              <img src={scenes[0].image} alt="Creator working outdoors in warm evening light"/>
              <span className="preview-pill">FOR CREATORS</span>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">02 / YOUR PRESENCE</span>
              <h3>Show up, even<br/><em>when life gets busy.</em></h3>
              <p>Create intros, updates and social videos without setting up a camera every time. Keep your content moving while you focus on the next idea.</p>
              <a href="#get-started">Create for your audience <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-team">
              <img src={scenes[1].image} alt="Team collaborating around a table"/>
              <span className="preview-pill">FOR TEAMS & EDUCATORS</span>
              <div className="preview-note"><span>One message</span><strong>Many people reached.</strong></div>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">03 / MANY STORIES</span>
              <h3>Make every message<br/><em>feel more human.</em></h3>
              <p>From product updates and team announcements to lessons and explainers, give the message a familiar face and a consistent voice.</p>
              <a href="#get-started">Find your use for Avatara <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="chapter-row">
            <div className="chapter-preview preview-workflow">
              <div className="workflow-window">
                <div className="workflow-top"><span/><span/><span/><small>AVATARA / YOUR WORKFLOW</small></div>
                <div className="workflow-items">
                  <div><span className="workflow-icon"><Image size={15}/></span><span><b>Your photo</b><small>Choose a portrait</small></span><i>01</i></div>
                  <div><span className="workflow-icon"><Mic2 size={15}/></span><span><b>Your message</b><small>Add script or audio</small></span><i>02</i></div>
                  <div><span className="workflow-icon"><Video size={15}/></span><span><b>Your video</b><small>Review and share</small></span><i>03</i></div>
                </div>
              </div>
            </div>
            <div className="chapter-copy">
              <span className="chapter-index">04 / SIMPLE BY DESIGN</span>
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
              <span className="chapter-index">05 / BEFORE YOU BEGIN</span>
              <h3>A few questions.<br/><em>Thoughtfully answered.</em></h3>
              <p>Learn what you need to get started, how to use your own assets, and why permission matters when creating an avatar.</p>
              <a href="#faq">Read the FAQs <ArrowUpRight size={15}/></a>
            </div>
          </article>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <div className="faq-intro">
          <span className="section-kicker">GOOD TO KNOW</span>
          <h2>Before you<br/><em>press create.</em></h2>
          <p>A few straightforward answers to help you get started with confidence.</p>
          <a href="mailto:hello@ai-avatar.app">Still have a question? <ArrowUpRight size={14}/></a>
        </div>
        <div className="faq-list">{faqs.map(([question,answer],index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)} aria-expanded={faqOpen===index}><span className="faq-number">0{index+1}</span><span>{question}</span><span className="faq-toggle">{faqOpen===index?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div>
      </section>

      <section className="final-cta" id="get-started">
        <div className="final-cta-image"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=90" alt="Warm evening light across a peaceful landscape"/></div>
        <div className="final-cta-shade"/>
        <div className="final-cta-inner"><span className="section-kicker">YOUR STORY STARTS HERE</span><h2>Ready to put<br/><em>yourself in the picture?</em></h2><p>Create a video that carries your face, your voice and your message.</p><a className="light-button" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={16}/></a><span className="cta-note">Only use images and voices you have permission to use.</span></div>
        <span className="cta-mark">ava<span>.</span></span>
      </section>
      <footer className="footer"><a className="wordmark" href="#"><span className="wordmark-mark">a</span>vatara<span className="wordmark-period">.</span></a><span>© 2026 Avatara. Create with care.</span><div><a href="#product">Product</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div></footer>
    </main>
  )
}

export default App
