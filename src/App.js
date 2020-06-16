import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import DateInput from './components/DateInput'
import PodContent from './components/PodContent'
import './App.css'

class App extends Component {
  state = {
    pod: null,
    loading: false
  }

  componentDidMount() {
    this.fetchPod(new Date());
  }

  fetchPod = async (date) => {
    const formattedDate = moment(date).add(-1, 'day').format('YYYY-MM-DD')
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${formattedDate}`

    try {
      const response = await axios.get(API_URL)
      console.log(response.data)
      this.setState({ pod: response.data })
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeDate = (date) => {
    this.fetchPod(date);
  }

  render() {
    const headerStyle = {
      textShadow: '1px 2px #282794',
      textAlign: 'center'
    }
    return (
      <div className="container">
        <div className="card card-body">
          <h2 style={headerStyle} >NASA's Picture of the Day</h2>
          <DateInput onChange={this.handleChangeDate} selected={new Date()} />
          <PodContent pod={this.state.pod} />
        </div>
      </div>
    )
  }
}
export default App
