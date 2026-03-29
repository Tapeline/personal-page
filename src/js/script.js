// Vibe-downgraded my script so it does not have dependencies
// and is compliant to ES3

// ==========================================
// ES3 / 1999 COMPATIBILITY HELPERS
// ==========================================

// Cross-browser event listener (Supports IE5+, Netscape)
function addEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, function() {
            var e = window.event;
            e.target = e.target || e.srcElement;
            handler.call(element, e); // .call() is standard ES3
        });
    } else {
        var oldHandler = element['on' + type];
        element['on' + type] = function(e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            if (oldHandler) oldHandler.call(element, e);
            handler.call(element, e);
        };
    }
}

// Fallback for document.getElementsByClassName
function getElementsByClass(className) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    }
    var elements = document.getElementsByTagName('*');
    var result = [];
    var regex = new RegExp('(^|\\s)' + className + '(\\s|$)');
    for (var i = 0; i < elements.length; i++) {
        if (regex.test(elements[i].className)) {
            result[result.length] = elements[i]; // .push() fallback
        }
    }
    return result;
}

// Fallback for element.nextElementSibling
function getNextElementSibling(node) {
    var next = node.nextSibling;
    while (next && next.nodeType !== 1) { // 1 represents Node.ELEMENT_NODE
        next = next.nextSibling;
    }
    return next;
}

// Class manipulation (Fallback for element.classList)
function hasClass(element, className) {
    return new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className);
}

function addClass(element, className) {
    if (!hasClass(element, className)) {
        element.className += (element.className ? ' ' : '') + className;
    }
}

function removeClass(element, className) {
    if (hasClass(element, className)) {
        var regex = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
        element.className = element.className.replace(regex, ' ').replace(/^\s+|\s+$/g, '');
    }
}

function toggleClass(element, className) {
    if (hasClass(element, className)) {
        removeClass(element, className);
    } else {
        addClass(element, className);
    }
}

// ==========================================
// MAIN SCRIPT
// ==========================================

// Firing on window load replaces $(document).ready()
addEvent(window, 'load', function() {

    // --- 1. Typewriter Logic ---
    var words = ["Tapeline", "Ilya"];
    var typingSpeed = 70;
    var deletingSpeed = 40;
    var pauseBeforeDelete = 1500;
    var pauseBeforeTyping = 200;
    var typewriterElement = document.getElementById('index-hero-typewriter');

    if (typewriterElement) {
        var wordIndex = 0;
        var charIndex = 0;
        var isDeleting = false;

        function type() {
            var currentWord = words[wordIndex];
            var displayText = '';

            if (isDeleting) {
                displayText = currentWord.substring(0, charIndex - 1);
            } else {
                displayText = currentWord.substring(0, charIndex + 1);
            }

            typewriterElement.innerHTML = displayText;

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, pauseBeforeDelete);
                return;
            }
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, pauseBeforeTyping);
                return;
            }

            isDeleting ? charIndex-- : charIndex++;
            var speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }
        setTimeout(type, 500);
    }

    // --- 2. Collapsible Logic ---
    var triggers = getElementsByClass('t-collapsible-trigger');
    for (var i = 0; i < triggers.length; i++) {
        addEvent(triggers[i], 'click', function() {
            var nextContent = getNextElementSibling(this);
            // Replicates $(this).next('.t-collapsible-content')
            if (nextContent && hasClass(nextContent, 't-collapsible-content')) {
                toggleClass(nextContent, 't-collapsible-open');
            }
        });
    }

    // --- 3. Zoom on Click Logic ---
    var isZoomed = false;
    var zoomElements = getElementsByClass('zoom-on-click');

    for (var j = 0; j < zoomElements.length; j++) {
        // IIFE closure is necessary in ES3 to correctly bind `elem` inside the loop
        (function(elem) {
            addEvent(elem, 'click', function(e) {
                var targetTag = e.target && e.target.tagName ? e.target.tagName.toUpperCase() : '';

                if (!isZoomed) {
                    addClass(elem, 'zoomed-media');
                    isZoomed = true;
                } else if (targetTag !== 'IMG') {
                    removeClass(elem, 'zoomed-media');
                    isZoomed = false;
                }
            });
        })(zoomElements[j]);
    }

});