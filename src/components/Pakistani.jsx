import React, { useState } from 'react';
import pakistanfood from './pakistanfood';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

const Pakistani = () => {
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  // Filter the list of items based on the search query
  const filteredFood = pakistanfood.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredFood.length / itemsPerPage);

  // Function to handle pagination page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
 // Function to handle displaying the recipe
 const showRecipe = (item) => {
  setSelectedItem(item);
};
  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filtered items based on the current page
  const currentItems = filteredFood.slice(startIndex, endIndex);

  return (
    <Container className="container bg-info bg-gradient text-center rounded my-4 p-3">
      <h2 className='my-2 shadow-sm gTitlefont bg-info border border-warning rounded py-2'>Pakistani Food List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control mb-3"
      />
      <Row>
        {currentItems.map((item, index) => (
          <Col key={index} sm={4} md={4} lg={4} className="mb-3">
            <div className="card">
              <img
                src={require(`./${item.imageUrl}`)}
                alt={item.name}
                className="card-img-top m-2 imgl rounded mx-auto d-block"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button
                  className="btn btn-primary my-3"
                  onClick={() => showRecipe(item)}
                >
                  Show Recipe
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {selectedItem && (
        <div className="my-3">
          <h3>{selectedItem.name} Recipe</h3>
          {/* <p>{selectedItem.recipe}</p>
           */}
           <p>Will be updated soon</p>
          <button
            className="btn btn-danger"
            onClick={() => setSelectedItem(null)}
          >
            Close Recipe
          </button>
        </div>
      )}
      <Pagination className="justify-content-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Pakistani;
