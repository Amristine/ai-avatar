import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, Play, Sparkles, X } from 'lucide-react'

const portrait = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90'
const scenes = [
  { name: 'For creators', title: 'Show up consistently.', copy: 'Make intros, updates and social videos without setting up a camera every time.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85' },
  { name: 'For teams', title: 'Make every message personal.', copy: 'Turn product updates, explainers and announcements into presenter-led videos.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { name: 'For educators', title: 'Put a face to every lesson.', copy: 'Give learning material a more human introduction with a familiar digital presenter.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85' },
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
        <a className="wordmark" href="#" aria-label="Avatara home">ava<span>tara</span><i>.</i></a>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'}>
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#how" onClick={closeMenu}>How it works</a>
          <a href="#use-cases" onClick={closeMenu}>Use cases</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <div className="header-cta"><a href="#faq">Explore</a><button onClick={goToCreate}>Get early access <ArrowUpRight size={15}/></button></div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span/> THE FUTURE OF VIDEO, PERSONALIZED</div>
          <h1>Be there.<br/><em>Even when</em><br/>you’re not.</h1>
          <p className="hero-lede">Create an AI version of yourself and turn your words into video. A more personal way to share ideas, teach, and connect — without being on camera every time.</p>
          <div className="hero-buttons"><button className="primary-button" onClick={goToCreate}>Create your avatar <ArrowRight size={17}/></button><a className="secondary-link" href="#product"><span><Play size={11} fill="currentColor"/></span> See how it works</a></div>
          <div className="hero-footnote"><span className="tiny-check"><Check size={12}/></span> Made for creators, teams and educators</div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image"><img src={portrait} alt="Portrait representing an AI avatar" /></div>
          <div className="image-caption"><div><span className="caption-kicker">YOUR DIGITAL PRESENCE</span><strong>A familiar face. A new way to communicate.</strong></div><span className="caption-arrow"><ArrowUpRight size={19}/></span></div>
          <div className="image-index">01 <i/> 03</div>
          <div className="blue-disc"/>
        </div>
        <div className="hero-side-note">A NEW KIND OF ON-CAMERA PRESENCE</div>
      </section>

      <section className="intro-band" id="product">
        <div className="intro-label">INTRODUCING AVATARA</div>
        <p>Your message deserves more than another talking-head recording. <span>Give it a face, a voice, and the freedom to show up whenever you need.</span></p>
        <a href="#how">Discover the process <ArrowRight size={15}/></a>
      </section>

      <section className="product-section section">
        <div className="section-topline"><span>01 — THE PRODUCT</span><span>PHOTO IN. VIDEO OUT.</span></div>
        <div className="product-layout">
          <div className="product-heading"><h2>One photo.<br/><span>So many ways</span><br/>to show up.</h2><p>Avatara brings your image and your message together in a simple video creation workflow.</p><button className="inline-link" onClick={goToCreate}>Make your first avatar <ArrowRight size={16}/></button></div>
          <div className="product-steps">
            <article><span className="step-no">01</span><div><h3>Your look</h3><p>Start with a clear portrait you have permission to use.</p></div><span className="step-icon portrait-icon"><img src={portrait} alt="Portrait thumbnail"/></span></article>
            <article><span className="step-no">02</span><div><h3>Your words</h3><p>Add a script or audio to shape what your avatar says.</p></div><span className="step-icon"><span className="audio-mark"><i/><i/><i/><i/><i/><i/><i/></span></span></article>
            <article><span className="step-no">03</span><div><h3>Your video</h3><p>Generate, review and share a video made for your message.</p></div><span className="step-icon"><Play size={18}/></span></article>
          </div>
        </div>
        <div className="product-visual">
          <div className="visual-source"><img src={portrait} alt="Example portrait input"/><span>01 / SOURCE PHOTO</span></div>
          <div className="visual-middle"><div className="middle-line"/><span><Sparkles size={18}/></span><div className="middle-line"/></div>
          <div className="visual-result"><img src={portrait} alt="Example avatar portrait"/><div className="result-overlay"><span>02 / AVATAR VIDEO</span><strong>Your message, brought to life.</strong></div><span className="result-play"><Play size={15} fill="currentColor"/></span></div>
        </div>
        <p className="visual-disclaimer">Illustrative product concept. Final avatar output will depend on the generation workflow.</p>
      </section>

      <section className="statement-section">
        <div className="statement-inner"><span className="statement-number">02 / WHY AVATARA</span><h2>Less time setting up.<br/><em>More time saying something.</em></h2><p>For the ideas you want to share, the people you want to reach, and the moments you can’t always be on camera for.</p></div>
        <div className="statement-mark">a<span>.</span></div>
      </section>

      <section className="use-section section" id="use-cases">
        <div className="section-topline"><span>03 — MADE FOR YOUR WORLD</span><span>ONE TOOL. MANY STORIES.</span></div>
        <div className="use-heading"><h2>Where will you<br/><span>show up?</span></h2><p>From a quick update to a thoughtful lesson, make video feel a little more human.</p></div>
        <div className="use-grid">{scenes.map((scene, index) => <article className="use-card" key={scene.name}><div className="use-image"><img src={scene.image} alt={scene.name}/><span>0{index+1}</span><a href="#get-started" aria-label={'Get started for '+scene.name}><ArrowUpRight size={18}/></a></div><div className="use-copy"><span>{scene.name}</span><h3>{scene.title}</h3><p>{scene.copy}</p></div></article>)}</div>
      </section>

      <section className="how-section" id="how">
        <div className="how-inner"><div className="how-title"><span className="section-kicker">04 — SIMPLE BY DESIGN</span><h2>From first photo<br/>to <em>first hello.</em></h2><p>No complicated production setup. Just a clear path from your idea to a video.</p></div>
          <div className="how-list"><article><span>01</span><div><h3>Choose your portrait</h3><p>Upload a clear image of yourself or a person who has given consent.</p></div><ArrowUpRight size={18}/></article><article><span>02</span><div><h3>Write what you want to say</h3><p>Add your script or audio and prepare the message for your avatar.</p></div><ArrowUpRight size={18}/></article><article><span>03</span><div><h3>Generate and share</h3><p>Review the generated video, make it yours, and share it with your audience.</p></div><ArrowUpRight size={18}/></article></div>
        </div>
      </section>

      <section className="faq-section section" id="faq"><div className="faq-heading"><span className="section-kicker">A FEW THINGS TO KNOW</span><h2>Good questions.<br/><em>Clear answers.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)}><span>{question}</span><span>{faqOpen===index?<X size={16}/>:<ChevronDown size={17}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div></section>

      <section className="final-cta" id="get-started"><div className="final-cta-inner"><span className="section-kicker">YOUR NEXT VIDEO STARTS HERE</span><h2>Make your presence<br/><em>go a little further.</em></h2><p>Be among the first to experience a more personal way to create video.</p><a className="light-button" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={17}/></a><span className="cta-note">Have permission to use the image and voice you upload.</span></div><div className="cta-shape"/></section>

      <footer className="footer"><a className="wordmark" href="#">ava<span>tara</span><i>.</i></a><span>© 2026 Avatara. Create with care.</span><div><a href="#product">Product</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div></footer>
    </main>
  )
}

export default App
