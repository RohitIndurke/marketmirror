
const NiftyDatas=[
  {
    name : "NIFTY 50",
    price: 24000
  },
  {
    name : "NIFTY BANK",
    price: 24000
  },
  {
    name : "NIFTY IT",
    price: 24000
  },
  {
    name : "NIFTY FMCG",
    price: 24000
  },
  {
    name : "NIFTY MIDCAP",
    price: 24000
  },
  {
    name : "NIFTY PHARMA",
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
    name : "NIFTY",
    price: 24000
  },
  {
    name : "NIFTY AUTO",
    price: 24000
  },
]
export default function Page() {
  return (
    <div>          
      <h3><b className="ml-3 font-mono">Indian Index</b></h3>
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
  
  

<h3><b  className="ml-3">Global Index</b></h3>
<div className="overflow-hidden">
<div className="animate-scroll flex whitespace-nowrap">
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
   🇺🇸  DOWN FUTURE $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-green-700 rounded  text-sm">
  🇺🇸  DOW $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
   🇺🇸   S & P 500 $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-green-700 rounded  text-sm">
    🇯🇵    NIKKEI $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
    🇻🇳    HANG SING $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
  🇩🇪    DAX $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
  🇫🇷    CAC $XXX.XX
  </span>
  <span className="inline-block px-4 py-2 mr-10 border border-red-700 rounded  text-sm">
   🇰🇷  KISPI $XXX.XX
  </span>
</div>
</div>
    </div>
  
  )
}
