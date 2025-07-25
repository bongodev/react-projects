import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 p-8 transition-colors duration-300",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">
          Welcome to bongoDev's React Context API app
        </h2>
        <div
          className={clsx(
            "p-6 rounded-lg mb-6",
            theme === "light" && "bg-blue-50 border border-blue-200",
            theme === "dark" && "bg-blue-900 border border-blue-700"
          )}
        >
          <h3 className="text-xl font-semibold mb-3">What you're seeing:</h3>
          <ul className="space-y-2">
            <li>
              • Current theme: <strong>Light</strong>
            </li>
            <li>
              • Current user: <strong>Guest</strong>
            </li>
            <li>
              • All components share the same state without prop drilling!
            </li>
            <li>• Toggle the theme button to see the entire app change</li>
          </ul>
        </div>

        <div
          className={clsx(
            "p-6 rounded-lg bg-gray-50",
            theme === "dark" && "bg-gray-50 border border-gray-200",
            theme === "dark" && "bg-gray-700 border border-gray-600"
          )}
        >
          <h3 className="text-xl font-semibold mb-3">Update User Name:</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Enter new name"
              className={clsx(
                "flex-1 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500",
                theme === "light" && "bg-white border-gray-300 text-gray-800",
                theme === "dark" && "bg-gray-800 border-gray-500 text-white"
              )}
            />
            <button
              onClick={() => {}}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
