const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <Loader />,
});
const Header = dynamic(() => import("@/components/Header/Header"), {
  loading: () => <Loader />,
});
import Loader from "@/components/Loader";
const QuickView = dynamic(() => import("@/components/QuickView/QuickView"), {
  loading: () => <Loader />,
});
const WishlistPopUp = dynamic(
  () => import("@/components/WishlistPopUp/WishlistPopUp"),
  {
    loading: () => <Loader />,
  }
);
import dynamic from "next/dynamic";
import Script from "next/script";

export const metadata = {
  title: "Shree Banaras Jewels, Varanasi, Uttar Pradesh, India",
  description: "Shree Banaras Jewels, Varanasi, Uttar Pradesh, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="media/fav.png" type="image/x-icon" />
        <link rel="stylesheet" href="/libs/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/libs/feather-font/css/iconfont.css" />
        <link rel="stylesheet" href="/libs/icomoon-font/css/icomoon.css" />
        <link rel="stylesheet" href="/libs/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" href="/libs/wpbingofont/css/wpbingofont.css" />
        <link rel="stylesheet" href="/libs/elegant-icons/css/elegant.css" />
        <link rel="stylesheet" href="/libs/slick/css/slick.css" />
        <link rel="stylesheet" href="/libs/slick/css/slick-theme.css" />
        <link rel="stylesheet" href="/libs/mmenu/css/mmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/app.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="home">
        <div id="page" className="hfeed page-wrapper" style={{overflow:"hidden"}}>
          <Header />

          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div id="content" className="site-content" role="main">
                  {children}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>

        <WishlistPopUp />
        <QuickView />

        <div className="back-top button-show">
          <i className="arrow_carrot-up"></i>
        </div>

        <div className="page-preloader">
          <div className="loader">
            <div></div>
            <div></div>
          </div>
        </div>

        <Script
          src="/libs/popper/js/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/libs/jquery/js/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/libs/bootstrap/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/libs/slick/js/slick.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/libs/mmenu/js/jquery.mmenu.all.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
