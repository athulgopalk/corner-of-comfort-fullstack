import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "your auth0 id",
  tokenSigningAlg: "RS256",
});

export default jwtCheck