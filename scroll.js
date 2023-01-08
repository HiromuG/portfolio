//scroll-tracker
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');
const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0),CSS.percent(100)]
})
scrollTracker.animate(
    {
        transform:['scaleX(0)','scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
)

const ExperienceArea = document.getElementById('ExperienceArea');
const ExperienceAreaAnimation = new ScrollTimeline({
    scrollOffsets: [
        {target: ExperienceArea,edge:'end'},
        {target: ExperienceArea,edge:'start'}
    ]
})
ExperienceArea.animate(
    {
        transform: ['perspective(1000px) rotateX(45deg)','perspective(1000px) rotateX(-45deg)']
    },
    {
        timeline: ExperienceAreaAnimation
    }
)

//contact-fade-in
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelectorAll('.animated')[0].classList.add('fadeInLeft');
            document.querySelectorAll('.animated')[1].classList.add('fadeInTop');
            document.querySelectorAll('.animated')[2].classList.add('fadeInRight');
        }
    })
})
observer.observe(document.querySelector('.contact-fade-in'))