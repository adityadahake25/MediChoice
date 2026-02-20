import SearchBar from "../components/SearchBar";
import "../styles/home.css";

export default function Home() {
    return (
        <div className="home">
            <h1>Compare Healthcare Treatment Costs</h1>
            <SearchBar />
            <p>Find best hospitals, doctors and treatment prices</p>
        </div>
    );
}
