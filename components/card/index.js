import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="p-6 rounded-xl border border-gray-200 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-500">
        <img src="/next.svg"  alt="" priority/>

        <h2 className="text-xl font-semibold">
          Lenovo Ideapad D330 10GL intel CDC N4020..
        </h2>

        <ul className="list-disc my-5 ps-5">
          <li className="text-base font-medium text-gray-500">RAM-8GB</li>
          <li className="text-base font-medium text-gray-500">
            Processor Type - intel 7i
          </li>
          <li className="text-base font-medium text-gray-500">
            Graphics memary - shared
          </li>
          <li className="text-base font-medium text-gray-500">
            Display size (inch) - 15
          </li>
        </ul>

        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
          <h3 className="grow w-1/2 text-xl font-semibold">$23000</h3>
          <span className="inline-block shrink">
            <a
              href="#"
              className="h-10 w-10 inline-flex items-center justify-center bg-gray-100 rounded-full"
            >
              <i className="ti ti-heart text-xl"></i>
            </a>
          </span>
          <a
            href="#"
            className="grow w-1/2 py-2.5 flex items-center justify-center rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500 cursor-pointer"
          >
            Reservar
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
