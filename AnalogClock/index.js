setInterval(() => {
    date = new Date();
    htime  = date.getHours();
    mtime  = date.getMinutes();
    stime  = date.getSeconds();

    hrotation= (30*htime) + (mtime/2);   //formula for calculating the theta(angle) of clock  30*h+m/2
    mrotation= 6*mtime; //for minutes
    srotation= 6*stime;  //for seconds

    //now writing code for rotating the clock using dom 

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);