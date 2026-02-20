export default function PatientCard({ name, disease }) {
    return (
        <div className="patient-card">
            <h3>{name}</h3>
            <p>Disease: {disease}</p>
        </div>
    );
}
