import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const Italian = () => {
  const products = [
    {
      id: 1,
      name: 'Chicken Pizza',
      category: 'Italian',
      imageUrl: 'i1.jpg',
    },
    {
      id: 2,
      name: 'Pasta',
      category: 'Italian',
      imageUrl: 'i2.webp',
    },
    {
      id: 3,
      name: 'Negroni',
      category: 'Italian',
      imageUrl: 'i3webp.webp',
    },
    {
      id: 4,
      name: 'Bread Pizza',
      category: 'Italian',
      imageUrl: 'i4.jpg',
    },
    // {
    //   id: 5,
    //   name: 'Chiken Biryani',
    //   category: 'Italian',
    //   imageUrl: 'i5.jpg',
    // },
    {
      id: 6,
      name: 'Barbecue Pizza',
      category: 'Italian',
      imageUrl: 'i6.jpg',
    },
    
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container bg-danger  bg-opacity-75 rounded my-4 p-3">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2 className='my-2 shadow bg-dark-subtle gTitlefont   rounded py-2'>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6 col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card mb-3">
                    <img src={product.imageUrl} className="card-img-top  m-2 imgl rounded mx-auto d-block" alt={product.name} />
                    <div className="card-body text-body-tertiary">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.price}</p>
                    </div>
                  </div>
                </animated.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Italian;