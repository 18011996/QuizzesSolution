const axios = require('axios');


const getPeopleMediumHeight = async()=>{
  let next = 'https://swapi.dev/api/people'
  let heights = []
  let total = 0;
  let count = 0;
  while(next){
    const result = await axios.get(next)
    const data = result.data
    next = data.next;
    const results = data.results
    for (entry of results) {
      if (entry.height !== "unknown") {
        count += 1;
        total += parseInt(entry.height)
        heights.push(parseInt(entry.height));
      }
    }
  }

  // const medium = heights.reduce((prevHeight, height) => height + prevHeight, 0)/heights.length;
  console.log("The people height medium is:", total/parseInt(count), count), 

  console.log("==========================")
  console.log("Or using for loop");
  
  // let total = 0;
  // for (let i = 0; i < heights.length; i++) {
  //   total += heights[i];
  // }

  // console.log("The people height medium is:", total/heights.length)



}
  

getPeopleMediumHeight();
  
