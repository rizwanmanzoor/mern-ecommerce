import { HiMiniXMark } from "react-icons/hi2";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-108 h-full bg-brand-white  shadow-lg transform transition-transform duration-300 flex flex-col z-50
      ${drawerOpen ? "translate-x-0" : "translate-x-full"}  
      `}
    >
      {/* close-button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={toggleCartDrawer}>
          <HiMiniXMark className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* cart-items */}
      <div className="grow p-4 overflow-y-auto relative">
        <CartContents />

        {/* checkout-button */}
        <div className="p-4 bg-brand-white absolute bottom-0">
          <button className="w-full bg-black text-brand-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center">
            Shipping, Taxes and Discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
