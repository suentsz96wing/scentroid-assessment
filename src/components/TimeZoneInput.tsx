import { Typography } from "@mui/material";
import { Select } from "antd";
import { timezoneList } from "../constant";
import { TimeZoneInputProps } from "../type";

export default function TimeZoneInput(props: TimeZoneInputProps) {
  return (
    <>
      <Typography data-testid="timezone-label" textAlign="center">
        TimeZone
      </Typography>
      <Select
        data-testid="timezone-dropdown"
        value={props.value}
        onChange={props.onChange}
        options={timezoneList}
      />
    </>
  );
}
