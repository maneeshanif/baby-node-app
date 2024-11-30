# baby-node-app 
### ok i use auto canon to check my api status that how much request my api can handle in 30 sec and i use morgan to log my api request and response in console 

C:\Users\USER\Desktop\web code\.vscode\baby-node-app\test>node test
Running 30s test @ http://localhost:3000
10 connections


┌─────────┬──────┬──────┬───────┬───────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼───────┼─────────┼─────────┼───────┤
│ Latency │ 3 ms │ 4 ms │ 9 ms  │ 10 ms │ 4.66 ms │ 1.89 ms │ 67 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴─────────┴───────┘
┌───────────┬────────┬────────┬────────┬────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 1,073  │ 1,073  │ 1,965  │ 2,193  │ 1,938.77 │ 198.89  │ 1,073  │
├───────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 266 kB │ 266 kB │ 487 kB │ 544 kB │ 481 kB   │ 49.3 kB │ 266 kB │
└───────────┴────────┴────────┴────────┴────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 30

58k requests in 30.04s, 14.4 MB read
Benchmark finished



so above one is my api status that how much request my api can handle in 30 sec and i use morgan to log my api request and response in console so here is a little glance of using morgan :

/////////////////////////////////////////////////

GET / 200 0.093 ms - 20
GET / 200 0.161 ms - 20
GET / 200 0.155 ms - 20
GET / 200 0.102 ms - 20
GET / 200 0.109 ms - 20
GET / 200 0.101 ms - 20
GET / 200 0.105 ms - 20
GET / 200 0.098 ms - 20
GET / 200 0.125 ms - 20
GET / 200 0.101 ms - 20
GET / 200 0.094 ms - 20
GET / 200 0.095 ms - 20
GET / 200 0.090 ms - 20
GET / 200 0.104 ms - 20
GET / 200 0.134 ms - 20
GET / 200 0.135 ms - 20
GET / 200 0.115 ms - 20
GET / 200 0.131 ms - 20
GET / 200 0.144 ms - 20
GET / 200 0.102 ms - 20
GET / 200 0.095 ms - 20
GET / 200 0.153 ms - 20
GET / 200 0.099 ms - 20
GET / 200 0.114 ms - 20
GET / 200 0.100 ms - 20
GET / 200 0.100 ms - 20
GET / 200 0.096 ms - 20
GET / 200 0.095 ms - 20
GET / 200 0.108 ms - 20
GET / 200 0.120 ms - 20
GET / 200 0.085 ms - 20
GET / 200 0.082 ms - 20
GET / 200 0.100 ms - 20
GET / 200 0.135 ms - 20
GET / 200 0.133 ms - 20
GET / 200 0.094 ms - 20
GET / 200 0.111 ms - 20
GET / 200 0.470 ms - 20 

////////////////////////////////////////////////////

# and so on 


## conclusion :-
      `` My this simple api can handle 58k request in 30 sec ``
       `` and during that time period it share 14.4 MB data ``


