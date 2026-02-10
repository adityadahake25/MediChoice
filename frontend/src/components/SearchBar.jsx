import "../styles/searchbar.css";

export default function SearchBar() {
    return (
        <div className="search-container">
            <select>
                <option>Disease</option>
                <option>Hospital</option>
                <option>Treatment</option>
            </select>

            <input
                type="text"
                placeholder="Search disease, hospital, or treatment..."
            />

            <button>Search</button>
        </div>
    );
}
