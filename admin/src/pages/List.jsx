import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { currency } from '../App';  // Keep currency import if you're defining it there

const List = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ Updated backend URL
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (id) => {
    try {
      const token = localStorage.getItem('token');  // ✅ Use token from localStorage
      if (!token) {
        toast.error('Authentication token not found');
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product Rows */}
        {
          list.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            >
              <img className='w-12' src={item.images?.[0] || 'default-image-url'} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p
                onClick={() => removeProduct(item._id)}
                className='text-right md:text-center cursor-pointer text-lg text-red-600 hover:text-red-800'
              >
                X
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default List;
