import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        ImageUrl="media/images/kite.png"
        Title="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        PlayStore=""
        AppStore=""
      />
      <RightSection
        ImageUrl="media/images/console.png"
        Title="Console"
        Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link=""
        LinkName="Learn more"
      />
      <LeftSection
        ImageUrl="media/images/coin.png"
        Title="Coin"
        Description="Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."
        TryDemo=""
        LearnMore=""
        PlayStore=""
        AppStore=""
      />
      <RightSection
        ImageUrl="media/images/kiteconnect.png"
        Title="Kite Connect API"
        Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link=""
        LinkName="Learn more"
      />
      <LeftSection
        ImageUrl="media/images/varsity.png"
        Title="Varsity"
        Description="Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app"
        TryDemo=""
        LearnMore=""
        PlayStore=""
        AppStore=""
      />
      <p className="text-center fs-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
