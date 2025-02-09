# 🚀 WantShip - Javascript

**Welcome to WantShip!** 👋  
Thank you for choosing WantShip as your go-to boilerplate for building, shipping, and monetizing your SaaS application quickly and efficiently. We’re thrilled to have you on board!

## 🎉 Quick Start Guide

Follow these steps to get your app up and running in no time:

### 1. Clone the Repository

Open your terminal and run the following commands:

```bash
git clone https://github.com/Techiral/WantShip.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
git checkout supabase
npm install
git remote remove origin
npm run dev
```

> **Note:**  
> WantShip requires **Node 18.17** or greater. Check your Node version with:
> ```bash
> node -v
> ```

- **Main Branch:** Includes default NextAuth/MongoDB features.
- **Supabase Branch:** Includes Supabase/PostgreSQL features.

### 2. Configure Environment Variables

Rename the `.env.example` file to `.env.local`:

```bash
mv .env.example .env.local
```

Open `.env.local` and add your Supabase environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
EMAIL_SERVER=
MAILGUN_API_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### 3. Set Up Supabase

1. Go to the [Supabase Dashboard](https://supabase.com/dashboard).
2. Create a new project.
3. Copy your **Supabase URL** and **Anon Key**.
4. Paste them into the corresponding fields in `.env.local`.

### 4. Launch Your Local Server

Start your development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your site.  
*You might see some console errors initially, but nothing critical!*

## 📂 Project Structure

- **/app** → Pages (1 folder + `page.js` = 1 page)
- **/app/api** → API calls (1 file = 1 API endpoint)
- **/components** → React components
- **/libs** → Libraries and helper functions (Stripe, Mailgun, auth, etc.)
- **config.js** → Configuration file. Each key is documented to explain its purpose.  
  *This is the backbone of your app.*

## ✨ Customize Your App

### Edit the Landing Page

1. Delete everything in `/app/page.js`.
2. Replace it with the following code:

```javascript
import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

3. **Customize Your Content:**
   - Edit each component (`Header`, `Hero`, `Problem`, etc.) to fit your business logic.
   - Each component includes tips to help you write copy that sells.

> **Congratulations!** 🎉  
> You now have a beautiful landing page to showcase your SaaS application.

### (Optional) Collect Emails for a Waitlist

1. Set up a database.
2. Replace the main call-to-action buttons in the following components:

**Hero.js & CTA.js:**

```javascript
import ButtonLead from "@/components/ButtonLead";

{/* Replace the CTA button with this */}
<ButtonLead />
```

**Pricing.js:**

```javascript
import ButtonLead from "@/components/ButtonLead";

{/* Replace the Pricing CTA button with this */}
<ButtonLead extraStyle="!max-w-none !w-full" />
```

## 🚀 Deploy Your App

It’s time to take your app live! Follow our simple [deployment tutorial](https://10x-ship.vercel.app/blog) to get your startup in front of your customers within 5 minutes.  
*Need more help?* Check out our comprehensive [documentation](https://10x-ship.vercel.app/blog).

## 📚 Additional Resources

- **Documentation:** [WantShip Blog](https://10x-ship.vercel.app/blog)
- **Stay Updated:** [Subscribe to our Newsletter](https://techiral.beehiiv.com/)
- **Follow Us on Twitter:** [@techiral_](https://twitter.com/techiral_)

## 🙌 Thank You!

Thank you for choosing WantShip! We’re excited to see what you build. If you have any questions or need support, feel free to reach out through our [Twitter](https://twitter.com/techiral_) or subscribe to our [newsletter](https://techiral.beehiiv.com/) for the latest updates and tips.

**Let’s build that startup, FAST ⚡️**

---

**WantShip - Build. Ship. Monetize.**
