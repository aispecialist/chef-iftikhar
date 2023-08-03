
import React from 'react';
import { useTrail, animated } from 'react-spring';
import './ProductList.css'; // Import the CSS file for the styles

const Drinks = () => {
  const products = [
    {
      id: 1,
      name: 'Coconut Grove',
      category: 'Drinks',
      imageUrl: 'd1.jpg',
    },
    {
      id: 2,
      name: 'Peach Margarita',
      category: 'Drinks',
      imageUrl: 'd2.jpg',
    },
    {
      id: 3,
      name: 'Mint Margarita',
      category: 'Drinks',
      imageUrl: 'd3.jpg',
    },
    {
      id: 4,
      name: 'Cold Cofee',
      category: 'Drinks',
      imageUrl: 'd4.jpg',
    },
    {
      id: 5,
      name: 'Fruit Punch',
      category: 'Drinks',
      imageUrl: 'd5.jpg',
    },
    
    
   
  ];

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const trail = useTrail(products.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  return (
    <div className="container bg-info bg-gradient  rounded my-4 p-3">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning  rounded py-2'>{category}</h2>
          <div className="row">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <animated.div key={product.id} className="col-sm-6  col-md-4 col-lg-3" style={trail[index]}>
                  <div className="card bg-dark bg-gradient text-white mb-3">
                    <img src={product.imageUrl} className="card-img-top  m-2 imgl rounded mx-auto d-block" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                    
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

export default Drinks;