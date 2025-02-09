import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import config from "@/config";
import { Suspense } from 'react'
import Header from "@/components/Header";
import Testimonial1Small from "@/components/Testimonial1Small";
import Pricing from "@/components/Pricing";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
    <main>
      <section className="max-w-xl mx-auto space-y-8">
      </section>
          <Pricing />
          <Testimonial1Small />
    </main>
          </>
  );
}
