import { paraglideMiddleware } from './paraglide/server.js'
import handler from '@tanstack/react-start/server-entry'

export default {
  fetch(req: Request): Promise<Response> {
    // Router rewrite handles URL localization, keep original request for Start.
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
