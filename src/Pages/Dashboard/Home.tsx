import GeneralStateSection from "@/components/ui/Home/GeneralStateSection";
import RevenueChart from "@/components/ui/Home/RevenueChart";
import SubscriberChart from "@/components/ui/Home/SubscriberChart";
import UserGrowthChart from "@/components/ui/Home/UserGrowthChart";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <GeneralStateSection />
      <div className="flex gap-4 w-full">
        <div className="w-[77%]">
          <RevenueChart />
        </div>
        <div className="w-[25%]">
          <UserGrowthChart />
        </div>
      </div>
      <SubscriberChart />
    </div>
  );
};

export default Home;
