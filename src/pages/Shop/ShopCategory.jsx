const title = "All Categories";
import Data from "/src/products.json";

const ShopCategory = ({
  filterItem,
  setItem,
  setProducts,
  menuItems,
  selectedCategory,
}) => {
  console.log(selectedCategory);

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">{title}</h5>
      </div>
      <div className="">
        <button
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
          onClick={() => filterItem("All")}
        >
          All
        </button>

        {menuItems.map((Val, id) => {
          return (
            <button
              className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`}
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
