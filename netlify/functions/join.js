exports.handler = async function(event, context) {
  const data = JSON.parse(event.body || "{}");
  console.log("Join signal received:", data);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Signal received", data }),
  };
};

