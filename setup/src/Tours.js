import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData, handleVisitedPlaces }) => {
  const handleTourData = () => {
    return (
      <section>
        <div className="title">
          <h2>Biblical Tours</h2>
          <div className="underline"></div>
        </div>

        <div>
          {tourData.map((tour) => {
            return (
              <Tour
                key={tour.id}
                {...tour}
                handleVisitedPlaces={handleVisitedPlaces}
              ></Tour>
            );
          })}
        </div>
      </section>
    );
  };

  return <>{handleTourData()}</>;
};

export default Tours;
