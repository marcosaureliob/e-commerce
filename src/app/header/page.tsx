import {
  AlignJustify,
  ChevronDown,
  CircleUser,
  Search,
  ShoppingCart,
} from "lucide-react";

export default function Header() {
  return (
    <div>
      <section className="bg-black flex py-2 items-center justify-center">
        <p className="text-white text-[12px] font-normal">
          Sign up and get 20% off to your first order.
          <span className="underline font-bold ml-1">Sign Up Now</span>
        </p>
      </section>
      <section className="flex items-center px-4 py-5 gap-24 sm:justify-center lg:py-6 lg:gap-10">
        <div className="flex gap-4 items-center">
          <AlignJustify size={24} className="lg:hidden" />
          <p className="text-[25px] font-bold lg:text-[32px]">SHOP.CO</p>
        </div>
        <div className="hidden lg:flex gap-6">
          <div className="flex items-center gap-1 text-[16px] text-black">
            <p>Shop</p>
            <ChevronDown size={16} />
          </div>
          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brands</p>
        </div>

        <div className="hidden lg:flex">
          <input
            className="w-96 h-12 bg-gray-100 rounded-full px-4 text-[16px] text-gray-500"
            placeholder="Search for products..."
          ></input>
        </div>
        <div className="flex items-center gap-4">
          <Search size={24} className="lg:hidden" />
          <ShoppingCart size={24} />
          <CircleUser size={24} />
        </div>
      </section>
    </div>
  );
}
