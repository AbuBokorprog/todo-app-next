"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Modal() {
  const existTask = JSON.parse(localStorage.getItem("task")) || [];
  const [task, setTask] = useState(existTask);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existTask = JSON.parse(localStorage.getItem("task")) || [];
      setTask(existTask);
    }
  }, []);

  const onSubmit = (data) => {
    const newTask = { id: Date.now(), ...data };
    if (typeof window !== "undefined") {
      setTask([newTask, ...task]);
      localStorage.setItem("task", JSON.stringify([newTask, ...task]));
    }
    reset();
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full text-left"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add Task
      </button>
      <dialog id="my_modal_2" className="modal sm:modal-middle w-full">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="font-semibold">
                Title: <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                className="input input-bordered w-full my-4"
                placeholder="Type your title"
                {...register("title", { required: true, maxLength: 20 })}
              />
            </div>
            <div>
              <label className="font-semibold">
                Description: <span className="text-red-500">*</span>
              </label>
              <br />
              <textarea
                className="input input-bordered w-full h-24 my-4"
                placeholder="Type your description"
                name=""
                id=""
                cols="30"
                rows="50"
                {...register("description", {
                  required: true,
                  maxLength: 200,
                })}
              />
            </div>
            <div>
              <label className="font-semibold">
                Priority
                <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                {...register("priority", { required: true })}
                className="input input-bordered w-full my-4"
              >
                <option value="Priority">Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <input type="submit" className="w-full btn-primary btn" />
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="my-10">
        <h2 className="text-left text-4xl font-semibold">All Task</h2>
        <div className="grid md:grid-cols-2 gap-4 mx-auto lg:grid-cols-3">
          {task.map((t) => (
            <div key={t.id}>
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-evenly items-center">
                    <input type="checkbox" name="checkbox" id="" />
                    <h2 className="card-title ps-2 w-96">{t.title}</h2>
                    <details className="dropdown">
                      <summary className="m-1 btn bg-white">...</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                        <li>
                          <a>Edit</a>
                        </li>
                        <li>
                          <a>Remove</a>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <p>{t.description}</p>
                  {t.priority === "Low" ? (
                    <p className="badge-error rounded-full w-20 text-center text-white">
                      {t.priority}
                    </p>
                  ) : t.priority === "Medium" ? (
                    <p className="badge-warning rounded-full w-20 text-center text-white">
                      {t.priority}
                    </p>
                  ) : (
                    <p className="badge-success rounded-full w-20 text-center text-white">
                      {t.priority}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
