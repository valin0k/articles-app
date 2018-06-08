import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  }

  state = this.getInitialState()

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    }
  }
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick = () => {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
    )
  }
}

export default DateRange
