import React from 'react'

const AddBlood = () => {
  return (
    <div>
    <div className="flex justify-center items-center font-serif mt-10">
      <form className="bg-white shadow-md rounded p-10 text-lg">
        <h1 className="text-center text-lg font-bold">Blood Form</h1>
        <div className="m-5 ml-0">
            Blood Units
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="bloodunits"
            type="number"
            placeholder="Units"
            name="Blood_units"
            required
          />
        </div>
        <div>
          <label className="mr-6">
            Blood Group
          </label>
          <select
            name="Blood_group"
            id="blood"
            className="border border-gray-300 rounded w-20 "
            required
          >
            <option value="none" defaultValue>
              Select
            </option>
            <option value="O+ve">O+ve</option>
            <option value="O-ve">O-ve</option>
            <option value="A+ve">A+ve</option>
            <option value="A-ve">A-ve</option>
            <option value="B+ve">B+ve</option>
            <option value="B-ve">B-ve</option>
            <option value="AB+ve">AB+ve</option>
            <option value="AB-ve">AB-ve</option>
          </select>
        </div>
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
};

export default AddBlood;
