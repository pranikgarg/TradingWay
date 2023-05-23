import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { StrikePrice } from "../App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props: { strikePrice: StrikePrice }) => {
  const { strikePrice } = props;

  const labels: string[] = [
    "09:15",
    "09:16",
    "09:17",
    "09:18",
    "09:19",
    "09:20",
    "09:21",
    "09:22",
    "09:23",
    "09:24",
    "09:25",
    "09:26",
    "09:27",
    "09:28",
    "09:29",
    "09:30",
    "09:31",
    "09:32",
    "09:33",
    "09:34",
    "09:35",
    "09:36",
    "09:37",
    "09:38",
    "09:39",
    "09:40",
    "09:41",
    "09:42",
    "09:43",
    "09:44",
    "09:45",
    "09:46",
    "09:47",
    "09:48",
    "09:49",
    "09:50",
    "09:51",
    "09:52",
    "09:53",
    "09:54",
    "09:55",
    "09:56",
    "09:57",
    "09:58",
    "09:59",
    "10:00",
    "10:01",
    "10:02",
    "10:03",
    "10:04",
    "10:05",
    "10:06",
    "10:07",
    "10:08",
    "10:09",
    "10:10",
    "10:11",
    "10:12",
    "10:13",
    "10:14",
    "10:15",
    "10:16",
    "10:17",
    "10:18",
    "10:19",
    "10:20",
    "10:21",
    "10:22",
    "10:23",
    "10:24",
    "10:25",
    "10:26",
    "10:27",
    "10:28",
    "10:29",
    "10:30",
    "10:31",
    "10:32",
    "10:33",
    "10:34",
    "10:35",
    "10:36",
    "10:37",
    "10:38",
    "10:39",
    "10:40",
    "10:41",
    "10:42",
    "10:43",
    "10:44",
    "10:45",
    "10:46",
    "10:47",
    "10:48",
    "10:49",
    "10:50",
    "10:51",
    "10:52",
    "10:53",
    "10:54",
    "10:55",
    "10:56",
    "10:57",
    "10:58",
    "10:59",
    "11:00",
    "11:01",
    "11:02",
    "11:03",
    "11:04",
    "11:05",
    "11:06",
    "11:07",
    "11:08",
    "11:09",
    "11:10",
    "11:11",
    "11:12",
    "11:13",
    "11:14",
    "11:15",
    "11:16",
    "11:17",
    "11:18",
    "11:19",
    "11:20",
    "11:21",
    "11:22",
    "11:23",
    "11:24",
    "11:25",
    "11:26",
    "11:27",
    "11:28",
    "11:29",
    "11:30",
    "11:31",
    "11:32",
    "11:33",
    "11:34",
    "11:35",
    "11:36",
    "11:37",
    "11:38",
    "11:39",
    "11:40",
    "11:41",
    "11:42",
    "11:43",
    "11:44",
    "11:45",
    "11:46",
    "11:47",
    "11:48",
    "11:49",
    "11:50",
    "11:51",
    "11:52",
    "11:53",
    "11:54",
    "11:55",
    "11:56",
    "11:57",
    "11:58",
    "11:59",
    "12:00",
    "12:01",
    "12:02",
    "12:03",
    "12:04",
    "12:05",
    "12:06",
    "12:07",
    "12:08",
    "12:09",
    "12:10",
    "12:11",
    "12:12",
    "12:13",
    "12:14",
    "12:15",
    "12:16",
    "12:17",
    "12:18",
    "12:19",
    "12:20",
    "12:21",
    "12:22",
    "12:23",
    "12:24",
    "12:25",
    "12:26",
    "12:27",
    "12:28",
    "12:29",
    "12:30",
    "12:31",
    "12:32",
    "12:33",
    "12:34",
    "12:35",
    "12:36",
    "12:37",
    "12:38",
    "12:39",
    "12:40",
    "12:41",
    "12:42",
    "12:43",
    "12:44",
    "12:45",
    "12:46",
    "12:47",
    "12:48",
    "12:49",
    "12:50",
    "12:51",
    "12:52",
    "12:53",
    "12:54",
    "12:55",
    "12:56",
    "12:57",
    "12:58",
    "12:59",
    "13:00",
    "13:01",
    "13:02",
    "13:03",
    "13:04",
    "13:05",
    "13:06",
    "13:07",
    "13:08",
    "13:09",
    "13:10",
    "13:11",
    "13:12",
    "13:13",
    "13:14",
    "13:15",
    "13:16",
    "13:17",
    "13:18",
    "13:19",
    "13:20",
    "13:21",
    "13:22",
    "13:23",
    "13:24",
    "13:25",
    "13:26",
    "13:27",
    "13:28",
    "13:29",
    "13:30",
    "13:31",
    "13:32",
    "13:33",
    "13:34",
    "13:35",
    "13:36",
    "13:37",
    "13:38",
    "13:39",
    "13:40",
    "13:41",
    "13:42",
    "13:43",
    "13:44",
    "13:45",
    "13:46",
    "13:47",
    "13:48",
    "13:49",
    "13:50",
    "13:51",
    "13:52",
    "13:53",
    "13:54",
    "13:55",
    "13:56",
    "13:57",
    "13:58",
    "13:59",
    "14:00",
    "14:01",
    "14:02",
    "14:03",
    "14:04",
    "14:05",
    "14:06",
    "14:07",
    "14:08",
    "14:09",
    "14:10",
    "14:11",
    "14:12",
    "14:13",
    "14:14",
    "14:15",
    "14:16",
    "14:17",
    "14:18",
    "14:19",
    "14:20",
    "14:21",
    "14:22",
    "14:23",
    "14:24",
    "14:25",
    "14:26",
    "14:27",
    "14:28",
    "14:29",
    "14:30",
    "14:31",
    "14:32",
    "14:33",
    "14:34",
    "14:35",
    "14:36",
    "14:37",
    "14:38",
    "14:39",
    "14:40",
    "14:41",
    "14:42",
    "14:43",
    "14:44",
    "14:45",
    "14:46",
    "14:47",
    "14:48",
    "14:49",
    "14:50",
    "14:51",
    "14:52",
    "14:53",
    "14:54",
    "14:55",
    "14:56",
    "14:57",
    "14:58",
    "14:59",
    "15:00",
    "15:01",
    "15:02",
    "15:03",
    "15:04",
    "15:05",
    "15:06",
    "15:07",
    "15:08",
    "15:09",
    "15:10",
    "15:11",
    "15:12",
    "15:13",
    "15:14",
    "15:15",
  ];

  const getPreparedData = (attribute: string) => {
    const strikePriceData = sessionStorage.getItem(strikePrice.value);
    if (strikePriceData) {
      const temp = JSON.parse(strikePriceData);
      const response = labels.map((label) => {
        let response = undefined;
        temp.map((item: any) => {
          if (item.time.indexOf(label) > -1) {
            response = item[attribute];
          }
        });
        return response;
      });

      return response;
    }
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Put",
        data: getPreparedData("puts_change_oi"),
        backgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Call",
        data: getPreparedData("calls_change_oi"),
        backgroundColor: "rgba(53, 162, 235)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Change OI Bar Chart",
      },
    },
  };

  return <Bar options={options} data={data1} />;
};

export default BarChart;
