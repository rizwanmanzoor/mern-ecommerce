import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish jacket",
  price: 120,
  originalPrice: 150,
  description:
    "this is a stylish jacket made from high-quality materials. Perfect for all seasons and occasions.",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Brown", "Blue"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "stylish jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "stylish jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Product 1",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=12",
        altText: "Product 2",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 90,
    images: [
      {
        url: "https://picsum.photos/500/500?random=13",
        altText: "Product 3",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 140,
    images: [
      {
        url: "https://picsum.photos/500/500?random=14",
        altText: "Product 4",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(" ");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size & color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });

      setIsButtonDisabled(false);
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === image.url
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="main product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4 no-scrollbar">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === image.url
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 capitalize">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-0 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>

            <p className="text-xl text-gray-500 font-semibold mb-2">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Color */}
            <div className="mb-4">
              <p className="text-gray-700 capitalize">Color:</p>
              <div className="flex gap-2 mt-2 uppercase">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-4 hover:scale-105 transform transition ${
                      selectedColor === color
                        ? "border-gray-900"
                        : "border-gray-200"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="text-gray-700 capitalize">Size:</p>
              <div className="flex gap-2 mt-2 uppercase">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border border-gray-200 transition ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700 capitalize">Quantity:</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 bg-gray-200 border border-gray-300 hover:bg-gray-300 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg text-center min-w-5">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 bg-gray-200 border border-gray-300 hover:bg-gray-300 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black border text-white py-2 px-6 rounded w-full mb-4 uppercase hover:bg-white hover:text-black hover:font-semibold transition ${isButtonDisabled} ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"`}
            >
              {isButtonDisabled ? "loading..." : "add to cart"}
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600 capitalize">
                <tbody>
                  <tr>
                    <td className="py-1">brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* products section */}
        <div className="mt-20">
          <h2 className="capitalize text-2xl text-center font-medium mn-4">
            You may also Like
          </h2>

          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
