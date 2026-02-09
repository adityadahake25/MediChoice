import "./PatientDashboard.css";

function PatientDashboard() {
    return (
        <div className="patient-dashboard">
            <h2>Welcome Patient 👋</h2>

            <div className="cards">
                <div className="card">🏥 Hospitals</div>
                <div className="card">👨‍⚕️ Doctors</div>
                <div className="card">📅 Appointments</div>
                <div className="card">📄 Records</div>
            </div>
        </div>
    );
}

export default PatientDashboard;
