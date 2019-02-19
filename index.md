---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: music, movement and computer programming
layout: default
---

I focus my creative energy on [music]({% link _music/index.md %}), [movement]({% link _movement/index.md %}) and [programming]({% link _programming/index.md %}).
{: .sticky }

I am vegetarian.

I practice yoga and aikido.

I compost and recycle.

I am introverted.

I love my wife.

I don't own a tv. 

I don't smoke, drink or do drugs. 

I am not religious.

I garden.

I live on a mountain.

[contact me]({% link collaborate.html %})

<script>
document.addEventListener("DOMContentLoaded", (e) => {

    var sticky = document.querySelector('.sticky');

    linebreakNav();
    var ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                stickyNav();
                ticking = false;
            });
            ticking = true;
        }
    });
    window.addEventListener("resize", () => {
    linebreakNav().then(() => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    stickyNav();
                    ticking = false;
                });
                ticking = true;
            }
        });
    });
    
    function stickyNav() {
        var position = sticky.getBoundingClientRect().top;
        var height = sticky.getBoundingClientRect().height;
        if(position == 0) {
            sticky.style.top = `-${height/2}px`;
        }
    }
    function linebreakNav() {
        var content = sticky.innerHTML;
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            if(content.indexOf('<br>') < 0) {
                sticky.innerHTML = content.substring(0, 30) + "<br>" + content.substring(30);
            }
        } else {
            sticky.innerHTML = content.replace("<br>", "");
        }
        return Promise.resolve();
    }
});


</script>




