/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import { AddressAutocomplete } from "./addressAutocomplete";
import PhoneInput from "./phoneInput";

import Link from "next/link";
import MaxTimeAddedToTrip from "./MaxTimeAddedToTrip";

export function ParticipantDetails({
  register,
  errors,
  disabled,
  setValue,
  getValues,
}) {
  const [canPickup, setCanPickup] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Name: </span>
        </div>
        <input
          type="text"
          placeholder=""
          className="input input-bordered w-full max-w-xs text-black"
          {...register("name")}
        />
        {errors.name?.message && <br />}
        <p className="text-red-500">{errors.name?.message}</p>
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Phone: </span>
        </div>
        <PhoneInput
          value={getValues("phone_num") || ""}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          onChange={(val: string) => setValue("phone_num", val)}
        />
        {errors.phone_num?.message && <br />}
        <p className="text-red-500">{errors.phone_num?.message}</p>
      </label>
      <div>
        <span className="label-text font-bold">Gender: </span>
      </div>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input
              type="radio"
              value="Male"
              className="radio bg-white checked:bg-blue-400"
              {...register("gender")}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Female</span>
            <input
              type="radio"
              value="Female"
              className="radio bg-white checked:bg-rose-300"
              {...register("gender")}
            />
          </label>
        </div>
        {errors.gender?.message && <br />}
        <p className="text-red-500">{errors.gender?.message}</p>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Address: </span>
        </div>
        <AddressAutocomplete setValue={setValue} />
        {errors.address?.message && <br />}
        <p className="text-red-500">{errors.address?.message}</p>
      </label>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Can pickup others: </span>
            <input
              type="checkbox"
              className="checkbox-primary checkbox"
              onClick={() => setCanPickup(!canPickup)}
              {...register("can_pickup")}
            />
          </label>

          {canPickup && <MaxTimeAddedToTrip register={register} />}
        </div>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Seats available: </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs text-black"
          {...register("seats_available")}
        />
        {errors.seats_available?.message && <br />}
        <p className="text-red-500">{errors.seats_available?.message}</p>
      </label>
      <div className="flex max-w-64 items-center gap-4">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox-info checkbox"
        />
        <p>
          By clicking submit, you agree to receive SMS carpool updates and to
          the
          <Link className="underline" href="/privacy-policy">
            {" "}
            Privacy Policy
          </Link>
          . Message and data rates may apply.
        </p>
      </div>
      <button
        disabled={disabled}
        type="submit"
        className="btn btn-outline btn-md my-4 bg-black"
      >
        Submit
      </button>
    </div>
  );
}
