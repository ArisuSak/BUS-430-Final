export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">TechFlow</div>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2025 TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
