import Button from "@/components/Button";
import Image from "next/image";

export default function Home(){
  return (
 <div className="min-h-screen overflow-aut bg-cover sm:bg-no-repeat md:bg-fixed bg-center "
 style={{ 
  backgroundImage: "url('/img.png')",
  }}>
  
    <div className="justify-center
    bg-black h-full bg-opacity-50 p-6 rounded-lg shadow-sm focus:ring-blue-500 focus:border=blue-500
    ">
      <div className="bg-white  rounded-md p-6  pb-80 ">
      <p className="mb-2 text-sm ">Let get you started</p>
      <h1 className=" bold-8 mb-6 "><strong>Create any account</strong></h1>
      <form className="space-y-4 ">
      
  <label className="block  text-sm font-medium  mb-[-10px] text-black-700"  htmlFor= "name"> Your Name</label>
     <input 
     id="your name"
     type="text"
     placeholder="Enter your name"
     className="mt-1 block w-full px-4 py-2 border-gray rounded-lg  border-2 border-gray-300 "
     />

<label className="block  text-sm font-medium  text-black-700" htmlFor= "Email"> Email</label>
     <input 
     id="Email"
     type="email"
     placeholder="Enter your Email"
     className="mt-1 block w-full px-4 py-2  rounded-lg border-2 border-gray-300 mb-[-10px]  "
     />

<label className="block  text-sm font-medium  text-black-700" htmlFor= "Passowrd"> Password</label>
     <input 
     id="Password"
     type="password"
     placeholder="Enter your password"
     className="mt-1 block w-full px-4 py-2 rounded-lg  border-2 border-gray-300"
     />
         <Button
         type="Button"
         title="Get started"
         icon="/user.svg"
         variant= "btn_black"
   
         />
           </form>
           <div className="p-4">
            <hr className="border-b-1 border-black w-full">
            </hr>
            </div>
           <Button
             type="button"
             title="Sign up with Google"
             icon="/gogle.png"
             variant= "btn_white"
           />

<Button
             type="button"
             title="Sign up with Google"
             icon="/facebook.png"
             variant= "btn_white"
           />

<Button
             type="button"
             title="Sign up with Google"
             icon="/apple.png"
             variant= "btn_white"
           />
<div className="mt-12  text-center ">
  <p className="text-sm"> Already have an account? <strong>LOGIN HERE</strong> </p>

</div>
    </div>


 </div>
</div>
  )
}