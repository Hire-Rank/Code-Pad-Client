import MainHome from "@/components/HomeComponents/MainHome";
import Features from "@/components/HomeComponents/Features";
import Bottom from "@/components/HomeComponents/Bottom";
import Footer from "@/components/HomeComponents/Footer";
const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-36">
      <MainHome />
      <Features />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
