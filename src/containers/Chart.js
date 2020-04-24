import React from 'react';
import * as d3 from 'd3';
import { Card, Button } from 'react-bootstrap';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{skill: "Stark", value: 10},{skill: "Lannister", value: 20},{skill: "Tyrell", value: 30},{skill: "Targaryen", value: 40}],
            yAxisAttribute: "skill",
            xAxisAttribute: "value",
            width: 1000,
            height: 500,
        }
        this.chartRef = React.createRef();
        this.drawChart = this.drawChart.bind(this);

       
    }


     btnBack = () => {
        this.props.history.push("./")
    }

    drawChart() {
        let margin = {top: 20, right: 30, bottom: 40, left: 90},
                    width = this.state.width - margin.left - margin.right,
                    height = this.state.height - margin.top - margin.bottom;
        // append the svg object to the body of the page
        let svg = d3.select(this.refs.myDiv)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        // Add X axis
        let x = d3.scaleLinear()
                .domain([0, 50])
                .range([width - 600, 0]);
        // svg.append("g")
        //         .attr("transform", "translate(0," + height + ")")
        //         .attr('class','axis x')
        //         .call(d3.axisBottom(x))
        //         .selectAll("text")
        //         .attr("transform", "translate(-10,0)rotate(-45)")
        //         .style("text-anchor", "end");
        
        svg.append("g")

                .attr('class','axis x')
                .call(d3.axisLeft(x))
                .selectAll("text")
                .attr("transform", "translate(0," + 0  + ")")
                .attr("transform", "translate(0,0)rotate(0)")
                .style("text-anchor", "end");
                

        // Add Y axis
        let y = d3.scaleBand()
                .range([ 0, height ])
                .domain(this.state.data.map((d) =>  d[this.state.yAxisAttribute]))
                .padding(.1);
        // svg.append("g")
        //         .attr('class','axis y')
        //         .call(d3.axisLeft(y))
        //         .selectAll("text")
        //         .attr("dy", null)

        svg.append("g")
        .attr("transform", "translate(0," + width  + ")")
        .attr('class','axis y')
        .call(d3.axisBottom(y))
        .attr("transform", "translate(0,280)rotate(0)")
        .selectAll("text")
        .style("text-anchor", "end");

        // Add Bars
        
        svg.selectAll("myRect")
                .data(this.state.data)
                .enter()
                .append("rect")
                .on('mouseover', function(){
                    d3.select(this).style('opacity', 0.5)
                 })
                .on('mouseout', function(){
                    d3.select(this).style('opacity', 1)
                 })
                // .attr("x", x(0) )
                // .attr("y", (d) => y(d[this.state.yAxisAttribute]))

               

                .attr("x", (d) => y(d[this.state.yAxisAttribute]) )
                .attr("y", (d, i) => x(d[this.state.xAxisAttribute]))
                .attr("width", 0)
                // .attr("height", y.bandwidth() -10 )
                // .attr("fill", "#DF337D")
                // .transition(d3.transition().duration(1000))
                // .attr("width", (d) => x(d[this.state.xAxisAttribute]))
                .attr("height",(d, i) => x(0) - x(d[this.state.xAxisAttribute]))
                // .attr("fill", "#DF337D")
                .attr("fill", "#61dafb")
                .transition(d3.transition().duration(1000))
                .attr("width", y.bandwidth() -10)
            
                console.log('x: ',(this.state.data[this.state.xAxisAttribute]))
                console.log('y: ',10)
                console.log('h: ',(d) => x(0) - x(d[this.state.xAxisAttribute]))
                console.log('w: ', y.bandwidth() -10)    
        }

        componentDidMount() {
            this.drawChart();
           
        }

        render() {
            return (<div className="App-header">
                 <div><Button onClick={()=> this.btnBack()}>Back</Button></div>
                 <div ref='myDiv'></div>
                 </div>)
          }
}

export default Chart;