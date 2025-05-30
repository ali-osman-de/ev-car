import BrowseCategory from "../../Components/HomePageComponents/BrowseCategory";
import ImageHero from "../../Components/HomePageComponents/ImageHero";
import News from "../../Components/HomePageComponents/News";
import WhyChooseElectricCar from "../../Components/HomePageComponents/WhyChooseElectricCar";

function Home() {
  return (
    <>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div>
          <ImageHero />
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-light leading-tight px-4 pb-3 pt-5">
            Browse by category
          </h2>
          <BrowseCategory />
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-light leading-tight px-4 pb-3 pt-5">
            News & Reviews
          </h2>
          <News />
          <h2 className="sm:text-lg md:text-xl lg:text-4xl font-bold text-light leading-tight px-4 pt-10">
            Why choose an electric car?
          </h2>
          <WhyChooseElectricCar />
        </div>
      </div>
    </>
  );
}

export default Home;
