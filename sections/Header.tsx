import { Menu } from "lucide-react";

const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#DAE8FF]/60">
      <div className="py-5 px-3">
        <div>
          <div className="flex items-center justify-between px-7">
            <p className="text-[#0b1957] text-xl font-bold font-jersey">Welcome To Frozio 𓎦</p>
           
            <Menu className="md:hidden" />

            <nav className="hidden md:flex gap-5 text-[#0b1957]/60 font-bold items-center p-4">
              <a href="">Home</a>
              <a href="">Products</a>
              <a href="">Boxs</a>
              <a href="">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

