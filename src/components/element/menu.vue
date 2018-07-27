<template>
    <div class="menu">

        <div class="humburger" v-bind:class="{ active : openMenu }"  @click="menuChanger()" >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="opened-part" v-bind:class="{ active: openMenu }" >
            <div class="convert-menus">
                <div class="navigate-menu">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/catalog">Catalog</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        
                    </ul>
                </div>
                <div class="tag-catalog">
                    <ul>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '1' , id : 'any' }}" > tag 1 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '2' , id : 'any' }}" > tag 2 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '3' , id : 'any' }}" > tag 3 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '4' , id : 'any' }}" > tag 4 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '5' , id : 'any' }}" > tag 5 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '6' , id : 'any' }}" > tag 6 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '7' , id : 'any' }}" > tag 7 </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'post' , params: { tag: '8' , id : 'any' }}" > tag 8 </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    
    export default {
        name: 'Menu',
        data(){
            return{
                openMenu: false
            }
        },
        methods: {
            menuChanger(){
                let curr = this.openMenu;
                this.openMenu = !curr ;

                console.log( !curr );
            }
        }
    }

</script>

<style scoped lang="scss">
    .opened-part{ background-color: #2b2b2b; position: fixed; z-index: 5; width: 100vw; height: 100vh; transform: rotateY(-90deg) rotateZ(90deg); transition: all 0.5s; display: flex; align-items: center; justify-content: center;
        &.active{ transform: rotateY(0deg) rotateZ(0deg); }
        .convert-menus{ width: 100%; max-width: 640px; color: #fff; display: flex; align-items: center; justify-content: space-between;
            .navigate-menu{ width: 50%; }
            .tag-catalog{ width: 50%; }
        }
    }

    .navigate-menu{ padding: 15px;
        ul{ list-style: none; padding: 0; margin: 0;
            li{padding: 10px 0;}
        }
        a{ font-size: 32px; font-family: 'Anton'; text-decoration: none; color: rgba(255,255,255,0.8); transition: all 0.3s; line-height: 1.2;
            &.router-link-active, &:hover{ color: rgba(255,255,255,1); }
        }
    }

    .tag-catalog{ overflow: hidden;
        ul{ list-style: none; padding: 0; margin: 0; max-height: 420px;  overflow-y: scroll; padding-right: 17px; box-sizing: content-box; width: 100%;
            li{padding: 3px 0;}
        }
        a{ font-size: 24px; font-family: 'Anton'; text-decoration: none; color: rgba(255,255,255,0.8); transition: all 0.3s; line-height: 1.2; border: 2px solid transparent; display: block; padding: 5px 10px 5px 40px; border-radius: 8px; position: relative;
            &:before{ content: ''; position: absolute; top: 0; left: 0; bottom: 0; width: 34px; background-color: #fff; opacity: 0; transition: all 0.3s; }     
            &:after{ content: '#'; position: absolute; top: 50%; left: 10px; transform: translateY(-50%); color: #000; opacity: 0; transition: all 0.3s; }   
            &:hover, &.router-link-exact-active{ border-color: #fff;
                &:before , &:after{ opacity: 1; }
            } 
        }
    }

    .humburger{ position: fixed; width: 46px; height: 46px; overflow: hidden;  z-index: 100; background-color: #fff; top: 50%; left: 15px; border: 2px solid #000; 
        span{ width: 32px; height: 2px; border-radius: 2px; background-color: #000; position: absolute; transition: all 0.3s;
            &:nth-child(1){ top: calc(50% - 1px); left: calc(50% - 32px/2); }
            &:nth-child(2){ top: calc(50% - 8px); left: calc(50% - 32px/2); z-index: 2; }
            &:nth-child(3){ bottom: calc(50% - 8px); left: calc(50% - 32px/2);  z-index: 2;  }
        }
        &.active{ border-color: #fff;
            span{
                &:nth-child(1){ transform: rotate(0deg); height: 46px; width: 46px; top: -1px; left: -1px; }
                &:nth-child(2){ transform: rotate(45deg);  top: calc(50% - 1px); background-color: #fff; }
                &:nth-child(3){ transform: rotate(-45deg); bottom: calc(50% - 1px); background-color: #fff;  }
            }
        }
    }

</style>
