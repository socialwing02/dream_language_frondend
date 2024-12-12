import { Input } from "@/components/ui/Input";

export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-start text-gray-800 mb-6">
          Get in Touch
        </h2>
        <h3 className="text-start text-1xl font-medium z-40">
          Our Experience and Knowledge Team is Dedicated to Providing
          Exceptional Customer Service{" "}
        </h3>
        <form>
          <div className="mb-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
              Your Name
            </label>
            <Input
              type="text"
              placeholder="Enter Your name"
              className="border-none outline-none"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  focus:ring-blue-500"
            >
              Your Email
            </label>
            <Input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 "
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={8}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center"></div>
        </form>
      </div>
    </div>
  );
}
