"use client";

import { useState } from 'react';
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter(); // useRouter from next/navigation

  // Manage form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Manage errors state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
        ? ""
        : "Invalid email address",
      password: formData.password.length >= 6 ? "" : "Password must be at least 6 characters",
      confirmPassword: formData.password === formData.confirmPassword ? "" : "Passwords do not match",
    };

    setErrors(newErrors);

    // If no errors, proceed with form submission and redirect to login page
    if (!newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      console.log("Form submitted successfully:", formData);

      // Redirect to the login page
      router.push('/Login'); 
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center md:bg-fixed" style={{ backgroundImage: "url('/img.png')" }}>
      <div className="min-h-screen flex flex-col md:flex-row items-center bg-black bg-opacity-50">
        {/* Left Section */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog Platform</h1>
            <p className="text-lg">Petrong Software Solutions</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg p-6 md:max-w-md  h-4/5 mx-auto mt-5 sm:mt-12  sm:h-4/5 w-11/12">
          <p className="mb-2 text-sm">Let’s get you started</p>
          <h1 className="text-lg font-bold mb-6">Create an Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg border-2 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className={`mt-1 block w-full px-4 py-2 rounded-lg border-2 border-gray-300 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

           
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`mt-1 block w-full px-4 py-2 rounded-lg border-2 border-gray-300 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

         
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`mt-1 block w-full px-4 py-2 rounded-lg border-2 border-gray-300 ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" 
            title="Get started" 
            icon="/user.svg"
             variant="btn_black" />
          </form>

          <div className="p-4">
            <hr className="border-b-1 border-black w-full" />
          </div>


          <Button type="button" title="Sign up with Google" icon="/gogle.png" variant="btn_white" />
          <Button type="button" title="Sign up with Facebook" icon="/facebook.png" variant="btn_white" />
          <Button type="button" title="Sign up with Apple" icon="/apple.png" variant="btn_white" />


          <div className="mt-12 text-center">
            <p className="text-sm">
              Already have an account? <Link href="/login"><strong>LOGIN HERE</strong></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
