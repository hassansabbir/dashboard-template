
import React from "react";
import { Card, Row, Col, Statistic, Progress } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

interface ProgressCardProps {
  title: string;
  percent: number;
  status?: "success" | "exception" | "normal" | "active";
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <Card>
    <Statistic
      title={title}
      value={value}
      prefix={icon}
      valueStyle={{ color }}
    />
  </Card>
);

const ProgressCard: React.FC<ProgressCardProps> = ({ title, percent, status = "normal" }) => (
  <Card>
    <h3 className="mb-4">{title}</h3>
    <Progress percent={percent} status={status} />
  </Card>
);

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Total Users"
            value={1234}
            icon={<UserOutlined />}
            color="#1890ff"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Total Orders"
            value={567}
            icon={<ShoppingCartOutlined />}
            color="#52c41a"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Revenue"
            value="$12,345"
            icon={<DollarCircleOutlined />}
            color="#faad14"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Appointments"
            value={89}
            icon={<CalendarOutlined />}
            color="#722ed1"
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <ProgressCard
            title="Monthly Sales Target"
            percent={75}
            status="active"
          />
        </Col>
        <Col xs={24} md={12}>
          <ProgressCard
            title="Customer Satisfaction"
            percent={92}
            status="success"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
