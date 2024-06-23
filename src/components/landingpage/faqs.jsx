import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a fee to use this job portal?",
      answer: "Our basic services are free for job seekers. We may offer premium services or features for an additional fee, which will be clearly outlined on our pricing page.",
    },
    {
      question: "How can I contact the employer directly?",
      answer: "Some job listings include contact information for the employer. If available, you can find it in the job details section. Otherwise, you can apply through our portal, and we will forward your application to the employer.",
    },
    {
      question: "Can I receive job alerts via email?",
      answer: "Yes, you can subscribe to job alerts by setting your preferences in the 'Job Alerts' section of your profile. You will receive notifications about new job postings that match your criteria.",
    },
    {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we will send you a link to reset your password.",
    },
    {
      question: "How can I apply for jobs?",
      answer: "After logging in, you can search for jobs using the search bar or browse through the categories. Click on the job title to view the details and then click on the 'Apply' button to submit your application.",
    },
  ];

  return (
    <div className="bg-green-50 flex flex-col items-center py-10">
      <span className="px-3 py-1 rounded-md bg-white">F.A.Q</span>
      <h1 className="text-3xl md:text-4xl font-bold my-5 text-center">
        Things people often ask about
      </h1>

      <div id="accordion-collapse" className="w-full max-w-2xl mt-5">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className="flex md:items-center w-full p-5 font-medium text-left text-gray-500 gap-3"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span className="mt-1 md:mt-0">
                  {openIndex === index ? <RiCloseFill /> : <HiOutlinePlusSm />}
                </span>
                <span>{faq.question}</span>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${
                openIndex === index ? "max-h-96" : "max-h-0"
              } overflow-hidden border-b`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
              style={{
                transition: "max-height 0.7s ease-in-out",
              }}
            >
              <div className="px-7 mb-5 md:px-5">
                <p className="mb-2 text-gray-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
