"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


interface Article {
  title: string;
  image_url: string;
  link: string;
  description: string;
  source_icon?: string;
  source_url?: string;
}

const id = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

function Page() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`https://newsdata.io/api/1/latest?apikey=${id}&q=indian%20market`);
      const data = await req.json();
      setArticles(data.results);
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="items-center mb-5 ">
        <a className="text-white-500 text-center text-2xl text-green-400 font-sans font-xl tracking-tight">Market News & Updates</a><br />
        <a className="text-white-500 text-center text-small font-semibold">Stay informed with the latest financial headlines and trends</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg bg-muted/30 h-[370px]"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={!article.image_url ? '/marketMirror.png' : article.image_url}
                alt="News image"
                className="object-cover"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {article.source_icon && article.source_url && (
              <Link href={article.source_url} target="_blank">
                <Image
                  src={article.source_icon}
                  alt="Source logo"
                  className="absolute top-3 left-3 bg-white p-1 rounded shadow-md z-10"
                  height={32}
                  width={32}
                  unoptimized
                />
              </Link>
            )}

            <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
              <h4 className="text-lg font-semibold mb-1 line-clamp-2">{article.title}</h4>
              <p className="text-sm text-white/80 line-clamp-3">{article.description}</p>
              <Link
                href={article.link}
                target="_blank"
                className="text-sm text-green-400 hover:underline mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Page;
