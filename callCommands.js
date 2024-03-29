$( document ).ready(function() {
  console.log( "ready!" );

  // TAKE OFF BUTTON
  $('#takeOff').on('click', (event) => {
    event.preventDefault();
    console.log('TAKE OFF!');
    $.ajax({
      url: 'https://localhost:8002/api/takeoff',
      method: "GET",
    });
  });

  // CALIBRATE BUTTON
  $('#calibrate').on('click', (event) => {
    event.preventDefault();
    console.log('CALIBRATE!');
    $.ajax({
      url: 'https://localhost:8002/api/calibrate',
      method: "GET",
    });
  });

  // MOVE LEFT BUTTON
  $('#moveLeft').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE LEFT!');
    $.ajax({
      url: 'https://localhost:8002/api/move-left',
      method: "GET",
    });
  });

  // MOVE RIGHT BUTTON
  $('#moveRight').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE RIGHT!');
    $.ajax({
      url: 'https://localhost:8002/api/move-right',
      method: "GET",
    });
  });

  // MOVE UP BUTTON
  $('#moveUp').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE UP!');
    $.ajax({
      url: 'https://localhost:8002/api/move-up',
      method: "GET",
    });
  });

  // MOVE DOWN BUTTON
  $('#moveDown').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE DOWN!');
    $.ajax({
      url: 'https://localhost:8002/api/move-down',
      method: "GET",
    });
  });

  // MOVE FRONT BUTTON
  $('#moveFront').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE FRONT!');
    $.ajax({
      url: 'https://localhost:8002/api/move-front',
      method: "GET",
    });
  });

  // MOVE BACK BUTTON
  $('#moveBack').on('click', (event) => {
    event.preventDefault();
    console.log('MOVE BACK!');
    $.ajax({
      url: 'https://localhost:8002/api/move-back',
      method: "GET",
    });
  });

  // TURN LEFT BUTTON
  $('#turnLeft').on('click', (event) => {
    event.preventDefault();
    console.log('TURN LEFT!');
    $.ajax({
      url: 'https://localhost:8002/api/turn-left',
      method: "GET",
    });
  });

  // TURN RIGHT BUTTON
  $('#turnRight').on('click', (event) => {
    event.preventDefault();
    console.log('TURN RIGHT!');
    $.ajax({
      url: 'https://localhost:8002/api/turn-right',
      method: "GET",
    });
  });

  // STOP BUTTON
  $('#stop').on('click', (event) => {
    event.preventDefault();
    console.log('STOP!');
    $.ajax({
      url: 'https://localhost:8002/api/stop',
      method: "GET",
    });
  });

  // LAND BUTTON
  $('#land').on('click', (event) => {
    event.preventDefault();
    console.log('LAND!');
    $.ajax({
      url: 'https://localhost:8002/api/land',
      method: "GET",
    });
  });

  let oldVal = document.getElementById('result').value;

  function checkChange(){

    if(document.getElementById('result').value !== oldVal) {
      console.log("value changed");
      if (document.getElementById('result').value === 'Taking off!') {
        $.get('/api/takeoff/', (data) => {});
      } else if (document.getElementById('result').value === 'Turning Clockwise!') {
        $.get('/api/clockwise/', (data) => {});
      } else if (document.getElementById('result').value === 'Landing!') {
        $.get('/api/land/', (data) => {});
      }
      oldVal = document.getElementById('result').value;
    } else {
      console.log('nope');
    }
  }
  setInterval(checkChange, 2000);

  // SPEECH TO DRONE



});