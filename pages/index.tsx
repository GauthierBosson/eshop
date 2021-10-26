import type { NextPage } from "next";

import { BaseButton } from "@/components/primitives/buttons";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-xl">eshop</h1>
      <h2 className="text-lg">eshop</h2>
      <h3>eshop</h3>
      <h4>eshop</h4>
      <p>lorem ispum dolor sit</p>
      <BaseButton size="small" className="bg-red-500">
        szfr
      </BaseButton>
    </>
  );
};

export default Home;
