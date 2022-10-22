import Header from "./Header";
import OpenSearch from "./OpenSearch";
import Shelf from "./Shelf";

const MainPage = () => {
  return (
    <div className="app">
      <Header />
      <Shelf title={"Currently Reading"} value="currentlyReading" />
      <Shelf title={"Want to Read"} value="wantToRead" />
      <Shelf title={"Read"} value="read" />
      <OpenSearch />
    </div>
  );
};

export default MainPage;
