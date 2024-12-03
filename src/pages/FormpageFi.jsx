import CardsFi from "../components/CardsFi";
import FooterFi from "../components/FooterFi";
import NavbarFi from "../components/NavbarFi";
import FormFi from "../forms/FormFi";

const FormpageFi = () => {
  return (
    <div className=" bg-black">
      <div className="bg-black w-full h-full relative flex flex-col items-center">
        <NavbarFi />
      </div>
      <FormFi />
      <CardsFi />
      <FooterFi />
    </div>
  );
};

export default FormpageFi;
