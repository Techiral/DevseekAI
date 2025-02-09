"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Why should I use Devseek AI over traditional development?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Devseek AI is a game-changer. Traditional dev teams are slow, costly, and prone to human error. 
        With Devseek, you get instant app development—no devs, no delays, just results. 
        Don&#39;t waste months or hundreds of thousands of dollars when AI can do it all, faster and cheaper.
      </div>
    ),
  },
  {
    question: "What happens if I don&#39;t use Devseek AI?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Without Devseek AI, you&#39;re left with long development cycles, high costs, and unreliable code. 
        Why gamble with your project when AI can eliminate all these risks and speed up your journey 
        to launch? Skip AI, and you could be stuck in the past.
      </div>
    ),
  },
  {
    question: "Why is the $149 lifetime access worth it?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        For just $149—one time, no recurring fees—you unlock an AI-powered dev team for life. 
        That&#39;s an insane deal when you compare it to the thousands you&#39;d pay for a dev team or agency. 
        Get it now, or you&#39;ll regret missing out on this once-in-a-lifetime opportunity.
      </div>
    ),
  },
  {
    question: "Why is there no refund policy?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Devseek AI is built to work, and we&#39;re confident in it. 
        When you invest, you&#39;re fully committing to the future of your product. 
        If you could get a refund, would you be motivated to push forward? 
        Growth doesn&#39;t come with an undo button.
      </div>
    ),
  },
  {
    question: "What if I wait to purchase Devseek AI?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Every moment you wait is another lost opportunity. 
        While you hesitate, your competitors are already building faster and smarter with AI. 
        Prices are going up—don&#39;t wait until it&#39;s too late to jump on board.
      </div>
    ),
  },
  {
    question: "What makes Devseek AI a must-have?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Devseek AI builds apps instantly and error-free. 
        If you want to build fast, with no delays or developer mistakes, this is the tool you need. 
        Don&#39;t waste time guessing what your users want—let AI take care of everything.
      </div>
    ),
  },
  {
    question: "How do I know if Devseek AI is right for me?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        If you&#39;re tired of wasting money on slow developers and costly agencies, 
        Devseek AI is perfect for you. If you want to build faster, smarter, and 
        more efficiently, then don&#39;t wait. It&#39;s the AI-powered future of app development.
      </div>
    ),
  },
  {
    question: "Is Devseek AI easy to use?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely. Devseek AI is designed to be simple and intuitive. No dev experience required. 
        Enter your idea, and let AI take over from there—fast, reliable, and easy. 
        No complex setups, just results.
      </div>
    ),
  },
  {
    question: "How does Devseek AI help me avoid wasting time and money?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Devseek AI eliminates the uncertainty and risk of traditional development. 
        With AI, your app is built instantly with no mistakes. 
        No more wasting months or money on developers who don&#39;t deliver. 
        Devseek AI makes sure you only spend time and money on what truly matters.
      </div>
    ),
  },
  {
    question: "How can I reach out if I have more questions?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We&#39;re always here to help! If you have questions, reach out to us via email at {" "}
        <a href="mailto:techiralthefuture@gmail.com" className="text-blue-500">
          techiralthefuture@gmail.com
        </a>{" "}
        or use the live chat feature on our website. Don&#39;t wait—your app development journey starts now!
      </div>
    ),
  },
];






const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
