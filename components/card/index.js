"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../modal";

const Card = ({ name, image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-500">
      <div className="flex justify-center ml-auto mr-auto max-w-md">
        <Image
          src={image}
          alt={name}
          style={{
            width: "auto",
            height: "200px",
          }}
          width={500}
          height={200}
        />
      </div>
      <h2 className="text-xl font-bold my-5">{name}</h2>
      <div className="flex flexgap-4">
        <button
          className="py-2.5 px-5 flex items-center justify-center rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Reservar
        </button>
      </div>
      <Modal productName={name} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Card;
