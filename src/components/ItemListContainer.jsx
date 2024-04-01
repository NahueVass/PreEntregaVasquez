import { ItemList } from "./ItemList";
import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2 className="my-4">{greeting}</h2>
      <ItemList />
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
}

export default ItemListContainer;

