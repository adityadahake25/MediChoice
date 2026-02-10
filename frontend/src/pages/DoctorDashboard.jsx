import Card from "../components/Card";
import "../styles/dashboard.css";

export default function DoctorDashboard() {
    return (
        <div className="dashboard">
            <h2>Doctor Dashboard</h2>

            <div className="cards">
                <Card title="Patients" value="12" />
                <Card title="Appointments" value="7" />
                <Card title="Earnings" value="₹20,000" />
            </div>
        </div>
    );
}
