import { setupWorker } from 'msw/browser'
import { handlers } from './auto-gen/handlers'
import { handlers as customHandlers } from './custom-handlers/custom-handlers'
export const worker = setupWorker(...[...customHandlers, ...handlers])