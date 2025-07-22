import Link from "next/link"
import {
    Twitter ,
    Linkedin ,
  GithubIcon,
  Instagram ,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full mb-16 border-t border-gray-700 px-6 py-8 text-sm text-muted-foreground">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="sm:text-left text-center">🇮🇳 Made in India |</p>
      <div className="flex items-center gap-5">
        <Link href="https://www.linkedin.com/in/rohitindurke" target="_blank">
          <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
        </Link>
        <Link href="https://github.com/rohitindurke" target="_blank">
          <GithubIcon className="w-5 h-5 hover:text-white transition-colors" />
        </Link>
        <Link href="https://x.com/RohitInd_972" target="_blank">
          <Twitter className="w-5 h-5 hover:text-white transition-colors" />
        </Link>
        <Link href="https://www.instagram.com/rohiittt.390/" target="_blank">
          <Instagram className="w-5 h-5 hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
