import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useStockDatas } from "../hooks/useStockDatas";
import { StockChartProps } from "../type";

export function StockChart(props: StockChartProps) {
  const stockDatas = useStockDatas(props.startTime, props.endTime);

  const state = {
    series: [
      {
        name: "TSLA",
        data: stockDatas.datas,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      annotations: {
        yaxis: [
          {
            y: stockDatas.average,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "Average",
            },
          },
          {
            y: stockDatas.min,
            borderColor: "#FF0000",
            label: {
              borderColor: "#FF0000",
              style: {
                color: "#fff",
                background: "#FF0000",
              },
              text: "Min",
            },
          },
          {
            y: stockDatas.max,
            borderColor: "#9933FF",
            label: {
              borderColor: "#9933FF",
              style: {
                color: "#fff",
                background: "#9933FF",
              },
              text: "Max",
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
    } as ApexOptions,
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={450}
        width={600}
      />
    </div>
  );
}
