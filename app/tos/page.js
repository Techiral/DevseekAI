import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://wantship.vercel.app/
// - Name: WantShip
// - Contact information: techiralthefuture@gmail.com
// - Description: Collect feedback, prioritize user needs, and ship the most-wanted features fast—streamline product development with lifetime access.
// - Ownership: when buying a package, users can access to collect feedback of users about the new features for their apps. They can use the tool but they do not have the right to resell it.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://wantship.vercel.app/privacy-policy
// - Governing Law: India
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: October 15, 2024

Welcome to WantShip. By accessing or using https://wantship.vercel.app/ (the "Site") and our services, you agree to the following Terms & Services. If you do not agree, please do not use our services.

1. Description of Services
WantShip allows users to collect feedback, prioritize user needs, and streamline product development. When you purchase a package, you gain access to tools for collecting feedback about new features for your apps. You may use these tools for personal or business purposes, but you may not resell or redistribute the tools in any form.

2. User Data Collection
We collect personal information such as your name, email, and payment information, as well as non-personal data like web cookies. For more details on how we collect and use data, please refer to our Privacy Policy: https://wantship.vercel.app/privacy-policy

3. User Responsibilities

Users must provide accurate information when registering or purchasing packages.
Users must comply with all applicable laws and regulations while using the Site and services.
Users are responsible for maintaining the security of their account information.
4. Ownership and License
All content, including tools and features provided by WantShip, is the property of WantShip. Users are granted a limited, non-exclusive, non-transferable license to use the services. This license does not grant users the right to modify, reproduce, resell, or distribute the services or any part thereof.

5. Governing Law
These Terms & Services shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.

6. Changes to the Terms
We may update these Terms & Services from time to time. If any changes are made, users will be notified by email.

7. Contact Information
For any questions or concerns regarding these Terms & Services, please contact us at techiralthefuture@gmail.com.

Thank you for choosing WantShip!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
