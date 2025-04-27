import Link from "next/link"; // Add this import
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const API_URL = "https://fakestoreapi.com/products";

// generate metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.id;
  const response = await fetch(`${API_URL}/${id}`);
  const product = await response.json();

  return {
    title: `${product.title} - $${product.price}`,
    description: `${product.description} (Category: ${product.category})`,
    keywords: [product.title, product.category, "shop", "buy", "online store"],
    openGraph: {
      title: `${product.title} - $${product.price}`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - $${product.price}`,
      description: product.description,
      images: [product.image],
    },
  };
};

// Product page
const ProductPage = async ({ params }: Props) => {
  const id = params.id;
  const response = await fetch(`${API_URL}/${id}`);
  const product = await response.json();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 animate__animated animate__zoomInDown">
        {product.title}
      </h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "100%", height: "auto" }}
        className="mb-6 animate__animated animate__zoomInDown"
      />

      <p className="mb-2">
        <strong>Price:</strong> ${product.price}
      </p>
      <p className="mb-2">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {product.rating.rate} / 5 (
        {product.rating.count} reviews)
      </p>
      <p className="mb-6">
        <strong>Description:</strong> {product.description}
      </p>

      {/* Back to Products link */}
      <Link
        href="/products"
        className="inline-block mt-8 text-blue-600 font-semibold hover:underline transition"
      >
        ← Back to Products
      </Link>
    </div>
  );
};

export default ProductPage;
