"use client";
import Image from "next/image";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Product } from "../data/products";
import { Star } from "./Star";
import {
  addProductToCart,
  removeProductsFromCart,
} from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const onAddToCart = () => {
    addProductToCart(product.id);
    router.refresh();
  };

  const onRemoveToCart = () => {
    removeProductsFromCart(product.id);
    router.refresh();
  };
  return (
    <div className=" shadow rounded-lg max-w-sm bg-gray-800 ">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={product.image}
          alt={product.name}
          unoptimized
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className=" font-semibold text-xl tracking-tight text-white">
            {product.name}
          </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {Array(product.rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} />
            ))}

          {/* Rating Number */}
          <span className="  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
            {product.rating.toFixed(2)}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold  text-white">
            ${product.price}
          </span>

          <div className="flex">
            <button
              onClick={onAddToCart}
              className="text-white mr-2  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveToCart}
              className="text-white   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
