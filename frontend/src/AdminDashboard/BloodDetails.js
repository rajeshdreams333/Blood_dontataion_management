import React from 'react'

const BloodDetails = () => {
  return (
    <div>
        <div className="w-full flex shadow-lg mb-6 mt-4">
        <div>
          <h3 className="text-xl font-bold">Blood Details</h3>
        </div>
        <div>
          <div className="block bg-transparent m-4 p-4 w-full overfolw-x-auto"></div>
          <table className="w-full">
            <thead>
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-3 py-6">Blood_Group</th>
                <th className="text-md px-3 py-6">Units</th>
                <th className="text-md px-3 py-6">Update</th>
                <th className="text-md px-3 py-6">Delete</th>
              </tr>
            </thead>
            {/* <tbody>
              {donars.map((donar,i) => (
                <tr key={i}>
                  <td className="text-md px-4 py-1">{donar.Name}</td>
                  <td className="text-md px-4 py-1">{donar.Gender}</td>
                  <td className="text-md px-4 py-1">{donar.Blood_group}</td>
                  <td className="text-md px-4 py-1">{donar.Address}</td>
                  <td className="text-md px-3 py-1">
                    <img
                      src=".\assets\edit.png"
                      alt="editimages"
                      className="h-5 cursor-pointer"
                    />
                  </td>
                  <td className="text-md px-3 py-1">
                    <img
                      src=".\assets\delete.png"
                      alt="editimages"
                      className="h-5 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  )
}

export default BloodDetails
