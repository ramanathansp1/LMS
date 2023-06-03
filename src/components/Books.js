import React from "react";
import { useState, useEffect } from "react";

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Button,
  FilterContainer,
  Input,
} from "./Styles";

import book1 from "../images/age-of-vice-book.png";
import book2 from "../images/city-under-one-roof-book.png";
import book3 from "../images/the-world-and-all-that-it-holds-book.png";
import book4 from "../images/maame-book.png";
import book5 from "../images/essex-dogs-book.png";
import book6 from "../images/what-happened-to-ruthy-ramirez-book.png";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/paper-names-book.png";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book18 from "../images/yellowface-book.png";
import book19 from "../images/the-second-ending-book.png";
import book20 from "../images/the-wishing-game-book.png";
import book21 from "../images/same-time-next-summer-book.png";
import book22 from "../images/banyan-moon-book.png";
import book23 from "../images/crook-manifesto-book.png";
import book24 from "../images/everyone-here-is-lying-book.png";
import book25 from "../images/gone-tonight-book.png";

const booksPerPage = 9;

const bookData = [
  {
    id: 1,
    title: "Age of Vice",
    author: "Deepti Kapoor",
    image: book1,
    subject: "Emotional",
    releasedate: "Jan 3, 2023",
  },
  {
    id: 2,
    title: "City Under One Roof",
    author: "Iris Yamashita",
    image: book2,
    subject: "Melodrama",
    releasedate: "Jan 10, 2023",
  },
  {
    id: 3,
    title: "The World and All That It Holds",
    author: "Aleksandar Hemon",
    image: book3,
    subject: "Melodrama",
    releasedate: "Jan 24, 2023",
  },
  {
    id: 4,
    title: "Maame",
    author: "Jessica George",
    image: book4,
    subject: "Thriller",
    releasedate: "Jan 31, 2023",
  },
  {
    id: 5,
    title: "Essex Dogs",
    author: "Dan Jones",
    image: book5,
    subject: "Adventure",
    releasedate: "Feb 7, 2023",
  },
  {
    id: 6,
    title: "What Happened to Ruthy Ramirez",
    author: "Claire Jiménez",
    image: book6,
    subject: "Thriller",
    releasedate: "March 7, 2023",
  },
  {
    id: 7,
    title: "A Death at the Party",
    author: "Amy Stuart",
    image: book7,
    subject: "Horror",
    releasedate: "March 7, 2023",
  },
  {
    id: 8,
    title: "The God of Endings",
    author: "Jacqueline Holland",
    image: book8,
    subject: "Comedy",
    releasedate: "March 7, 2023",
  },
  {
    id: 9,
    title: "Now You See Us",
    author: "Balli Kaur Jaswal",
    image: book9,
    subject: "Comedy",
    releasedate: "March 7, 2023",
  },
  {
    id: 10,
    title: "Dust Child",
    author: "Nguyễn Phan Quế Mai",
    image: book10,
    subject: "Emotional",
    releasedate: "March 14, 2023",
  },
  {
    id: 11,
    title: "The Mostly True Story of Tanner & Louise",
    author: "Colleen Oakley",
    image: book11,
    subject: "Adventure",
    releasedate: "March 28, 2023",
  },
  {
    id: 12,
    title: "Homecoming",
    author: "Kate Morton",
    image: book12,
    subject: "Adventure",
    releasedate: "April 4, 2023",
  },
  {
    id: 13,
    title: "Symphony of Secrets",
    author: "Brendan Slocumb",
    image: book13,
    subject: "Romance",
    releasedate: "April 18, 2023",
  },
  {
    id: 14,
    title: "Silver Alert",
    author: "Lee Smith",
    image: book14,
    subject: "Romance",
    releasedate: "April 18, 2023",
  },
  {
    id: 15,
    title: "Only Love Can Hurt Like This",
    author: "Paige Toon",
    image: book15,
    subject: "Romance",
    releasedate: "April 25, 2023",
  },
  {
    id: 16,
    title: "Paper Names",
    author: "Susie Luo",
    image: book16,
    subject: "Comedy",
    releasedate: "May 2, 2023",
  },
  {
    id: 17,
    title: "The Collected Regrets of Clover",
    author: "Mikki Brammer",
    image: book17,
    subject: "Melodrama",
    releasedate: "May 9, 2023",
  },
  {
    id: 18,
    title: "Yellowface",
    author: "R.F. Kuang",
    image: book18,
    subject: "Melodrama",
    releasedate: "May 16, 2023",
  },
  {
    id: 19,
    title: "The Second Ending",
    author: "Michelle Hoffman",
    image: book19,
    subject: "Melodrama",
    releasedate: "May 30, 2023",
  },
  {
    id: 20,
    title: "The Wishing Game",
    author: "Meg Shaffer",
    image: book20,
    subject: "Horror",
    releasedate: "May 30, 2023",
  },
  {
    id: 21,
    title: "Same Time Next Summer",
    author: "Annabel Monaghan",
    image: book21,
    subject: "Romance",
    releasedate: "June 6, 2023",
  },
  {
    id: 22,
    title: "Banyan Moon",
    author: "Thao Thai",
    image: book22,
    subject: "Romance",
    releasedate: "June 27, 2023",
  },
  {
    id: 23,
    title: "Crook Manifesto",
    author: "Kate Morton",
    image: book23,
    subject: "Melodrama",
    releasedate: "June 1, 2008",
  },
  {
    id: 24,
    title: "Everyone Here Is Lying",
    author: "Dan Jones and Marina Amaral",
    image: book24,
    subject: "Thriller",
    releasedate: "June 3, 2018",
  },
  {
    id: 25,
    title: "Gone Tonight",
    author: "Dan Jones and Marina Amaral",
    image: book25,
    subject: "Comedy",
    releasedate: "June 27, 2008",
  },
];

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState(bookData);
  const [filterCriteria, setFilterCriteria] = useState({
    title: "",
    author: "",
    subject: "",
    releasedate: "",
  });

  useEffect(() => {
    filterBooks();
  }, [filterCriteria]);

  // Calculate indexes for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook); // Update this line

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter books
  const filterBooks = () => {
    const { title, author, subject, releasedate } = filterCriteria;
    const filtered = bookData.filter((book) => {
      const matchesTitle = book.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const matchesAuthor = book.author
        .toLowerCase()
        .includes(author.toLowerCase());
      const matchesSubject = book.subject
        .toLowerCase()
        .includes(subject.toLowerCase());
      const matchesReleaseDate = book.releasedate
        .toLowerCase()
        .includes(releasedate.toLowerCase());
      return (
        matchesTitle && matchesAuthor && matchesSubject && matchesReleaseDate
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  // Reset filters
  const resetFilters = () => {
    setFilterCriteria({
      title: "",
      author: "",
      subject: "",
      releasedate: "",
    });
    setCurrentPage(1);
  };

  return (
    <div>
      <div
        style={{ marginLeft: "50px", marginTop: "20px", marginBottom: "10px" }}
      >
        <BookName>Filter by:</BookName>
      </div>

      <FilterContainer>
        <Input
          type="text"
          placeholder="Title"
          value={filterCriteria.title}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
        <Input
          type="text"
          placeholder="Author"
          value={filterCriteria.author}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({
              ...prevState,
              author: e.target.value,
            }))
          }
        />
        <Input
          type="text"
          placeholder="Genre"
          value={filterCriteria.subject}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({
              ...prevState,
              subject: e.target.value,
            }))
          }
        />
        <Input
          type="text"
          placeholder="Release Date"
          value={filterCriteria.releasedate}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({
              ...prevState,
              releasedate: e.target.value,
            }))
          }
        />

        <Button style={{ marginBottom: "10px" }} onClick={resetFilters}>
          Reset Filters
        </Button>
      </FilterContainer>

      {/* Filter Counts */}
      <div
        style={{ marginLeft: "50px", marginTop: "20px", marginBottom: "10px" }}
      >
        <BookName>
          Total Books in Library: {bookData.length} | Total Filtered Books:{" "}
          {filteredBooks.length}
        </BookName>
      </div>

      <BooksViewList>
        {currentBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Genre: {book.subject}</BookDescription>
              <BookDescription>
                Release Date: {book.releasedate}
              </BookDescription>
            </BookBody>
          </BookCard>
        ))}
      </BooksViewList>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "50px",
          marginTop: "20px",
        }}
      >
        {Array.from({ length: Math.ceil(bookData.length / booksPerPage) }).map(
          (_, index) => (
            <Button
              style={{ margin: "0 4px", marginBottom: "10px" }}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Books;
