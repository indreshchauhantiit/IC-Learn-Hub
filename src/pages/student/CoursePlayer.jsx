
import React from "react";
import { useParams } from "react-router-dom";

const CoursePlayer = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Course Player
      </h1>
      <p>Now playing course: {id}</p>
    </div>
  );
};

export default CoursePlayer;