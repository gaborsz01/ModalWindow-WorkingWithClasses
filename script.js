'use strict';

// 1 Creating a variable called modal for selecting the "modal" class
const modal = document.querySelector('.modal');

// 2 Creating a variable called "overlay" for selecting the "overlay" class
const overlay = document.querySelector('.overlay');

// 3 Creating a variable called "btnCloseModal" for selecting the "close-modal" class
const btnCloseModal = document.querySelector('.close-modal');

// 4 Creating a variable called "btnsShowModal" for selecting the "show-modal" class
// We use "querySelectorAll" here because we have multiple buttons under the same class
const btnsShowModal = document.querySelectorAll('.show-modal');

// 17 Now, to clean up the code we create a "closeModal" function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 5 Console.log
console.log(btnsShowModal);

// 6 Creating a for loop to loop through the array of buttons
for (let i = 0; i < btnsShowModal.length; i++) {
  // 7 Console log the textContent of each element in the "btnsShowModal" array
  console.log(btnsShowModal[i].textContent);

  // 8 Attach an event handler for each 3 buttons
  btnsShowModal[i].addEventListener('click', function () {
    console.log('Button licked.');

    // 9 We take the modal and we remove the hidden class from it with classList.remove.
    // When we give the parameter to class list, we dont use ".", just simply ("hidden") without the dot.
    modal.classList.remove('hidden');

    // 10 We want to remove the "hidden" from the overlay class as well, so it gives us a nice darker, blurred background.
    overlay.classList.remove('hidden');
  });
}

// 11 Then we have to add a "closeModal" function so when we click on X, it adds back
// the "hidden" on the modal window and the overlay, as well.
// We will use an "eventListener" which we give the click event, and function to add back the
// hidden to modal and overlay classes.

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');

// });

// 18 Rewrite the event with the closeModal function

btnCloseModal.addEventListener('click', closeModal);

// 12 We add another event, which is also for closing the modal window. It will allow us to
// close it without clicking on the X, but just clicking outside of the modal window,
// on the overlay area.

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// 18 Rewrite the event with the closeModal function
overlay.addEventListener('click', closeModal);

// 13 And we are going to add another method to close the modal window and making the overlay disappear,
// which is by pressing the ESC key.
// This will be an event, as well, but it will be an event in the "document" in general.
// We also add "e" as a function parameter, which means event

document.addEventListener('keydown', function (e) {
  // 14 We can see if a key was pressed (it shows the whole object)
  console.log(e);

  // 15 Now lets try to only see what key was pressed and not the whole object, so we select
  // the "key" value in the "e" object
  console.log(e.key);

  // 16 Now what we want is to only close this modal window if the ESC key was pressed
  //   if (e.key === 'Escape') {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   }

  // 19 Rewrite the event with the closeModal function
  if (e.key === 'Escape') {
    closeModal();
  }
});

// 17 Now (up where we declared the variables), to clean up the code we create a "closeModal" function, so we can replace all the modal and overlay.classList.add with the function.
