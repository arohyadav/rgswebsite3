import Item from "./Item";
import { USEFULLINK, SERVICES, INDUSTRY,COMPANY  } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={USEFULLINK} title="USEFULLINK" />
      <Item Links={SERVICES} title="SERVICES" />
      <Item Links={INDUSTRY} title="INDUSTRY" />
      <Item Links={COMPANY} title="COMPANY" />
    </div>
  );
};

export default ItemsContainer;