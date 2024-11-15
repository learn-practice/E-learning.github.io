import React, { useState } from "react";
import Heading from "./Heading";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is e-learning?",
      answer:
        "E-learning refers to the use of electronic media, educational technology, and online resources to deliver learning and training. It provides flexible and accessible education options for students worldwide.",
    },
    {
      question: "How do I sign up for a course?",
      answer:
        "To sign up for a course, navigate to the 'Courses' section, select the course you're interested in, and click the 'Enroll Now' button. You may need to create an account or log in before enrolling.",
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes, most courses on our platform are self-paced, allowing you to learn at your convenience. However, some courses may have specific schedules for live sessions.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, upon successfully completing a course, you will receive a certificate of completion, which you can download and share on platforms like LinkedIn.",
    },
    {
      question: "Can I access the courses on mobile?",
      answer:
        "Absolutely! Our platform is mobile-friendly, and you can access courses on any device, including smartphones, tablets, and desktops.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100 mt-20">
        <Heading heading={"FAQ"}/>
      <h2 className="text-2xl font-bold text-primary font-libreBaskerville md:text-left text-center mt-3 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-primary rounded-lg bg-white shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-normal text-secondary font-archivoBlack ">
                {faq.question}
              </h3>
              <span className="text-primary font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-ternary font-notoSansJP">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
