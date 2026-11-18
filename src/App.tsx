import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Clapperboard,
  GraduationCap, Image, Menu, Mic2, Play, ShieldCheck, Sparkles,
  UserRound, Users, Video, X,
} from 'lucide-react'

// Images stored in public/assets. Keep filenames in sync with the repository.
const mediaAssets = {
  heroBackground: '/assets/hero.png',
  studioPortrait: '/assets/Warm Studio Portrait of a South Asian Woman.png',
  studioVideo: '',
  studioVideoPoster: '/assets/Blue-Lit Content Creator Studio.png',
  creator: '/assets/Tech Presenter with Avatara Studio Setup.png',
  team: '/assets/Collaborative Office Team Around Laptop.png',
  educator: '/assets/Online Math Lesson in Studio.png',
  statement: '/assets/Elegant Blue Wave Abstraction.png',
  closingVideo: '',
  closingVideoPoster: '/assets/Modern Video Creation Studio Setup.png',
}

const useCases = [
  {
    number: '01',
    label: 'FOR CREATORS',
    title: 'Stay present\nbetween posts.',
    copy: 'Turn ideas, announcements and regular updates into video without rebuilding your recording setup every time.',
    image: mediaAssets.creator,
    kind: 'creator' as const,
  },
  {
    number: '02',
    label: 'FOR TEAMS',
    title: 'Give every update\na familiar face.',
    copy: 'Make product explainers, internal updates and customer messages feel more personal and consistent.',
    image: mediaAssets.team,
    kind: 'team' as const,
  },
  {
    number: '03',
    label: 'FOR EDUCATORS',
    title: 'Make lessons feel\ncloser to the learner.',
    copy: 'Introduce a topic, guide a lesson or share a quick explanation with a presenter your audience recognizes.',
    image: mediaAssets.educator,
    kind: 'educator' as const,
  },
]

const faqs = [
  ['What is an AI avatar?', 'An AI avatar is a digital presenter that can deliver a script in a generated video. Avatara is designed to make that process feel simple and personal.'],
  ['What do I need to create a video?', 'Start with a clear portrait of yourself or someone who has explicitly agreed to have their likeness used. You can then provide a script or audio for the message.'],
  ['Can I use someone else’s face or voice?', 'Only use images and voices when you have the person’s informed permission. Do not use Avatara to impersonate someone or create misleading content.'],
  ['Can I use my videos commercially?', 'Commercial usage depends on your product plan and the rights to the photos, voices and other assets you provide. Check the applicable terms before publishing.'],
]

type MediaKind = 'portrait' | 'video' | 'creator' | 'team' | 'educator'

function MediaPlaceholder({ kind, label, className = '' }: { kind: MediaKind; label: string; className?: string }) {
  const Icon = kind === 'team' ? Users : kind === 'educator' ? GraduationCap : kind === 'video' ? Clapperboard : kind === 'creator' ? Sparkles : UserRound
  return (
    <div className={`media-placeholder media-placeholder-${kind} ${className}`} role="img" aria-label={label}>
      <div className="placeholder-grid" aria-hidden="true"/>
      <span className="placeholder-kicker">AVATARA / MEDIA SLOT</span>
      <div className="placeholder-art" aria-hidden="true">
        <span className="placeholder-orbit orbit-one"/>
        <span className="placeholder-orbit orbit-two"/>
        <span className="placeholder-disc"/>
        <span className="placeholder-person"><Icon size={kind === 'portrait' || kind === 'video' ? 62 : 48} strokeWidth={1}/></span>
        {kind === 'video' && <span className="placeholder-play"><Play size={15} fill="currentColor"/></span>}
        {kind === 'team' && <span className="placeholder-mini-card">ONE MESSAGE · MANY PEOPLE</span>}
        {kind === 'educator' && <span className="placeholder-mini-card">LEARN · CONNECT · SHARE</span>}
      </div>
      <span className="placeholder-label">{label}</span>
      <span className="placeholder-subline">Your image or video will go here</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const closeMenu = () => setMenuOpen(false)
  const goToCreate = () => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Avatara home">
          <span className="brand-symbol">a</span><span>vatara</span><i>.</i>
        </a>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#product" onClick={closeMenu}>The studio</a>
          <a href="#use-cases" onClick={closeMenu}>Possibilities</a>
          <a href="#process" onClick={closeMenu}>How it works</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
        </nav>
        <a className="header-action" href="#get-started">Get early access <ArrowUpRight size={14}/></a>
        <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </header>

      <section className="hero">
        <div className="hero-landscape" aria-hidden="true" style={mediaAssets.heroBackground ? { backgroundImage: `url(${mediaAssets.heroBackground})` } : undefined}/>
        <div className="hero-wash" aria-hidden="true"/>
        <div className="hero-content">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-card orbit-left"><Image size={16}/><b>YOUR PHOTO</b></span>
            <span className="orbit-card orbit-top"><Mic2 size={16}/><b>YOUR VOICE</b></span>
            <span className="orbit-card orbit-right"><Video size={16}/><b>YOUR VIDEO</b></span>
          </div>
          <span className="eyebrow"><i/> A MORE HUMAN WAY TO CREATE VIDEO</span>
          <h1>Your face. Your voice.<br/><em>Your story.</em></h1>
          <p>Turn a photo and a message into an AI avatar video.<br className="desktop-break"/> Create, share and show up — wherever your story takes you.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={goToCreate}>Create your avatar <ArrowRight size={15}/></button>
            <a className="button-watch" href="#product"><span><Play size={10} fill="currentColor"/></span> Explore the studio</a>
          </div>
          <div className="hero-caption">A little more you. In every message.</div>
        </div>
        <a href="#product" className="scroll-indicator"><span>SCROLL TO DISCOVER</span><i><ArrowRight size={12}/></i></a>
      </section>

      <section className="manifesto-strip">
        <span className="manifesto-label">MEET AVATARA</span>
        <p>One portrait. Your words. <em>A new way to be there.</em></p>
        <div className="manifesto-note"><span/> MADE TO FEEL PERSONAL</div>
      </section>

      <section className="studio-section" id="product">
        <div className="section-heading studio-heading">
          <div>
            <span className="section-label">01 / THE AVATARA STUDIO</span>
            <h2>From a single photo<br/><em>to something that speaks.</em></h2>
          </div>
          <p>Your image gives it a face. Your words give it a point of view. Avatara brings them together in one considered creative flow.</p>
        </div>

        <div className="studio-window">
          <div className="studio-chrome">
            <div className="chrome-brand"><span className="chrome-mark">a.</span><b>AVATARA STUDIO</b></div>
            <div className="chrome-project">UNTITLED PROJECT <span className="draft-pill">CONCEPT PREVIEW</span></div>
            <div className="chrome-actions"><span>Saved locally</span><span className="chrome-avatar">R</span></div>
          </div>
          <div className="studio-main">
            <aside className="studio-rail">
              <div className="rail-logo">a.</div>
              <span className="rail-overline">YOUR VIDEO</span>
              <div className="rail-step active"><b>01</b><span>Portrait</span><i><Check size={11}/></i></div>
              <div className="rail-step"><b>02</b><span>Message</span></div>
              <div className="rail-step"><b>03</b><span>Preview</span></div>
              <div className="rail-help"><ShieldCheck size={14}/><span>Your likeness,<br/>your permission.</span></div>
            </aside>
            <div className="studio-editor">
              <div className="editor-heading">
                <div><span className="editor-kicker">LET'S MAKE SOMETHING</span><h3>Your video workspace</h3><p>Everything starts with the person on screen.</p></div>
                <span className="editor-status"><i/> DRAFT</span>
              </div>
              <div className="editor-grid">
                <div className="editor-inputs">
                  <div className="input-panel portrait-panel">
                    <div className="panel-heading"><span>01 / SOURCE PORTRAIT</span><span className="panel-check"><Check size={11}/></span></div>
                    <div className="portrait-upload">
                      {mediaAssets.studioPortrait ? <img src={mediaAssets.studioPortrait} alt="Portrait sample in the Avatara studio concept"/> : <MediaPlaceholder kind="portrait" label="YOUR PORTRAIT"/>}
                      <div className="portrait-overlay"><span>YOUR PORTRAIT</span><small>Clear, front-facing image</small></div>
                    </div>
                    <div className="panel-foot"><span><Image size={12}/> Portrait selected</span><small>JPG · PNG</small></div>
                  </div>
                  <div className="input-panel message-panel">
                    <div className="panel-heading"><span>02 / YOUR MESSAGE</span><span className="message-type">SCRIPT OR AUDIO</span></div>
                    <div className="script-lines"><i/><i/><i/><i/><i/></div>
                    <div className="voice-track"><span className="voice-icon"><Mic2 size={13}/></span><div><b>Your words, your way</b><small>Add a script or a voice recording</small></div><ArrowUpRight size={13}/></div>
                  </div>
                </div>
                <div className="editor-preview">
                  <div className="preview-head"><span>YOUR AVATAR PREVIEW</span><span className="preview-quality">16:9 · HD</span></div>
                  <div className="preview-image">
                    {mediaAssets.studioVideo ? <video src={mediaAssets.studioVideo} controls playsInline poster={mediaAssets.studioPortrait || undefined}/> : mediaAssets.studioVideoPoster ? <img className="poster-image" src={mediaAssets.studioVideoPoster} alt="Illustrative avatar video poster"/> : <MediaPlaceholder kind="video" label="YOUR AVATAR VIDEO"/>}
                  </div>
                  <div className="preview-footer"><div><span>READY FOR YOUR MESSAGE</span><b>A face for every story.</b></div><div className="preview-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
                </div>
              </div>
              <div className="studio-timeline"><span className="timeline-label">TIMELINE</span><div className="timeline-track"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><span className="timeline-duration">00:24</span></div>
            </div>
          </div>
          <div className="studio-disclaimer"><Sparkles size={13}/> Illustrative interface concept — replace the media placeholders with your real assets.</div>
        </div>

        <div className="studio-benefits">
          <div><span className="benefit-icon"><Image size={17}/></span><strong>A face people recognize</strong><small>Start with a portrait you have permission to use.</small></div>
          <div><span className="benefit-icon"><Mic2 size={17}/></span><strong>A message that sounds like you</strong><small>Bring a script or your own audio recording.</small></div>
          <div><span className="benefit-icon"><Video size={17}/></span><strong>A video ready to share</strong><small>Review the result before it goes anywhere.</small></div>
        </div>
      </section>

      <section className="brand-statement">
        {mediaAssets.statement ? <div className="statement-image"><img src={mediaAssets.statement} alt="Avatara brand visual"/></div> : <div className="statement-visual-placeholder"><span className="statement-orbit statement-orbit-one"/><span className="statement-orbit statement-orbit-two"/><span className="statement-glow"/></div>}
        <div className="statement-shade"/>
        <div className="statement-content">
          <span className="section-label light-label">02 / THE IDEA BEHIND IT</span>
          <h2>Your best ideas<br/>shouldn't have to wait<br/><em>for the perfect setup.</em></h2>
          <p>No camera check. No finding the right light. Just a message worth sharing, with a face people know.</p>
          <a href="#use-cases">See what you can make <ArrowRight size={15}/></a>
        </div>
        <span className="statement-side-note">PRESENCE, WITHOUT THE PRODUCTION</span>
      </section>

      <section className="possibilities-section" id="use-cases">
        <div className="section-heading possibilities-heading">
          <div><span className="section-label">03 / MADE FOR YOUR WORLD</span><h2>One avatar.<br/><em>Many ways to show up.</em></h2></div>
          <p>Different reasons to press record. One more personal way to deliver the message.</p>
        </div>
        <div className="possibility-grid">
          {useCases.map((item) => (
            <article className={'possibility-card '+item.kind+'-card'} key={item.number}>
              {item.image ? <img src={item.image} alt={item.label}/> : <MediaPlaceholder kind={item.kind} label={item.label} className="possibility-media"/>}
              <div className="possibility-shade"/>
              <span className="possibility-number">{item.number}</span>
              <div className="possibility-copy">
                <span>{item.label}</span>
                <h3>{item.title.split('\n').map((line,index)=><span key={index}>{line}</span>)}</h3>
                <p>{item.copy}</p>
                <a href="#get-started">Make it personal <ArrowUpRight size={15}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-inner">
          <div className="process-heading">
            <span className="section-label light-label">04 / SIMPLE BY DESIGN</span>
            <h2>Three steps.<br/><em>One more you.</em></h2>
            <p>A straightforward path from your first photo to a video ready to share.</p>
            <a href="#get-started">Start your first video <ArrowRight size={15}/></a>
          </div>
          <div className="process-steps">
            <article><span className="process-number">01</span><span className="process-icon"><Image size={21}/></span><h3>Choose your portrait</h3><p>Upload a clear image of yourself or someone who has given consent.</p><span className="process-bottom">THE STARTING POINT</span></article>
            <article><span className="process-number">02</span><span className="process-icon"><Mic2 size={21}/></span><h3>Give it your words</h3><p>Add your script or audio recording to shape what your avatar says.</p><span className="process-bottom">THE MESSAGE</span></article>
            <article><span className="process-number">03</span><span className="process-icon"><Video size={21}/></span><h3>Review and share</h3><p>Preview your video, make sure it feels right, then share it.</p><span className="process-bottom">THE FINAL TAKE</span></article>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-intro"><span className="section-label">A FEW THINGS TO KNOW</span><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Everything you should know before creating your first avatar video.</p><a href="mailto:hello@ai-avatar.app">Still curious? Talk to us <ArrowUpRight size={14}/></a></div>
          <div className="faq-list">{faqs.map(([question,answer],index)=><article className={faqOpen===index?'faq-item active':'faq-item'} key={question}><button onClick={()=>setFaqOpen(faqOpen===index?null:index)} aria-expanded={faqOpen===index}><span className="faq-index">0{index+1}</span><span className="faq-question">{question}</span><span className="faq-toggle">{faqOpen===index?<X size={15}/>:<ChevronDown size={16}/>}</span></button>{faqOpen===index&&<p>{answer}</p>}</article>)}</div>
        </div>
      </section>

      <section className="final-section" id="get-started">
        <div className="final-copy"><span className="section-label light-label">YOUR STORY STARTS HERE</span><h2>Make your presence<br/><em>go a little further.</em></h2><p>Bring your face, your voice and your message together. Be among the first to experience Avatara.</p><a className="button button-light" href="mailto:hello@ai-avatar.app?subject=Avatara%20early%20access">Get early access <ArrowUpRight size={15}/></a><span className="permission-note"><ShieldCheck size={13}/> Only use images and voices you have permission to use.</span></div>
        <div className="final-portrait">
          {mediaAssets.closingVideo ? <video src={mediaAssets.closingVideo} controls playsInline/> : mediaAssets.closingVideoPoster ? <img className="poster-image" src={mediaAssets.closingVideoPoster} alt="Illustrative avatar video poster"/> : <MediaPlaceholder kind="video" label="YOUR AVATAR VIDEO"/>}
          <span className="final-preview-label">YOUR VIDEO / PREVIEW</span>
          <div className="final-caption"><span>YOUR STORY, IN MOTION</span><b>A little more you.</b></div>
        </div>
        <span className="final-watermark">a.</span>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#"><span className="brand-symbol">a</span><span>avatara</span><i>.</i></a>
        <span>© 2026 Avatara. Create with care.</span>
        <div><a href="#product">The studio</a><a href="#process">How it works</a><a href="#faq">FAQs</a></div>
      </footer>
    </main>
  )
}
export default App
