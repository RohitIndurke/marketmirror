import Link from 'next/link';
import Image from "next/image";
import logo from "@/components/marketMirrorLogo.png"; 
interface Fund {
    basic_info:{
        fund_name: string;
        fund_size:number;
        risk_level:string;
    }
    nav_info:{
        current_nav:number;
    }
    returns:{
        cagr:{
          '5y':number;
         }
    }
    investment_info:{
        mini_additional_investment:number;
    }
}

const FundCard = ({basic_info,nav_info,returns,investment_info}:Fund) => {
  return (

    <div className="mt-15 bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-5xl mx-auto mb-4 transition-all hover:shadow-lg">
      
      {/* Left Section: Logo & Title */}
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex justify-center items-center text-xm">
          <Image
            src={logo}
            alt={`${basic_info.fund_name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{basic_info.fund_name}</h3>
          <p className="text-sm text-gray-400 capitalize">{basic_info.risk_level}</p>
        </div>
      </div>

      {/* Right Section: Info and Button */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-0 gap-4">
        <div className="grid grid-cols-4 gap-5 w-full text-sm text-white">
          <div>
            <p className="text-gray-400">NAV</p>
            <p>₹{nav_info.current_nav.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-400">1 Year Return</p>
            <p className="text-green-500 font-semibold">{returns.cagr['5y']}%</p>
          </div>
          <div>
            <p className="text-gray-400">Min.</p>
            <p>Min ₹{investment_info.mini_additional_investment}</p>
          </div>
          <div>
            <p className="text-gray-400">Fund Size</p>
            <p>₹{basic_info.fund_size.toFixed(2)} Cr.</p>
          </div>
           
        </div>

        <div className="flex flex-col md:items-end w-full md:w-auto">
          <Link href={`/mutual-fund/${basic_info.fund_name}`}>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-green-600 transition-all">
              Invest 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
