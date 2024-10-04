// pages/landingPage.tsx
import { ReactElement } from "react";
// import LandingLayout from "../layouts/LandingLayout"; // Layout untuk landing page

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <p>Ini adalah halaman landing page.</p>
    </div>
  );
};

// Fungsi untuk menentukan layout yang akan digunakan
LandingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default LandingPage;
