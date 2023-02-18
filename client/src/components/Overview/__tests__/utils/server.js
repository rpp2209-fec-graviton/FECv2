// =============================================
//             TO-DO: MSW Research
// =============================================
import { setupServer } from 'msw/node';
import { handlers } from './mockHandlers.js';

export const mswOverviewServer = setupServer(...handlers);