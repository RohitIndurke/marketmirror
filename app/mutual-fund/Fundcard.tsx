
import Link from 'next/link';


interface Fund{
  meta :{
    fund_house:string,
isin_div_reinvestment:string |null,
isin_growth: string |null,
scheme_category: string,
scheme_code: number,
scheme_name:string,
scheme_type: string,

  },
    data:{
      nav:number | null,
      date:string
    }[]
    
}

const FundCard = ({meta,data}:Fund) => {
  return (
    <div className="bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-5xl mx-auto mb-4 transition-all hover:shadow-lg">
            <div className="flex items-center gap-4 w-full md:w-1/2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex justify-center items-center text-xm">
          <img
            src={'./marketMirror.png'}
            alt={`${meta.scheme_name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{meta.scheme_name}</h3>
          <p className="text-sm text-gray-400 capitalize">Fund house : {meta.fund_house} </p>
        </div>
      </div>

      {/* Right Section: Info and Button */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-0 gap-4">
        <div className="grid grid-cols-3 gap-4 w-full text-sm text-white">
          <div>
            <p className="text-gray-400">NAV</p>
            <p>₹ {data[0]?.nav ?? "n/a"}</p>
          </div>
          <div>
            <p className="text-gray-400">Scheme Type</p>
            <p className="text-green-500 font-semibold">{meta.scheme_type}</p>
          </div>
          <div>
            <p className="text-gray-400">Scheme Code</p>
            <p>{meta.scheme_code}</p>
          </div>
        </div>
        <div>
            <p className="text-gray-400">Last Update</p>
            <p className="text-white-500 font-semibold">{data[0]?.date ?? "n/a"}</p>
          </div>

        <div className="flex flex-col md:items-end w-full md:w-auto">
          <Link href={`/mutual-fund/${meta.scheme_name}`}>
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
