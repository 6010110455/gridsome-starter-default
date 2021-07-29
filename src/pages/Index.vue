<template>
  <Layout>


    <h1>ด้านหลังนี้คือข้อมูลที่ดึงมาจาก GraphCMS</h1>

    <p class="home-links" v-if="$page.gcms">
      <g-link
        v-for="product in $page.gcms.products"
        :key="product.slug"
        class="nav__link"
        :to="'product/' + product.slug"
        >{{ product.name }}</g-link
      >
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<page-query>
  {
    gcms {
      products {
        name
        slug
      }
    }
  }
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>