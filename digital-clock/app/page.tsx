"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'AM',
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      let ampm = 'AM';

      if (h >= 12) {
        ampm = 'PM';
        if (h > 12) h -= 12;
      }

      h = h < 10 ? '0' + h : h;
      const minutes = m < 10 ? '0' + m : m;
      const seconds = s < 10 ? '0' + s : s;

      setTime({ hours: h, minutes, seconds, ampm });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Digital Clock</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="clock-container">
        <div className="clock">
          <div>
            <span id="hour" className="clock-time">{time.hours}</span>
            <span className="text">Hours</span>
          </div>
          <div>
            <span id="minutes" className="clock-time">{time.minutes}</span>
            <span className="text">Minutes</span>
          </div>
          <div>
            <span id="seconds" className="clock-time">{time.seconds}</span>
            <span className="text">Seconds</span>
          </div>
          <div>
            <span id="ampm" className="clock-ampm">{time.ampm}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        main {
          background-image: url('/path/to/your/background.jpg');
          background-size: cover;
          background-position: center;
        }

        .clock-container {
          display: flex;
          justify-content: center;
          width: 100%;
          height: calc(100vh - 200px); /* Adjust height as needed */
          align-items: center;
          color: white; /* Ensure text is readable on the background */
        }

        .clock {
          display: flex;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Improve text readability */
        }

        .clock div {
          margin: 5px;
          position: relative;
        }

        .clock-time {
          width: 100px;
          height: 80px;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          color: white;
          display: flex;
          justify-content: center;
          font-size: 50px;
          align-items: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .text {
          height: 30px;
          font-size: 10px;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
          color: white;
          text-align: center;
          padding: 2px 5px;
          border-radius: 5px;
        }

        .clock-ampm {
          bottom: 0;
          position: absolute;
          width: 60px;
          height: 30px;
          font-size: 20px;
          background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
      `}</style>
    </main>
  );
}
