// Marking the component as a Client Component
"use client";

import React, { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js router
import { useSearchParams } from 'next/navigation'; // To access URL query parameters

const ThankYouContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get search parameters from the URL

  useEffect(() => {
    // Check if the paymentStatus is 'success'
    const paymentStatus = searchParams.get('paymentStatus');

    if (paymentStatus !== 'success') {
      // Redirect to home if payment status is not successful
      router.push('/'); // Change this to your desired redirect path
      return; // Exit if payment status is not 'success'
    }

    // If payment status is successful, notify the user and redirect to GitHub
    setTimeout(() => {
      // Notify the user about redirection
      alert("Thank you for your payment! You are being redirected to the GitHub repository.");
      // Redirect to the GitHub repository
      window.location.href = 'https://github.com/Techiral/WantShip.git'; // Your GitHub repo URL
    }, 3000); // Delay for 3 seconds before redirecting
  }, [router, searchParams]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Thank You!</h1>
      <p style={{ fontSize: '2em' }}>Your payment has been processed successfully.</p>
      <p style={{ fontSize: '1.5em' }}>
        You will be redirected to our <strong>GitHub repository</strong> shortly to download the boilerplate and get started!
      </p>
    </div>
  );
};

// Main ThankYouPage component wrapped in Suspense
const ThankYouPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
};

export default ThankYouPage;
