const books = [
    { 
      name: "To Kill a Mockingbird", 
      category: "Fiction", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 12.99,
      description: "A novel about the serious issues of rape and racial inequality, told through the eyes of a young girl in the Deep South."
    },
    { 
      name: "1984", 
      category: "Fiction", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 14.99,
      description: "A chilling prophecy about the future, where totalitarianism reigns and individualism is persecuted."
    },
    { 
      name: "The Great Gatsby", 
      category: "Classic", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 10.99,
      description: "A portrayal of the Roaring Twenties and a critique of the American Dream through the eyes of Jay Gatsby."
    },
    { 
      name: "The Catcher in the Rye", 
      category: "Classic", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 9.99,
      description: "A story about teenage rebellion and angst, as told by the iconic character Holden Caulfield."
    },
    { 
      name: "The Hobbit", 
      category: "Fantasy", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 15.99,
      description: "A prelude to the Lord of the Rings, where Bilbo Baggins embarks on an unexpected journey."
    },
    { 
      name: "Pride and Prejudice", 
      category: "Romance", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 11.99,
      description: "A classic tale of love and misunderstanding in 19th century England, centered on Elizabeth Bennet and Mr. Darcy."
    },
    { 
      name: "The Da Vinci Code", 
      category: "Thriller", 
      image: "https://m.media-amazon.com/images/I/51-SB14lpxL._AC_UF1000,1000_QL80_.jpg",
      price: 13.99,
      description: "A fast-paced thriller that explores the mysteries of the Holy Grail and the secrets of the Catholic Church."
    },
    { 
      name: "The Lord of the Rings", 
      category: "Fantasy", 
      image: "https://example.com/the-lord-of-the-rings.jpg",
      price: 22.99,
      description: "An epic fantasy trilogy that chronicles the battle between good and evil in Middle-earth."
    },
    { 
      name: "Moby Dick", 
      category: "Fiction", 
      image: "https://example.com/moby-dick.jpg",
      price: 8.99,
      description: "A thrilling tale of obsession and revenge as Captain Ahab pursues the elusive white whale, Moby Dick."
    },
    { 
      name: "Brave New World", 
      category: "Fiction", 
      image: "https://example.com/brave-new-world.jpg",
      price: 12.49,
      description: "A dystopian novel that explores a future where technology and conditioning shape every aspect of human life."
    }
  ];
//   console.log(books.length, 'finding length')
window.addEventListener('DOMContentLoaded',displayItems)
const container = document.querySelector('.items')
console.log(container)
  function displayItems() {
    books.map((book)=> {
        // console.log(book)
        return `<div class="item mr-5">
            <img src="./images/bot.png" alt="">
            <h1>Book Name</h1>
            <div class="d-flex jusitfy-content-between w-100">
                <p>Price</p>
                <p>category</p>
            </div>
            <div>information</div>

        </div>`
    })
  }
  container.innerHTML = displayItems