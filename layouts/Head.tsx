import Head from 'next/head'
import image from 'next/image'

type Props = {
  title: string,
  image?: string
}

export const DefaultHead = ({ title, image }: Props) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" crossOrigin="true" />

    <meta name="title" content={title} />
    <meta name="description" content="StreamPayment -  Empowering Effortless Web3 Transactions" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://streampayment.app/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="StreamPayment -  Empowering Effortless Web3 Transactions" />
    <meta property="og:image" content={image ? image : "https://streampayment.app/meta.png"} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://streampayment.app/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content="StreamPayment -  Empowering Effortless Web3 Transactions" />
    <meta property="twitter:image" content={image ? image : "https://streampayment.app/meta.png"} />

  </Head>
)