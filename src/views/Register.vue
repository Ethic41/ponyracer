/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 20-December-2020 9:21 PM About: I will tell u later */
<template>
  <div>
    <Alert v-if="registrationFailed" class="mt-4" @dismissed="registrationFailed = false" dismissible>Try again with another login</Alert>
    <Form @submit="register($event)" v-slot="{ meta: FormMeta }" :initialValues="initialValue">
      <Field name="login" rules="required|min:3" v-slot="{ meta, field }">
        <div class="form-group">
          <label for="login-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">login</label>
          <input id="login-input" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
          <ErrorMessage name="login" class="invalid-feedback" />
        </div>
      </Field>
      <Field name="password" rules="required" v-slot="{ meta, field }">
        <div class="form-group">
          <label for="password-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Password</label>
          <input
            id="password-input"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
            type="password"
          />
          <ErrorMessage name="password" class="invalid-feedback" />
        </div>
      </Field>
      <Field name="confirmPassword" rules="required|confirmed:@password" :label="'password confirmation'" v-slot="{ meta, field }">
        <div class="form-group">
          <label for="password-confirm-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Password confirmation</label>
          <input
            id="password-confirm-input"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
            type="password"
          />
          <ErrorMessage name="confirmPassword" class="invalid-feedback" />
        </div>
      </Field>
      <Field name="birthYear" rules="required|min_value:1900|isOldEnough" :label="'birth year'" v-slot="{ meta, field }">
        <div class="form-group">
          <label for="birthYear-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">birthYear</label>
          <input
            id="birthYear-input"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
            type="number"
          />
          <ErrorMessage name="birthYear" class="invalid-feedback" />
        </div>
      </Field>
      <button class="btn btn-primary" :disabled="!FormMeta.valid">Let's go!</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserModel } from '@/models/UserModel';
import { useUserService } from '@/composables/UserService';
import { UserResponseModel } from '@/models/UserResponseModel';
import { useRouterService } from '@/composables/RouterService';
import { Field, Form, ErrorMessage } from 'vee-validate';
import '@/forms';

export default defineComponent({
  name: 'Register',

  components: {
    Form,
    Field,
    ErrorMessage
  },

  setup() {
    const initialValue = { birthYear: new Date().getFullYear() - 18 };
    const userService = useUserService();
    const userRegData = ref<UserResponseModel | null>(null);
    const routerService = useRouterService();
    const registrationFailed = ref<boolean>(false);

    async function register(registration: UserModel) {
      try {
        userRegData.value = await userService.register(registration);
        if (userRegData.value) {
          await routerService.goto('home');
        }
      } catch (err) {
        registrationFailed.value = true;
      }
    }

    return {
      register,
      initialValue,
      registrationFailed
    };
  }
});
</script>

<style scoped></style>
