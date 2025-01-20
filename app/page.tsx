import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: "url('/img.png')",
      }}
    >
      <div className="min-h-screen flex flex-col md:flex-row items-center bg-black bg-opacity-50">
        {/* Left Section */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg">
              Discover amazing features and get started in minutes.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg p-6 md:max-w-lg w-full min-h-screen mx-auto">
          <p className="mb-2 text-sm">Let’s get you started</p>
          <h1 className="text-lg font-bold mb-6">Create an Account</h1>
          <form className="space-y-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="your name"
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg border-2"
            />

            <label
              className="block text-sm font-medium text-black"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              id="Email"
              type="email"
              placeholder="Enter your Email"
              className="mt-1 block w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />

            <label
              className="block text-sm font-medium text-black"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              id="Password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />

            <Button
              type="Button"
              title="Get started"
              icon="/user.svg"
              variant="btn_black"
            />
          </form>

          <div className="p-4">
            <hr className="border-b-1 border-black w-full" />
          </div>

          <Button
            type="button"
            title="Sign up with Google"
            icon="/google.png"
            variant="btn_white"
          />

          <Button
            type="button"
            title="Sign up with Facebook"
            icon="/facebook.png"
            variant="btn_white"
          />

          <Button
            type="button"
            title="Sign up with Apple"
            icon="/apple.png"
            variant="btn_white"
          />

          <div className="mt-12 text-center">
            <p className="text-sm">
              Already have an account? <strong>LOGIN HERE</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
