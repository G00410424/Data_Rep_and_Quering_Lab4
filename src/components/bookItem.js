import Card from 'react-bootstrap/Card';
function BookItem(props){
    
    return(
        <div>
            {/* Gets the author to be displayed*/}
           
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.myBook.title}</Card.Title>  {/* Gets the title to be displayed*/}
        <Card.Subtitle className="mb-2 text-muted">{props.myBook.authors[0]}</Card.Subtitle>{/* Gets the img to be displayed*/}
        <img src={props.myBook.thumbnailUrl}></img>{/* Gets the author to be displayed*/}
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        
    );
}
export default BookItem;