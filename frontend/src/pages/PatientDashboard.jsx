import Card from "../components/Card";
import "../styles/dashboard.css";

export default function PatientDashboard() {
    return (
        <div className="dashboard">
            <h2>Patient Dashboard</h2>

            <div className="cards">
                <Card title="Appointments" value="3" />
                <Card title="Reports" value="5" />
                <Card title="Estimated Cost" value="₹45,000" />
            </div>
        </div>
    );
}
