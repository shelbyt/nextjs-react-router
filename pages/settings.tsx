import React from "react";
import NextLink from "next/link";
import { NextSeo } from 'next-seo';


export default function App(props: { message: string }) {
  return (
    <div>
          <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />


      {/* <Head>
        <meta name="description" content="a description for settings" />
        <meta
          property="og:image"
          content="https://rendertron-dot-prysm-proxy-tests.uc.r.appspot.com/screenshot/https://robohash.org/abc"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://rendertron-dot-prysm-proxy-tests.uc.r.appspot.com/screenshot/https://robohash.org/abc"
        />
        <meta property="twitter:title" content="{{profiletitle}}" />
        <meta property="twitter:description" content="{{profiledescription}}" />
        <meta property="twitter:image" content="{{profileimage}}" />
      </Head> */}
      <p>{props.message}</p>
      <NextLink href="/">Home</NextLink>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { message: "This page is rendered on the server!" } };
};
