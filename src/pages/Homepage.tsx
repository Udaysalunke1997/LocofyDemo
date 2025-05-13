import { FunctionComponent } from "react";
import TopHeader from "../components/TopHeader";
import SearchSection from "../components/SearchSection";
import UpcomingFlightSection from "../components/UpcomingFlightSection";
import PopDestinationsMain from "../components/PopDestinationsMain";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import "./Homepage.scss";

const Homepage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <TopHeader />
        <SearchSection />
      </section>
      <section className="home-contents">
        <UpcomingFlightSection />
        <PopDestinationsMain />
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <section className="footer-section">
        <SubscribeSection />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
