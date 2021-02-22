<template>
    <transition name="modal" appear>
        <div class="modal modal-overlay" @click.self="$emit('close')">
            <div class="modal-window">
                <div class="modal-content">
                    <slot />
                </div>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')">閉じる</button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>
<style lang="stylus" scoped>
.modal {
    &.modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 30;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    &-window {
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
    }

    &-content {
        padding: 10px 20px;
    }

    &-footer {
        background: #ccc;
        padding: 10px;
        text-align: right;
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.4s;
    .modal-window {
        transition: opacity 0.4s, transform 0.4s;
    }
}

.modal-leave-active {
    transition: opacity 0.6s ease 0.4s;
}
</style>
