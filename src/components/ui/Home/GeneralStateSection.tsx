import { LuUser, LuTrendingUp, LuStore, LuShoppingBag } from "react-icons/lu";
import { Spin } from "antd";

const GeneralStateSection = () => {
  // Simulated dummy data
  const generalState = {
    data: {
      totalActiveUsers: 1500,
      newSignups: 120,
      totalActiveVendors: 45,
      totalCompletedOrders: 320,
      totalServices: 75,
    },
  };

  const isLoading = false; // Simulated loading state

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin />
      </div>
    );
  }

  const state = generalState?.data;

  const stats = [
    {
      label: "Total User",
      count: state?.totalActiveUsers,
      icon: <LuUser size={20} />,
    },
    {
      label: "New Sign Ups",
      count: state?.newSignups,
      icon: <LuTrendingUp size={20} />,
    },
    {
      label: "Active Vendors",
      count: state?.totalActiveVendors,
      icon: <LuStore size={20} />,
    },
    {
      label: "Completed Orders",
      count: state?.totalCompletedOrders,
      icon: <LuShoppingBag size={20} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#2F5E81] rounded-sm py-6 relative overflow-hidden flex flex-col items-center justify-center text-white shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3 z-10">
            <span className="opacity-90">{item.icon}</span>
            <p className="font-medium tracking-wide">{item.label}</p>
          </div>
          <h3 className="text-3xl font-semibold z-10">{item.count}</h3>

          {/* Decorative Bottom Curve */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[100%] h-20 bg-white/10 rounded-[100%]"></div>
        </div>
      ))}
    </div>
  );
};

export default GeneralStateSection;
