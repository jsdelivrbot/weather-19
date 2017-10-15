import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

    constructor() {
        super()
        this.renderWeather = this.renderWeather.bind(this)
    }
    
    renderWeather() {
        return (
            <tr>
                <td>
                  
                </td>
            </tr>
        )
    }
    
    render () {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.weather.map( this.renderWeather ) }
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (weather) => {
    return { weather }
} 

export default connect(mapStateToProps)(WeatherList)