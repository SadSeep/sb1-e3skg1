<script setup lang="ts">
import { ref } from 'vue'
import TabList from '../components/tabs/TabList.vue'
import TabPanel from '../components/tabs/TabPanel.vue'
import TranscriptForm from '../components/forms/TranscriptForm.vue'

const tabs = ['OpenAI', 'Google', 'Labs']
const activeTab = ref<string | null>('OpenAI')

const formConfigs = {
  OpenAI: {
    fields: [
      {
        id: 'apiKey',
        label: 'API Key',
        type: 'password' as const,
        placeholder: 'Enter your OpenAI API key'
      },
      {
        id: 'model',
        label: 'Model',
        type: 'select' as const,
        options: [{ value: 'whisper-1', label: 'Whisper-1' }]
      },
      {
        id: 'language',
        label: 'Language',
        type: 'select' as const,
        options: [
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' }
        ]
      }
    ]
  },
  Google: {
    fields: [
      {
        id: 'apiKey',
        label: 'API Key',
        type: 'password' as const,
        placeholder: 'Enter your Google Cloud API key'
      },
      {
        id: 'language',
        label: 'Language',
        type: 'select' as const,
        options: [
          { value: 'en-US', label: 'English (US)' },
          { value: 'es-ES', label: 'Spanish (Spain)' },
          { value: 'fr-FR', label: 'French (France)' },
          { value: 'de-DE', label: 'German (Germany)' }
        ]
      }
    ]
  },
  Labs: {
    fields: [
      {
        id: 'endpoint',
        label: 'API Endpoint',
        type: 'url' as const,
        placeholder: 'Enter the API endpoint'
      },
      {
        id: 'apiKey',
        label: 'API Key',
        type: 'password' as const,
        placeholder: 'Enter your API key'
      },
      {
        id: 'model',
        label: 'Model',
        type: 'select' as const,
        options: [
          { value: 'default', label: 'Default Model' },
          { value: 'enhanced', label: 'Enhanced Model' },
          { value: 'fast', label: 'Fast Model' }
        ]
      }
    ]
  }
}

const formData = ref<Record<string, Record<string, string>>>({
  OpenAI: { apiKey: '', model: 'whisper-1', language: 'en' },
  Google: { apiKey: '', language: 'en-US' },
  Labs: { endpoint: '', apiKey: '', model: 'default' }
})

const handleSubmit = () => {
  if (activeTab.value) {
    console.log('Form submitted:', formData.value[activeTab.value])
  }
}
</script>

<template>
  <div class="transcripts">
    <TabList
      :tabs="tabs"
      v-model:activeTab="activeTab"
    />

    <TabPanel 
      v-for="tab in tabs" 
      :key="tab"
      :tabId="tab"
      :activeTab="activeTab"
    >
      <TranscriptForm
        :formId="tab.toLowerCase()"
        :fields="formConfigs[tab as keyof typeof formConfigs].fields"
        v-model:formData="formData[tab]"
        @submit="handleSubmit"
      />
    </TabPanel>
  </div>
</template>

<style scoped>
.transcripts {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>