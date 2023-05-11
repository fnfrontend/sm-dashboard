$(document).on('click', '.open-notification', function () {
  var notification = document.querySelector('.for-toggle-notification');
  notification.classList.toggle('isactive-notific');
});
$(document).on('click', '.profile-main', function () {
  var notification = document.querySelector('.profile-pro');
  notification.classList.toggle('isactive-notific');
});

$('.main-navigtion .nagvi-active').click(function () {
  // Remove active class from all li elements
  $('.main-navigtion .nagvi-active').removeClass('active');

  // Add active class to the clicked li element
  $(this).addClass('active');
});

// chart js
var labels = ['jan 1', 'jan 4', 'jan 7', 'jan 10', 'jan 13', 'jan 16', 'jan 19', 'jan 22', 'jan 25', 'jan 28'];
var itemData = [20, 25, 22, 28, 30, 40, 50, 30, 33, 38, 40, 42, 30, 46, 35, 50];

var config = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Item Data',
      data: itemData,
      borderColor: '#36D97D',
      backgroundColor: '#36D97D',
      borderWidth: 4,
      pointStyle: 'circle',
      pointRadius: 6,
      pointRadius: 5, // Set the point hover radius for padding
      pointBackgroundColor: '#36D97D',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      tension: 0.4 // Set the tension for a smoother line
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false // Set display to false to remove the legends
      }
    }
  }
};

// Create the chart
var myChart = new Chart(document.getElementById('myChart'), config);


// bar chart
var labels = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
var itemData = [10, 12, 14, 16, 18, 20, 18, 15, 10, 14];

var config = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Item Data',
      data: itemData,
      borderColor: '#F2F3F7',
      // backgroundColor: '#B6F2D0',
      backgroundColor: '#F2F3F7',
      tension: 0.4, // Set the tension for a smoother line,
      barBorderRadius: 5, // Set the border radius for the bars
      barHoverBackgroundColor: '#36D97D',
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Set display to false to remove the legends
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
};

// Create the chart
var myChart = new Chart(document.getElementById('mybarChart'), config);


// donut chart

// Chart data
var labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var absences = [8, 5, 3, 2, 4];

// Chart configuration
var config = {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: absences,
      backgroundColor: [
        '#FF6384', // Red
        '#36A2EB', // Blue
        '#FFCE56', // Yellow
        '#4BC0C0', // Cyan
        '#9966FF'  // Purple
      ]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  }
};

// Create the chart
var myChart = new Chart(document.getElementById('mydonutChart'), config);

$(document).ready(function () {
  $('.open-dropd-card').click(function () {
    var parent = $(this).closest('.parent-container');
    var target = parent.find('.my-drop-d');
    $('.my-drop-d').not(target).removeClass('show-my-drop-d');
    target.toggleClass('show-my-drop-d');
  });
});


$('.close-noft-man').on('click', function () {
  $('.my-custom-scroll').removeClass('show-my-drop-d')
})

// close-notifi
$('.close-notifi').on('click', function () {
  $('.for-toggle-notification').removeClass('isactive-notific')
})


// side menu
$('.open-side-menu').on('click', function () {
  $('.side-menu-bar').addClass('open-side-menu-bar')
  $('.my-close-btn').addClass('show-my-close-btn')
})

$('.my-close-btn').on('click', function () {
  $('.side-menu-bar').removeClass('open-side-menu-bar')
  $('.my-close-btn').removeClass('show-my-close-btn')
})


// all classes
$('.class-selected-d').on('click', function () {
  $('.my-new-classes').toggleClass('open-my-new-classes')
})
$('.close-classes-bs').on('click', function () {
  $('.my-new-classes').removeClass('open-my-new-classes')
})
$('.my-dd-p').on('click', function () {
  $('.my-new-class').toggleClass('open-my-new-classes')
})
$('.close-classes-bss').on('click', function () {
  $('.my-new-class').removeClass('open-my-new-classes')
})


// update clip path
// value for boys
const updatedValue = 80;
updatedValue - 100;
const polygonInital = `polygon(0 ${updatedValue}%, 100% ${updatedValue}%, 100% 100%, 1% 100%)`;
$('#topImage').css('clip-path', polygonInital);

// value for girls
const updatedValueW = 20;
updatedValueW - 100;
const polygonInitalW = `polygon(0 ${updatedValueW}%, 100% ${updatedValueW}%, 100% 100%, 1% 100%)`;
$('#topImageW').css('clip-path', polygonInitalW);


// select overview box
$('.main-over-view').on('click', function () {
  $('.main-over-view').removeClass('main-over-view-show');
  $(this).addClass('main-over-view-show');
})


$('#main-wrapper').on('click', function () {
  $('.main-over-view-show').removeClass('show-my-drop-d')
})


$(document).on('click', function (e) { if (!(($(e.target).closest(".isactive-notific").length > 0) || ($(e.target).closest(".open-notification").length > 0))) { $(".for-toggle-notification").removeClass('isactive-notific'); } });
$(document).on('click', function (e) { if (!(($(e.target).closest(".isactive-notific").length > 0) || ($(e.target).closest(".profile-main").length > 0))) { $(".profile-pro").removeClass('isactive-notific'); } });
$(document).on('click', function (e) { if (!(($(e.target).closest(".open-my-new-classes").length > 0) || ($(e.target).closest(".class-selected-d").length > 0))) { $(".my-new-classes").removeClass('open-my-new-classes'); } });
$(document).on('click', function (e) { if (!(($(e.target).closest(".open-my-new-classes").length > 0) || ($(e.target).closest(".my-dd-p").length > 0))) { $(".my-new-class").removeClass('open-my-new-classes'); } });
$(document).on('click', function (e) { if (!(($(e.target).closest(".show-my-drop-d").length > 0) || ($(e.target).closest(".open-dropd-card").length > 0))) { $(".my-drop-d").removeClass('show-my-drop-d'); } });

// selector for class
function selectedOption(option) {
  var selectedOption = document.getElementById('classesSelector');
  selectedOption.innerText = option;
}

// selector for days
function onSelectedDays(option) {
  var selectedOption = document.getElementById('isSelectedDay');
  selectedOption.innerText = option;
}