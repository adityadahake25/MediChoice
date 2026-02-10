export default function DoctorCard({ name, hospital }) {
    return (
        <div className="doctor-card">
            <h3>{name}</h3>
            <p>{hospital}</p>
        </div>
    );
}
