import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBooks } from "../Utility";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer } from "recharts";

const CustomBarChart = () => {
  const data = useLoaderData();
  //  .............. BarChart of Read
  const [readBookNames, setReadBookNames] = useState([]);
  const [readBookPages, setReadBookPages] = useState([]);

  useEffect(() => {
    const storedBooks = getBooks();
    if (data.length > 0) {
      const eNames = [];
      const ePages = [];
      const bookStored = data.filter((book) => storedBooks.includes(book.id));
      console.log(bookStored);
      for (let i = 0; i < storedBooks.length; i++) {
        eNames.push(bookStored[i].bookName);
        ePages.push(bookStored[i].totalPages);
      }
      setReadBookNames(eNames);
      setReadBookPages(ePages);
    }
  }, [data]);
  //  ............ BarChart Of All
  const [names, setNames] = useState([]);
  const [Pages, setPages] = useState([]);
  useEffect(() => {
    const emptyNames = [];
    const emptyPages = [];
    for (let i = 0; i < data.length; i++) {
      emptyNames.push(data[i].bookName);
      emptyPages.push(data[i].totalPages);
    }
    setNames(emptyNames);
    setPages(emptyPages);
  }, [data]);

  // // useEffect(() => {
  //   const emptyBookNames = [];
  //   const emptyBookPages = [];

  //   const nameData = getWishLists();
  // for (let i = 0; i < nameData.length; ) {
  //   {
  //     emptyBookNames.push(nameData[i].bookName);
  //     emptyBookPages.push(nameData[i].totalPages);
  //   }
  //   setBookName(emptyBookNames);
  //   setBookPages(emptyBookPages);
  //   // console.log(emptyBookNames);
  //   // console.log(emptyBookPages);

  //   i += 1;
  //   i += 1;
  // }
  // }, [bookNames, bookPages]);
  // console.log(bookNames);

  return (
    <div>
      <ResponsiveContainer width="100%" height="300px">
        <Chart
          type="bar"
          width={1100}
          height={400}
          series={[
            {
              name: "--bar Chart---",
              data: readBookPages,
            },
          ]}
          options={{
            title: { text: "BarChart: Name/Page " },
            style: { fontSize: 30 },
            colors: ["#23BE0A"],

            xaxis: {
              categories: readBookNames,
              title: { text: "BarChart: Name/Page " },
              style: { fontSize: 30 },
              colors: ["#23BE0A"],
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: 15 },
                colors: ["#23BE0A"],
              },
            },
          }}
        ></Chart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="500px">
        <Chart
          type="bar"
          width={1100}
          height={400}
          series={[
            {
              name: "Page",
              data: Pages,
            },
          ]}
          options={{
            title: { text: "BarChart of: All Name/Page " },
            style: { fontSize: 30 },
            colors: ["#23BE0A"],

            xaxis: {
              categories: names,
              title: { text: "BarChart: Name/Page " },
              style: { fontSize: 30 },
              colors: ["#23BE0A"],
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: 15 },
                colors: ["#23BE0A"],
              },
            },
          }}
        ></Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
