import { GET_ALL_PRODUCTS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const WritersPage = async () => {
  const res = await fetch(GET_ALL_PRODUCTS);
  const products = await res.json();

  return (
    <main className="p-10 max-w-6xl mx-auto mt-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🛒 All Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 mb-4 ">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Product Title */}
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

            {/* Product Price */}
            <p className="text-green-600 font-bold mb-4">${product.price}</p>

            {/* Link to Details */}
            <Link
              href={`/products/${product.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WritersPage;
