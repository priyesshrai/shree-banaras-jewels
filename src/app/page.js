import dynamic from "next/dynamic";
import React from "react";
import Loader from "@/components/Loader"; // Import Loader before usage
import Testimonial from "@/components/Testimonial/Testimonial";

const FifthComponent = dynamic(
  () => import("@/components/FifthComponent/FifthComponent"),
  {
    loading: () => <Loader />,
  }
);

const ForthComponent = dynamic(
  () => import("@/components/ForthComponent/ForthComponent"),
  {
    loading: () => <Loader />,
  }
);

const ThirdComponent = dynamic(
  () => import("@/components/ThirdComponent/ThirdComponent"),
  {
    loading: () => <Loader />,
  }
);
const Banner = dynamic(() => import("@/components/Banner/Banner"), {
  loading: () => <Loader />,
});

const TopCategories = dynamic(
  () => import("@/components/TopCategories/TopCategories"),
  {
    loading: () => <Loader />,
  }
);
const SixthComponent = dynamic(
  () => import("@/components/SixthComponent/SixthComponent"),
  {
    loading: () => <Loader />,
  }
);
const SeventhComponent = dynamic(
  () => import("@/components/SeventhComponent/SeventhComponent"),
  {
    loading: () => <Loader />,
  }
);

export default function page() {
  return (
    <>
      <Banner />
      <TopCategories />
      <ThirdComponent />
      <ForthComponent />
      <FifthComponent />
      <SixthComponent />
      <SeventhComponent />
      {/* <Testimonial/> */}
    </>
  );
}
