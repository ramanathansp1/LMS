import React from "react";
import { HeadTitle, Title, HeadDescription } from "./Styles";

const ViewSearchResults = ({ searchResults }) => {
  if (!searchResults.items) {
    return (
      <div>
        <HeadTitle style={{ marginTop: "130px" }}>Search Results</HeadTitle>
        <Title style={{ marginLeft: "50px", marginTop: "40px" }}>
          No results found.
        </Title>
        ;
      </div>
    );
  }

  return (
    <div>
      <HeadTitle style={{ marginTop: "130px" }}>Search Results</HeadTitle>
      {searchResults.items.map((item) => (
        <div key={item.id}>
          <Title style={{ marginLeft: "50px", marginTop: "40px" }}>
            {item.volumeInfo.title}
          </Title>
          <HeadDescription>
            Author(s):{" "}
            {item.volumeInfo.authors
              ? item.volumeInfo.authors.join(", ")
              : "Unknown"}
          </HeadDescription>
          <HeadDescription>
            Published Date: {item.volumeInfo.publishedDate}
          </HeadDescription>
          <HeadDescription>
            Description: {item.volumeInfo.description}
          </HeadDescription>
        </div>
      ))}
      <div>
        <button
          style={{ marginLeft: "50px", marginTop: "40px" }}
          disabled={!searchResults.previousPage}
          onClick={searchResults.loadPreviousPage}
        >
          Previous Page
        </button>
        <button
          style={{ marginLeft: "50px", marginTop: "40px" }}
          disabled={!searchResults.nextPage}
          onClick={searchResults.loadNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ViewSearchResults;
