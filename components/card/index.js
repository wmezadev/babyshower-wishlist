"use client";

import Image from "next/image";
import { useState } from "react";
import LockModal from "../lock-product-modal";

const Card = ({
  id,
  name,
  image,
  defaultIsLocked,
  defaultLockedQuantity,
  availableQuantity,
}) => {
  const [showLockModal, setShowLockModal] = useState(false);
  const [isLocked, setIsLocked] = useState(defaultIsLocked);
  const [lockedQuantity, setLockedQuantity] = useState(defaultLockedQuantity);

  return (
    <div
      className={`${
        isLocked ? "bg-opacity-75 transition-opacity" : ""
      } bg-white p-6 rounded-xl border border-gray-200 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-500`}
    >
      <div className="flex justify-center ml-auto mr-auto max-w-md">
        <Image
          className={
            isLocked
              ? "bg-opacity-75 transition-opacity mix-blend-multiply"
              : ""
          }
          src={image}
          alt={name}
          style={{
            width: "auto",
            height: "220px",
          }}
          width={500}
          height={220}
        />
      </div>
      <h2 className="text-xl font-bold my-5">{name}</h2>
      <div className="flex justify-between" style={{ gap: "1rem" }}>
        {!isLocked ? (
          <button
            className="py-2.5 px-5 flex items-center justify-center rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-500 cursor-pointer"
            onClick={() => setShowLockModal(true)}
          >
            Reservar {availableQuantity > 1 ? `+1` : ""}
          </button>
        ) : (
          <button
            className="py-2.5 px-5 flex items-center justify-center rounded-md text-white bg-gray-500 hover:bg-gray-600 transition-all duration-500"
            /* onClick={() => setShowUnlockModal(true)} */
          >
            Reservado{" "}
            {availableQuantity > 1
              ? `${lockedQuantity}/${availableQuantity}`
              : ""}
          </button>
        )}
        {!isLocked && availableQuantity > 1 && (
          <span className="flex items-center text-md">
            {`${lockedQuantity}/${availableQuantity}`} Reservado
          </span>
        )}
      </div>
      <LockModal
        productId={id}
        productName={name}
        showModal={showLockModal}
        setShowModal={setShowLockModal}
        setIsLocked={setIsLocked}
        setLockedQuantity={setLockedQuantity}
      />
    </div>
  );
};

export default Card;
