export default function ContactForm() {
  return (
    <div className="bg-pink px-[7%] py-[7%]">
      <h3 className="text-center font-poppins text-2xl font-normal mb-6">
        Let&rsquo;s Talk
      </h3>
      <form name="universal-page-contact-form" className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name *"
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name *"
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="050 123 4567"
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <select className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary bg-white">
            <option value="list-my-home">List my Home</option>
            <option value="off-plan-enquiry">Off-Plan Enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded font-medium text-lg hover:bg-red-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
