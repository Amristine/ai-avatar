import { useState } from 'react'
import {
  ArrowRight, AudioLines, Check, ChevronDown, Globe2, Menu, Mic2,
  Play, ShieldCheck, Sparkles, WandSparkles, X, Zap,
} from 'lucide-react'

const avatarImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=90'

const faqs = [
  ['What is an AI avatar?', 'An AI avatar is a digital presenter created from a photo or video. You can give it a script and generate a video of the avatar delivering your message.'],
  ['What do I need to create one?', 'Start with a clear photo of a person who has given permission to use their likeness. Add a script or audio, choose your available settings, and generate your video.'],
  ['Can I use my avatar videos commercially?', 'That depends on your plan, the assets you use, and the rights you have to the person’s image and voice. Check the product terms before using generated videos commercially.'],
  ['Can I use someone else’s photo or voice?', 'Only with their explicit permission. Avatars should not be used to impersonate someone, mislead viewers, or create deceptive content.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [activeExample, setActiveExample] = useState('Creator')

  const scrollToCreate = () => document.getElementById('create')?.scrollIntoView({ behavior: 'smooth' })
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="announcement"><span><Sparkles size={12} /> INTRODUCING AI AVATARS</span><i /> Turn a photo and a script into a video that speaks for you. <a href="#how-it-works">Explore the workflow <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Avatara home"><span className="brand-mark"><WandSparkles size={19} /></span> avatara<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#features" onClick={closeMenu}>Features</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#examples" onClick={closeMenu}>Use cases</a><a href="#pricing" onClick={closeMenu}>Pricing</a>
        </nav>
        <div className="header-actions"><a href="#create" className="login-link">Sign in</a><button className="button button-dark button-small" onClick={scrollToCreate}>Create your avatar <ArrowRight size={15} /></button></div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero">
        <div className="hero-orb orb-a" /><div className="hero-orb orb-b" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-icon"><Sparkles size={13} /></span> YOUR AI VIDEO CREATION STUDIO</div>
          <h1>Your words.<br /><span>Your digital</span> <em>presence.</em></h1>
          <p className="hero-description">Create expressive AI avatar videos from a photo and a script. Make every update, lesson, and idea feel more personal — without stepping in front of a camera every time.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={scrollToCreate}>Create an AI avatar <ArrowRight size={17} /></button><a className="watch-link" href="#product-demo"><span><Play size={12} fill="currentColor" /></span> Watch the product preview</a></div>
          <div className="hero-points"><span><Check size={14} /> Photo-based avatars</span><span><Check size={14} /> Script-to-video workflow</span><span><Check size={14} /> Made for creators</span></div>
        </div>
        <div className="hero-product" id="product-demo">
          <div className="product-window">
            <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>AVATARA STUDIO <b>PREVIEW</b></span><span className="window-status"><i /> Ready</span></div>
            <div className="preview-stage">
              <img src={avatarImage} alt="Example portrait used as an AI avatar preview" />
              <div className="preview-vignette" />
              <div className="preview-caption"><span>YOUR AVATAR</span><strong>Ready to tell your story.</strong></div>
              <button className="preview-play" aria-label="Preview example"><Play size={19} fill="currentColor" /></button>
              <div className="preview-label"><Sparkles size={12} /> SAMPLE AVATAR VISUAL</div>
            </div>
            <div className="product-controls"><div className="control-person"><img src={avatarImage} alt="" /><span><b>My avatar</b><small>Portrait preview</small></span></div><div className="control-wave"><AudioLines size={16} /><span><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span><small>Voice preview</small></div><div className="control-ready"><Check size={14} /></div></div>
          </div>
          <div className="floating-chip chip-language"><Globe2 size={15} /><span><b>Speak globally</b><small>Multilingual workflow</small></span></div>
          <div className="floating-chip chip-ai"><span className="chip-spark"><Sparkles size={15} /></span><span><b>AI-powered creation</b><small>From photo to video</small></span></div>
          <div className="hero-note">A NEW WAY TO SHOW UP <span /> 01 / 04</div>
        </div>
      </section>

      <section className="trust-strip"><span>MADE FOR THE WAY YOU CREATE</span><div><b><Zap size={15} /> QUICK WORKFLOW</b><b><Mic2 size={15} /> VOICE-READY</b><b><Globe2 size={15} /> MULTILINGUAL</b><b><ShieldCheck size={15} /> CONSENT FIRST</b></div></section>

      <section className="features-section section" id="features">
        <div className="section-heading"><div className="eyebrow">YOUR CREATION TOOLKIT</div><h2>From a simple photo<br />to a <span>whole new presence.</span></h2><p>Everything comes together in one simple workflow. Create your avatar, prepare what it says, and turn your message into video.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-photo"><div className="feature-top"><span className="feature-icon"><WandSparkles size={19} /></span><small>01 / CREATE</small></div><h3>A familiar face.<br />A fresh beginning.</h3><p>Start with a clear portrait and create an avatar for your next video.</p><div className="photo-composition"><div className="source-photo"><img src={avatarImage} alt="Portrait source example" /><span>YOUR PHOTO</span></div><div className="transform-arrow"><ArrowRight size={18} /></div><div className="avatar-token"><Sparkles size={25} /><small>AI AVATAR</small></div></div></article>
          <article className="feature-card feature-script"><div className="feature-top"><span className="feature-icon"><AudioLines size={19} /></span><small>02 / MAKE IT SPEAK</small></div><h3>Your script.<br />Your message.</h3><p>Write what you want to say or bring in audio for your video workflow.</p><div className="script-card"><div className="script-head"><span><i /> SCRIPT</span><small>EDITABLE PREVIEW</small></div><p>“Hey there! Here's something<br />I wanted to share with you...”</p><div className="script-wave">{Array.from({length:34},(_,i)=><i key={i} style={{height:`${9+Math.abs(Math.sin(i*1.7)*28)}px`}} />)}</div></div></article>
          <article className="feature-card feature-share"><div className="feature-top"><span className="feature-icon"><Globe2 size={19} /></span><small>03 / SHARE</small></div><h3>One message.<br />More places.</h3><p>Prepare content for social posts, explainers, learning, and team updates.</p><div className="share-tags"><span>Social videos</span><span>Explainers</span><span>Learning</span><span>Announcements</span><span>+ your ideas</span></div></article>
        </div>
      </section>

      <section className="demo-section" id="how-it-works"><div className="demo-inner">
        <div className="demo-copy"><div className="eyebrow">A SIMPLE CREATION FLOW</div><h2>Less setup.<br /><span>More showing up.</span></h2><p>Go from your starting image to a shareable video in a few clear steps.</p><div className="demo-steps"><div><b>01</b><span><strong>Choose a portrait</strong><small>Use an image you own or have permission to use.</small></span></div><div><b>02</b><span><strong>Add your words</strong><small>Write a script or add a voice recording.</small></span></div><div><b>03</b><span><strong>Generate your video</strong><small>Review your result and get it ready to share.</small></span></div></div><button className="button button-dark" onClick={scrollToCreate}>Explore the creation flow <ArrowRight size={16} /></button></div>
        <div className="workflow-visual"><div className="workflow-card workflow-input"><span className="workflow-label">01 — INPUT PHOTO</span><img src={avatarImage} alt="Example portrait input" /><div><Check size={13} /> Portrait selected</div></div><div className="workflow-connector"><span><WandSparkles size={20} /></span><i /></div><div className="workflow-card workflow-output"><span className="workflow-label">02 — AVATAR VIDEO</span><div className="output-image"><img src={avatarImage} alt="Example avatar video portrait" /><span className="output-play"><Play size={17} fill="currentColor" /></span><span className="output-caption">Your message, brought to life.</span></div><div className="output-meta"><span><AudioLines size={14} /> Voice & script</span><span>VIDEO PREVIEW</span></div></div><div className="workflow-stamp"><Sparkles size={14} /> YOUR IDEA, IN MOTION</div></div>
      </div></section>

      <section className="examples-section section" id="examples"><div className="examples-heading"><div><div className="eyebrow">ONE AVATAR, MANY POSSIBILITIES</div><h2>Made for your <span>kind of content.</span></h2></div><p>Build a more consistent video presence for the moments that matter.</p></div>
        <div className="example-tabs">{['Creator','Business','Educator'].map(item=><button className={activeExample===item?'active':''} onClick={()=>setActiveExample(item)} key={item}>{item}</button>)}</div>
        <div className="examples-panel"><div className="example-visual"><img src={activeExample==='Creator'?'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85':activeExample==='Business'?'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85':'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85'} alt={activeExample+' use case'} /><span className="example-image-label"><Sparkles size={12} /> AVATAR VIDEO USE CASE</span></div><div className="example-content"><span className="example-number">0{['Creator','Business','Educator'].indexOf(activeExample)+1} / USE CASE</span><h3>{activeExample==='Creator'?'Keep your audience in the loop.':activeExample==='Business'?'Make updates feel more personal.':'Bring lessons to life.'}</h3><p>{activeExample==='Creator'?'Create intros, regular updates, and social content while keeping your visual identity consistent.':activeExample==='Business'?'Prepare product explainers, team announcements, and repeatable customer communication.':'Turn written lessons and learning materials into approachable video presentations.'}</p><ul><li><Check size={15}/> A consistent on-camera presence</li><li><Check size={15}/> Repeatable video creation workflow</li><li><Check size={15}/> More time for the work behind the message</li></ul><button className="text-link" onClick={scrollToCreate}>Start creating <ArrowRight size={16}/></button></div></div>
      </section>

      <section className="pricing-section" id="pricing"><div className="section pricing-inner"><div className="section-heading"><div className="eyebrow">SIMPLE TO GET STARTED</div><h2>Make room for <span>what's next.</span></h2><p>Start by exploring the experience. Plan details can grow with the product.</p></div><div className="pricing-card"><div><span className="pricing-tag"><Sparkles size={13}/> EARLY ACCESS</span><h3>Start creating</h3><p>Explore the AI avatar workflow and see what you can make.</p></div><div className="pricing-includes"><span><Check size={15}/> Photo-based avatar workflow</span><span><Check size={15}/> Script and voice input concept</span><span><Check size={15}/> Video preview experience</span></div><button className="button button-primary" onClick={scrollToCreate}>Explore Avatara <ArrowRight size={16}/></button><small>Final plan limits and pricing will be shown when the product plans are ready.</small></div></div></section>

      <section className="cta-section" id="create"><div className="cta-glow"/><div className="cta-content"><div className="eyebrow"><Sparkles size={13}/> YOUR NEXT VIDEO STARTS HERE</div><h2>Ready to give your<br />ideas a <em>face?</em></h2><p>Bring your photo and your message. Your next chapter in video starts with Avatara.</p><a className="button button-white" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowRight size={17}/></a><small><ShieldCheck size={13}/> Only use photos and voices with permission.</small></div><div className="cta-art"><div className="cta-circle circle-one"/><div className="cta-circle circle-two"/><div className="cta-avatar"><img src={avatarImage} alt="Avatar portrait example"/><span><Sparkles size={14}/> AVATARA</span></div><div className="cta-float"><AudioLines size={19}/></div></div></section>

      <section className="faq-section section" id="faq"><div className="faq-intro"><div className="eyebrow">GOOD TO KNOW</div><h2>Questions?<br/><span>We've got you.</span></h2><p>A few useful details before you start creating.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={faqOpen===i?'faq-item active':'faq-item'} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><span className="faq-toggle">{faqOpen===i?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></section>
      <footer className="footer"><div className="footer-main"><a className="brand" href="#"><span className="brand-mark"><WandSparkles size={19}/></span> avatara<span>.</span></a><p>Your words. Your digital presence.<br/>Create with care. Share with confidence.</p><div className="footer-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div></div><div className="footer-bottom"><span>© 2026 Avatara. All rights reserved.</span><span>Built for ideas worth sharing <Sparkles size={12}/></span></div></footer>
    </main>
  )
}

export default App
