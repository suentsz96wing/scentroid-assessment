import { DateTimePickerProps } from "../type";
import { DatePicker } from "antd";
import { Grid, Typography } from "@mui/material";

export default function DateTimePickerInput(props: DateTimePickerProps) {
  return (
    <Grid>
      <Typography data-testid="date-label" textAlign="center">
        {props.label}
      </Typography>
      <DatePicker data-testid="date-picker" showTime value={props.date} onChange={props.onChange} />
    </Grid>
  );
}
