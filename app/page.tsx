import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL, DESCRIPTION } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>AI x RM</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>{DESCRIPTION}</Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        ></div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={title === "LLM-powered interface" ? <ComponentGrid /> : demo}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "LLM-powered interface",
    description:
      "Chat with your data and customize your reports and dashboards on-the-fly with a beautiful, customizable UI widgets",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Forget clunky, slow, and bloated dashboards. AIxRM is built with performance in mind.",
    demo: <WebVitals />,
  },
  {
    title: "Built-in Data Feeds",
    description:
      "Jumpstart your data with built-in data feeds from [Finnhub](https://finnhub.io/), [Alpha Vantage](https://alphavantage.co/), and [Polygon.io](https://polygon.io/)",
    demo: (
      <Image
        src="https://img.icons8.com/emoji/96/rocket-emji.png"
        alt="Jump Start"
        width={96}
        height={96}
        unoptimized
      />
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "AIxRM comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Manage your Customers, Suppliers, Partners and, more",
    description: "AIxRM offers a suite a AI-powered tools for all your needs",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-2 p-5">
        <span className="font-mono font-semibold">
          Real-time Data & Analytics
        </span>
        <span className="font-mono font-semibold">
          Multiple Team-member Workspace
        </span>
        <span className="font-mono font-semibold">
          Relationship Intel: All Conversations in one place
        </span>
        <span className="font-mono font-semibold">
          Import Data from your existing CRM
        </span>
        <span className="font-mono font-semibold">More...</span>
      </div>
    ),
  },
];
