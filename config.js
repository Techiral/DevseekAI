import themes from "daisyui/src/theming/themes.js";

const config = {
  // REQUIRED
  appName: "Devseek AI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Devseek AI lets you build apps instantly—no coding, no developers, no delays. Traditional development is slow, expensive, and full of headaches. With Devseek, just enter your idea, and AI handles the rest—fast, error-free, and cost-effective. Get lifetime access for just $149 and skip the hassle of hiring dev teams. Perfect for startups, entrepreneurs, and businesses looking to launch apps without the wait. Don’t waste months or thousands—build smarter, faster, and cheaper with Devseek AI. 🚀",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "devseek-ai.vercel.app",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "9622ac5c-045b-4aaf-adf2-65024bc792c6",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    // onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Get your startup off the ground, fast.",
        // The price you want to display, the one user will be charged on Stripe.
        price: 169,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 269,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "SEO & Blog" },
          { name: "Mailgun emails" },
          { name: "Stripe / Lemon Squeezy / Paypal" },
          { name: "MongoDB / Supabase" },
          { name: "Google Oauth & Magic Links" },
          { name: "Components & animations" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "Scale your startup and Earn profit faster.",
        price: 199,
        priceAnchor: 299,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "SEO & Blog" },
          { name: "Mailgun emails" },
          { name: "Stripe / Lemon Squeezy / Paypal" },
          { name: "MongoDB / Supabase" },
          { name: "Google Oauth & Magic Links" },
          { name: "Components & animations" },
          { name: "ChatGPT prompts for terms & privacy" },
          { name: "Discord community & Leaderboard" },
          { name: "Lifetime updates" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `10xShip <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at 10xShip <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "synthwave",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "#06AB78",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
