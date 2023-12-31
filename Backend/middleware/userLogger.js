const userLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip;
  const userAgent = req.get("User-Agent");

  console.log(
    `New request:
Date and time: ${timestamp}
IP: ${ip}
Method: ${method}
URL: ${url} - 
User-Agent: ${userAgent}`
  );

  next();
};

module.exports = userLogger;
