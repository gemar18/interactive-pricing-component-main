let views= document.getElementById("pageviews");
let cost = document.getElementById("pricing");
let slider = document.getElementById("price-slider")
let miCheckbox = document.getElementById("billing");
let discount= document.getElementById("discount");
let pageViews = ["10K Pageviews","50K Pageviews","100 PageviewsK", "500K Pageviews","1M Pageviews"];
let perMonth = ["$8", "$12", "$16","$24","$36"];
let yearly=["$6","$9", "$12","$18","$27" ];

slider.addEventListener("input",function ()  {
    views.innerText = pageViews[slider.value];
    cost.innerText = perMonth[slider.value];
  let value = this.value * 25;
  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

  miCheckbox.addEventListener('click', function(){    
    
    if(miCheckbox.checked) {
        cost.innerText = yearly[slider.value];
        discount.style.border="2px solid red"
    } else {
        cost.innerText = perMonth[slider.value];
        discount.style.border="none"
    }  
});