import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-brand-red text-brand-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <TbBrandInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <TbBrandTwitter className="h-5 w-5" />
          </a>
        </div>

        {/* text */}
        <div className="text-sm text-center grow">
          <span>We ship worldwide - Fast and Reliable shipping!</span>
        </div>

        {/* number */}
        <div className="hidden md:block text-sm">
          <a
            href="tel:1234567890"
            target="_blank"
            className="hover:text-gray-300"
          >
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
