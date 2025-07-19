function MenuItem({ item }) {
  return (
    <li>
      <button className="w-full text-left p-2 rounded hover:bg-opacity-80 transition-colors hover:bg-gray-200">
        {item}
      </button>
    </li>
  );
}

export default function Sidebar() {
  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];

  return (
    <aside className="w-64 p-4 transition-colors duration-300 bg-gray-50 text-gray-800">
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
