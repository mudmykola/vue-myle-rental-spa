<template>
    <div class="burger-menu  w-280 text-default flex justify-between items-center">
        <div class="burger-menu__logo">
            <img :src="logo.logoImg" :alt="logo.logoAlt">
        </div>
        <Button :url="burgerBtnUrl" :text="burgerBtnText" :font-size="'12px'" />
        <div class="burger-menu__btn" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="burger-menu__nav z-20" :class="{ 'active': isActive }">

            <ul>
                <li v-for="item in links" :key="item.id">
                    <a :href="item.url">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Button from '@/components/UI/Button';
export default {
    name: 'BurgerMenu',
    components: {
        Button,
    },
    data() {
        return {
            isActive: false,
            links: [
                {
                    id: 1,
                    name: 'Industries',
                    url: '/'
                },
                {
                    id: 2,
                    name: 'Technology',
                    url: '/'
                },
                {
                    id: 3,
                    name: 'Driver weith Myle',
                    url: '/'
                },
                {
                    id: 4,
                    name: 'Blog',
                    url: '/'
                },
                {
                    id: 5,
                    name: 'Contact',
                    url: '/'
                }
            ]
        };
    },
    props: {
        logo: {
            type: Object,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        burgerBtnText: {
            type: String,
            required: true,
            default: 'Contact Sales',
        },
        burgerBtnUrl: {
            type: String,
            required: true,
            default: 'https://google.com',
        },
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
    }

};
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.burger-menu {
    position: relative;
    display: none;
    align-items: center;
    font-weight: var.$font-b;

    &__btn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 28px;
        height: 22px;
        cursor: pointer;

        span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: var.$default;
            transition: all 0.3s ease-in-out;
        }
    }

    &__nav {
        position: absolute;
        top: 140%;

        right: 0;
        left: 0;
        background-color: var.$c700;
        box-shadow: 0 0 10px rgba(93, 93, 93, 0.3);
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        max-height: 0;

        &.active {
            max-height: 1000px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin: 8px 0;
                text-align: center;

                a {
                    display: block;
                    color: var.$default;
                    opacity: 0.5;
                    font-size: 14px;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: color 0.3s ease-in-out;

                    &:hover {
                        color: var.$c300;
                    }
                }
            }
        }
    }
}

// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {
  .burger-menu {
    display: flex;
    width: 100%;
  }
}

// 320
@media (max-width: 320px) {
    .burger-menu {
        display: flex;
    }
}
</style>