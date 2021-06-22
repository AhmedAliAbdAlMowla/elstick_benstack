const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;




server.listen(PORT, err=>console.log((err)?err: `server runing in ${process.env.NODE_ENV} mode in port ${PORT}`));