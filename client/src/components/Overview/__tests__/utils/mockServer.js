import { setupServer } from 'msw/node';
import { handlers } from '../../../Questions/test-utils/mockHandlers.js';

export const mswOverviewServer = setupServer(...handlers);