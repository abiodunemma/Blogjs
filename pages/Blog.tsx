import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Blog = () => {
  const router = useRouter();
  const [blogContent, setBlogContent] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlogContent(e.target.value);
    if (e.target.value.trim()) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (!blogContent.trim()) {
      setError('Please write something before submitting.');
      return;
    }

    //fetch the existing blog 
    const storedBlogs =  JSON.parse(localStorage.getItem('blogs') || '[]' );
    const updatedBlogs = [...storedBlogs, blogContent];



    //save blog
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogContent('');
    // Redirect to the Edit page
    router.push('/Edit');
  };

  return (
    <div className='  h-full'>

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

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <textarea
            id="Blog"
            name="blog"
            value={blogContent}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            className="mt-1 block w-full px-4 py-2 rounded-lg mb-4 border border-gray-300"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <Button type="submit" title="Tell the World" variant="btn_black" />
        </form>
      </div>
      <Footer />
    </div>

  );
};

export default Blog;
