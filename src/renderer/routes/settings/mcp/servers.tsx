import { createFileRoute } from '@tanstack/react-router'

import McpServersList from '@renderer/pages/settings/McpSettings/McpServersList'

export const Route = createFileRoute('/settings/mcp/servers')({
  component: McpServersList
})
