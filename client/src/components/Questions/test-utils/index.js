import { setupServer } from 'msw/node';
import { handlers } from "./mockHandlers.js";

export const mswQuestionsServer = setupServer(...handlers);