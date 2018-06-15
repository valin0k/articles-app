import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'

import {setDateFilter} from '../../AC/index'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.dateRange)
    this.props.setDateFilter(range)
  }

  render() {
    const { from, to } = this.props.dateRange
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

export default connect(({filters}) => ({
  dateRange: filters.dateRange
}), {setDateFilter})(DateRange)
