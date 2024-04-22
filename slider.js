const a=document.querySelectorAll('.slider');
var counter=0;
const totalSlides = a.length;
// console.log(a);
a.forEach(
    (slider,index)=>{
        slider.style.top=`${index *100}%`
    }
)
const Previous = () => {
    if (counter > 0) {
        counter--
    } else {
        counter = totalSlides - 1
    }
    sliderrun()
}
const Next = () => {
    if (counter < totalSlides - 1) {
        counter++
    } else {
        counter = 0
    }
    sliderrun()
}
const sliderrun=()=>
{
    a.forEach(
        (slider)=>
        slider.style.transform=`translateY(-${counter *100}%`
    )
}



