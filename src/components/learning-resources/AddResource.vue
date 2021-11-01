<template>
  <base-card>
    <form @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" ref="titleInput" name="title" type="text">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" ref="descInput" name="description" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" ref="linkInput" name="link" type="url">
      </div>
      <div>
        <base-button type="submit">
          Add Resource
        </base-button>
      </div>
    </form>
  </base-card>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="onDialogClose">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check all inputs and make sure ou enter at least a few characters into each input field.</p>
    </template>
    <template #actions>
      <base-button @click="onDialogClose">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    onSubmit() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredUrl.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    onDialogClose() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.25rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
