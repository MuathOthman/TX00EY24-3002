import { Doughnut } from "react-chartjs-2";
import "../../components/MainDashboard.css";
const DoughnutChart = () => {
  const data = {
    labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const arc = meta.data[i];
                const custom = (arc && arc.custom) || {};
                const getValueAtIndexOrDefault = (
                  value,
                  index,
                  defaultValue
                ) => {
                  if (value === undefined) {
                    return defaultValue;
                  }
                  return Array.isArray(value) ? value[index] : value;
                };
                const arcOpts = chart.options.elements.arc;
                const fill = custom.backgroundColor
                  ? custom.backgroundColor
                  : getValueAtIndexOrDefault(
                      ds.backgroundColor,
                      i,
                      arcOpts.backgroundColor
                    );
                const stroke = custom.borderColor
                  ? custom.borderColor
                  : getValueAtIndexOrDefault(
                      ds.borderColor,
                      i,
                      arcOpts.borderColor
                    );
                const strokeWidth = custom.borderWidth
                  ? custom.borderWidth
                  : getValueAtIndexOrDefault(
                      ds.borderWidth,
                      i,
                      arcOpts.borderWidth
                    );

                // Add your custom data label here
                const value = data.datasets[0].data[i];
                const percentage =
                  (
                    (value / data.datasets[0].data.reduce((a, b) => a + b, 0)) *
                    100
                  ).toFixed(2) + "%";

                return {
                  text: `${label}: ${value} (${percentage})`,
                  fillStyle: fill,
                  strokeStyle: stroke,
                  lineWidth: strokeWidth,
                  hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                  // Extra data used for toggling the correct item
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  return (
    <div className="doughnut-graph">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
