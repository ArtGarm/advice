<template>
    <div id="app">
    
        <Menu />

        <div class="conteiner-veiw">
            <router-view/>
        </div>

    </div>
</template>

<script>

    import Menu from '@/components/element/menu.vue'
    
    export default {
        name: 'home',
        components: {
            Menu
        }        
    }

</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Anton|Cabin+Sketch');

    html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}


    .clear{clear:both;font-size:1px;line-height:1px;height:0;overflow:hidden;}
    .cfix:after{content: '';display: block;height: 0;font-size: 1px;line-height: 1px;overflow: hidden;clear: both;}
    .juster{display:inline-block;width:100%;height:0;overflow:hidden;}
    .jfix-after:after{content: '';display: inline-block;width: 100%;height: 0;overflow: hidden;}
    .vfix{height:100%;width:0px;display:inline-block;vertical-align:middle;}
    .vfix-before:before{content: '';height: 100%;width: 0;display: inline-block;vertical-align: middle;}

    .hidden-block{position:absolute;left:-99999em;top:-99999em;}

    html, body, div, span,
    h1, h2, h3, h4, h5, h6, p, blockquote {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    *,*:before, *:after{box-sizing:border-box;outline:none;}
    *,body,html{-webkit-text-size-adjust: none;-webkit-appearance: none;max-height: 9001em; }

    html{height:100%;}
    body{min-height:100%;width:100%;min-width:320px;font-family:   arial,sans-serif;background:#fff;color:#3d3d3d;position:relative;font-size: 16px;line-height: 1; overflow-x: hidden; }

    img{vertical-align:bottom;border:0;max-width:100%;}

    .mbox{max-width:1580px; width:calc(100% - 30px); padding: 0 15px; margin:0 auto; position:relative; z-index:1;}
    input, textarea{
        &::-webkit-input-placeholder {color: inherit;}
        &:-moz-placeholder {color: inherit;opacity:1;}
        &::-moz-placeholder {color: inherit;opacity:1;}
        &:-ms-input-placeholder {color: inherit;}
    }

    .conteiner-veiw{ width: 100vw; height: 100vh; background-color: burlywood;}

</style>
