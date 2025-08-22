
import Image from "next/image"
import { Menu } from "lucide-react";

const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#DAE8FF]/80">
      <div className="flex justify-center items-center py-3 bg-[#DAE8FF] text-pink-400 text-sm">
        <p>welcome to Frozio 𓎦🍨</p>
      </div>
      <div className="py-5 px-3">
        <div>
          <div className="flex items-center justify-between">
            <Image
              src={"/assets/logo.jpg"} height={40} width={40} alt="logo" />
            <Menu className="md:hidden" />

            <nav className="hidden md:flex gap-5 text-black/60 items-center">
              <a href="">about</a>
              <a href="">features</a>
              <a href="">customers</a>
              <a href="">updates</a>
              <a href="">help</a>
              <button className="btn btn-primary">get ur fav ice-cream</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

