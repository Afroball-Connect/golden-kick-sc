'use client';
import { useEffect, useRef, useState } from 'react';
import ClubIntro from './components/ClubIntro';
import ThemeToggle from './components/ThemeToggle';

const stories = [
  { title: 'Three Golden Kick players invited for national U17 trial', category: 'PLAYER PATHWAY', image: '/images/news-u17.jpg', excerpt: 'Joseph Mensah, Joshua Fuseine and Sampson Odametten received invitations to a week-long national U17 trial.', href: 'https://www.goldenkicksc.com/news/3-gk-players-invited-for-national-u17-trials' },
  { title: 'Leo Tompte earns a trial opportunity in Latvia', category: 'PLAYER PATHWAY', image: '/images/news-leo.jpg', excerpt: 'The club reported that striker Eleoenai Tompte travelled to Riga for a trial opportunity.', href: 'https://www.goldenkicksc.com/news/leo-tompte-on-trial-lativa' },
  { title: 'AFA League: an archive from the club', category: 'FROM THE ARCHIVE', image: '/images/news-league.jpg', excerpt: 'A look back at a published league update from Golden Kick SC. Current standings are not available here.', href: 'https://www.goldenkicksc.com/news/afa-league-table' },
];
const nav = [['News','#news'],['Matches','#matches'],['Squad','/squad'],['Club','#club'],['Pathways','#pathways']];

export default function Home() {
  const [menu, setMenu] = useState(false), [story, setStory] = useState(0), [tab, setTab] = useState<'fixtures'|'results'>('fixtures');
  const [introActive, setIntroActive] = useState(false), [introReplayToken, setIntroReplayToken] = useState(0);
  const introReplayRef = useRef<HTMLButtonElement | null>(null);
  const active = stories[story];
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll<HTMLElement>('[data-motion="reveal"]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return <>
    <ClubIntro replayToken={introReplayToken} replayTriggerRef={introReplayRef} onVisibleChange={setIntroActive}/>
    <main className="site" aria-hidden={introActive || undefined}>
    <div className="utility"><span>ACCRA, GHANA <i/> EST. 2016</span><span className="utility-right"><a href="mailto:goldenkicksc@gmail.com">GET IN TOUCH ↗</a></span></div>
    <header className="header"><a className="brand" href="#top" aria-label="Golden Kick SC home"><img src="/images/crest.svg" alt="Golden Kick SC crest"/><span>GOLDEN KICK <b>SC</b></span></a>
      <div className="header-actions">
        <nav className={menu?'nav open':'nav'} aria-label="Main navigation">{nav.map(([label,href])=><a key={href} onClick={()=>setMenu(false)} href={href}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setMenu(false)}>JOIN THE CLUB <span>↗</span></a></nav>
        <ThemeToggle />
        <button className="menu-button" aria-expanded={menu} aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>{menu?'CLOSE':'MENU'} <span>{menu?'×':'☰'}</span></button>
      </div>
    </header>
    <section className="hero" id="top"><div className="hero-art"/><div className="hero-copy"><p className="eyebrow"><span className="dot"/> THE NEXT CHAPTER STARTS HERE</p><h1>BUILT FOR<br/><em>WHAT'S NEXT.</em></h1><p className="hero-intro">A football home for talent, ambition and the next generation. Rooted in Accra. Focused on the future.</p><a href="#club" className="button button-gold">DISCOVER OUR CLUB <span>↗</span></a></div><div className="hero-bottom"><span>GOLDEN KICK SPORTING CLUB</span><span>5°33′N&nbsp; 0°14′W</span></div><div className="hero-stamp"><img src="/images/crest.svg" alt=""/><span>ACCRA<br/>GHANA</span></div></section>
    <div className="ticker" role="img" aria-label="Club themes: development, opportunity, community and football"><div aria-hidden="true">DEVELOPMENT <b>✳</b> OPPORTUNITY <b>✳</b> COMMUNITY <b>✳</b> FOOTBALL <b>✳</b> DEVELOPMENT <b>✳</b> OPPORTUNITY <b>✳</b> COMMUNITY <b>✳</b> FOOTBALL <b>✳</b></div></div>
    <section className="section news-section" id="news" data-motion="reveal"><div className="section-head"><div><p className="eyebrow">THE LATEST FROM GK</p><h2>CLUB <em>STORIES</em></h2></div><div className="arrows"><button aria-label="Previous story" onClick={()=>setStory((story+stories.length-1)%stories.length)}>←</button><button aria-label="Next story" onClick={()=>setStory((story+1)%stories.length)}>→</button></div></div>
      <div className="feature-story"><a className="feature-image" href={active.href}><img src={active.image} alt=""/><span className="image-index">0{story+1} / 0{stories.length}</span></a><article className="feature-copy"><p className="eyebrow"><span className="gold-line"/>{active.category} <span className="archive-note">ARCHIVE · VERIFY LATEST WITH CLUB</span></p><h3>{active.title}</h3><p>{active.excerpt}</p><a className="text-link" href={active.href}>READ THE STORY <span>↗</span></a><div className="story-dots">{stories.map((s,i)=><button key={s.title} aria-label={`Show story ${i+1}`} className={i===story?'selected':''} onClick={()=>setStory(i)}/>)}</div></article></div>
    </section>
    <section className="match-section" id="matches" data-motion="reveal"><div className="match-top"><div><p className="eyebrow">ON THE PITCH</p><h2>MATCH <em>CENTRE</em></h2></div><div className="tabs"><button className={tab==='fixtures'?'active':''} onClick={()=>setTab('fixtures')}>FIXTURES</button><button className={tab==='results'?'active':''} onClick={()=>setTab('results')}>RESULTS</button></div></div>
      <div className="match-card"><div className="match-label"><span className="live-dot"/> {tab==='fixtures'?'UP NEXT':'RECENT RESULT'} <span className="comp">CLUB UPDATE</span></div><div className="match-teams"><div className="team"><img src="/images/crest.svg" alt="Golden Kick SC crest"/><strong>GOLDEN<br/>KICK SC</strong></div><div className="versus">VS<span>{tab==='fixtures'?'FIXTURE DETAILS PENDING':'ARCHIVE'}</span></div><div className="team opponent"><div className="opponent-mark">?</div><strong>{tab==='fixtures'?'OPPONENT':'RESULTS'}<br/>TO BE CONFIRMED</strong></div></div><div className="match-details"><span>DATE <b>TO BE CONFIRMED</b></span><span>VENUE <b>TO BE CONFIRMED</b></span><span>COMPETITION <b>TO BE CONFIRMED</b></span><span className="match-link">Fixtures & results <a href="https://www.goldenkicksc.com/matches">↗</a></span></div></div><p className="fine-print">We are awaiting confirmation of current fixtures and results. No match details have been invented.</p>
    </section>
    <section className="squad-section" id="squad" data-motion="reveal"><div className="squad-text"><p className="eyebrow">THE PEOPLE BEHIND THE BADGE</p><h2>ONE CLUB.<br/><em>MANY DREAMS.</em></h2><p>Meet the players through a new, club-first gallery featuring portraits published by Golden Kick SC. Current squad membership is clearly labelled while awaiting confirmation.</p><a className="button button-outline" href="/squad">MEET THE PLAYERS <span>↗</span></a><small>Player archive · season not stated.</small></div><div className="squad-visual"><img src="/images/crest.svg" alt="Golden Kick SC crest published on the club’s official website"/><div className="visual-caption"><span>PLAYER PORTRAITS</span><span>ROSTER STATUS PENDING</span></div><div className="squad-mark">GK<br/><span>SC</span></div></div></section>
    <section className="pathways" id="pathways" data-motion="reveal"><div className="pathways-top"><p className="eyebrow">MORE THAN THE 90 MINUTES</p><h2>MAKE YOUR <em>MOVE.</em></h2><p>Golden Kick SC was founded to help young talent pursue professional football and to give established players a place to maintain match fitness.</p></div><div className="pathway-grid"><a href="https://www.goldenkicksc.com/players-on-loan"><span>01 / PLAYER PATHWAYS</span><h3>From Accra<br/>to the next level.</h3><b>↗</b></a><a href="#contact"><span>02 / PARTNERSHIPS</span><h3>Back the<br/>next generation.</h3><b>↗</b></a><a href="mailto:goldenkicksc@gmail.com"><span>03 / GET INVOLVED</span><h3>Be part of<br/>the journey.</h3><b>↗</b></a></div></section>
    <section className="club-section" id="club" data-motion="reveal"><div className="club-crest"><img src="/images/crest.svg" alt="Golden Kick SC"/></div><div className="club-copy"><p className="eyebrow">OUR CLUB · MAMPROBI, ACCRA</p><h2>FOOTBALL WITH<br/><em>A PURPOSE.</em></h2><p>Founded in 2016, Golden Kick Sporting Club exists to serve talented young players pursuing professional football and established professionals seeking to maintain or regain match fitness. The club’s approach brings those ambitions together.</p><a className="text-link" href="https://www.goldenkicksc.com/club">MORE ABOUT GOLDEN KICK <span>↗</span></a></div><div className="club-facts"><div><b>2016</b><span>YEAR FOUNDED</span></div><div><b>ACCRA</b><span>HOME CITY</span></div><div><b>GHANA</b><span>OUR ROOTS</span></div></div></section>
    <section className="honours" data-motion="reveal"><div><p className="eyebrow">THE JOURNEY SO FAR</p><h2>OUR <em>HONOURS</em></h2></div><div className="honours-note"><span>THE RECORD IS STILL BEING WRITTEN</span><p>Official honours and current season achievements will be added once confirmed by the club.</p><a href="mailto:goldenkicksc@gmail.com">SHARE A CLUB UPDATE ↗</a></div></section>
    <footer id="contact"><div className="footer-top"><div><a className="brand footer-brand" href="#top"><img src="/images/crest.svg" alt=""/><span>GOLDEN KICK <b>SC</b></span></a><p>Rooted in Accra.<br/>Focused on the future.</p></div><div className="footer-contact"><span>COME SAY HELLO</span><a href="mailto:goldenkicksc@gmail.com">goldenkicksc@gmail.com ↗</a><a href="tel:+233****0650">+233 548 550 650 ↗</a><p>Box MP 4728, Mamprobi<br/>Accra, Ghana</p></div><div className="footer-nav"><span>EXPLORE</span>{nav.map(([label,href])=><a key={href} href={href}>{label} ↗</a>)}<button ref={introReplayRef} type="button" className="intro-replay" onClick={() => setIntroReplayToken(value => value + 1)}>REPLAY CLUB INTRO ↗</button></div></div><div className="footer-bottom"><span>© GOLDEN KICK SC · CLUB INFORMATION AND ARCHIVE STATUS SHOWN AS PUBLISHED</span><a href="https://www.goldenkicksc.com/">VISIT CURRENT CLUB SITE ↗</a></div></footer>
  </main></>;
}
