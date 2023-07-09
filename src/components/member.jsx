import React from "react";
import { IoArrowBackOutline } from 'react-icons/io5'

const Member = () => {
  return (
    <div className="max-w-3xl mx-auto my-20 px-6">
      <div className="text-3xl font-bold mb-6">
        <div className="flex justify-start items-center mb-10">
          <a href="/">
            <IoArrowBackOutline className="text-2xl" />
          </a>
          <span className="ml-2">Member List</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Owner</h2>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/quartyzuwu.png")} alt="Owner" className="rounded-md w-32 h-32" />
            <p className="ml-4">quartyzuwu</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Developer</h2>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/quartyzuwu.png")} alt="Developer" className="rounded-md w-32 h-32" />
            <p className="ml-4">quartyzuwu</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">Helper</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/Helper-Bot.png")} alt="Helper" className="rounded-md w-24 h-24" />
            <p className="ml-2">Helper Bot#7344</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/HN-Gaming.png")} alt="Helper" className="rounded-md w-24 h-24" />
            <p className="ml-2">.hngaming</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/injectedd.png")} alt="Helper" className="rounded-md w-24 h-24" />
            <p className="ml-2">injectedd</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/Inactive.png")} alt="Helper" className="rounded-md w-24 h-24" />
            <p className="ml-2">Inactive#2009</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/kuma0256.png")} alt="Helper" className="rounded-md w-24 h-24" />
            <p className="ml-2">kuma0256</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">Helper Apprentice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/SuperFnYT.png")} alt="Helper Apprentice" className="rounded-md w-24 h-24" />
            <p className="ml-2">SuperFnYT#1316</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/member/raiden_ei.png")} alt="Helper Apprentice" className="rounded-md w-24 h-24" />
            <p className="ml-2">.raiden_ei.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
