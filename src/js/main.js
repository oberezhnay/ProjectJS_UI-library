import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal own title',
    body: 'Body body body'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Data was saved');
        }
      ],
      [
        'Another button',
        ['btn-warning', 'mr-10'],
        false,
        () => {
          alert('Hello');
        }
      ]
    ]
  }
}));

// $('.wrap').html(
//   `
//   <div class="dropdown">
//       <div class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
//           Dropdown button
//       </div>
//       <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//           <a href="#" class="dropdown-item">Action</a>
//           <a href="#" class="dropdown-item">Action #2</a>
//           <a href="#" class="dropdown-item">Action #3</a>
//       </div>
//   </div>
//   `
// );

// $('.dropdown-toggle').dropdown();