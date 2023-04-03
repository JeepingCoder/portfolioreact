import React from "react";

const Applications = () => {
  return (
    <div
      name="applications"
      className="w-full h-screen bg-[#3c1414] text-gray-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <div className="sm-text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ad8f18]">
              Applications
            </p>
            <h1 className="text-2xl py-2 ">
              Here are a few of the applications I've created
            </h1>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full px-4 grid gird-cols-2 gap-8"></div>
          <div className="sm-text-right pb-8 pl-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
