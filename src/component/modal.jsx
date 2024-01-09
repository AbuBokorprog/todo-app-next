"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Modal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
              </label>{" "}
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
              </label>{" "}
              <br />
              <textarea
                className="input input-bordered w-full h-24 my-4"
                placeholder="Type your title"
                name=""
                id=""
                cols="30"
                rows="50"
                {...register("Type your description", {
                  required: true,
                  maxLength: 200,
                })}
              />
            </div>
            <div>
              <label className="font-semibold">
                Priority: <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                {...register("priority", { required: true })}
                className="input input-bordered w-full my-4"
              >
                <option defaultValue="Priority">Priority</option>
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
    </div>
  );
}
