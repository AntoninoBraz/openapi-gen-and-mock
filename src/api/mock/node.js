import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import { handlers as customHandlers } from './custom-handlers/custom-handlers'
export const server = setupServer(...[...customHandlers, ...handlers])