export function FilterSection() {
  const categories = [
    'Laptops',
    'Gaming',
    'Accessories',
    'Peripherals',
    'Storage',
    'Components',
    'Monitors',
    'Printers',
  ];

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
      <div>
        <button>Clear Filters</button>
      </div>
    </div>
  );
}
