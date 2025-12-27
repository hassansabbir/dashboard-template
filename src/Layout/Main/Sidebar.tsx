import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserPlus } from "react-icons/pi";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import { FaUsers } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { CiGrid32 } from "react-icons/ci";
import { ImFolderUpload } from "react-icons/im";
import { SiMaterialdesignicons } from "react-icons/si";
import { GiFertilizerBag } from "react-icons/gi";

interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
  children?: MenuItem[];
}

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    Cookies.remove("refreshToken");
    navigate("/auth/login");
  };

  const menuItems: MenuItem[] = [
    {
      key: "/",
      icon: <CiGrid32 size={24} />,
      label: (
        <Link to="/" className="">
          Overview
        </Link>
      ),
    },

    {
      key: "/users",
      icon: <PiUserPlus size={24} />,
      label: <Link to="/users">User Management</Link>,
    },
    {
      key: "/app-videos",
      icon: <FaUsers size={24} />,
      label: <Link to="/app-videos">App Videos</Link>,
    },
    {
      key: "/subscription-plan",
      icon: <ImFolderUpload size={24} />,
      label: <Link to="/subscription-plan">Subscription Plan</Link>,
    },
    {
      key: "/subscribers",
      icon: <FaHistory size={24} />,
      label: <Link to="/subscribers">Subscribers</Link>,
    },
    {
      key: "subMenuSetting",
      icon: <IoSettingsOutline size={24} />,
      label: "Settings",
      children: [
        {
          key: "/personal-information",
          label: (
            <Link
              to="/personal-information"
              className="text-white hover:text-white"
            >
              Personal Information
            </Link>
          ),
        },
        {
          key: "/change-password",
          label: (
            <Link to="/change-password" className="text-white hover:text-white">
              Change Password
            </Link>
          ),
        },

        {
          key: "/support-request",
          label: (
            <Link to="/support-request" className="text-white hover:text-white">
              Support Request
            </Link>
          ),
        },
        {
          key: "/about-us",
          label: (
            <Link to="/about-us" className="text-white hover:text-white">
              About Us
            </Link>
          ),
        },
        {
          key: "/terms-and-condition",
          label: (
            <Link
              to="/terms-and-condition"
              className="text-white hover:text-white"
            >
              Terms And Condition
            </Link>
          ),
        },
        {
          key: "/privacy-policy",
          label: (
            <Link to="/privacy-policy" className="text-white hover:text-white">
              Privacy Policy
            </Link>
          ),
        },
      ],
    },
    {
      key: "/logout",
      icon: <IoIosLogOut size={24} />,
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  useEffect(() => {
    const selectedItem = menuItems.find(
      (item) =>
        item.key === path || item.children?.some((sub) => sub.key === path)
    );

    if (selectedItem) {
      setSelectedKey(path);

      if (selectedItem.children) {
        setOpenKeys([selectedItem.key]);
      } else {
        const parentItem = menuItems.find((item) =>
          item.children?.some((sub) => sub.key === path)
        );
        if (parentItem) {
          setOpenKeys([parentItem.key]);
        }
      }
    }
  }, [path]);

  const handleOpenChange = (keys: string[]): void => {
    setOpenKeys(keys);
  };

  return (
    <div className="mt-5 overflow-y-scroll">
      <div className="px-10">
        <Link
          to={"/"}
          className="mb-10 flex items-center flex-col gap-2 justify-center py-4"
        >
          <img src={logo} alt="" className="w-40" />
        </Link>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ borderRightColor: "transparent", background: "transparent" }}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
