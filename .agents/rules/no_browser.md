# Rule: Never Open Browser

**MANDATORY DIRECTIVE FOR ALL ASSISTANTS & SUBAGENTS:**

1. **NEVER open the browser.**
2. **NEVER call the `browser_subagent` tool.**
3. **NEVER attempt automated browser visits, clicks, screenshots, or page reads via browser tools.**
4. All validations, health checks, route verifications, and audits must be strictly conducted via terminal/CLI commands:
   - `npm run build`
   - `npm run lint`
   - `curl`
   - Unit tests / script-based checks
