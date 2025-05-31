<template>
<div class="desktop-navbar-container bg-figma-grey-900 px-(--figma-spacing-400) pt-(--figma-spacing-500) h-screen transition-all ease-out" :class="{ 'w-[100px]': !isOpen, 'w-[250px]': isOpen }">
    <div v-if="!isOpen" class="flex flex-col justify-between h-full" @click="toggleSidebar">
        <div>
            <div v-if="!isOpen" class="pb-(--figma-spacing-300) flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" fill="none"><path fill="#fff" d="M8.952 21.44H2.936v-11.2H.76V5.312h2.304C3.704 2.272 6.68 0 11.96 0h1.28v4.288H11c-1.664 0-2.464.16-2.432 1.024h4.672v4.928H8.952z"/></svg>
            </div>
            <router-link :to="{ name: 'overview' }" class="flex py-(--figma-spacing-200) items-center justify-center w-full text-figma-grey-300" active-class="active-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M18 8.593v8.667a1.5 1.5 0 0 1-1.5 1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3.75a1.5 1.5 0 0 1-1.5 1.5H1.5a1.5 1.5 0 0 1-1.5-1.5V8.593a1.5 1.5 0 0 1 .485-1.105l7.5-7.076.01-.01a1.5 1.5 0 0 1 2.029.01l7.5 7.076A1.5 1.5 0 0 1 18 8.593z"/></svg>
            </router-link>
            <router-link :to="{ name: 'transactions' }" class="flex py-(--figma-spacing-200) items-center justify-center w-full text-figma-grey-300" active-class="active-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M8.193 12.973a.75.75 0 0 1-.162.818l-3 3a.748.748 0 0 1-1.062 0l-3-3A.75.75 0 0 1 1.5 12.51h2.25V1.26a.75.75 0 0 1 1.5 0v11.25H7.5a.75.75 0 0 1 .693.463zM17.03 3.73l-3-3a.749.749 0 0 0-1.061 0l-3 3a.75.75 0 0 0 .53 1.281h2.25v11.25a.75.75 0 1 0 1.5 0V5.01h2.25a.75.75 0 0 0 .53-1.28z"/></svg>
            </router-link>
            <router-link :to="{ name: 'budgets' }" class="flex py-(--figma-spacing-200) items-center justify-center w-full text-figma-grey-300" active-class="active-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M.32 8.592a9.592 9.592 0 0 1 2.186-5.04 1.5 1.5 0 0 1 2.215-.103l2.594 2.65a1.488 1.488 0 0 1 .159 1.92 2.4 2.4 0 0 0-.347.726.375.375 0 0 1-.358.265H.694a.375.375 0 0 1-.374-.418zM10.88.016A1.5 1.5 0 0 0 9.25 1.51v3.813A1.487 1.487 0 0 0 10.492 6.8 3 3 0 0 1 11 12.59a.38.38 0 0 0-.249.358v6.115a.374.374 0 0 0 .418.375 9.782 9.782 0 0 0 8.582-9.54c.07-5.089-3.826-9.43-8.87-9.882zM8.992 12.588a3 3 0 0 1-1.819-1.821.38.38 0 0 0-.356-.257H.693a.376.376 0 0 0-.375.417 9.76 9.76 0 0 0 8.514 8.515.375.375 0 0 0 .417-.375v-6.12a.38.38 0 0 0-.257-.36z"/></svg>
            </router-link>
            <router-link :to="{ name: 'pots' }" class="flex py-(--figma-spacing-200) items-center justify-center w-full text-figma-grey-300" active-class="active-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M14.25 3.336V1.76a1.5 1.5 0 0 0-1.5-1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v1.576a3.755 3.755 0 0 0-3 3.674v10.5a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V7.01a3.755 3.755 0 0 0-3-3.674zm-6-1.576h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm4.5 14.25v.75a.75.75 0 1 1-1.5 0v-.75H7.5a.75.75 0 1 1 0-1.5h2.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 1 1 0-4.5v-.75a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5H8.25a.75.75 0 1 0 0 1.5h1.5a2.25 2.25 0 0 1 0 4.5zm3-12.75h-1.5v-1.5h1.5z"/></svg>
            </router-link>
            <router-link :to="{ name: 'recurring-bills' }" class="flex py-(--figma-spacing-200) items-center justify-center items-center w-full text-figma-grey-300" active-class="active-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M18.25.51H1.75a1.5 1.5 0 0 0-1.5 1.5v14.25a.75.75 0 0 0 1.086.67L4 15.598l2.664 1.332a.75.75 0 0 0 .672 0L10 15.598l2.664 1.332a.75.75 0 0 0 .672 0L16 15.598l2.664 1.332a.75.75 0 0 0 1.086-.67V2.01a1.5 1.5 0 0 0-1.5-1.5zm-3.75 9.75h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 1 1 0 1.5zm0-3h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 1 1 0 1.5z"/></svg>
            </router-link>
        </div>
        <div v-if="!isOpen" class="maximize-icon-container flex justify-center py-(--figma-spacing-300) pl-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#B3B3B3" d="M6 14.5v-9a.75.75 0 0 1 .75-.75H9V1a.75.75 0 0 1 1.28-.53l9 9a.748.748 0 0 1 0 1.06l-9 9A.749.749 0 0 1 9 19v-3.75H6.75A.75.75 0 0 1 6 14.5Zm-2.25.75a.75.75 0 0 0 .75-.75v-9a.75.75 0 1 0-1.5 0v9a.75.75 0 0 0 .75.75Zm-3 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 .75.75Z"/></svg>
        </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center" @click="toggleSidebar">
        <div class="pb-(--figma-spacing-300)">
            <svg xmlns="http://www.w3.org/2000/svg" width="122" height="22" fill="none"><g fill="#fff"><path d="M8.192 21.44H2.176v-11.2H0V5.312h2.304C2.944 2.272 5.92 0 11.2 0h1.28v4.288h-2.24c-1.664 0-2.464.16-2.432 1.024h4.672v4.928H8.192zM20.105 3.84h-6.016V0h6.016zm0 17.6h-6.016V5.312h6.016zM28.362 21.44h-6.016V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752zM48.445 21.76c-3.648 0-5.696-1.664-5.696-4.416 0-2.272 1.568-3.904 5.216-4.256l6.56-.64v-.32c0-1.632-.704-1.888-2.848-1.888-1.984 0-2.592.384-2.592 1.728v.128h-6.016v-.064c0-4.288 3.584-7.04 9.056-7.04 5.632 0 8.352 2.752 8.352 7.264v9.184h-5.632v-3.392h-.32c-.608 2.272-2.592 3.712-6.08 3.712zm.352-4.8c0 .512.512.608 1.44.608 2.912 0 4.096-.352 4.256-1.792l-4.928.576c-.544.064-.768.256-.768.608zM68.596 21.44H62.58V5.312h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112V21.44h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752zM92.519 21.76c-5.729 0-9.377-3.168-9.377-8.384 0-5.248 3.649-8.384 9.377-8.384 5.503 0 9.023 2.816 9.023 7.136v.512h-5.984v-.256c0-1.664-1.216-2.016-3.168-2.016-2.208 0-3.264.48-3.264 3.008 0 2.496 1.056 2.976 3.264 2.976 1.952 0 3.168-.32 3.168-1.984v-.288h5.984v.544c0 4.288-3.52 7.136-9.024 7.136zM112.462 21.76c-5.472 0-9.312-2.336-9.312-8.384 0-5.248 3.808-8.384 9.184-8.384 5.568 0 9.12 2.784 9.12 7.968 0 .544-.032.96-.096 1.536h-12.64c.096 1.952.96 2.496 3.52 2.496 2.432 0 3.072-.416 3.072-1.376v-.352h6.016v.384c0 3.584-3.424 6.112-8.864 6.112zm-.256-12.16c-2.208 0-3.136.48-3.392 1.856h6.816c-.224-1.376-1.184-1.856-3.424-1.856z"/></g></svg>
        </div>
        <router-link :to="{ name: 'overview' }" class="grid grid-cols-[24px_1fr] gap-[16px] p-(--figma-spacing-200) justify-center w-full text-figma-grey-300" active-class="active-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M18 8.593v8.667a1.5 1.5 0 0 1-1.5 1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3.75a1.5 1.5 0 0 1-1.5 1.5H1.5a1.5 1.5 0 0 1-1.5-1.5V8.593a1.5 1.5 0 0 1 .485-1.105l7.5-7.076.01-.01a1.5 1.5 0 0 1 2.029.01l7.5 7.076A1.5 1.5 0 0 1 18 8.593z"/></svg>
            <span class="text-preset-3">Overview</span>
        </router-link>
        <router-link :to="{ name: 'transactions' }" class="grid grid-cols-[24px_1fr] gap-[16px] p-(--figma-spacing-200) justify-center w-full text-figma-grey-300" active-class="active-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M8.193 12.973a.75.75 0 0 1-.162.818l-3 3a.748.748 0 0 1-1.062 0l-3-3A.75.75 0 0 1 1.5 12.51h2.25V1.26a.75.75 0 0 1 1.5 0v11.25H7.5a.75.75 0 0 1 .693.463zM17.03 3.73l-3-3a.749.749 0 0 0-1.061 0l-3 3a.75.75 0 0 0 .53 1.281h2.25v11.25a.75.75 0 1 0 1.5 0V5.01h2.25a.75.75 0 0 0 .53-1.28z"/></svg>
            <span class="text-preset-3">Transactions</span>
        </router-link>
        <router-link :to="{ name: 'budgets' }" class="grid grid-cols-[24px_1fr] gap-[16px] p-(--figma-spacing-200) justify-cente w-full text-figma-grey-300" active-class="active-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M.32 8.592a9.592 9.592 0 0 1 2.186-5.04 1.5 1.5 0 0 1 2.215-.103l2.594 2.65a1.488 1.488 0 0 1 .159 1.92 2.4 2.4 0 0 0-.347.726.375.375 0 0 1-.358.265H.694a.375.375 0 0 1-.374-.418zM10.88.016A1.5 1.5 0 0 0 9.25 1.51v3.813A1.487 1.487 0 0 0 10.492 6.8 3 3 0 0 1 11 12.59a.38.38 0 0 0-.249.358v6.115a.374.374 0 0 0 .418.375 9.782 9.782 0 0 0 8.582-9.54c.07-5.089-3.826-9.43-8.87-9.882zM8.992 12.588a3 3 0 0 1-1.819-1.821.38.38 0 0 0-.356-.257H.693a.376.376 0 0 0-.375.417 9.76 9.76 0 0 0 8.514 8.515.375.375 0 0 0 .417-.375v-6.12a.38.38 0 0 0-.257-.36z"/></svg>
            <span class="text-preset-3">Budgets</span>
        </router-link>
        <router-link :to="{ name: 'pots' }" class="grid grid-cols-[24px_1fr] gap-[16px] p-(--figma-spacing-200) justify-center w-full text-figma-grey-300" active-class="active-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M14.25 3.336V1.76a1.5 1.5 0 0 0-1.5-1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v1.576a3.755 3.755 0 0 0-3 3.674v10.5a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V7.01a3.755 3.755 0 0 0-3-3.674zm-6-1.576h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm4.5 14.25v.75a.75.75 0 1 1-1.5 0v-.75H7.5a.75.75 0 1 1 0-1.5h2.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 1 1 0-4.5v-.75a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5H8.25a.75.75 0 1 0 0 1.5h1.5a2.25 2.25 0 0 1 0 4.5zm3-12.75h-1.5v-1.5h1.5z"/></svg>
            <span class="text-preset-3">Pots</span>
        </router-link>
        <router-link :to="{ name: 'recurring-bills' }" class="grid grid-cols-[24px_1fr] gap-[16px] p-(--figma-spacing-200) justify-center items-center w-full text-figma-grey-300" active-class="active-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#b3b3b3" d="M18.25.51H1.75a1.5 1.5 0 0 0-1.5 1.5v14.25a.75.75 0 0 0 1.086.67L4 15.598l2.664 1.332a.75.75 0 0 0 .672 0L10 15.598l2.664 1.332a.75.75 0 0 0 .672 0L16 15.598l2.664 1.332a.75.75 0 0 0 1.086-.67V2.01a1.5 1.5 0 0 0-1.5-1.5zm-3.75 9.75h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 1 1 0 1.5zm0-3h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 1 1 0 1.5z"/></svg>
            <span class="text-preset-3">Recurring Bills</span>
        </router-link>
        <div class="p-(--figma-spacing-200) grid grid-cols-[24px_1fr] gap-[16px] w-full justify-center minimize-icon-container text-figma-grey-300 hover:text-figma-grey-100 pt-(--figma-spacing-300)">
            <svg xmlns="http://www.w3.org/2000/svg" class="minimize-icon" width="20" height="20" fill="none"><path d="M14 5.5v9a.75.75 0 0 1-.75.75H11V19a.75.75 0 0 1-1.28.53l-9-9a.75.75 0 0 1 0-1.06l9-9A.75.75 0 0 1 11 1v3.75h2.25a.75.75 0 0 1 .75.75Zm2.25-.75a.75.75 0 0 0-.75.75v9a.75.75 0 1 0 1.5 0v-9a.75.75 0 0 0-.75-.75Zm3 0a.75.75 0 0 0-.75.75v9a.75.75 0 1 0 1.5 0v-9a.75.75 0 0 0-.75-.75Z"/></svg>
            <span class="text-preset-3">Minimize Menu</span>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(true);

const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.desktop-navbar-container {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.minimize-icon path {
  fill: #B3B3B3;  
}

.minimize-icon-container{
  cursor: pointer;
  display: flex;
  align-items: center;
}

.minimize-icon-container path {
    fill: #B3B3B3;
}

.minimize-icon-container:hover path,
.maximize-icon-container:hover path {
    fill: #fff;
}


</style>