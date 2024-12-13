import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">JILIKONI</h3>
            <p className="text-gray-400">
              Premium Assam tea for tea lovers around the world.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Wokha Garanga</li>
              <li>Golaghat, Assam, India</li>
              <li>Pincode: 785603</li>
              <li>
                Phone: <a href="tel:+916900503979" className="hover:text-white">+91 6900503979</a>, <a href="tel:+918638889781" className="hover:text-white">+91 8638889781</a>
              </li>
              <li>
                Email: <a href="mailto:amtea5121@gmail.com" className="hover:text-white">amtea5121@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
  <a href="#" className="hover:text-amber-500">
    <FaFacebook />
  </a>
  <a href="#" className="hover:text-amber-500">
    <FaInstagram />
  </a>
  <a href="#" className="hover:text-amber-500">
    <FaTwitter />
  </a>
  <a href="#" className="hover:text-amber-500">
    <FaYoutube />
  </a>
</div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JILIKONI. All rights reserved by A.M.Tea</p>
          <p>
            Design And Developed by <a href="https://rh-dynamics.software" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500">RH Dynamics</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
