class Book{
    constructor(bookName, AuthName, Genre, publishDate){
        this.bookName = bookName;
        this.AuthName = AuthName;
        this.Genre = Genre;
        this.publishDate = publishDate;
    }
    
}
document.title = document.getElementById("title").innerHTML;
const bookArray = new Array(7);
bookArray[0] = new Book('The Fault in Our Stars','John Green','Romance','2010');
bookArray[1] = new Book('In Cold Blood','Truman Capote','Crime','1965');
bookArray[2] = new Book('The Big Sleep','Raymond Chandler','Crime','1939');
bookArray[3] = new Book('The Silent Patient','Alex Michaelides','Thriller','2019');
bookArray[4] = new Book('Gone Girl','Gillian Flynn','Thriller','2012');
bookArray[5] = new Book('The Sleeping Night','Barbara Samuel','Romance','2012');
bookArray[6] = new Book('The Sleeping day','Barbara Samuel','Romance','2012');
var iterator = bookArray.values();
function searchResult(input){
    let bookList = '<ul>';
    var recommendList = '<ul>';
    for(i=0;i<bookArray.length;i++){   
        if((bookArray[i].bookName).toLowerCase() == input.toLowerCase()){
            bookList = "Book is available";
            for(j=0;j<bookArray.length;j++){
                if(bookArray[i].Genre == bookArray[j].Genre && i!=j){
                    recommendList += "<li>" + (bookArray[j].bookName) + "</li>" ;
                }
            }
            break;
        }
        if((bookArray[i].bookName).toLowerCase().includes(input.toLowerCase())){
            bookList += "<li>" + (bookArray[i].bookName) + "</li>" ;
        }
    }
    bookList += '</ul>';
    recommendList += '</ul>';
    
    document.getElementById("result").innerHTML = bookList;
    document.getElementById("Searchheading").innerHTML = 'Search result';
    document.getElementById("recommend").innerHTML = recommendList;
    document.getElementById("recommendheading").innerHTML = 'Recommended Books';
}

