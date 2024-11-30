/*************  ✨ Codeium Command ⭐  *************/
const autocannon = require('autocannon');

function startBench() {
  const url = 'http://localhost:3000'; // replace with your API URL

  const instance = autocannon({
    url,
    duration: 30 // duration in seconds
  });

  autocannon.track(instance);

  instance.on('done', () => {
    console.log('Benchmark finished');
  });
}

startBench();
/******  bfa6f3cf-90ef-4525-8646-8cd58c569336  *******/