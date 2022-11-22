import { Grid, Typography } from "@mui/material";
import DateTimePickerInput from "./components/DateTimePickerInput";
import { StockChart } from "./components/StockChart";
import { useDatePeriodFilter } from "./hooks/useDatePeriodFilter";
import TimeZoneInput from "./components/TimeZoneInput";

function App() {
  const dateMethods = useDatePeriodFilter();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid>
        <Typography fontSize={26}>TSLA STOCK</Typography>
      </Grid>
      <Grid container justifyContent="center" marginY={2} alignItems="center">
        <Grid>
          <DateTimePickerInput
            data-testid="startDate"
            label="Start Date"
            date={dateMethods.startDate}
            timezone={dateMethods.timezone}
            onChange={dateMethods.handleStartDateChange}
          />
        </Grid>
        <Grid>
          <DateTimePickerInput
            label="End Date"
            date={dateMethods.endDate}
            timezone={dateMethods.timezone}
            onChange={dateMethods.handleEndDateChange}
          />
        </Grid>
        <Grid>
          <TimeZoneInput
            value={dateMethods.timezone}
            onChange={dateMethods.handleTimezoneChange}
          />
        </Grid>
      </Grid>
      <Grid>
        <StockChart
          startTime={dateMethods.startDate}
          endTime={dateMethods.endDate}
        />
      </Grid>
    </Grid>
  );
}

export default App;
