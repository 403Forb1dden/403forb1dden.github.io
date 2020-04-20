БЭМ

BEM.info

Инструменты чтобы не все руками писать:

BEMMET
nav_theme_islands__item*3

BEM Hint

БЕМ организация GIT - папка Project Stuff   - simple BEM project example


my-block__elem1_theme_light

html

___________

Не используем:
1. селекторы на теги
2. селектор "*"
3. Reset
4. Normalize
5. id
6. Вложенность

_____________

<div class="my-block my-block_theme_light my-block_opened my-block_size_x1">
<span class="my-block__elem1"></span>
</div>

ТАК НЕ ДЕЛАЕМ: 
Вложенные селекторы не делаем.
.my-block span {
    ...
}
.container p {}

Так можно
.my-block_size_x1 .my-block__elem1 {
    ...
}

<body class="page">
</body>

Не важно что в разных браузера не совпадет стандартный параметр как шрифт без normaloze.css
.page {
    font-size: 16px;
}

 "* не юзаем" 
* {
    padding: 0;
}

.page {
    padding: 0;
}

.my-block {
    ...
}

.my-block_theme_light {
opacity 0.5;
}

.my-block_theme_opened {
opacity 1;
}

____________________________

ВЛОЖЕННОСТЬ

<nav class="nav">
/*Верно:*/
  <a class="link nav__item"></a>
/*Не верно:*/
  <a class="link link_inside_nav"></a>
</nav>

Не правильный селектор для размеров и т.п
Правильно - link_inside_nav
.link {
    color: #00f;
    margin: 12px; 
}

Так правильно:
.nav {
    ...
}
.nav__item {
    margin: 12px;
}
.link {
    color: #oof;
}


<body class="page_layout">
  <aside class="nav__item layout__row">
     <div class="nav__item layout__cell"></div>
  </aside>
</body>


СТРУКТУРИРОВАННОЕ СОХРАНЕНИЕ ПРОЕКТА:

Так не удобно:

project/
  css/
     style.css
        ....

  js/
     1.js
     2.js
     
     

Оптимальный вариант:

project/
  blocks/
    button/
        icon/
          button_icon.css
        theme/
          button_theme_dark.css
          button_theme_light.css
          button_theme_dark.css
          something-else.css
        size/
          button_size_s.css
          button_size_m.css
          button_size_l.css
          button_size_my-cool-size.css
            ...
        disabled/
          button_disabled.css
      button.css
      button.js
      button.spec.js
      button.tests
        ..
        ..
      button.ru.md
      button.en.md
      button.assets/
        1.svg
        2.svg
        
       
      
Не правильно 
<div class="b1" style="color: red;"></div>
<div class="b1" style="color: red;"></div>
<div class="b1" style="color: red;"></div>
<div class="b1" style="color: red;"></div>

Правильно

C тими двумя стилями отрисуется стогласно CSS каскаду
.b1 {
  color:red;
    font-size:12px;
} 
.b1 {
  border:1px solid red;
}
    
.common.blocks/
    button /
      button.css
        .button {
            color:red;
        }
    
desktop.blocks/
    button/
      button.css
    
touch.blocks/
    button/
      button.css 
        .button {
            ...
        }
    
touch-phone.blocks/
    button/
      button.css
    
desktop.bundles = common + desktop
touch.bundles = common + touch

@import common.blocks/button/button.css
@import desktop.blocks/button/button.css
    
block('b1') ([
    tag: 'article',
    addAttrs: {
    bemup:42
    }
])
    
block('b1') ([
    tag:'aside',
    mix:['b2','b3', {
    elem: 'ololo'
    }]
])


block('b1')([  
  tag: 'span',
  attrs: [
    dasdasd: ássassd;
    adasd: 42
  ],
  content: [1,2,3].map{item => ([
            elem: 'my-elem',
            content: item
            ])}
])

block('b2').content()(node => [
    return [
        'before',
        applyNews
    ]
])
    
    
    
    