import { Dayjs } from "dayjs";
import React from "react";
import { dummyData } from "../constant";

export function useStockDatas(startTime?: Dayjs, endTime?: Dayjs) {
  const datas = React.useMemo(() => {
    const tempDatas = dummyData.map((el) => [el[0], el[1] * 100]);
    if (startTime && endTime) {
      return tempDatas.filter(([date, value]) => {
        if (
          startTime &&
          date >= startTime?.unix() * 1000 &&
          endTime &&
          date <= endTime?.unix() * 1000
        ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return tempDatas;
    }
  }, [startTime, endTime]);

  const numDatas = React.useMemo(() => {
    return datas.map((el) => el[1]);
  }, [datas]);

  const average = React.useMemo(() => {
    const length = numDatas.length;
    const total = numDatas.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return total / length;
  }, [numDatas]);

  const max = React.useMemo(() => {
    return Math.max(...numDatas);
  }, [numDatas]);

  const min = React.useMemo(() => {
    return Math.min(...numDatas);
  }, [numDatas]);

  return {
    datas,
    average,
    max,
    min,
  };
}
