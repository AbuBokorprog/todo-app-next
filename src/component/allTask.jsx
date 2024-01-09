"use client";
import React, { useEffect, useState } from "react";

export default function AllTask() {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    const storedDataString = localStorage.getItem("task");
    const storedData = storedDataString ? JSON.parse(storedDataString) : [];
    setAllTask(storedData);
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-4 mx-auto lg:grid-cols-3">
      {allTask.map((task) => (
        <div key={task.id}>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-evenly items-center">
                <input type="checkbox" name="checkbox" id="" />
                <h2 className="card-title ps-2 w-96">{task.title}</h2>
                <p>...</p>
              </div>
              <p>{task.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
