'use client';
import { useState } from 'react';

export default function ListProducts({ products }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page + 1)}
                className={`${
                  currentPage === page + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-3 py-2 rounded-full mx-1`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
