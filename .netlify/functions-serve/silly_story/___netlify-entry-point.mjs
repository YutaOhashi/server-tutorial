import * as bootstrap from './___netlify-bootstrap.mjs';import * as func from './silly_story.mjs';const funcModule = typeof func.default === "function" ? func : func.default;export const handler = bootstrap.getLambdaHandler(funcModule)