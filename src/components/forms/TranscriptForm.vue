<script setup lang="ts">
import { computed } from 'vue'

interface FormField {
  id: string
  label: string
  type: 'text' | 'password' | 'url' | 'select'
  placeholder?: string
  options?: { value: string; label: string }[]
}

interface Props {
  formId: string
  fields: FormField[]
  formData: Record<string, string>
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:formData': [data: Record<string, string>]
}>()

const updateField = (field: string, value: string) => {
  const newData = { ...props.formData, [field]: value }
  emit('update:formData', newData)
}
</script>

<template>
  <form class="form" @submit.prevent>
    <div v-for="field in fields" :key="field.id" class="form-group">
      <label :for="`${formId}-${field.id}`">{{ field.label }}</label>
      
      <template v-if="field.type === 'select'">
        <select 
          :id="`${formId}-${field.id}`"
          :value="formData[field.id]"
          @input="(e) => updateField(field.id, (e.target as HTMLSelectElement).value)"
        >
          <option 
            v-for="option in field.options" 
            :key="option.value" 
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </template>
      
      <template v-else>
        <input 
          :id="`${formId}-${field.id}`"
          :type="field.type"
          :placeholder="field.placeholder"
          :value="formData[field.id]"
          @input="(e) => updateField(field.id, (e.target as HTMLInputElement).value)"
        >
      </template>
    </div>

    <button type="submit" class="submit-button">
      Transcribe
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
}

.form-group input,
.form-group select {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: white;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
  ring: 2px solid rgba(59, 130, 246, 0.5);
}

.submit-button {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #2563eb;
}

@media (prefers-color-scheme: dark) {
  .form-group label {
    color: #9ca3af;
  }

  .form-group input,
  .form-group select {
    background-color: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }

  .form-group input::placeholder {
    color: #64748b;
  }

  .form-group input:focus,
  .form-group select:focus {
    border-color: #60a5fa;
  }
}
</style>