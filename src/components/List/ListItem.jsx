const ListItem = ({ element }) => {
  console.log('🚀 ~ ListItem ~ element:', element);
  return <li>{`${element.id}- ${element.name}`}</li>;
};
export default ListItem;
