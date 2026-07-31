import { createFileRoute } from '@tanstack/react-router'

import McpSettings from '@renderer/pages/settings/McpSettings/McpSettings'

export const Route = createFileRoute('/settings/mcp/settings/$serverId')({
  component: McpSettings
})
