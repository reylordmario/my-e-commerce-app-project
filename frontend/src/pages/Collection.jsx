import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggle = (value, list, setList) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let list = products.slice();
    if (showSearch && search) {
      list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length) {
      list = list.filter((p) => category.includes(p.category));
    }
    if (sortType === 'low-high') list.sort((a, b) => a.price - b.price);
    if (sortType === 'high-low') list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, category, sortType, search, showSearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter sidebar */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt='' />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Women', 'Men', 'Kids'].map((c) => (
              <label key={c} className='flex gap-2 cursor-pointer'>
                <input type='checkbox' className='w-3 accent-[#7a0f1e]' checked={category.includes(c)} onChange={() => toggle(c, category, setCategory)} />
                {c === 'Women' ? 'Women · Filipiniana' : c === 'Men' ? 'Men · Barong' : 'Kids'}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-4 gap-3'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 py-1 rounded'>
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Price Low → High</option>
            <option value='high-low'>Sort by: Price High → Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filtered.map((item) => (
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
        {filtered.length === 0 && <p className='text-center text-gray-500 py-16'>No items match your filters.</p>}
      </div>
    </div>
  );
};

export default Collection;
