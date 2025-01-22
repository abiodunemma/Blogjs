import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';


const Blog = () => {

  const router = useRouter();
  const [blogContent, setBlogContent] = useState('');
  const [error, setErrors] = useState('');

  const handleEditNavigation = () => {
    router.push('/Edit');
  };
  return (
    <div>
    
      <Navbar />
      <div className="py-20 px-4">
    
        <div className="flex items-center py-4">
          <Image
            src="/person-2.png"
            alt="profile-img"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>

      
        <textarea
          id="Blog"
          name="blog"
          placeholder="What's on your mind?"
          className="mt-1 block w-full px-4 py-2
           rounded-lg
            mb-4 border
             border-gray-300"
        />

 
        <Button
          type="button"
          title="Tell the World"
          variant="btn_black"
          onClick={handleEditNavigation}
        />
      </div>
    </div>
  );
};

export default Blog;
