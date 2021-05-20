import "./styles.css";

export default function SearchCity() {
  return (
    <form className="SearchCity" id="cityForm">
      <input type="search" placeholder="Enter a city" id="enterCity" />
      <input type="submit" value="Search" id="searchButton" />
    </form>
  );
}
