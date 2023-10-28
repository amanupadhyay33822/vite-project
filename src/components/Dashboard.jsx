/* eslint-disable no-unused-vars */
import React from "react";
import g from "../assets/g.svg";
import download from "../assets/download.png";
import download2 from "../assets/download2.png";
import "./Dash.css";

const Dashboard = () => {
  return (
    <div className="text-white">
      {/* section 1 */}
      <div>
        {/* stats and img */}
        <div className="flex mx-28 gap-4 mt-12">
          <p className="text-4xl font-bold ">Stats</p>
          <img src={g}></img>
        </div>
        <p className="mx-28 mt-3 text-pure-greys-50  max-w-[350px]">
          Ethereum Total Stats start from 06 Jan 2022. For detailed stats:
        </p>
        {/* for 2 box */}
        <div className="grid grid-cols-2 mx-28 mt-8  ">
          <div className="border w-64 p-0 leading-8 rounded-md border-pure-greys-500 min-w-[650px]">
            <p className="p-3">Overview</p>
            <hr className="border border-pure-greys-600 "></hr>
            <div className="flex justify-between">
              <div className="flex flex-col text-white p-3 ">
                  <p>AUM</p>
                <p>$ZLP Pool</p>
                <p>24h Volume</p>
                <p>Long Positions</p>
                <p>Short Positions</p>
            
              </div>
              <div className="flex flex-col text-white p-3 underline decoration-dotted">
                <a>$34</a>
                <a>$34</a>
                <a>$0</a>
                <a>$10</a>
                
              </div>
            </div>
          </div>
          {/* second box */}
          <div className="border w-64 p-0 leading-8 min-w-[650px] rounded-md border-pure-greys-500">
            <p className="p-3">Total Stats</p>
            <hr className="border border-pure-greys-600 "></hr>
            <div className="flex justify-between">
              <div className="flex flex-col text-white p-3 ">
                <p>Total Fees</p>
                <p>Total Volume</p>
                <p>Floor Price Fund</p>
              </div>
              <div className="flex flex-col text-white p-3 ">
                <a className=" underline decoration-dotted">$0</a>
                <a className=" underline decoration-dotted">$0</a>
                <a className="no-underline">$626,885 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div>
        {/* stats and img */}
        <div className="flex mx-28 gap-4 mt-12 ">
          <p className="text-4xl font-bold ">Tokens</p>
          <img src={g}></img>
        </div>
        <p className="mx-28 mt-3 text-pure-greys-50  max-w-[350px]">
          Platform and $ZLP index tokens.
        </p>
        {/* for 2 box */}
        <div className="grid grid-cols-2 mx-28 mt-8 ">
          <div className="border w-64 p-0 leading-8 rounded-md border-pure-greys-500 min-w-[650px]">
            <div className="flex p-2 gap-2">
              <img src={download} width={40} className="h-10"></img>
              <div className="flex flex-col">
                <p className="text-[18px]">
                  $ZOMI <br />
                  <p className="text-sm text-pure-greys-50 -mt-2">$Zomi</p>
                </p>
              </div>
            </div>
            <hr className="border border-pure-greys-600 w-[450px] "></hr>
            <div className="flex justify-between mr-[40px]">
              <div className="flex flex-col text-white p-3 ">
                <p>AUM</p>
                <p>$ZLP Pool</p>
                <p>24h Volume</p>
                <p>Long Positions</p>
                <p>Short Positions</p>
              </div>
              <div className="flex flex-col text-white p-3 underline decoration-dotted">
                <a>$34</a>
                <a>$34</a>
                <a>$0</a>
                <a>$0</a>
                <a>$0</a>
              </div>
              {/* pie chart */}

              <svg
                width="35%"
                height="100%"
                viewBox="0 0 42 42"
                className="donut -mt-10 -mr-10"
              >
                <circle
                  className="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#191919"
                ></circle>
                <circle
                  className="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#5C0AF5"
                  strokeWidth="2"
                ></circle>
                <span className="text-white">hello</span>
                <circle
                  className="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#0598FA"
                  strokeWidth="2"
                  strokeDasharray="94 6"
                  strokeDashoffset="25"
                ></circle>
                <g className="chart-text ">
                  <text x="50%" y="50%" color="#fff" className="chart-label ">
                    Distribution
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* second box */}
          <div className="border w-64 p-0 leading-8 rounded-md border-pure-greys-500 min-w-[650px]">
            <div className="flex p-2 gap-2">
              <img src={download2} width={40} className="h-10"></img>
              <div className="flex flex-col">
                <p className="text-[18px]">
                  $ZOMI <br />
                  <p className="text-sm text-pure-greys-50 -mt-2">$Zomi</p>
                </p>
              </div>
            </div>
            <hr className="border border-pure-greys-600 w-[450px] "></hr>
            <div className="flex justify-between mr-[40px]">
              <div className="flex flex-col text-white p-3 ">
                <p>AUM</p>
                <p>$ZLP Pool</p>
                <p>24h Volume</p>
                <p>Long Positions</p>
                <p>Short Positions</p>
              </div>
              <div className="flex flex-col text-white p-3 underline decoration-dotted">
                <a>$34</a>
                <a>$34</a>
                <a>$0</a>
                <a>$0</a>
                <a>$0</a>
              </div>
              {/* pie chart */}

              <svg
                width="35%"
                height="100%"
                viewBox="0 0 42 42"
                className="donut -mt-10 -mr-10"
              >
                <circle
                  className="donut-hole"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="#191919"
                ></circle>
                <circle
                  className="donut-ring"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#5C0AF5"
                  strokeWidth="2"
                ></circle>
                <span className="text-white">hello</span>
                <circle
                  className="donut-segment"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#0598FA"
                  strokeWidth="2"
                  strokeDasharray="94 6"
                  strokeDashoffset="25"
                ></circle>
                <g className="chart-text ">
                  <text x="50%" y="50%" color="#fff" className="chart-label ">
                    Distribution
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
