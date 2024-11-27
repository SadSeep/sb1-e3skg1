import TranscriptsView from '../views/TranscriptsView.vue'
import RecordingsView from '../views/RecordingsView.vue'

export interface RouteConfig {
  path: string
  name: string
  label: string
}

export const routes: RouteConfig[] = [
  {
    path: '/transcripts',
    name: 'transcripts',
    label: 'Transcripts'
  },
  {
    path: '/recordings',
    name: 'recordings',
    label: 'Recordings'
  }
]

export const routeComponents = {
  transcripts: TranscriptsView,
  recordings: RecordingsView
}