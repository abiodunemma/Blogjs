import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const Edit = () => {
  const [blogs, setBlogs] = useState<string[]>([]);

  // Fetch blogs from localStorage when the component mounts
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  // Save updated blogs to localStorage
  const saveBlogsToStorage = (updatedBlogs: string[]) => {
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  // Handle editing a blog
  const handleEdit = (index: number) => {
    const updatedContent = prompt('Edit your blog:', blogs[index]);
    if (updatedContent !== null && updatedContent.trim() !== '') {
      const updatedBlogs = [...blogs];
      updatedBlogs[index] = updatedContent;
      saveBlogsToStorage(updatedBlogs);
    }
  };

  // Handle deleting a blog
  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter((_, i) => i !== index);
      saveBlogsToStorage(updatedBlogs);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className=" flex-grow py-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
        {blogs.length > 0 ? (
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <p className="text-gray-700">{blog}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No blogs available. Add one to get started!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Edit;
