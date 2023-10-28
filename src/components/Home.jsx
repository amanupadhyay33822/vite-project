/* eslint-disable no-unused-vars */
import React from "react";
import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";
import d from "../assets/d.svg";
import e from "../assets/e.svg";
import f from "../assets/f.svg";
import download from "../assets/download.png";
import download1 from "../assets/download2.png";
import Box_1 from "./Box_1";

const Home = () => {
  return (
    <div className="relative w-screen">
      <div className=" w-[1260px] h-[351px] mt-[62px] flex flex-col leading-[35px]">
        <div className="text-[55px] px-28 leading-[69px]   text-white font-bold mt-[15px]">
          Decentralized <div className=""> Perpetual Exchange</div>
        </div>
        <p className="text-pure-greys-25 px-28 max-w-[800px] text-[25px] pt-3">
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
          leverage directly from your wallet
        </p>
      </div>
      <button className="text-white    bg-green px-[16px] mx-28 text-center h-[40px] rounded-md">
        Launch Exchange
      </button>
      {/* 3 card */}
      <div className="flex text-richblack-1 mx-28   mt-20 justify-between  ">
        <div className="border p-7 border-pure-greys-700  min-w-[400px] shadow-2xl rounded-md">
          <div className="flex gap-7">
            <img src={a}></img>
            <div>
              Total Trading Volume
              <br /> <p className="text-[30px] text-white">$0</p>
            </div>
          </div>
        </div>

        <div className="border p-7 border-pure-greys-700 min-w-[400px] rounded-md shadow-2xl">
          <div className="flex  gap-7 text-[16px]">
            <img src={b}></img>
            <div>
              Open Interest <br />
              <p className="text-[30px] text-white">$0</p>
            </div>
          </div>
        </div>

        <div className="border border-pure-greys-700 p-7 min-w-[400px] rounded-md shadow-2xl">
          <div className="flex gap-7">
            <img src={c}></img>
            <div>
              Total Users
              <br />
              <p className="text-[30px] text-white">0</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* for horizontal line */}
      <hr className="border border-pure-greys-600 mt-16"></hr>
      <div className="flex justify-between text-white mx-28 mt-20">
        {/* 1 box */}
        <div className="flex flex-col  min-w-[400px] gap-y-4">
          {/* for image and heading */}
          <div className="flex gap-2 ">
            <img src={d} width={40}></img>
            <p className="text-[25px]">Reduce Liquidation Risks</p>
          </div>
          {/* for bottom text */}
          <p className="max-w-[360px] text-[22px] text-pure-greys-50">
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </p>
        </div>
        {/* 2 box */}
        <div className="flex flex-col  min-w-[400px] gap-y-4">
          {/* for image and heading */}
          <div className="flex gap-2">
            <img src={e} width={40}></img>
            <p className="text-[25px]">Save on Costs</p>
          </div>
          {/* for bottom text */}
          <p className="max-w-[360px] text-[22px] text-pure-greys-50">
            Enter and exit positions with minimal spread and zero price impact.
            Get the optimal price without incurring additional costs.
          </p>
        </div>
        {/* 3 box */}
        <div className="flex flex-col  min-w-[400px] gap-y-4">
          {/* for image and heading */}
          <div className="flex gap-2">
            <img src={f} width={40}></img>
            <p className="text-[25px]">Simple Swaps</p>
          </div>
          {/* for bottom text */}
          <p className="max-w-[360px] text-[22px] text-pure-greys-50">
            Open positions through a simple swap interface. Conveniently swap
            from any supported asset into the position of your choice.
          </p>
        </div>
      </div>
      {/* last section */}
      <div className="flex flex-col  ">
        <div className="text-white mx-28 pt-8 "><span className="p-14"></span></div>
        {/* for 2 boxes */}<h2 className="text-white mx-28 relative max-w-[280px] top-28 text-[30px] font-bold ">Two tokens create our ecosystem</h2>
        <div className="text-white grid grid-cols-2">
            {/* box 1 */}
            <Box_1 heading={"$ROMI"} src={download} para={"$ROMI is the utility and governance token. Accrues 30% of the platform's generated fees."} 
            value={"0.00%"}/>
            {/* box 2 */}

            <Box_1 heading={"$ZLP"} src={download1} para={"$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees."} 
            value={"1,643,462,651.95%"}/>
        </div>
      </div>
         
    </div>
  );
};

export default Home;
