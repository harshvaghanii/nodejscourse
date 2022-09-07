const fs = require("fs");

const routeHandler = (req, res) => {
  res.setHeader("content-type", "text/html");
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Nodejs webpage</title></head>");
    res.write("<body>");
    res.write(
      `<form action ="/sendmessage" method="POST"> 
            <input type="text" name="message" placeholder="Enter your message here!">
            <button type ="submit">Send Message</button>
          </form>`
    );
    res.write("</body>");
    res.write("</html>");
  } else if (url === "/about") {
    res.write(`<h2>This is the about page!</h2>`);
  } else if (url === "/sendmessage" && method == "POST") {
    let formBody = [];
    req.on("data", (chunk) => {
      formBody.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(formBody).toString();
      fs.writeFileSync("message.txt", parsedBody.split("=")[1]);
    });

    // Writing the headers using shorthand

    res.writeHead(302, {
      location: "/",
    });
  } else {
    res.write(`<h1>Error in the URL!</h1>`);
  }
  res.end();
};

module.exports = routeHandler;
