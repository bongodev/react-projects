import clsx from "clsx";

export default function ProductCard({ product, isDark, onSelect }) {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 hover:scale-105",
        {
          "bg-gray-800 border-gray-700 hover:border-gray-600": isDark,
          "bg-white border-gray-200 hover:border-gray-300": !isDark,
        }
      )}
      onClick={() => onSelect(product)}
    >
      <div className="p-6">
        <h3
          className={clsx("text-lg font-semibold mb-2", {
            "text-white": isDark,
            "text-gray-900": !isDark,
          })}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className={clsx("text-2xl font-bold", {
              "text-blue-400": isDark,
              "text-blue-600": !isDark,
            })}
          >
            ${product.price?.toFixed(2) || "0.00"}
          </span>
          <span
            className={clsx("px-2 py-1 text-xs font-medium rounded-full", {
              "bg-green-900 text-green-300": isDark,
              "bg-green-100 text-green-800": !isDark,
            })}
          >
            In Stock
          </span>
        </div>
      </div>
    </div>
  );
}
