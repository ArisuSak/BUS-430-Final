export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-4">Six Senergy</div>
            <p className="text-gray-600">Building the future of technology, one solution at a time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Products</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Developers</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Blog</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2025 Six Senergy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}