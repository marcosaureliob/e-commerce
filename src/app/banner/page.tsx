import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="pl-4">
        <p className="text-black font-bold text-[36px]">
          FIND CLOTHES <br />
          THAT MATCHES
          <br /> YOUR STYLE
        </p>
        <p className="text-black/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>
      </div>
      <Image
        src="/assets/mobile-banner.png"
        width={390}
        height={100}
        alt="teste"
      />
    </div>
  );
}
