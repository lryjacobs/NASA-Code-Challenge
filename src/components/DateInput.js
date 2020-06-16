import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class DateInput extends Component {
  state = {
    selectedDate: this.props.selected || new Date()
  }

  handleChangeDate = date => {
    this.setState({
      selectedDate: date 
    })

    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  generateRandom = () => {
    const date1 = new Date('1995-06-16').getTime()
    const date2 = new Date().getTime()

    const randomDate = new Date(Math.random() * (date2 - date1) + date1)
    this.handleChangeDate(randomDate)
  }

  render() {
    return (
      <div className="text-center">
        <p>
          <em>Pick a Date</em>
        </p>
        <DatePicker
          className="form-control"
          selected={this.state.selectedDate}
          onChange={this.handleChangeDate}
        />
        <div className="random-button-container">
          <button
            onClick={this.generateRandom}
            className="btn btn-primary"
          >
            Random Date
          </button>
        </div>
      </div>
    )
  }
}
export default DateInput
