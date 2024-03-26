import CustomBarChart from "../components/BarChart/CustomBarChart";

const PagesToRead = () => {
  return (
    <div>
      <h2>Pages To Read</h2>
      {/* <CustomBarChart></CustomBarChart> */}
      <CustomBarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </CustomBarChart>
    </div>
  );
};

export default PagesToRead;
