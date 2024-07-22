import 'tailwindcss/tailwind.css';

const ContactSection = () => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Have questions or need support? We're here to help.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-green-600 mb-1">support@farmbuddy.com</p>
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sales</h3>
            <p className="text-green-600 mb-1">sales@farmbuddy.com</p>
            <p className="text-gray-700">+1 (555) 234-5678</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">General Inquiry</h3>
            <p className="text-green-600 mb-1">info@farmbuddy.com</p>
            <p className="text-gray-700">+1 (555) 345-6789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
