/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import { HeroContainer } from '@/layouts/HeroContainer';
// @ts-expect-error
import Faq from 'react-faq-component';
import styles from '@/styles/Home.module.scss';
import defaults from '@/styles/Defaults.module.scss';

const faqStyles = {
  rowTitleColor: "#00111A",
  rowContentColor: '#8c9498',
  rowContentPaddingTop: '1rem',
  rowContentPaddingBottom: '1.8rem',
};

const faqConfig = {
  tabFocus: true
}

const anchor = (link: string, label: string) => `<a class="faq-link" rel="noopener noreferrer" target="_blank" style="color: #00111A" href="${link}">${label}</a>`
const dark = (text: string) => `<span style="color: #00111A; font-weight: bold;">${text}</span>`

const data = {
  rows: [
    {
      title: "Entering the World of Solana and Crypto: Your Beginner's Guide",
      content: `Begin Your Solana Journey: Install a Browser Wallet Today. We recommend ${anchor('https://phantom.app/', 'Phantom Wallet')}. Seeding Your Wallet: Here's Your Starting Point ${anchor('https://bip.so/@superteamdao/How-to-get-SOLs-in-Phantom-yTqPw', 'guide')}.`,
    },
    {
      title: "How does it work?",
      content: "Your Wallet, Your Key: A Secure Connection in Every StreamPayment Link"
    },
    {
      title: "Unlock Premium Power?",
      content: `Elevate Your Experience with the Professional Plan`
    },
    {
      title: "Do I have complete ownership of my funds?",
      content: "Yes. We only store your wallet address and use it to send you payments. Full Control Over Your Funds: Your Ownership, Our Secure Process"
    },
    {
      title: "How do I get paid?",
      content: "Swift Payments, Straight to Your Wallet: Experience Instant Transactions."
    },
    {
      title: "Is there a fee to use StreamPayment Platform?",
      content: `Transparency in Fees: Exploring StreamPayment's Cost-effective Model. We charge ${dark('0%')} commission fees unlike other services. Instead we keep the service running with a very cheap one time fee.`
    },
    {
      title: "Setting Us Apart: What Makes StreamPayment Platform Stand Out from the Rest",
      content: `With the power of the ${anchor('https://solana.com', 'Solana')} network, StreamPayment Platform powers ${dark('the fastest way')} to accept payments internationally from anyone. We've built in Invoicing feature in the professional plan for all the freelancers who want to accept payments through crypto.`
    },
    {
      title: "How do I contact StreamPayment?",
      content: `You can contact us at our ${anchor('https://discord.gg/H7SKRw8k', 'Discord server')} or reach us directly at our ${anchor('mailto://help@streampayment.app', 'email')}.`
    }
  ]
}

export default function FaqPage({ user, setUser }: { user?: string, setUser?: any}) {
  return (
    <>
      <DefaultHead title="FAQ - StreamPayment" />
      <Navbar user={user} setUser={setUser} />
      <HeroContainer title={'FAQ'} />
      <div id="#" className={defaults.staticHeroContent}>
        <div style={{ maxWidth: '800px', padding: '0rem 3rem'}}>
          <Faq config={faqConfig} styles={faqStyles} data={data} />
        </div>
      </div>
    </>
  );
}