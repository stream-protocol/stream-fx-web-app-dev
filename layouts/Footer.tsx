import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'
import logo from '@/images/dark-logo.svg'
import { SvgDiscord } from '@/dynamic/Discord'
import { SvgTwitter } from '@/dynamic/Twitter'


const socials = [
  { name: 'Discord', link: 'https://discord.gg/H7SKRw8k', icon: SvgDiscord },
  { name: 'Twitter', link: 'https://x.com/stream_protoco', icon: SvgTwitter }
]

const links = [
  {
    label: 'Get Started',
    links: {
      'Dashboard': '/dashboard',
      'Features': '/#features',
      'Pricing': '/#pricing',
      'FAQ': '/faq'
    }
  },
  {
    label: 'Resources',
    links: {
      'Stream Payment Status': 'streampayment.instatus.com',
      'Phantom Wallet': 'https://phantom.app',
      'Buy Solana': 'https://bip.so/@superteamdao/How-to-get-SOLs-in-Phantom-yTqPw',
    }
  },
  {
    label: 'Socials',
    links: {
      'Discord': 'https://discord.gg/H7SKRw8k',
      'Twitter': 'https://x.com/stream_protocol',
    }
  },
]

export const Footer = () => (
  <div className={styles.container}>
    <div className={styles.childContainer}>
      <img className={styles.logo} src={logo.src} alt="" />
      <p style={{ margin: '2rem 0rem' }} className={styles.lightText}> StreamPayment: Your Solana-Powered Payment Portal</p>
      <div>
        {socials.map((social: any, index: number) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <social.icon className={styles.socialIcon} />
          </a>
        ))}
      </div>
    </div>
    {links.map((link: any, index: number) => (
      <div key={index} className={styles.childContainer}>
        <div>
          <p className={styles.darkText}>{link.label}</p>
          <div className={styles.footerLinks}>
            {Object.keys(link.links).map((key: string, index: number) => (
              <Link key={index} href={link.links[key]}>
                <a className={styles.footerLink}>{key}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)