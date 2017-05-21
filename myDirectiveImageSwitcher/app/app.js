angular.module("myApp", [])       //створюємо головний модуль

    .directive("switcher", function(){
            var pic = [   //створюємо масив обєктів  // загалом в директиві не можна оголонувати якісь дані -це треба робити у сервісі
            {
                title: "Image1",
                content: 'https://www.mercedes-benz.com/wp-content/uploads/sites/3/2016/06/00_Mercedes-Benz-Vehicles-AMG-GT-R-1280x636-1280x636.jpg'
            },
            {
                title: "Image2",
                content: 'https://www.mercedes-benz.com/wp-content/uploads/sites/3/2017/01/000-mercedes-benz-vehicles-mercedes-amg-gt-c-coupe-edition-50-c-190-1280x636-1280x636.jpg'
            },
            {
                title: "Image3",
                content: 'http://www.motormania.com.ua/wp-content/uploads/2016/11/mercedes-electric-1-11-2016-8.jpg'
            }
        ];
        return {
        
          link: function(scope, element, attrs){
//              функція показує картинки при кліку на них змінюється зображення на наступне
              var i = 0;
              element.on("click", function(){
                  element.html("<img src='" + pic[i].content+ "'>");
                  element.append("<input type='button'>");
                  i++
                  if(i >= pic.length){
                      i=0;
                  }
              })
          }  
        };
    });   



















