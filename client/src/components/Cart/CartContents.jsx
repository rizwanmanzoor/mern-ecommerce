import { MdDeleteOutline } from "react-icons/md";

const CartContents = () => {
  const cartProducts = [
    {
      productId: "1",
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "2",
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        cartProducts.map((product, productId) => (
          <div
            key={productId}
            className="flex items-start justify-between py-4 border-b border-gray-200"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xs font-medium text-gray-500">
                  Size: {product.size} | Color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border border-gray-200 rounded px-2 py-0 text-md font-medium">
                    -
                  </button>
                  <span className="mx-3 text-md">{product.quantity}</span>
                  <button className="border border-gray-200 rounded px-2 py-0 text-md font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <p>$ {product.price.toLocaleString()}</p>
              <button>
                <MdDeleteOutline className="h-6 w-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartContents;
