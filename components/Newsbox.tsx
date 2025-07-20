  "use client";

  import { Card, CardContent } from "@/components/ui/card";
  import Link from "next/link"; 
  interface Article{
    source:{
      id:string | null;
      name:string
    };
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content:string
    

  };
  const articles : Article [] = [
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "bradypsnyder@gmail.com (Brady Snyder) , Brady Snyder",
      "title": "Google Pixel Watch 4 vs. Pixel Watch 3: Finally in true flagship territory?",
      "description": "The Google Pixel Watch 3 is an excellent Wear OS smartwatch that falls short in some areas, but will the Pixel Watch 4 fix that? Here's what we know.",
      "url": "https://www.androidcentral.com/wearables/google-pixel-watch/google-pixel-watch-4-vs-pixel-watch-3",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/fs5f8mn65hUPZJwc2DbzHS.jpg",
      "publishedAt": "2025-07-19T19:35:02Z",
      "content": "The Pixel Watch represents Google's vision for what a Wear OS smartwatch should be, but even in its third generation, the platform has plenty of room to grow. While the Google Pixel Watch 3 is a fan … [+9955 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple to Upgrade iPhone 17 Displays in These Two Ways",
      "description": "All of the iPhone 17 models coming later this year will feature two display upgrades, according to information shared by Digital Chat Station, an account with more than three million followers on Chinese social media platform Weibo.\n\n\n\n\n\nFirst, the account sa…",
      "url": "https://www.macrumors.com/2025/07/19/iphone-17-displays-two-upgrades/",
      "urlToImage": "https://images.macrumors.com/t/kmk-hyxizdo1yDAAukPuuY9oJfk=/1785x/article-new/2023/11/iphone-16-pro-ghost-hand.jpg",
      "publishedAt": "2025-07-19T12:45:00Z",
      "content": "All of the iPhone 17 models coming later this year will feature two display upgrades, according to information shared by Digital Chat Station, an account with more than three million followers on Chi… [+1129 chars]"
    },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Andrew Court",
        "title": "Revealed: America’s wealthiest suburb where annual household income tops $600K — and it’s located in New York state",
        "description": "The tony town topped the rich list, which was compiled by GOBankingRates.",
        "url": "https://nypost.com/2025/07/19/lifestyle/revealed-americas-wealthiest-suburb-where-annual-household-income-tops-600k-and-its-located-in-new-york-state/?utm_source=yahoo&amp;utm_campaign=nypost&amp;utm_medium=referral",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rOaONEtlltbVgReY2jdINg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ7Y2Y9d2VicA--/https://media.zenfs.com/en/ny_post_articles_869/b47790c89635cfb4b2ce0f7197aaec44",
        "publishedAt": "2025-07-19T17:00:21Z",
        "content": "Big Apple commuter town. Seriously big bucks.\r\nScarsdale has been named Americas wealthiest suburb in a new study, with the mean household income exceeding an eye-popping $600,000 in 2023.\r\nThe tony … [+2047 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Eatingwell.com"
        },
        "author": "Danielle DeAngelis",
        "title": "6 Snacks That Can Reduce Colon Cancer Risk, According to a Gastroenterologist",
        "description": "Plus our favorite recipes to make them at home.",
        "url": "https://www.eatingwell.com/snacks-to-reduce-colon-cancer-risk-11775183",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/nQExAHQw90ItZFuJBHfwHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTA-/https://media.zenfs.com/en/eating_well_articles_946/495d1a50faff10730450ecc66eefcb14",
        "publishedAt": "2025-07-19T14:00:00Z",
        "content": "Reviewed by Dietitian Emily Lachtrupp, M.S., RD\r\nEatingWell design.\r\nKey Points\r\n\u003Cul\u003E\u003Cli\u003EGut-healthy snacks like yogurt, citrus and nuts may help lower your risk of colon cancer.\r\n\u003C/li\u003E\u003Cli\u003EGastroente… [+3993 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Alberto García",
        "title": "Ofertas de Apple, Xiaomi, eReaders y más. Cinco chollos para aprovechar las campañas de El Corte Inglés",
        "description": "El Corte Inglés ha lanzado un buen número de campañas tras el Prime Day de Amazon. Ofertas de Apple, los Xiaomi Days, descuentos en eReaders y en ordenadores... Por este motivo, en este artículo vamos a repasar cinco de las mejores ofertas que vamos a encontr…",
        "url": "https://www.xataka.com/seleccion/ofertas-apple-xiaomi-ereaders-cinco-chollos-para-aprovechar-campanas-corte-ingles",
        "urlToImage": "https://i.blogs.es/52b1cb/el-corte-ingles/840_560.jpeg",
        "publishedAt": "2025-07-19T08:46:33Z",
        "content": "El Corte Inglés ha lanzado un buen número de campañas tras el Prime Day de Amazon. Ofertas de Apple, los Xiaomi Days, descuentos en eReaders y en ordenadores... Por este motivo, en este artículo vamo… [+3451 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Miguel Jorge",
        "title": "El dominio de China se está extendiendo mucho más allá de las tierras raras. Incluso donde EEUU no tenía rival: el mar",
        "description": "Mientras Estados Unidos se ha lanzado con todo a la búsqueda de esos minerales y tierras raras que China gobierna muy por encima del resto del planeta, incluso con el Pentágono y la mismísima Apple invirtiendo una suma estratosférica, Pekín ha ido sumando y c…",
        "url": "https://www.xataka.com/magnet/dominio-china-se-esta-extendiendo-mucho-alla-tierras-raras-incluso-donde-eeuu-no-tenia-rival-mar",
        "urlToImage": "https://i.blogs.es/18d321/41429413051_e4613a2b2e_k/840_560.jpeg",
        "publishedAt": "2025-07-19T16:31:33Z",
        "content": "Mientras Estados Unidos se ha lanzado con todo a la búsqueda de esos minerales y tierras raras que China gobierna muy por encima del resto del planeta, incluso con el Pentágono y la mismísima Apple i… [+6726 chars]"
    }];

  export default function Page() {
    return (
      <div className="min-h-screen bg-background text-foreground p-6">
        <h2 className="text-2xl font-bold mb-6">Indian top news</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: Article,index:number) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-lg bg-muted/30">
              <div className="relative" style={{ height: "70%" }}>
              <img
                  src={article.urlToImage}
                  alt="News image"
                  className="w-full h-full object-cover rounded-xl"
                />


              </div>
              <CardContent className="bg-background p-4" style={{ height: "30%" }}>
                <h3 className="text-lg font-semibold text-white">
                {article.title}
                </h3>
                <Link
                  href={article.url} target="_blank"
                  className="text-sm text-blue-500 hover:underline mt-1 inline-block"
                >
                Read More
                </Link>
              </CardContent>
            </Card>
            ))}
        </div>
      </div>
      
    );
  }
