"use client"

const NiftyDatas=[
  {
    name : "NIFTY50",
    price: 24000
  },
  {
    name :  "BANKNIFTY",
    price: 24000
  },
  {
    name : "NIFTYIT",
    price: 24000
  },
  {
    name : "NIFTYFMCG",
    price: 24000
  },
  {
    name : "MIDCAP",
    price: 24000
  },
  {
    name : "NIFTYPHARMA",
    price: 24000
  },
  {
    name : "SENSEX",
    price: 24000
  },
  {
    name : "FINNIFTY",
    price: 24000
  },
  {
    name : "NIFTYAUTO",
    price: 24000
  },
];

const GlobeDatas = [
  {
    "emo": "🇺🇸",
    "name": "DOW JONES",
    "price": "44,969.03"
  },
  {
    "emo": "🇺🇸",
    "name": "S&P 500",
    "price": "6,445.08"
  },
  {
    "emo": "🇺🇸",
    "name": "NASDAQ",
    "price": "21,585.28"
  },
  {
    "emo": "🇯🇵",
    "name": "NIKKEI 225",
    "price": "43,714.31"
  },
  {
    "emo": "🇭🇰",
    "name": "HANG SENG",
    "price": "25,176.85"
  },
  {
    "emo": "🇩🇪",
    "name": "DAX",
    "price": "24,266.49"
  },
  {
    "emo": "🇫🇷",
    "name": "CAC 40",
    "price": "7,870.63"
  },
  {
    "emo": "🇰🇷",
    "name": "KOSPI",
    "price": "3,177.28"
  }
];


export default function Page() {
  return (
    <div>          
      <h3><b className="ml-3 font-mono">Indian Index 🇮🇳📈</b></h3>
    <div className="overflow-hidden">
        <div className="animate-scroll flex whitespace-nowrap">
      {NiftyDatas.map((Nifty,index)=>(
        <div  key={index }>
        
          <a className="inline-block px-4 py-2 mr-10 rounded  text-sm">
           {Nifty.name} ₹{Nifty.price} 
          </a>
        
        </div>
      ))}
        </div>
      </div>

  

<h3><b className="ml-3">Global Index 🌍📊</b></h3>
<div className="overflow-hidden">
        <div className="animate-scroll flex whitespace-nowrap">
      {GlobeDatas.map((GlobeData,index)=>(
        <div  key={index }>
        
          <a className="inline-block px-4 py-2 mr-10 rounded  text-sm">
           {GlobeData.name}{GlobeData.emo} ${GlobeData.price} 
          </a>
        
        </div>
      ))}
      </div>
      </div>
  
</div>
  )
}
