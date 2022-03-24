

window.onload = function(){

    const salesData = [
        {"year": 2014, "sales": 1003},
        {"year": 2015, "sales": 734},
        {"year": 2016, "sales": 1221},
        {"year": 2017, "sales": 1341},
        {"year": 2018, "sales": 1423},
        {"year": 2019, "sales": 1234},
        {"year": 2020, "sales": 1434},
        {"year": 2021, "sales": 1456},
        {"year": 2022, "sales": 1859},

    ];

    const width =800;
    const height =500;
    const margin = 50;
    const chartWidth = width - 2*margin; // 700
    const chartHeight = height -2*margin; // 400

    const colorScale = d3.scaleLinear()
                        .domain([734,1859])
                        .range(['yellow','green'])

    const xScale = d3.scaleBand() //discrete values
                        .domain(salesData.map( (data) => data.year))
                        .range([0,chartWidth])
                        .padding(0.5)
    
    const yScale = d3.scaleLinear() //continues
        .domain([0,2200])
        .range([chartHeight,0])

    let svg = d3.select('body')
                .append('svg')
                    .attr('width', width)
                    .attr('height', height);

    svg.append('text')
        .attr('x', width/2)
        .attr('y', height-10 )
        .attr("text-anchor",'middle')
        .text('Sales by Year')

    let graph = svg.append('g')
                    .attr('transform', `translate(${margin},${margin})`);

    // add x axis
    graph.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(xScale));
    
    //add y axis
    graph.append('g')
            .call(d3.axisLeft(yScale));

    let rectangles = graph.selectAll('rect')
                        .data(salesData)
                        .enter()
                            .append('rect')
                                .attr('x', (data) => xScale(data.year))
                                .attr('y', (data) => yScale(data.sales))
                                .attr("width", xScale.bandwidth())
                                .attr("height", (data) => (chartHeight - yScale(data.sales)))
                                .attr('fill',(data) => colorScale(data.sales))



};