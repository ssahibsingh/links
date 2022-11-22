import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/image'

import links from "../data/links";
import logo from "../public/logo.webp";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sahib Singh&apos;s Links</title>
        <meta name="title" content="Sahib Singh's Links" />
        <meta name="author" content="Sahib Singh" />
        <meta
          name="description"
          content="Sahib Singh's Links"
        />
        <meta
          name="keywords"
          content="Sahib Singh, Sahib Singh's Links, Sahib Singh's Linktree, Sahib, Soorme, Sardar Sahib Singh, Sahib Singh Khanna, Sahib Singh Github, Sahib Singh LinkedIn, Sahib Singh Gaming Geeks, ssahibsingh, Gaming Geeks, Soorme.com, Giigaa.com "
        />
        <link rel="canonical" href="https://ssahibsingh.github.io/links" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ssahibsingh.github.io/links" />
        <meta property="og:title" content="Sahib Singh" />
        <meta
          property="og:description"
          content="Sahib Singh's Links"
        />
        <meta property="og:image" content="./website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ssahibsingh.github.io/links" />
        <meta property="twitter:title" content="Sahib Singh" />
        <meta
          property="twitter:description"
          content="Sahib Singh's Links"
        />
        <meta property="twitter:image" content="./website.png" />
      </Head>

      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="/">
              Sahib Singh.
            </Link>
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-6 my-3">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer" target="_blank">
                      <div className="cards p-3 d-flex justify-content-center">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* <footer className="my-2">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link href="https://ssahibsingh.github.io">Sahib Singh</Link>
        </p>
      </footer> */}
    </>
  );
}
