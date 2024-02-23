import  { Component } from 'react';
import { DateRangePicker } from 'react-date-range';

class Datepicker extends Component {
  state = {
    selectedStartDate: new Date(),
    selectedEndDate: new Date(),
  };

  handleSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    this.setState({
      selectedStartDate: startDate,
      selectedEndDate: endDate,
    });
  };

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const selectionRange = {
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      key: 'selection',  
    };
  
    return (
      <div>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={this.handleSelect}
        />
      </div>
    );
  }
}

export default Datepicker;
