import Card from "./card";
import "./card-db.css";

function CardList() {
  const cardlist = [{
    "src" : "1",
    "description" : "hi",
    "category" : "laptop",
    "price" : "6"
  },{
    "src" : "1",
    "description" : "bye",
    "category" : "food",
    "price" : "16"
  },{
    "src" : "1",
    "description" : "hello",
    "category" : "table",
    "price" : "23"
  },{
    "src" : "1",
    "description" : "hey",
    "category" : "chair",
    "price" : "8"
  },
{
    "src" : "1",
    "description" : "okob",
    "category" : "pc",
    "price" : "12"
  }]
  return (
    <div className="card-list-container">
    {cardlist.map((card) =>
     <Card key = {crypto.randomUUID()}
     {...card} />
    )}
      
    </div>
  );
}

export default CardList;
