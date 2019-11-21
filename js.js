function slider(){
	var val = $('.slider').val();
    const valNew = (val /5000 *100);
    
    console.log('valNew - ', valNew)
	$('.slider').css({'background':'-webkit-linear-gradient(left ,#ff9051 '+valNew+'%,#ff9051 '+ valNew+'%, #e8e9f3 0%, #e8e9f3 0%)'});
    
    
    
    
let input_b = document.querySelector('#myRange');
let  out = document.querySelector('#dolar_chis')
    out.innerHTML = val;
    
 };


$('.two_toch').on('click', function(){
    $('.two_block').addClass('poyavlenie');
});

$('.arrow').on('click', function(){
    $('.two_block').removeClass('poyavlenie');
});





$('.block_Visa_header').on('click', function(){
    $('.over_block_rotat').addClass('block_krututsy');
})

$('.back_vise').on('click', function(){
    $('.over_block_rotat').removeClass('block_krututsy');
})

//$('.over_block_rotat').on('click', function(){   / код пиштеся когда надо задать два действия на один элемент
////    if ($(this).hasClass("block_krututsy") ) {
////        console.log('удаляем')
////        $(this).removeClass("block_krututsy");
////    } else {
////        console.log('добавляем')
////        $(this).addClass('block_krututsy');
////    }
//});

//$('.back_vise').on('click', function(){
//   console.log('helo', $('.over_block_rotat'))
////   $('.over_block_rotat').removeClass('block_krututsy');
//    $( "#over_block_rotat" ).hasClass("block_krututsy");
//});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
//    scaleOverride : true,
//        scaleSteps : 10,
//        scaleStepWidth : 500,
//        scaleStartValue : 0 ,
    
    
    // The type of chart we want to create
            type: 'line',
            drawBorder:true,
            drawOnChartArea:false,
            display:false,
    // The data for our dataset
    
    data: {
        
        labels: ['January', 'February', 'March', 'April','April','April','April' ],
        datasets: [
        {
            label: '',
            backgroundColor:[ 
                'rgba(97, 215, 210, 0.0)' 
            ],
            
            borderColor: [
                'rgba(97, 215, 210)',
                
            ],
            
            pointBorderColor:[
                'rgba(0,0,0,0)',
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(97, 215, 210)",
                
                
                
            ],
          
            pointBorderWidth:[
                0,
                0,
                0,
                0,
                0,
                3,
            ],
            
            pointRadius:7,
            
         
           
            pointBackgroundColor:
            ['rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
              "white",
             
               
               
               
             
              
              
            ],
            
           
            
//            borderWidth:1,
            
           
//            pointBorderWidth:5,
            
            
            
            data: [26, 30, 28, 30, 29, 33]
            
        },
            
         
        //второй блок
        {
            label: '',
            backgroundColor:[ 
                'rgba(187, 255, 248, 0.09)' ],
            
            borderColor: [
                'rgba(187, 255, 248, 0.09)'],
            
            pointBorderColor:[
                'rgba(0,0,0,0)',
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
            ],
            
            pointBackgroundColor:
            ['rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
               "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
             "rgba(0,0,0,0)",
            ],
            borderWidth:6,
            
            borderJoinStyle:[
                "black"
            ],
           
            pointBorderWidth:10,
            
           
            
            
            data: [29, 28,30, 28, 30, 30, 34]
            
        }
      ]
    },
    
    

    // Configuration options go here
    
    options:  {  
       
         legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
   scales: {
       xAxes: [{
           ticks: {
               display:false,
//               max:100
           },
           gridLines: {
               color: "rgba(0, 0, 0, 0)",
           }
       }],
       yAxes: [{
           ticks: {
               display:false,
               max: 35,
           },
           gridLines: {
               color: "rgba(0, 0, 0, 0)",
           }
       }],
       
   }
}
});
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
//    scaleOverride : true,
//        scaleSteps : 10,
//        scaleStepWidth : 500,
//        scaleStartValue : 0 ,
    
    
    // The type of chart we want to create
            type: 'line',
            drawBorder:true,
            drawOnChartArea:false,
            display:false,
    // The data for our dataset
    
    data: {
        
        labels: ['January', 'February', 'March', 'April','April','April','April' ],
        datasets: [
        {
            label: '',
            backgroundColor:[ 
                'rgba(97, 215, 210, 0.0)' 
            ],
            
            borderColor: [
                'rgba(97, 215, 210, 0.1)',
                
            ],
            
            pointBorderColor:[
                'rgba(0,0,0,0)',
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
//                "rgba(97, 215, 210 0.1)",
                'rgba(165, 233, 232, 0.5)'
                
                
            ],
            boxShadow:['1px 1px 1px black'],
            
            
            
            
         
           
            pointBackgroundColor:
            ['rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
              "rgba(97, 215, 210 0.5)",
               
               
             
              
              
            ],
            
           
            
            borderWidth:10,
            
           
//            pointBorderWidth:5,
            
            
            
            data: [26, 30, 28, 30, 29, 33]
            
        },
            
         
        //второй блок
        {
            label: '',
            backgroundColor:[ 
                'rgba(187, 255, 248, 0.09)' ],
            
            borderColor: [
                'rgba(187, 255, 248, 0.09)'],
            
            pointBorderColor:[
                'rgba(0,0,0,0)',
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
                 "rgba(0,0,0,0)",
            ],
            
            pointBackgroundColor:
            ['rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
               "rgba(0,0,0,0)",
              "rgba(0,0,0,0)",
             "rgba(0,0,0,0)",
            ],
            borderWidth:6,
            
          
           
            pointBorderWidth:10,
            
           
            
            
            data: [29, 28,30, 28, 30, 30, 34]
            
        }
      ]
    },
    
    

    // Configuration options go here
    
    options:  {  
       
         legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
   scales: {
       xAxes: [{
           ticks: {
               display:false,
//               max:100
           },
           gridLines: {
               color: "rgba(0, 0, 0, 0)",
           }
       }],
       yAxes: [{
           ticks: {
               display:false,
               max: 35,
           },
           gridLines: {
               color: "rgba(0, 0, 0, 0)",
           }
       }],
       
   }
}
});

