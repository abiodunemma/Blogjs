import Button from "@/components/Button";
import Image from "next/image";
import '../styles/login.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed sm:bg-auto md:bg-cover lg:bg-cover sm:bg-top md:bg-center"
      style={{
        backgroundImage: "url('/bg-img.png')" }}>
     
     
     <div className="min-h-screen flex flex-col md:flex-row items-center bg-black bg-opacity-60">
        {/* Left Section */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our  Blog Platform</h1>
            <p className="text-lg">
             Petrong Software Solutions
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg p-6 md:max-w-md w-4/5 h-auto mx-auto">

          <p className="mb-2 text-sm text-gray-400">WELCOME BACK</p>
          <h1 className="text-sm font-bold mb-6">Login in to your Account</h1>
          <form className="space-y-4">
           
            <label
              className="block text-sm font-medium text-gray-500"
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
              className="block text-sm font-medium text-gray-500"
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
           
           <div className="py-4 flex justify-between items-center w-full">
  <div className="flex items-center space-x-2">
    <input 
      type="checkbox" 
      id="rememberMe" 
      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember me</label>
  </div>
  
  <span className="text-sm text-blue-500 cursor-pointer">Forgot password?</span>
</div>


            <Button
              type="Button"
              title="CONTINUE"
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
            icon="/gogle.png"
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

              Already have an account?
              <strong><Link href="page">Signup
              </Link></strong>
            </p>
          </div>
        </div>
      </div>
</div>
  );
}
