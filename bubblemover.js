function getDataVal(id) {
    return document.getElementById(id)[data - name];
}

function addHoverListeners() {
    let paths = document.getElementsByTagName('path');
    let bubble = document.getElementById('SVG_Tooltip');
    let bubbleText = document.getElementById('bubbleTitle');
    let bubbleval = document.getElementById('bubbleValue');
    let mouseleave = (e) => {
        bubble.setAttribute('visibility', 'hidden');
    };
    for (let i = 0; i < paths.length; i++) {
        let hoverhandler = (e) => {
            let moveTo = e.currentTarget.getAttribute('d').split(/[a-zA-Z]/)[1].split(' ');
            let x = moveTo[0] - 50;
            let y = moveTo[1] - 50;
            bubble.setAttribute('transform', `translate(${x},${y})`);
            bubble.setAttribute('visibility', 'visible');
            bubbleText.innerHTML = 'foo';
            bubbleval.innerHTML = 'bar';

        };
        paths[i].addEventListener('mouseover', hoverhandler, false);
        paths[i].addEventListener('mouseleave', mouseleave, false);
    }
}