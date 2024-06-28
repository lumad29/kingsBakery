<script setup>

const model = ref(null)

const products = [
    {
        id: 'breads',
        name: 'Breads',
        src: '/assets/bread-group.jpg',
        text: 'Our bread is baked fresh every morning using the best ingredients. We have everything from classic sourdough to unique artisan loaves. Each slice is tasty and wholesome, perfect for sandwiches, meals, or just with butter. Enjoy the homemade goodness in every bite',
    },
    {
        id: 'pastries',
        name: 'Pastries',
        src: '/assets/croissant.jpg',
        text: 'Step into our bakery wonderland, where each pastry brings a little piece of joy. Whether you adore flaky croissants, filled danishes, or warm cinnamon rolls, our menu offers something to satisfy every craving'
    },
    {
        id: 'cookies',
        name: 'Cookies',
        src: '/assets/cookies.jpg',
        text: 'Welcome to our cozy corner of homemade delights! Our cookies are crafted with love and baked to perfection, just like grandma used to make. Dive into a world of crunchy edges, gooey centers, and flavors that hug your taste buds. Whether you are a chocolate chip fanatic or oatmeal raisin enthusiast, there is a treat here to brighten your day.'
    },
    {
        id: 'cake',
        name: 'Cakes and Pies',
        src: '/assets/cake.jpg',
        text: 'Discover our irresistible cakes and pies, each crafted with a blend of expertise and flavor. From rich, velvety cakes to flaky, fruit-packed pies, every slice is a delightful treat for any moment worth celebrating.'
    },
    {
        id: 'special',
        name: 'Gluten-Free & Vegan',
        src: '/assets/gluten-free.jpg',
        text: 'Explore our delicious gluten-free and vegan delights, where flavor meets inclusivity. Dive into a menu that celebrates both health-conscious choices and vibrant flavors, ensuring every bite is a delightful experience for all.'
    },
    {
        id: 'drinks',
        name: 'Drinks',
        src: '/assets/drinks.jpg',
        text: 'Discover the perfect cup of coffee at our bakery, where we brew each blend to perfection. Our coffee selection is designed to complement our delicious baked goods. We also feature a variety of other refreshing drinks to enjoy. '
    }
]
</script>

<template>
    <ProductsSlide :products v-model="model" />
</template>
