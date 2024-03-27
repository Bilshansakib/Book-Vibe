import Chart from "react-apexcharts";
const CustomBarChart = () => {
  return (
    <div>
      <Chart
        type="bar"
        width={1100}
        height={400}
        series={[
          {
            name: "--bar Chart---",
            data: [1111, 2222, 3333, 4444, 555, 6666, 7777],
          },
        ]}
        options={{
          title: { text: "BarChart: Name/Page " },
          style: { fontSize: 30 },

          xaxis: {
            categories: ["asdf,sgf,dfg,gh,sdf,sdf,dfsd"],
          },
        }}
      ></Chart>
    </div>
  );
};

export default CustomBarChart;
