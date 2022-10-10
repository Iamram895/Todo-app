import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setdashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setdashboardData(data);
      setLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <h2>Post-{dashboardData.post}</h2>
        <h2>Follower-{dashboardData.follwers}</h2>
        <h2>Following-{dashboardData.following}</h2>
        <h2>Likes-{dashboardData.likes}</h2>
      </div>
    </>
  );
};

export default Dashboard;
