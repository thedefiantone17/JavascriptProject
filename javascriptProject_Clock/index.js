setInterval( () => {

    // setting variables
     date = new Date();
     htime = date.getHours();
     mtime = date.getMinutes();
     stime = date.getSeconds();
    //  console.log(htime);
    //  console.log(mtime);
    //  console.log(stime);

    // setting rotations
     hRotation = 30*htime + mtime/2;
     mRotation = 6*mtime;
     sRotation = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hRotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${sRotation}deg)`;

}, 1000);