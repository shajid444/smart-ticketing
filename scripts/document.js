const seats = document.querySelectorAll(".seat");
// console.log(seats);
let availableSeat = 40;
let seatCount = 0;
let toTotalPrice = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat);

    seat.addEventListener('click', function () {

        if (seatCount < 4) {

            // console.log('clicked');
            const seatValue = seat.innerText;
            // console.log(seatValue);
            setBackgroundColor(seatValue);
            availableSeat--;
            setSeat('available-seat');
            setElementValueById('available-seat', availableSeat);
            seatCount++;
            setSeat('selected-seat');
            setElementValueById('selected-seat', seatCount);

            toTotalPrice =toTotalPrice+550;
            // console.log(toTotalPrice);
            setSeat('total-price');
            setElementValueById('total-price', toTotalPrice);

            // show the seat name and price

          const seatDiv = document.getElementById('seatName');


          const d = document.createElement('div');

          const p = document.createElement('p');

          p.innerText = seatValue;
          
          d.appendChild(p);

          const p1 = document.createElement('p');

          p1.innerText = 'Economy';
          
          d.appendChild(p1);

          const p2 = document.createElement('p');

          p2.innerText = '550';
          
          d.appendChild(p2);
          d.classList.add('flex');
          d.classList.add('gap-20');
          seatDiv.appendChild(d);


        //   end seat name


        }

   });

}


const btn = document.getElementById('apply-btn');
// console.log(btn);
btn.addEventListener('click', function(){
    // console.log('clicked');

    const coupon = document.getElementById('input-field').value;
    // console.log(coupon);
    const couponCode = coupon.split(" ").join("").toUpperCase();
    // console.log(couponCode);
    

    if (couponCode=== 'NEW15') {
        console.log('valid');
        const discount =toTotalPrice - (toTotalPrice * 0.15);
        setSeat('after-discount');
        setElementValueById('after-discount', discount);
        document.getElementById('input-field').value ="";
        hideElementById('dis-part');

        
    }

    else if(couponCode=== 'COUPLE20'){
        console.log('vald');
        const discount =toTotalPrice - (toTotalPrice * 0.2);
        setSeat('after-discount');
        setElementValueById('after-discount', discount);
        document.getElementById('input-field').value ="";
        hideElementById('dis-part');
    }
    else{
        alert("Invalid Coupon Code");
    }
});