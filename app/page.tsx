import Button from "@/components/Button";
import Image from "next/image";

export default function Home(){
  return (
 <div className="h-screen bg-cover sm:bg-no-repeat md:bg-fixed bg-center "
 style={{ 
  backgroundImage: "url('/img.png')",
  }}>
  
    <div className="justify-center
    bg-black h-full bg-opacity-50 p-6 rounded-lg shadow-sm focus:ring-blue-500 focus:border=blue-500
    ">
      <div className="bg-white  rounded-md p-6">
      <p className="mb-2 ">Let get you started</p>
      <h1 className=" bold-18 "><strong>Create any account</strong></h1>
      <form className="space-y-4 ">
      
  <label className="block  text-sm font-medium text-black-700" htmlFor= "name"> Your Name</label>
     <input 
     id="your name"
     type="text"
     placeholder="Enter your name"
     className="mt-1 block w-full px-4 py-2 border-gray rounded-lg  "
     />

<label className="block  text-sm font-medium text-black-700" htmlFor= "Email"> Email</label>
     <input 
     id="Email"
     type="email"
     placeholder="Enter your Email"
     className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg  "
     />

<label className="block  text-sm font-medium text-black-700" htmlFor= "Passowrd"> Password</label>
     <input 
     id="Password"
     type="password"
     placeholder="Enter your password"
     className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg  "
     />
         <Button
         type="Button"
         title="Sign up"
         icon="/user.svg"
         variant= "btn_dark_green"
         />
           </form>
    </div>

 </div>
</div>
  )
}