import React from "react";
function Home() {
  return (
    <>
    <div className="bg-gray-300">
      <div className="flex">
        <div className="w-1/2 pl-32 pt-20">
          <h1 className="text-6xl mt-1m font-serif">Donate Blood to Save Life</h1>
          <h1 className="text-xl pt-4  text-justify font-sans">People who volunteer, donate or take part in community service experience these benefits.You can enjoy these same benefits by going to the closest blood center to start donating blood today.People who volunteer, donate or take part in community service experience these benefits.You can enjoy these same benefits by going to the closest blood center to start donating blood today.People who volunteer, donate or take part in community service experience these benefits.You can enjoy these same benefits by going to the closest blood center to start donating blood today.You can enjoy these same benefits by going to the closest blood center to start donating blood today.</h1>
          <div className="mt-4">
          <button className="bg-red-500 p-2 w-24 mt-2 rounded-xl">Join us</button>
          <button className="bg-red-500 p-2 w-24 mt-2 rounded-xl ml-20">ContactUs</button>
          </div>
        </div>
        <div className="w-1/2">
          <img src=".\assets\img1.png" alt="images"/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
