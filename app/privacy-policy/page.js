import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://devseek-ai.vercel.app/
// - Name: Devseek AI
// - Description: Collect feedback, prioritize user needs, and ship the most-wanted features fast—streamline product development with lifetime access.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: techiralthefuture@gmail.com

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: October 15, 2024

Thank you for using Devseek AI. This privacy policy explains how we collect, use, and protect your information when you visit https://Devseek AI.vercel.app/.

Information We Collect
We collect the following personal information:

Name
Email
Payment Information
Additionally, we collect non-personal data through web cookies for website functionality and analytics purposes.

Purpose of Data Collection
We use the data we collect to process orders and provide our services effectively.

Data Sharing
We do not share your personal information with any third parties.

Children’s Privacy
We do not collect or knowingly store information from children under the age of 13.

Updates to This Privacy Policy
We may update this privacy policy from time to time. If changes are made, we will notify users by email.

Contact Us
If you have any questions or concerns about this privacy policy, please contact us at techiralthefuture@gmail.com.

Thank you for trusting Devseek AI with your data.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
