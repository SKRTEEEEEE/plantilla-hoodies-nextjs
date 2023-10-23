import { products } from '../consts/TestAPIProducts';
import ListProductsClient from './ListProductsClient';

export default function ListProductsServer() {
  return (
    <div className="bg-gray-100 py-0">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-500 mb-6">
          Productos Disponibles
        </h2>

        {/* Renderiza la parte del cliente en el servidor donde sea necesario */}
        <ListProductsClient products={products} />
      </div>
    </div>
  );
}
