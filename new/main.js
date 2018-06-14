const card = document.getElementById('business-card');
const portrait = document.getElementById('portrait');
const wrapper = document.getElementById('description-wrapper');
const headerLinks = document.getElementById('header-links');
const innerHeaderLinks = document.getElementById('header-links-inner');
const title = document.getElementById('title');

// function animate(percent, start, end) {
//     return start + (end - start) * percent;
// }

let cardHeight = card.clientHeight;
let topOffset = card.offsetTop - cardHeight / 2;
let wrapperHeight = wrapper.clientHeight;
window.addEventListener('resize', function() {
    onUserScrolled(ANIMATION_DURATION);
});
window.addEventListener('scroll', function() {
    onUserScrolled(ANIMATION_DURATION);
});
const STATE_CARD = 'business-card';
const STATE_HEADER = 'header';
let previousState = STATE_CARD;

const animationQueue = {};
const ANIMATION_DURATION = 150;
onUserScrolled(ANIMATION_DURATION);

function animateNext(element) {
    console.log('Animate next!');
    if (animationQueue[element.id].length === 0) return;
    let fn = animationQueue[element.id].shift();

    const startTime = Date.now();
    const timer = setInterval(function() {
        fn(startTime, timer);
    }, 16);
}

function animate(element, style, start, end, duration, fn, onDone) {
    if (!element.hasAttribute('id')) {
        console.error('Tried to animate item with no ID!');
        return;
    }
    if (!(element.id in animationQueue)) {
        animationQueue[element.id] = [];
    }
    let animateFunction = function(startTime, timer) {
        const time = Date.now() - startTime;
        let percent = time / duration;
        if (percent > 1) percent = 1;
        const val = start + (end - start) * percent;
        let valWithPostfix = val + 'px';
        if (fn !== undefined) {
            valWithPostfix = fn(val);
        }
        element.style[style] = valWithPostfix;
        if (percent >= 1) {
            element.style[style] = end + 'px';
            clearInterval(timer);
            if (onDone !== undefined) onDone();
            animateNext(element);
        }
    };
    animationQueue[element.id].push(animateFunction);
    // Just added it, none before to call it
    if (animationQueue[element.id].length === 1) {
        animateNext(element);
    }
}

function onUserScrolled(animationDuration) {
    console.log('On user scroll');
    const scrollPosition = (scrollTop = window.pageYOffset || document.documentElement.scrollTop);
    const positionPercent = scrollPosition / window.innerHeight;

    const cardTop = card.getBoundingClientRect().top;
    if (scrollPosition < topOffset) {
        if (previousState === STATE_HEADER) {
            // Transition to Card
            animate(headerLinks, 'transform', 0, 100, animationDuration, function(x) {
                return 'translate(' + x + '%, 0)';
            });
            setTimeout(function() {
                animate(card, 'width', document.body.scrollWidth, 700, animationDuration);
                animate(card, 'transform', 0, 50, animationDuration, function(x) {
                    return 'translate(-50%, -' + x + '%)';
                });
                animate(portrait, 'width', 48, 220, animationDuration);
                animate(portrait, 'height', 48, 220, animationDuration);
                animate(card, 'border-radius', 0, 5, animationDuration);
                animate(wrapper, 'height', 0, wrapperHeight, animationDuration);
                animate(title, 'font-size', 36, 48, animationDuration);
                headerLinks.style.display = 'none';
                card.style.top = '';
                card.style.left = '';
                card.style.position = '';
            }, animationDuration);
        }
        previousState = STATE_CARD;
    } else {
        if (previousState === STATE_CARD) {
            // Transition to Header
            animate(
                card,
                'width',
                700,
                document.body.scrollWidth,
                animationDuration,
                function(x) {
                    return x + 'px';
                },
                function() {
                    headerLinks.style.display = 'table-cell';
                    animate(headerLinks, 'transform', 100, 0, animationDuration, function(x) {
                        return 'translate(' + x + '%, 0)';
                    });
                    card.style.width = '100%';
                }
            );
            animate(portrait, 'width', 220, 48, animationDuration);
            animate(portrait, 'height', 220, 48, animationDuration);
            animate(card, 'border-radius', 5, 0, animationDuration);
            animate(wrapper, 'height', wrapperHeight, 0, animationDuration);
            animate(title, 'font-size', 48, 36, animationDuration);
            // setTimeout(function() {

            // }, animationDuration);
        }
        card.style.top = '0px';
        card.style.left = '50%';
        card.style.position = 'fixed';
        card.style.transform = 'translate(-50%, 0%)';
        previousState = STATE_HEADER;
    }
}
