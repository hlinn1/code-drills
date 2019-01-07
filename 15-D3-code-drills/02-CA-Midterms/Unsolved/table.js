var ballots = [{
        prop: 1,
        description: "Issues $4 billion in bonds for housing programs and veterans' home loans",
        result: "passed"
    },
    {
        prop: 2,
        description: "Authorizes state to use revenue from millionaire's tax for $2 billion in bonds for homelessness prevention housing",
        result: "passed"
    },
    {
        prop: 3,
        description: "Issues $8.877 billion in bonds for water-related infrastructure and environmental projects",
        result: "failed"
    },
    {
        prop: 4,
        description: "Issues $1.5 billion in bonds for children's hospitals",
        result: "passed"
    },
    {
        prop: 5,
        description: "Revises process for homebuyers who are age 55 or older or severely disabled to transfer their tax assessments",
        result: "failed"
    },
    {
        prop: 6,
        description: "Repeals 2017's fuel tax and vehicle fee increases and requires public vote on future increases",
        result: "failed"
    },
    {
        prop: 7,
        description: "Authorizes legislature to provide for permanent daylight saving time if federal government allows",
        result: "passed"
    },
    {
        prop: 8,
        description: "Requires dialysis clinics to issue refunds for revenue above a certain amount",
        result: "failed"
    },
    {
        prop: 10,
        description: "Allows local governments to regulate rent on any type of housing",
        result: "failed"
    },
    {
        prop: 11,
        description: "Allow ambulance providers to require workers to remain on call during breaks paid",
        result: "passed"
    },
    {
        prop: 12,
        description: "Bans sale of meat from animals confined in spaces below specific sizes",
        result: "passed"
    }
];

// create a table row for each object within `ballots`
// Place a green check mark in the last column for ballots that passed, and a red x mark for ones that failed
var tbody = d3.select('tbody');

// iterate through the data array
ballots.forEach(prop => {
    // append a table row for each object
    var row = tbody.append('tr');

    // extract data from object and assign it to variables
    var propNumber = prop.prop;
    var description = prop.description;
    var result = prop.result;

    // append one cell for each variable
    row.append('td').text(propNumber);
    row.append('td').text(description);

    // conditional statement for result column
    if (result === 'passed') {
        row.append('td').html('<i class="fas fa-check-circle fa-lg" style="color:Green"></i>');
    }

    else {
        row.append('td').html('<i class="fas fa-times-circle fa-lg" style="color:Tomato"></i>');
    }
});
// create an event listener that triggers when the jumbotron is clicked. 
//The triggered event should prompt the user with an alert reading "You better have voted!"
var jumbotron = d3.select('.jumbotron')

jumbotron.on('click', function() {
    alert('You better have voted!');
});