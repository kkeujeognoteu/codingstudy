//01. a속성제거
$(document).on('click', 'a[href=#]', function(e){
    e.preventDefault();
})

//02.scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false,
    })
})

//splitting
$(function(){Splitting();})

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach((section, i)=>{
        ScrollTrigger.create({
            trigger:section,
            start:'top tpp',
            pin:true,
            pinSpacing:false,
            markers:true
        })
    })

    ScrollTrigger.create({
        snap:1 / (section.length - 1)
    })
})