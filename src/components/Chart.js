import React from 'react'

// export default class Chart extends React.Component{
//     render (){
        // return(
            // <div>
    var PieChart = require("react-chartjs").Pie;

     var MyComponent = React.createClass({
  render: function() {
    return <PieChart data={chartData} options={chartOptions}/>
  }
});

export default MyComponent;
            // </div>
        // )
    // }

// }