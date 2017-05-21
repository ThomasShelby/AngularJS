$(document).ready(function($){

    $("#phone").mask("+38(999)-999-99-99");
    //Тел: повинен пройти тільки такий формат: +38(093)-880-20-13.
    //(розділові знаки в номері повинні ставитись автоматично після заповнення певної кількості цифр.) 

    function fullnameValidation(){
        var fullname = document.getElementById('fullname').value;

        var reg = /^[a-zA-Z]{1,20}$/;
        // ПІБ : тільки англ букви. Не більше 20 символів.

        if(!reg.test(fullname)) {
            alert("ПІБ : тільки англ букви. Не більше 20 символів.");
        }
    }
    
    function validatePhoneNumber(){
        var phoneNumber = document.getElementById('phone').value;
//        var reg = /^(\d)*$/;
//        var reg = /ˆ(?=.*\d).+$/;
        var reg = /.*\d.*/;
        
        if(!reg.test(phoneNumber)) {
            alert("Введіть номер телефону!");
        }
    }
    
    function emailValidation(){
        var email = document.getElementById('email').value;
        var reg = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,4})$/; // регулярка для перевірки мейлу
            //(будьяка кількість букв, цифр, тире і крапок@будьяка кількість букв.(ua,com,com.ua і т.д.))

        if(!reg.test(email)) {
            alert("Введений мейл неправильний! Перевірте його ще раз будь ласка!");
        }
    }
    
    function heightValidation(){
        var height = document.getElementById('height').value;
        var reg = /^(\d\d\d)$/;
            // Зріст в см! Тільки 3-и значне число!

        if(!reg.test(height)) {
            alert("Зріст в см! Тільки 3-и значне число!");
        }
    }
    
    function validateSizeFields(){
        var input1 = document.getElementById('input1').value;

        var reg = /^[1-9]+$/;
    //    Помилкою вважається - від’ємне число, 0, букви.

        var Form = document.getElementById('Form');         
        var childs = Form.children;         

        for(I = 0; I < childs.length; I++) {                    
            var elementIDName = childs[I].getAttribute('id');    

            if(elementIDName){
                var inputValue = document.getElementById(elementIDName).value;
                if(!reg.test(inputValue)) {
                    $("#"+elementIDName).after("<div style='color:white;margin-bottom: 20px;'>Неправильне введення!</div>");
                    $("#"+elementIDName).focus();
                    alert("Неправильне поле розміру: "+ childs[I].getAttribute('placeholder'));
                }
            }
        }
    }
    
    function validate(){
        validateSizeFields();
        fullnameValidation();
        validatePhoneNumber();
        emailValidation();
        heightValidation();
    }
    
    $("#button").click(validate);
});