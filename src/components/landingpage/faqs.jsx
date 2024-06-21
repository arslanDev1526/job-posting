import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-green-50 flex flex-col items-center py-10">
      <span className="px-2 py-1 rounded-sm bg-white">F.A.Q</span>
      <h1 className="text-5xl font-bold mt-3 text-center">
        Things people often ask about
      </h1>

      <div id="accordion-collapse" className="w-full max-w-2xl mt-5">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center w-full p-5 font-medium text-left text-gray-500 border-b gap-3"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openIndex === 1}
            aria-controls="accordion-collapse-body-1"
          >
            {openIndex === 1 ? <RiCloseFill /> : <HiOutlinePlusSm />}
            {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 ${openIndex === 1 ? "rotate-45" : ""}`}
    style={{
        transition: 'rotate 0.7s ease-in-out',
      }}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg> */}
            <span>What is Flowbite?</span>

          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${openIndex === 1 ? "max-h-96" : "max-h-0 overflow-hidden"} `}
          aria-labelledby="accordion-collapse-heading-1"
          style={{
            transition: 'max-height 0.7s ease-in-out',
          }}
        >
          <div className="p-5">
            <p className="mb-2 text-gray-500 ">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center w-full p-5 font-medium text-left text-gray-500 border-b gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={openIndex === 2}
            aria-controls="accordion-collapse-body-2"
          >
            {openIndex === 2 ? <RiCloseFill /> : <HiOutlinePlusSm />}

            <span>Is there a Figma file available?</span>
           


          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${openIndex === 2 ? "max-h-96" : "max-h-0 overflow-hidden"} `}
          aria-labelledby="accordion-collapse-heading-2"
          style={{
            transition: 'max-height 0.7s ease-in-out',
          }}
        >
          <div className="p-5 ">
            <p className="mb-2 text-gray-500">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center w-full p-5 font-medium text-left text-gray-500 border-b gap-3"
            onClick={() => toggleAccordion(3)}
            aria-expanded={openIndex === 3}
            aria-controls="accordion-collapse-body-3"
          >
            {openIndex === 2 ? <RiCloseFill /> : <HiOutlinePlusSm />}
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
         

          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${openIndex === 3 ? "max-h-96" : "max-h-0 overflow-hidden"} `}
          aria-labelledby="accordion-collapse-heading-3"
          style={{
            transition: 'max-height 0.5s ease-in-out',
          }}
        >
          <div className="p-5">
            <p className="mb-2 text-gray-500">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
