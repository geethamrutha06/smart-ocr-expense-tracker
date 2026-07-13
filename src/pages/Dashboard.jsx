import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UploadBox from "../components/UploadBox";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Navbar />

      <div className="welcome">
        <h1>Welcome Back 👋</h1>
        <p>Manage your expenses smarter with Amazon Textract OCR.</p>
      </div>

      <div className="cards">

        <StatCard
          icon="💰"
          value="₹18,450"
          title="Total Expenses"
        />

        <StatCard
          icon="🧾"
          value="42"
          title="Receipts"
        />

        <StatCard
          icon="📅"
          value="₹5,620"
          title="This Month"
        />

        <StatCard
          icon="🤖"
          value="98%"
          title="OCR Accuracy"
        />

      </div>

      <UploadBox />

    </div>
  );
}

export default Dashboard;