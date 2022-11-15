import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://neeharicamadanu.github.io/data/tour.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const handleVisitedPlaces = (id) => {
    const newTourData = tourData.filter((tour) => tour.id !== id);
    setTourData(newTourData);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tourData = await response.json();
      setIsLoading(false);
      setTourData(tourData);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (tourData.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>All Places Visited!</h2>
          <button className="btn" onClick={fetchTours}>
            {" "}
            Show Biblical Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours
        tourData={tourData}
        handleVisitedPlaces={handleVisitedPlaces}
      ></Tours>
    </main>
  );
}

export default App;
