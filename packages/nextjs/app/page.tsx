"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import externalContracts from "~~/contracts/externalContracts";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Factory 01</span>
          </h1>
          <button className="border 1px solid green">Set Up Your Yield Now</button>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(externalContracts[8453]).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col bg-base-100 px-5 py-5 text-center items-center w-auto rounded-3xl"
              >
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p>
                  {key}: {value.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
