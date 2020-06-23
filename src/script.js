import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("hello")
    $("#navlinks").addClass("font-link-shrink");
    $("#navlinks").removeClass("font-link");
    $("#brand").addClass("font-shrink");
    $("#brand").removeClass("font");
  } else {
    $("#navlinks").addClass("font-link");
    $("#navlinks").removeClass("font-link-shrink");
    $("#brand").addClass("font");
    $("#brand").removeClass("font-shrink");
  }
};

export const scrollEvent = (e)=>{
  e.preventDefault();
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    console.log("hello")
    $("#navlinks").addClass("font-link-shrink");
    $("#navlinks").removeClass("font-link");
    $("#brand").addClass("font-shrink");
    $("#brand").removeClass("font");
  } else {
    $("#navlinks").addClass("font-link");
    $("#navlinks").removeClass("font-link-shrink");
    $("#brand").addClass("font");
    $("#brand").removeClass("font-shrink");
  }
}

export const HandleBrandToggeler=(e)=>{
  e.preventDefault();
  $(".navbar-collapse").collapse("hide");
}

export const HideToggler = ()=>{
  
  $(".navbar-collapse").collapse("hide");
}

$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#brand").on("click", () => {
  $(".navbar-collapse").collapse("hide");
});



