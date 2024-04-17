
<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormField } from '~/components/ui/form';
import FormControl from '~/components/ui/form/FormControl.vue';
import FormDescription from '~/components/ui/form/FormDescription.vue';
import FormItem from '~/components/ui/form/FormItem.vue';
import FormLabel from '@/components/ui/form/FormLabel.vue';
import FormMessage from '~/components/ui/form/FormMessage.vue';
import Input from '~/components/ui/input/Input.vue';
import { object } from 'zod';
import * as z from 'zod'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const supabase = useSupabaseClient()
let isLoading = false;

const signInWithPassword = async () => {
  isLoading = true;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: `${state.email}`,
    password: `${state.password}`
  })    
  if (error) console.log(error)

  localStorage.setItem('token', `${data.session?.access_token}`)
}

const schema = toTypedSchema(z.object({
  email: z.string().min(2, 'E-mail inválido').max(100),
  password: z.string()
    .min(8, 'Deve conter 8 caracteres')    
}))

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const state = reactive({
  email: undefined,
  password: undefined
})

const onSubmit = handleSubmit((values) => {
  console.log(values);
})


</script>

<template >
  <div class="m-5 mt-5 justify-middle align-middle flex flex-col">
    <Card>
      <CardHeader>
        <CardTitle>Logo</CardTitle>
        <CardTitle class="mt-5">Acessar a sua conta</CardTitle>
        <CardDescription>Entre no sistema para realizar o seu agendamento</CardDescription>
      </CardHeader>
      <CardContent>      
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
        {{  componentField }}
          <FormItem>
            <FormLabel>E-mail</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Digite seu e-mail" v-bind="componentField" v-model="state.email"/>
            </FormControl>
            <FormDescription>teste</FormDescription>
            <FormMessage></FormMessage>
          </FormItem>
        </FormField>
        
      <Button type="submit">sub</Button>
      </form>
        Card Content
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </div>
</template>