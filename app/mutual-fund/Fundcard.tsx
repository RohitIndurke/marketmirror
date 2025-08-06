
import Link from 'next/link';


interface Fund {
  fund_name: string;
  latest_nav: number;
  percentage_change: number;
  asset_size: number;
  star_rating?: number;
  "1_month_return"?: number;
  "3_month_return"?: number;
  "6_month_return"?: number;
  OneYearReturn?: number;
  "3_year_return"?: number;
  "5_year_return"?: number;
}

const FundCard = ({fund_name,star_rating,latest_nav,asset_size,OneYearReturn}:Fund) => {
  return (
    <div className="bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-5xl mx-auto mb-4 transition-all hover:shadow-lg">
      
      {/* Left Section: Logo & Title */}
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex justify-center items-center text-xm">
          <img
            src={'./marketMirror.png'}
            alt={`${fund_name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{fund_name}</h3>
          <p className="text-sm text-gray-400 capitalize">Rating : {star_rating} star</p>
        </div>
      </div>

      {/* Right Section: Info and Button */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-0 gap-4">
        <div className="grid grid-cols-3 gap-4 w-full text-sm text-white">
          <div>
            <p className="text-gray-400">NAV</p>
            <p>₹{latest_nav}</p>
          </div>
          <div>
            <p className="text-gray-400">1 Year Return</p>
            <p className="text-green-500 font-semibold">{OneYearReturn}%</p>
          </div>
          <div>
            <p className="text-gray-400">Asset Size</p>
            <p>₹{asset_size}</p>
          </div>
        </div>

        <div className="flex flex-col md:items-end w-full md:w-auto">
          <Link href={`/mutual-fund/${fund_name}`}>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-green-600 transition-all">
              Invest Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
