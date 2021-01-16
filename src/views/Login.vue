/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 25-December-2020 6:27 AM About: I will tell u later */

<template>
  <div>
    <h1>Log In</h1>
    <Alert v-if="authenticationFailed" @dismissed="authenticationFailed = false" dismissible>Nope, try again</Alert>
    <Form @submit="authenticate($event)" v-slot="{ meta: FormMeta }">
      <Field name="login" rules="required" v-slot="{ meta, field }">
        <div class="form-group">
          <label for="login-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Login</label>
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
      <button class="btn btn-primary" :disabled="!FormMeta.valid">Login</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import '@/forms';
import { useUserService } from '@/composables/UserService';
import { UserLoginModel } from '@/models/UserModel';
import { UserResponseModel } from '@/models/UserResponseModel';
import { useRouterService } from '@/composables/RouterService';

export default defineComponent({
  name: 'Login',

  components: {
    Form,
    Field,
    ErrorMessage
  },

  setup() {
    const userService = useUserService();
    const userLoginData = ref<UserResponseModel | null>(null);
    const routerService = useRouterService();
    const authenticationFailed = ref<boolean>(false);

    async function authenticate(login: UserLoginModel) {
      try {
        userLoginData.value = await userService.authenticate(login);
        if (userLoginData.value) {
          await routerService.goto('home');
        }
      } catch (e) {
        authenticationFailed.value = true;
      }
    }

    return {
      authenticate,
      authenticationFailed
    };
  }
});
</script>

<style scoped></style>
