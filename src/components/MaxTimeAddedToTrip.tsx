import React from "react";

const MaxTimeAddedToTrip = ({ register }) => {
  return (
    <>
      <div>
        <span className="label-text font-bold">Max added time to trip: </span>
      </div>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">30 minutes</span>
            <input
              type="radio"
              value={1800}
              className="radio bg-white checked:bg-blue-400"
              {...register("max_added_time")}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">45 minutes</span>
            <input
              type="radio"
              value={2700}
              className="radio bg-white checked:bg-rose-300"
              {...register("max_added_time")}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">60 minutes</span>
            <input
              type="radio"
              value={3600}
              className="radio bg-white checked:bg-blue-400"
              {...register("max_added_time")}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default MaxTimeAddedToTrip;
