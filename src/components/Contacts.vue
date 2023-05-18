<template>
    <div id="contact" class="contacts container-x">
        <ContactsContent />
    </div>
</template>

<script>

export default {
    name: 'TheContacts',
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
  .contacts{
    max-width: 320px;
  }

}
</style>