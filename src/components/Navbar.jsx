import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const navContainerRef = useRef(null);
  return ( 
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center gap-7">
            <img className="w-10" src="/img/logo.png" alt="Logo" />
            <Button 
            id="product-button"
            rightIcon={<TiLocationArrow/>}
            containerClass="bg-blue-50 md:flex items-center justify-center gap-1"
            title="Products"
            />

            <div className="flex h-full items-center ">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a key={index}>{item}</a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
   );
}
 
export default Navbar;