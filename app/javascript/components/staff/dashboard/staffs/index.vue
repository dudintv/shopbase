<template lang="pug">
  .container.mx-auto.flex
    StaffNewForm
    StaffList(:staffs="staffs")
</template>

<script>
import StaffNewForm from './form'
import StaffList from './list'

export default {
  components: {
    StaffNewForm,
    StaffList,
  },
  props: ['staffs']
}
</script>

<style scoped>
</style>
