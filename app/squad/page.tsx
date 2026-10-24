import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './SquadPage.module.css';
import ThemeToggle from '../components/ThemeToggle';
import { playerGroups } from './players';

export const metadata: Metadata = {
  title: 'The Squad | Golden Kick SC',
  description: 'A first-party home for Golden Kick SC player portraits. Current season and squad membership await club confirmation.',
};

const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/#news' },
  { label: 'Matches', href: '/#matches' },
  { label: 'Squad', href: '/squad', current: true },
  { label: 'Club', href: '/#club' },
];

export default function SquadPage() {
  const profileCount = playerGroups.reduce((total, group) => total + group.players.length, 0);

  return (
    <main className={styles.page}>
      <div className={styles.utility}>
        <span>ACCRA, GHANA <i /> GOLDEN KICK SPORTING CLUB</span>
        <a href="mailto:goldenkicksc@gmail.com">CONTACT THE CLUB <span aria-hidden="true">↗</span></a>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Golden Kick SC home">
          <Image src="/images/crest.svg" width={48} height={52} alt="" priority />
          <span>GOLDEN KICK <b>SC</b></span>
        </a>
        <div className={styles.headerActions}>
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {siteLinks.map((link) => (
              <a key={link.label} href={link.href} aria-current={link.current ? 'page' : undefined}>
                {link.label}
              </a>
            ))}
            <a className={styles.navCta} href="/#contact">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
          </nav>
          <ThemeToggle />
          <details className={styles.mobileNav}>
            <summary aria-label="Open navigation menu">MENU <span aria-hidden="true">＋</span></summary>
            <nav aria-label="Mobile navigation">
              {siteLinks.map((link) => (
                <a key={link.label} href={link.href} aria-current={link.current ? 'page' : undefined}>
                  {link.label}
                </a>
              ))}
              <a href="/#contact">JOIN THE CLUB <span aria-hidden="true">↗</span></a>
            </nav>
          </details>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="squad-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> PLAYER PROFILES · FROM THE CLUB ARCHIVE</p>
            <h1 id="squad-title">THE<br /><em>SQUAD.</em></h1>
            <p className={styles.lede}>The people behind the badge. A fresh, club-first home for the player portraits published by Golden Kick SC.</p>
            <a className={styles.exploreLink} href="#goalkeepers">EXPLORE PLAYER PROFILES <span aria-hidden="true">↓</span></a>
          </div>
          <aside className={styles.statusCard} aria-label="Squad information status">
            <span className={styles.statusLabel}><i /> ROSTER STATUS</span>
            <strong>Season confirmation pending</strong>
            <p>These names, groupings and portraits come from the club’s public player page. It does not specify a season, so this gallery is not a confirmation of the current first-team roster.</p>
            <span className={styles.statusCount}>{String(profileCount).padStart(2, '0')} PUBLISHED PHOTO PROFILES</span>
          </aside>
        </div>
        <div className={styles.heroFoot}><span>ROOTED IN ACCRA. FOCUSED ON THE FUTURE.</span><span>01 — 04 / PLAYER GROUPS</span></div>
      </section>

      <div className={styles.archiveNotice} role="note">
        <span className={styles.noticeMark}>i</span>
        <p><strong>ARCHIVE NOTE</strong> Player status and season details have not been independently confirmed. We have left out dates of birth and shirt numbers rather than present potentially outdated details as current.</p>
      </div>

      <nav className={styles.positionNav} aria-label="Jump to player group">
        {playerGroups.map((group, index) => (
          <a key={group.id} href={`#${group.id}`}>
            <span>0{index + 1}</span> {group.title.toUpperCase()} <b>{String(group.players.length).padStart(2, '0')}</b>
          </a>
        ))}
      </nav>

      <div className={styles.roster}>
        {playerGroups.map((group, groupIndex) => (
          <section className={styles.group} id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
            <div className={styles.groupHeading}>
              <div><p>PLAYER GROUP · 0{groupIndex + 1}</p><h2 id={`${group.id}-heading`}>{group.title}<span>.</span></h2></div>
              <span>{String(group.players.length).padStart(2, '0')} PHOTO {group.players.length === 1 ? 'PROFILE' : 'PROFILES'}</span>
            </div>
            <div className={styles.playerGrid}>
              {group.players.map((player, index) => (
                <article className={styles.playerCard} key={player.name}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={player.image}
                      alt={`${player.name} — portrait published in the Golden Kick SC player archive`}
                      width={640}
                      height={800}
                      unoptimized
                      loading={groupIndex === 0 && index === 0 ? 'eager' : 'lazy'}
                    />
                    <span className={styles.photoIndex}>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className={styles.playerMeta}>
                    <span>{player.role.toUpperCase()}</span>
                    <h3>{player.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className={styles.confirmation}>
        <div><p className={styles.eyebrow}><span /> KEEPING THE RECORD RIGHT</p><h2>THIS SEASON’S<br /><em>ROSTER?</em></h2></div>
        <div><p>We’ll update these profiles when the club confirms the current squad, positions and approved player photos. Accuracy matters more than filling every shirt.</p><a href="mailto:goldenkicksc@gmail.com?subject=Golden%20Kick%20SC%20squad%20update">SEND A SQUAD UPDATE <span aria-hidden="true">↗</span></a></div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div><a className={styles.brand} href="/" aria-label="Golden Kick SC home"><Image src="/images/crest.svg" width={48} height={52} alt=""/><span>GOLDEN KICK <b>SC</b></span></a><p>Rooted in Accra.<br />Focused on the future.</p></div>
          <div className={styles.footerContact}><span>COME SAY HELLO</span><a href="mailto:goldenkicksc@gmail.com">goldenkicksc@gmail.com ↗</a><p>Mamprobi, Accra<br />Ghana</p></div>
          <div className={styles.footerLinks}><span>EXPLORE</span>{siteLinks.map((link) => <a key={link.label} href={link.href}>{link.label} ↗</a>)}</div>
        </div>
        <div className={styles.sourceNote}>PLAYER NAMES AND PHOTOGRAPHS: PUBLIC GOLDEN KICK SC PLAYER PAGE · SEASON NOT STATED</div>
        <div className={styles.footerBottom}><span>© GOLDEN KICK SC · INFORMATION SHOWN WITH SOURCE CONTEXT</span><a href="/">BACK TO THE CLUB HOME ↗</a></div>
      </footer>
    </main>
  );
}
