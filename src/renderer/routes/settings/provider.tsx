import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'

import { ProviderSettingsPage } from '@renderer/pages/settings/ProviderSettings'

const providerSettingsSearchSchema = z.object({
  addProviderData: z.string().optional(),
  filter: z.string().optional(),
  id: z.string().optional()
})

export const Route = createFileRoute('/settings/provider')({
  validateSearch: (search) => providerSettingsSearchSchema.parse(search),
  component: ProviderSettingsPage
})
