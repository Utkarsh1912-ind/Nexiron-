export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3" />
        <input type="email" placeholder="Email" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3" />
        <textarea rows="4" placeholder="Message" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3"></textarea>
        <button className="bg-neon text-black font-semibold px-8 py-3 rounded-full">Send</button>
      </form>
    </div>
  );
}