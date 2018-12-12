let honk = document.getElementById('honk');
honk.onclick = function() {
    console.log('honk honk');
}
random = 0;
let vroom = document.getElementById('vroom')
vroom.onclick = function () {
    random = Math.floor((Math.random()*120)+1);
    console.log('your current speed = ' + random + ' mph.')
}