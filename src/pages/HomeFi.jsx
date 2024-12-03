import DetailsFi from "../components/DetailsFi";
import FooterFi from "../components/FooterFi";
import HeroFi from "../components/HeroFi";
import PlacementFi from "../components/PlacementFi";

const HomeFi = () => {
  return (
    <div className="w-full h-full">
      <HeroFi />
      <PlacementFi />
      <DetailsFi />
      <FooterFi />
    </div>
  );
};

export default HomeFi;
