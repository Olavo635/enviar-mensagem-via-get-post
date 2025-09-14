exports.handler = async (event, context) => {
  let msg = "";

  // Se for GET, pega da query
  if (event.httpMethod === "GET") {
    msg = event.queryStringParameters.msg || "nenhuma mensagem recebida";
  }

  // Se for POST, pega do body (JSON)
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body || "{}");
      msg = body.msg || "nenhuma mensagem recebida";
    } catch (e) {
      msg = "erro ao parsear body";
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ recebido: msg })
  };
};
