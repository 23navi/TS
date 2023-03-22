const book = {
  title: "abc",
  author: "Navi",
  rating: 5,
  sales: {
    india: 100,
    abroad: 400,
  },
};

const displayBook = ({ title, author }: { title: string; author: string }) => {
  console.log(author);
};

const {
  sales: { india, abroad },
}: { sales: { india: number; abroad: number } } = book;
displayBook(book);
