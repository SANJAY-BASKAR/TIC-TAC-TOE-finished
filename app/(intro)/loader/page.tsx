"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [countdown, setCountdown] = useState(3); // Starting countdown from 3 seconds
  const router = useRouter();

  useEffect(() => {
    // Only start countdown when the component mounts
    if (countdown === 0) {
      router.push('/get'); // Redirect to '/' when countdown reaches 0
      return;
    }

    const timerInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timerInterval);
  }, [countdown, router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <p className="font-bold lg:text-[20rem] text-9xl whitespace-nowrap bg-gradient-to-b from-gray-600 to-transparent bg-clip-text text-transparent">
        {countdown !== 0 && countdown} {/* Display countdown unless it's 0 */}
        {countdown === 0 && <span>PLAY</span>} {/* Show "PLAY" when countdown reaches 0 */}
      </p>

    </main>
  );
}
