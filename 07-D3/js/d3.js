

window.onload = function(){

    const salesData = [
        {"year": 2014, "sales": 1203},
        {"year": 2015, "sales": 734},
        {"year": 2016, "sales": 1221},
        {"year": 2017, "sales": 1341},
        {"year": 2018, "sales": 1423},
        {"year": 2019, "sales": 1234},
        {"year": 2020, "sales": 1534},
        {"year": 2021, "sales": 1456},
        {"year": 2022, "sales": 1559},

    ];

    const width =800;
    const height =500;
    const margin = 50;
    const chartWidth = width - 2*margin; // 700
    const chartHeight = height -2*margin; // 400

    const xScale = d3.scaleBand() //discrete values
                        .domain(salesData.map( (data) => data.year))
                        .range([0,chartWidth])
                        .padding(0.5)
    
    const yScale = d3.scaleLinear() //continues
        .domain([0,2200])
        .range([0,chartHeight])

    let svg = d3.select('body')
                .append('svg')
                    .attr('width', width)
                    .attr('height', height);

    let graph = svg.append('g')
                    .attr('transform', `translate(${margin},${margin})`);

    let rectangles = graph.selectAll('rect')
                        .data(salesData)
                        .enter()
                            .append('rect')
                                .attr('x', (data) => xScale(data.year))
                                .attr('y', (data) => yScale(chartHeight))
                                .attr("width", 10)
                                .attr("height", 100)
                                



};