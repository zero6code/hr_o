;(function($){
       /*
    Typeahead AutoComplete
        http://getbootstrap.com/2.3.2/javascript.html#typeahead
        https://github.com/bassjobsen/Bootstrap-3-Typeahead  สำหรับ bootstrap3
        http://twitter.github.io/typeahead.js/examples/#multiple-datasets  ตกแต่งจัด group
        https://stackoverflow.com/questions/14901628/twitter-bootstrap-typeahead-function-for-no-matches กรณี not match
        http://jsfiddle.net/2d44e6ks/1/  ถ้าไม่คลิก แต่กด enter ให้แสดงรายการแรก ที่มีอยู่ในคำค้น
    chosen Dropdown Autocomplte
        https://jsfiddle.net/dekkard/dzyggftn/
        https://harvesthq.github.io/chosen/  การ config
        https://github.com/harvesthq/chosen/releases  อัพเดทเวอร์ชั่น
        https://harvesthq.github.io/chosen/ วิธีใช้ละเอียด
    bootstrap UI
        http://angular-ui.github.io/bootstrap/   //เป็น ui  สำหรับ bootstrap ตัวใหม่ ดีกว่า jquery-ui เยอะ
    
    DatePicker
        https://cdnjs.com/libraries/bootstrap-datepicker //datepicker core
        http://jojosati.github.io/bootstrap-datepicker-thai/  //datepicker thai
        http://bootstrap-datepicker.readthedocs.io/en/latest/options.html#quick-reference
     */
    $.fn.sortElements = (function(){//ฟังก์ชันเรียงตาราง
            var sort = [].sort;       
            return function(comparator, getSortable) {
                getSortable = getSortable || function(){
                    return this;
                };           
                var placements = this.map(function(){
                    var sortElement = getSortable.call(this),
                        parentNode = sortElement.parentNode,
                        nextSibling = parentNode.insertBefore(document.createTextNode(''),sortElement.nextSibling);
                    return function() {                   
                        if (parentNode === this) {                     
                            throw new Error("You can't sort elements if any one is a descendant of another.");                 
                        }                                
                        parentNode.insertBefore(this, nextSibling);                    
                        parentNode.removeChild(nextSibling);
                    };           
                });           
                return sort.call(this, comparator).each(function(i){             
                    placements[i].call(getSortable.call(this));         
                });       
            };   
        })();
    $.fn.serializeObject = function(){
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            //if (o[this.name] !== undefined) {
            if (typeof o[this.name] !== "undefined") {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }; 
    $.fn.checkID13 =function(id){
        if(id.length !== 13){
            return false;
        }
        for(var i=0,sum=0; i < 12; i++){
            sum += parseFloat(id.charAt(i))*(13-i); 
        }
        if((11-sum%11)%10!==parseFloat(id.charAt(12))){
            return false; 
        }
        return true;
    };
    $.fn.StrToNumInt = function(strNum){
        var numInt = 0;
        if(strNum){ 
            numInt = isNaN(parseInt(strNum.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(strNum.toString().replace(/,/g, ''), 10); 
        }
        return numInt;
    };
    $.fn.digits = function(n){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        });
    };
    $.fn.numberWithCommas = function(number) {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");  
    };//ใส่คอมม่าให้เลขหลักพัน
    $.fn.getBathText = function(inputNumber){
        var getText = function (input) {
          var toNumber = input.toString();
          var numbers = toNumber.split('').reverse();

          var numberText = "/หนึ่ง/สอง/สาม/สี่/ห้า/หก/เจ็ด/แปด/เก้า/สิบ".split('/');
          var unitText = "/สิบ/ร้อย/พัน/หมื่น/แสน/ล้าน".split('/');

          var output = "";
          for (var i = 0; i < numbers.length; i++) {
              var number = parseInt(numbers[i]);
              var text = numberText[number];
              var unit = unitText[i];

              if (number === 0)
                  continue;

              if (i === 1 && number === 2) {
                  output = "ยี่สิบ" + output;
                  continue;
              }

              if (i === 1 && number === 1) {
                  output = "สิบ" + output;
                  continue;
              }


              output = text + unit + output;
          }

          return output;
      };
        var fullNumber = Math.floor(inputNumber);
        var decimal = inputNumber - fullNumber;
        if(decimal === 0){
          return getText(fullNumber) + "บาทถ้วน";
        }else{
          // convert decimal into full number, need only 2 digits
          decimal = decimal * 100;
          decimal = Math.round(decimal);
          return getText(fullNumber) + "บาท" + getText(decimal) + "สตางค์";
        }
    };
    $.fn.myNumberic = function(){
        this.numeric({ allowEmpty:false,live:true})
            .blur(function(){//เหตุการณ์กรอกประมาณการค่าใช้จ่าย
                    $(this).formatCurrency({
                        colorize: true, negativeFormat: '-%s%n', roundToDecimalPlace:0 
                    });
                })
            .keyup(function(e) {
                    var e = window.event || e;
                    var keyUnicode = e.charCode || e.keyCode;
                    if (e !== undefined) {
                        switch (keyUnicode) {
                            case 16: break; // Shift
                            case 27: this.value = ''; break; // Esc: clear entry
                            case 35: break; // End
                            case 36: break; // Home
                            case 37: break; // cursor left
                            case 38: break; // cursor up
                            case 39: break; // cursor right
                            case 40: break; // cursor down
                            case 78: break; // N (Opera 9.63+ maps the "." from the number key section to the "N" key too!) (See: http://unixpapa.com/js/key.html search for ". Del")
                            case 110: break; // . number block (Opera 9.63+ maps the "." from the number block to the "N" key (78) !!!)
                            case 190: break; // .
                            default: $(this).formatCurrency({ colorize: true, negativeFormat: '-%s%n', roundToDecimalPlace: -1, eventOnDecimalsEntered: true });
                        }
                    }
                })
            .on('decimalsEntered', function(e,cents){
                $(e.target).tooltip({title:'กรุณาอย่าใส่เลขทศนิยม (0.' + cents + ')'}).tooltip('show');
            });
        return this;
    };
    $.fn.chkEmptyObj = function(obj){
        var chk = [];
        $.each(obj,function(i,v){
            if(v){
                chk.push('1');
            }else{
                chk.push('0');
            }
        });
        if($.inArray('0',chk)===-1){
            return true;
        }else{
            return false;
        }
    };
    //ฟังก์ชันเกี่ยวกับวันที่และเวลา
    $.fn.isValidDate = function(s) {
        var bits = s.split('/');
        var d = new Date(bits[2] + '/' + bits[1] + '/' + bits[0]);
        return !!(d && (d.getMonth() + 1) === bits[1] && d.getDate() === Number(bits[0]));
    };
    $.fn.datepicker.dates['th'] = {
        days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
        daysShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
        daysMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
        months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        today: "วันนี้"
    };//วันที่ภาษาไทย
    $.fn.StrThaiDate = function(date){
        var thaiCalendarArray = {
            days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
            months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
        };
        var day = date.getDate(),
            month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
        return day+' '+month+' '+year;
    };//$.fn.StrThaiDate(new Date('2019-10-01'))
    $.fn.StrThaiDate2 = function(date){
        var thaiCalendarArray = {
            days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
            months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
        };
        var day = 'วัน'+thaiCalendarArray.days[date.getDay()]+'ที่ '+date.getDate(),
            month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
        return day+' '+month+' '+year;
    };//$.fn.StrThaiDate2(new Date('2019-10-01'))
    $.fn.StrThaiDate3 = function(date){
        var thaiCalendarArray = {
            months: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
        };
        var day = date.getDate(),
            month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
        return day.toString()+' '+month.toString()+' '+ (year.toString()).substring(2,4);
    };//$.fn.StrThaiDate3(new Date('2019-10-01'))
    $.fn.StrThaiDate4 = function(date){
        var returnV='';
        if(date){
            var thaiCalendarArray = {
                months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
            };
            var day = date.getDate(),
            month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
            returnV = 'วันที่ '+day+' เดือน '+month+' พ.ศ. '+ year;
        }
        return returnV;
    };//$.fn.StrThaiDate4(new Date('2019-10-01'))
    $.fn.StrThaiDate5 = function(date){
        var returnV='';
        if(date){
            var thaiCalendarArray = {
                months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
            };
            var day = date.getDate(),
            month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
            returnV = day+' '+month+' '+ year;
        }
        return returnV;
    };//$.fn.StrThaiDate5(new Date('2019-10-01'))
    $.fn.StrThaiDate6 = function(date){
        var thaiCalendarArray = {
            months: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
        };
        var month = thaiCalendarArray.months[date.getMonth()],
            year = date.getFullYear() + 543;  
        return month.toString()+''+ (year.toString()).substring(2,4);
    };//$.fn.StrThaiDate6(new Date('2019-10'))
    $.fn.ReverseStrThaiDate1 = function(StrThaiDate){
        var newDate = $.fn.formatDate3(new Date());
        var months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        if(StrThaiDate){
            if(StrThaiDate.indexOf(" ")>=0){
                var arr = StrThaiDate.split(" "),
                    d=parseInt(arr[0]),m = 1,y=parseInt(arr[2])-543;
                if(months.indexOf(arr[1])>=0){
                    m = months.indexOf(arr[1])+1;
                    var mm = (m<10)?'0'+m:m;
                    var dd = (d<10)?'0'+d:d;
                    newDate = y+'-'+mm+'-'+dd;
                }
            }
        }
        
        return newDate;
    };//$.fn.ReverseStrThaiDate1('1 มกราคม 2563');
    $.fn.ConfigDatePicker = function(){
        this.datepicker({
            //orientation:'top',//auto
            language: 'th-th',//th
            //format: 'yyyy-mm-dd',//yyyy-mm-dd
            isBuddhist: true,
            todayHighlight:true
        }).on('changeDate keyup blur',function(e){//ถ้าเอา blur ออก จะเป็น dd/mm/yyyy
            e.stopPropagation();
            var $this = $(e.target);
            var date  = new Date($this.val());
            if ( Object.prototype.toString.call(date) === "[object Date]" ) {
                if (  isNaN(date.getDate()) === false  ) {//isNaN true คือ ผิดพลาด date.getTime() 
                    //$this.data('time_of_date',date.getTime());
                    var trueMonth = date.getMonth()+1;if(trueMonth<10){trueMonth = "0"+trueMonth;}
                    var trueDate = date.getDate();if(trueDate<10){trueDate = "0"+trueDate;} 
                    var trueFullDate = date.getFullYear()+'-'+trueMonth+'-'+trueDate;//วันที่จริงสำหรับ database
                    $this.data('date_true',trueFullDate);
                    $this.val($.fn.StrThaiDate(date));
                }
            }else{
                $this.val("not Object Date");
            }
        });
        return this;
    };//https://bootstrap-datepicker.readthedocs.io/en/latest/options.html
    $.fn.ConfigDatePicker2 = function(){
        this.datetimepicker().on('changeDate keyup blur',function(e){
            e.stopPropagation();
            var $this = $(e.target);
            var splitDT = $this.val().split(" ");
            var Darr = splitDT[0].split("/");
            var d = new Date(Darr[2], Darr[1] - 1, Darr[0]);
            if ( Object.prototype.toString.call(d) === "[object Date]" ) {
                if (  isNaN(d.getDate()) === false  ) {
                    var trueMonth = d.getMonth()+1;if(trueMonth<10){trueMonth = "0"+trueMonth;}
                    var trueDate = d.getDate();if(trueDate<10){trueDate = "0"+trueDate;} 
                    var trueFullDate = d.getFullYear()+'-'+trueMonth+'-'+trueDate;//วันที่จริงสำหรับ database
                    $this.data('date_true',trueFullDate+' '+splitDT[1]);
                }
            }else{
                $this.val("not Object Date");
            }
        });
        return this;
    };
    $.fn.formatDate1 = function(date){
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [day,month,year].join('/');
    };//แปลง string date ข้อความยาวๆ เป็น DD/MM/YYYY
    $.fn.formatDate2 = function(str){//แปลง string DD/MM/YYYY HH:MM  หรือ YYYY-MM-DD HH:MM เป็น object Date --> new Date(Y,m,d)
        if(str){
            var strarr = (str+'').split(' ');//strarr[1] คือเวลา
            var dArr;
            var d;
            if (str.toLowerCase().indexOf("/") >= 0){
                dArr = strarr[0].split("/");
                d = new Date(dArr[2],dArr[1]-1,dArr[0]);
            }else if(str.toLowerCase().indexOf("-") >= 0){
                dArr = strarr[0].split("-");
                d = new Date(dArr[0],dArr[1]-1,dArr[2]);
            }
            return d;
        }else{
            return "";
        }
    };//แปลง format DD/MM/YYYY HH:MM  หรือ YYYY-MM-DD HH:MM  เป็น object วันที่
    $.fn.formatDate3 = function(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    };//แปลง string date ยาวๆ เป็น YYYY-MM-DD
    $.fn.formatDate4 = function(strDateTime){//แปลงจาก 04/02/2020 13:10 หรือ 04/02/2563 13:10 เป็น วันที่ 5 เดือน กุมภาพันธ์ พ.ศ. 2563
        var Ynow1 = (new Date()).getFullYear(),//ปี คศ ปัจจุบัน
                Ynow2 = Ynow1+543,//ปี พศ ปัจจุบัน
                thaiCalendarArray = {months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]},
                arr,d,dd,m,mm,y,yk,yb,a,
                obj={
                    'strThaiDate1':'',//เช่น วันที่ 1 เดือน กุมภาพันธ์ พ.ศ.2563
                    'strThaiDate2':'',//เช่น 1 กุมภาพันธ์ 2563
                    'formatDate1':'',//เช่น 2020-02-01
                    'formatDate2':'',//
                    'formatTime':''
                };
            if(strDateTime){
                if(strDateTime.indexOf(" ")>=0){
                    a = strDateTime.split(" ");//แยกวันกับเวลาออกจากกัน
                    if(a[0].indexOf("/")>=0){//วันที่มีรูปแบบเป็น dd/mm/yyy หรือไม่
                        arr = a[0].split("/");
                        d = parseInt(arr[0]);
                        dd = ( arr[0].length < 2 ) ? '0'+arr[0] : arr[0];
                        m = thaiCalendarArray.months[parseInt(arr[1])-1]; 
                        mm = ( arr[1].length < 2 ) ? '0'+arr[1] : arr[1];
                        y = parseInt(arr[2]);//ปี่ที่กรอกเข้ามา
                        if( (y>=1857) && (y<=Ynow1) ){//อยู่ในช่วงปี คศ 
                            yk = y;
                            yb = y+543;
                        }else if( (y>=2400) && (y<=Ynow2) ){//อยู่ในช่วงปี พศ
                            yk =y-543;
                            yb = y;
                        }else{//นอกนั้น ให้เป็นปี คศ หรือ พศ ปัจจุบันไปเลย
                            yk = Ynow1;
                            yb = Ynow2;
                        }
                        obj.strThaiDate1 = 'วันที่ '+d+' เดือน '+m+' พ.ศ. '+ yb.toString();
                        obj.strThaiDate2 = d+' '+m+' '+ yb.toString();
                        obj.formatDate1 = yk+'-'+mm+'-'+dd;
                        obj.formatTime = a[1];
                    }
                }
            }
            return obj;
    };//แปลงจาก 04/02/2020 13:10 หรือ 04/02/2563 13:10 เป็น object ได้หลายรูปแบบวันที่
    $.fn.DateDiff = function(a,b){
        return (new Date(new Date(b) - new Date(a)))/1000/60/60/24;
    };//จำนวนวันที่
    $.fn.DateDiff2 = function(a,b){//a = 2019-08-27 3:29
        var aa = new Date(new Date(a).toLocaleString("en-US", {timeZone: "Asia/Bangkok"}));
        var bb = new Date(new Date(b).toLocaleString("en-US", {timeZone: "Asia/Bangkok"}));
        var diffSeconds = (bb - aa)/1000;
        
        //calculate
        var days = Math.floor(diffSeconds / (3600*24));
        var hrs_d = Math.floor((diffSeconds - (days * (3600*24))) / 3600);
        var hrs  = Math.floor(diffSeconds / 3600);
        var mnts = Math.floor((diffSeconds - (hrs * 3600)) / 60);
        var secs = diffSeconds - (hrs * 3600) - (mnts * 60);
        
         //Add 0 if one digit
        if(hrs_d<10) hrs_d = "0" + hrs_d;
        if(mnts<10) mnts = "0" + mnts;
        if(secs<10) secs = "0" + secs;
        return [days,hrs_d,mnts,secs];
    };//input 2019-08-27 3:29 output จำนวนวันที่ return วัน ชั่วโมง นาที
    $.fn.DateDiff3 = function(a,b){
        var diff_date = new Date(new Date(b) - new Date(a));
        var num_years = Math.floor(diff_date/31536000000);
        var num_months = Math.floor((diff_date % 31536000000)/2628000000);
        var num_days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);
        return [num_years,num_months,num_days];
    };//ห่างกัน กี่ปี กี่เดือน กี่วัน ตรวจความถูกต้อง http://embed.plnkr.co/YovdOb/
    $.fn.DateDiff4 = function(d1,d2){
        var newD1,newD2,Ttime1,Ttime2,ret=[];
        if(d1 && d2){
          if(d1.indexOf(" ")>=0 && d2.indexOf(" ")>=0){
              Ttime1 = $.fn.splitStrToArr(d1," ")[1];//time1
              Ttime2 = $.fn.splitStrToArr(d2," ")[1];//time2
              //split date
              if($.fn.splitStrToArr(d1," ")[0].indexOf("/")>=0 && $.fn.splitStrToArr(d2," ")[0].indexOf("/")>=0){
                 newD1 = $.fn.formatDate4(d1).formatDate1;
                 newD2 = $.fn.formatDate4(d2).formatDate1;
                 ret = $.fn.DateDiff2(newD1+' '+Ttime1,newD2+' '+Ttime2);
              }
          }  
        }
        return ret;
    };//เหมือน $.fn.DateDiff2 ต่างกันที่ input เป็น 04/02/2020 13:55 รองรับ พศ ด้วย
    $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        });
    };//ครบ 3 digit ใส่ comma
    $.fn.DaysBetweenDate = function(date1,date2){
        var datediff = $.fn.DateDiff(date1,date2);//ex 2019-10-18,2019-10-19
        var currentDate = new Date(date1),between = [];
        if(datediff>=0){
            while (currentDate <= new Date(date2)) {
                var d = new Date(currentDate);
                var mm = d.getMonth()+1;if(mm<10){mm = "0"+mm;}
                var dd = d.getDate();if(dd<10){dd = "0"+dd;} 
                var date = d.getFullYear()+'-'+mm+'-'+dd;
                between.push(date);
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return between;
        }else{
            return 'error';
        }
    };//ใส่วันที่มา 2 ชุด return array วันที่ทั้งหมด
    $.fn.DateToYearGov = function(date){
        var a = date.split('-');
        var m = parseInt(a[1]);
        var y = parseInt(a[0]);
        var show;
        if( (m>=10) && (m<=12) ){
            show = y+1;
        }else{
            if( (m>=1) && (m<=9) ){
               show = y;
            } 
        }
        return show;
    };//คำนวนว่าวันที่ อยู่ในปีงบประมาณอะไร 2019-10-01 return 2020
    $.fn.CurrDate = function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
    };//วันที่ปัจจุบัน 2019-11-05
    $.fn.HTML_selYear = function(last,next){//เช่น ย้อนไป 2 ปี และ ปีหน้าอีก 2 ปี
        var nowdate = ($.fn.CurrDate()).split("-"),
            yNow = parseInt(nowdate[0]),
            yPrev = yNow -last,
            yNext = yNow + next,
            sel = '<select class="form-control">'+
                    '<option value="0">--select Year--</option>';
                    for(var i = yPrev;i<=yNext;i++){
                        sel+='<option value="'+i+'" >'+(i+543)+'</option>';
                    }
                sel+='</select>';
        return sel;
    };//select option ปีปฏิทิน ย้อนหลัง/เดินหน้า กี่ปี
    $.fn.HTML_selMonth = function(){
        var MonthArr = [
            'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
            'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
        ];
        var sel = '<select class="form-control">'+
                    '<option value="0">--select Month--</option>';
                    for(var i = 1;i<=MonthArr.length;i++){
                        var txti = (i<10)?'0'+i:i;
                        sel+='<option value="'+txti+'">'+MonthArr[i-1]+'</option>';
                    }
            sel+='</select>';
        return sel;
    };
    $.fn.CurrDateTimeCode = function(){
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var Hours = d.getHours();
        var Minutes = d.getMinutes();
        var Seconds = d.getSeconds();
        var ddate = d.getFullYear() +  (month<10 ? '0' : '') + month  + (day<10 ? '0' : '') + day;
        var time = (Hours<10 ? '0':'') + Hours + (Minutes<10 ? '0':'') + Minutes + (Seconds<10 ? '0':'') + Seconds;
        return ddate+time;
    };//ปี เดือน วัน ชั่วโมง นาที วินาที ปัจจุบัน เป็นตัวเลขยาวๆ
    
    //ฟังก์ชันใช้งานทั่วไป
    $.fn.CheckpropStopped = function( event ) {
        var msg = "";
        if ( event.isPropagationStopped() ) {//ถ้าหยุด  bubbling ได้แล้วให้ call 
            msg = "called";
        } else {
            msg = "not called";
        }
        return msg;
        /*
         ถ้าไม่ stopPropagation เหตุการณ์ click ของ child element จะ ลอยขึ้นมาถึงระดับ parent
         อย่างไรก็ตาม ถ้าทุกๆฟังก์ชันเราหยุด bubling ไว้หมด ตัว parent เองต้องแน่ใจว่า ฟังก์ชันภายใต้ parent จะ run ได้ 
         ด้วยการตรวจสอบ isPropagationStopped() ถ้าหยุดแล้วให้ผ่านได้ (return true)
            $( "button" ).click(function(event) {
              $.fn.CheckpropStopped( event );
              event.stopPropagation();
              $.fn.CheckpropStopped( event );
            });
        */
    };//ตรวจสอบว่าหยุด bubbling แล้วยัง ถ้าหยุดแล้ว ให้ทำงานต่อ
    $.fn.removeItemArray = function(arr,item){
        arr =  $.grep(arr, function(value) {
            return value !== item;
        }); 
        return arr;
    };//remove ค่าบางค่าใน array ออก
    $.fn.randomColorGenerator = function() {
        var back = ["#ff0000","blue","gray"];
        var rand = back[Math.floor(Math.random() * back.length)];
        return rand;
    };
    $.fn.randomColorTD = function(txtgroup){
        var $td = this;
        var colors = [
            '#F9C9C9','#F9DCC9','#F9E2C9','#F9E9C9','#F9F2C9','#F9F9C9','#F1F9C9','#E6F9C9','#DBF9C9','#C9F9CE',
            '#C9F9E0','#C9F9F2','#C9F6F9','#C9EAF9','#C9DEF9','#C9D3F9','#CAC9F9','#D6C9F9','#DDC9F9','#E7C9F9',
            '#EFC9F9','#F7C9F9','#F9C9E1','#F9C9D8','#F9C9CE'
        ];
        var elmIDgroup = [];
        //group element นั้นๆ ก่อนว่าสีเดียวกันหรือไม่
        $.each($td,function(){
            if($(this).data(txtgroup)){
                if($.inArray($(this).data(txtgroup),elmIDgroup) === -1){
                    elmIDgroup.push($(this).data(txtgroup));
                } 
            }
        });
        
        if(elmIDgroup.length!==0){
            $.each(elmIDgroup,function(i,v){
                //var randomColor = colors[ Math.floor( Math.random() * colors.length ) ];//สุ่มสี
                var randomColor = colors[i];//ไม่สุ่มสี เอาสีตาม จำนวนรอบ i
                $.each($td,function(){
                    if($(this).data(txtgroup)===v){//กำหนดสีให้กับค่าแต่ละ data(txtgroup)
                         $(this).css({'background-color':randomColor});
                    }
                });
            });
        };
        
        return this;
    };
    $.fn.objHasValue = function(obj, key, value){
        return obj.hasOwnProperty(key) && obj[key] === value;
        /*
            var test = [{name : "joey", age: 15}, {name: "hell", age: 12}]
            console.log(test.some(function(boy) { return hasValue(boy, "age", 12); }));
            // => true - there is a twelve-year-old boy in the array
        */
    };//ตรวจสอบว่า object array นั้นๆ มี property หรือ value ตามที่ต้องการหรือไม่
    $.fn.splitStrToArr = function(str,sep){
        var arr = [];
        if(str){
            if(str.indexOf(sep)>=0){
                arr = str.split(sep);
            }
        }
        return arr;
    };
    $.fn.groupTable = function($rows, startIndex, total){
        /*
         groupTable method has 3 arguments:
            $rows: jQuery object of table rows to be grouped
            startIndex: index of first column to be grouped
            total: total number of columns to be grouped
            groupTable($('#myTable tr:has(td)'),0,3);
            $('#myTable .deleted').remove();
        */
        if (total === 0){
            return;
        }
        var i , currentIndex = startIndex, count=1, lst=[];
        var tds = $rows.find('td:eq('+ currentIndex +')');
        var ctrl = $(tds[0]);
        lst.push($rows[0]);
        for (i=1;i<=tds.length;i++){
            if (ctrl.text() ===  $(tds[i]).text()){
                count++;
                $(tds[i]).addClass('deleted');
                lst.push($rows[i]);
            }else{
                if (count>1){
                    ctrl.attr('rowspan',count);
                    $.fn.groupTable($(lst),startIndex+1,total-1);
                }
                count=1;
                lst = [];
                ctrl=$(tds[i]);
                lst.push($rows[i]);
            }
        }
    };
    $.fn.checkKeyboard = function(e){
      var re = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_]/g;
      var a = e.key.match(re);
      if (a === null){
        //alert('Error: none Latin');
        return false;
      }
      return true;
    };
    $.fn.ArabicToThaiNum = function(strArabicNum){//ใส่เลขอารบิคเข้ามาอย่างเดียว กลายเป็นเลขไทย หลักพันใส่คอมม่า ไม่ได้
        var thaiNum = ['๐','๑','๒','๓','๔','๕','๖','๗','๘','๙'];
        strArabicNum.toString().replace(/\d+/,'');//ของเดิมไม่มี toString()
        return strArabicNum.toString().replace(/[0-9]/g, function(w){
            return thaiNum[+w];
        });
    };
    $.fn.ArabicToThaiNum2 = function(str){//ใส่ข้อความมีตัวเลขอารบิคเข้ามา กลายเป็นข้อความ และเลขไทย หลักพันใส่คอมม่า ไม่ได้
        var txtNum = str.match(/\d+/);
        var thaiNum = ['๐','๑','๒','๓','๔','๕','๖','๗','๘','๙'];
        var NumThai = txtNum.toString().replace(/[0-9]/g, function(w){
            return thaiNum[+w];
        });
        return str.toString().replace(txtNum,NumThai);
    }; 
    $.fn.chkEmptyText = function(str){
       return  /([^\s])/.test(str);
    };//check ค่าว่างของ element text
    $.fn.textWidth = function(str){
        var span = $('<span id="calTxtWidth">'+str+'</span>');
        $(document.body).append(span);
        var txtWidth = 0;
        span.each(function(index,value){
           txtWidth = $(value).width();
        });
        $(document.body).find("#calTxtWidth").remove();
        return txtWidth;
    };//หาความกว้างของ string หน่วยเป็น px
    $.fn.isJson = function(item) {
        item = typeof item !== "string"? JSON.stringify(item): item;
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }
        return false;
    };
    $.fn.callDataByFieldName = function(fieldName,obj){
        var returnV = [];
        if(typeof obj ==='object'){
            $.each(obj,function(i,v){
                if(Object.keys(v).length > 0){
                    var key = Object.keys(v);
                    if($.inArray(fieldName,key)!==-1){
                        if($.fn.isJson(v[fieldName])){
                            var jsonObj = $.parseJSON(v[fieldName]);
                            if(typeof jsonObj ==='object' ){
                                if(jsonObj){
                                    returnV.push(jsonObj);
                                }
                            }
                        }else{
                            if(v[fieldName]){
                                returnV.push(v[fieldName]);
                            }
                        }    
                    }
                }
            });
        }
        return returnV;
    };//ใส่ 'fieldName',[{field:val},{field:val}]  return array ตามชื่อ field นั้นๆ
    $.fn.callDataByFieldName2 = function(fieldName,obj){
        var returnV = '';
        if(typeof obj ==='object'){
            $.each(obj,function(fn,val){
                if(fieldName===fn){
                    if(val){
                        returnV = val;
                    }  
                }
            });
        }
        return returnV;
    };//เหมือนกัน แต่ต่างกันตรงที่ loop {field:val} ไม่ใช่ loop [{},{}]
    $.fn.print_pdf = function(contentObj,htmlTable){
        function ParseContainer(cnt, e, p, styles) {
                var elements = [];
                var children = e.childNodes;
                if (children.length !== 0) {
                    for (var i = 0; i < children.length; i++) p = ParseElement(elements, children[i], p, styles);
                }
                if (elements.length !== 0) {            
                    for (var i = 0; i < elements.length; i++) cnt.push(elements[i]);
                }
                return p;
            };
        function ComputeStyle(o, styles) {
                for (var i = 0; i < styles.length; i++) {
                    var st = styles[i].trim().toLowerCase().split(":");
                    //console.log('st[0]='+st[0]+',st[1]='+st[1]);
                    if (st.length === 2) {
                        switch (st[0]) {
                            case "font-size":{
                                o.fontSize = parseInt(st[1]);
                                break;
                            }
                            case "text-align": {
                                switch (st[1]) {
                                    case "right": o.alignment = 'right'; break;
                                    case "center": o.alignment = 'center'; break;
                                    case "left": o.alignment = 'left'; break;
                                }
                                break;
                            }
                            case "font-weight": {
                                switch (st[1]) {
                                    case "bold": o.bold = true; break;
                                }
                                break;
                            }
                            case "text-decoration": {
                                switch (st[1]) {
                                    case "underline": o.decoration = "underline"; break;
                                }
                                break;
                            }
                            case "font-style": {
                                switch (st[1]) {
                                    case "italic": o.italics = true; break;
                                }
                                break;
                            }
                        }
                    }
                }
            };
        function ParseElement(cnt, e, p, styles) {
                if (!styles) styles = [];
                if (e.getAttribute) {
                    var nodeStyle = e.getAttribute("style");
                    if (nodeStyle) {
                        var ns = nodeStyle.split(";");
                        for (var k = 0; k < ns.length; k++) styles.push(ns[k]);
                    }
                }
                switch (e.nodeName.toLowerCase()) {
                    case "#text": {
                        var t = { text: e.textContent.replace(/\n/g, "") };
                        if (styles) ComputeStyle(t, styles);
                        p.text.push(t);
                        break;
                    }
                    case "b":case "strong": {
                        //styles.push("font-weight:bold");
                        ParseContainer(cnt, e, p, styles.concat(["font-weight:bold"]));
                        break;
                    }
                    case "u": {
                        //styles.push("text-decoration:underline");
                        ParseContainer(cnt, e, p, styles.concat(["text-decoration:underline"]));
                        break;
                    }
                    case "i": {
                        //styles.push("font-style:italic");
                        ParseContainer(cnt, e, p, styles.concat(["font-style:italic"]));
                        //styles.pop();
                        break;
                        //cnt.push({ text: e.innerText, bold: false });
                    }
                    case "span": {
                        ParseContainer(cnt, e, p, styles);
                        break;
                    }
                    case "br": {
                        p = CreateParagraph();
                        cnt.push(p);
                        break;
                    }
                    case "table":
                        {
                            var t = {
                                table: {
                                    widths: [],
                                    body: []
                                }
                            };
                            var border = e.getAttribute("border");
                            var isBorder = false;
                            if (border) if (parseInt(border) === 1) isBorder = true;
                            if (!isBorder) t.layout = 'noBorders';
                            ParseContainer(t.table.body, e, p, styles);

                            var widths = e.getAttribute("widths");
                            if (!widths) {
                                if (t.table.body.length !== 0) {
                                    if (t.table.body[0].length !== 0) for (var k = 0; k < t.table.body[0].length; k++) t.table.widths.push("*");
                                }
                            } else {
                                var w = widths.split(",");
                                for (var k = 0; k < w.length; k++) t.table.widths.push(w[k]);
                            }
                            cnt.push(t);
                            break;
                        }
                    case "tbody": {
                        ParseContainer(cnt, e, p, styles);
                        //p = CreateParagraph();
                        break;
                    }
                    case "tr": {
                        var row = [];
                        ParseContainer(row, e, p, styles);
                        cnt.push(row);
                        break;
                    }
                    case "td": {
                        p = CreateParagraph();
                        var st = {stack: []};
                        st.stack.push(p);

                        var rspan = e.getAttribute("rowspan");
                        if (rspan) st.rowSpan = parseInt(rspan);
                        var cspan = e.getAttribute("colspan");
                        if (cspan) st.colSpan = parseInt(cspan);

                        ParseContainer(st.stack, e, p, styles);
                        cnt.push(st);
                        break;
                    }
                    case "div":case "p": {
                        p = CreateParagraph();
                        var st = {stack: []};
                        st.stack.push(p);
                        ComputeStyle(st, styles);
                        ParseContainer(st.stack, e, p);

                        cnt.push(st);
                        break;
                    }
                    default: {
                        console.log("Parsing for node " + e.nodeName + " not found");
                        break;
                    }
                }
                return p;
            };
        function ParseHtml(cnt, htmlText) {
                var html = $(htmlText.replace(/\t/g, "").replace(/\n/g, ""));
                var p = CreateParagraph();
                for (var i = 0; i < html.length; i++) ParseElement(cnt, html.get(i), p);
            }//content = [];ParseHtml(content, simpleHtm);pdfMake.createPdf({content: content}).download();
        function CreateParagraph() {
                var p = {text:[]};
                return p;
            }
        function Null_htmlTable(){
            var x = 
              '<table style="font-size:1px;">'+
                '<tr><td></td></tr>'+
              '</table>';
            return x;
        };
        var ObjReturnPage = {
            pageSize: 'A4',
            pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
            content: [{}]
        };
        
        //build html table เข้ากับ content ไม่งั้น parse ไม่ได้
        if(htmlTable){
           ParseHtml(contentObj,htmlTable); 
        }else{
           ParseHtml(contentObj,Null_htmlTable());  
        }
        //loop content
        $.each(contentObj,function(i,v){
            ObjReturnPage.content.push(v);
        });
        
        return ObjReturnPage;
    };//pdfMake.createPdf($.fn.print_pdf(content,null)).open();  content = [{text: 'ตัวอย่างเนื้อหา',fontSize:16,decoration: 'underline'}];
    $.fn.chkedRdoByValue = function(vals){
        var $this = this;
        var name = $this.attr('name');
        var elm;
        $this.each(function(){
            if($(this).val()===vals){
                $("input[name='"+name+"'][value='"+vals+"']").prop('checked',true);
                elm = $("input[name='"+name+"'][value='"+vals+"']");
            }
        });
        $this = elm;
        return $this;
    };//ให้ value มา เพื่อ checked radio
    
    //ฟังก์ชัน Call Data จาก table ต่างๆ
    $.fn.def_OnlineUser = function(){
        var def = $.Deferred();
        $.ajax({
            url:"OnlineUserData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//บุคลากรที่กำลัง login
    $.fn.def_OnlineUserLastSession = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"OnlineUserLastSession.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูลของบุคลากร หลังจากที่ login ครั้งล่าสุด
    $.fn.def_Boss_skph = function(){
        var def = $.Deferred();
        $.ajax({
            url:"BossSkphData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };
    $.fn.setDepData = function(ajaxDepData){
        var deparr = $.map(ajaxDepData,function(v,i){//ถ้าต้องโอนข้อมูลบางอย่างจาก array หนึ่ง ไป array ใหม่ ต้อง Map array
            return {id:v.dep_code,name:v.dep_name};
        });
        this.attr("data-DepCode","");
        return this.typeahead({ 
            source:deparr,//deparr,dep.dep_name
            autoSelect:true,
            items:10,
            showHintOnFocus:true//จะบังคับให้มีข้อมูลเลยหรือไม่เมื่อ focus
        }).off('change').change(function(e){
            e.stopPropagation();
            var v = $(e.target).val();
            if(  v !=='errorNotMatch'  ){
                $.each(deparr,function(i,j){
                    if(v===j.name){
                        $(e.target).data("DepCode",j.id+'#'+j.name);//dep3_gwA#กลุ่มงานการเงินและบัญชี
                    }
                });
            }else{
                 $(e.target).data("DepCode",v);
            }
           // $(e.target).off('change');
        }); 
    };//โยน ajax dep เข้าไป elm นั้นกลายเป็น autocomplete พร้อม data("DepCode")
    $.fn.def_DepData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"DepartmentData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//หน่วยงาน
    $.fn.def_PositionData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"PositionData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ตำแหน่ง
    $.fn.def_Position_byType1Data = function(){
        var def = $.Deferred();
        $.ajax({
            url:"PositionByType1Data.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ตำแหน่ง
    $.fn.def_ClassPositionData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"ClassPositionData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ระดับของตำแหน่ง
    $.fn.def_GovernmentEmpType = function(){
        var def = $.Deferred();
        $.ajax({
            url:"GovernmentEmpTypeData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ประเภทบุคลากร เช่น ขรก พกส ฯลฯ
    $.fn.def_GroupWorkData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"GroupworkData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//กลุ่มภารกิจ
    $.fn.def_ProvinceData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"ProvinceData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//จังหวัด
    $.fn.def_PersonData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"PersonData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ตารางperson
    $.fn.def_PersonDataCond = function(cond){// เช่น {cond1:'fname="ชญานนท์"'}
        var def = $.Deferred();
        $.ajax({
            url:"PersonData2.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{cond:JSON.stringify(cond)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ตาราง person แต่ใส่ parameter sql ได้  {c1:'status_note in ("1","2")',....}
    $.fn.def_PersonUpdateByField = function(person_id,objField){
        var def = $.Deferred();
        $.ajax({
            url:"PersonUpdateByField.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id),objField:JSON.stringify(objField)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise(); 
    };//เช่น $.fn.def_PersonUpdateByField('9',{'dep_code':'dep2_gwA'})
    $.fn.def_DepartmentOtherData = function(){
        var def = $.Deferred();
        $.ajax({
            url:"DepartmentOtherData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//หน่วยงานในสังกัดกรมสุขภาพจิต
    $.fn.def_StatusNote = function(){
        var def = $.Deferred();
        $.ajax({
            url:"StatusNoteData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//สถานะบุคลากร เช่น ปฏิบัติงานจริง ไปช่วย มาช่วย ตำแหน่งว่าง
    $.fn.def_DocNum = function(){
        var def = $.Deferred();
        $.ajax({
            url:"DocNumData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เลขหนังสือ
    $.fn.def_Competency = function(){
        var def = $.Deferred();
        $.ajax({
            url:"CompetencyData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//สมรรถนะ
    $.fn.def_Skill = function(){
        var def = $.Deferred();
        $.ajax({
            url:"SkillData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ทักษะ
    
    //ระบบไปราชการ
    $.fn.def_SchGogov = function(){
        var def = $.Deferred();
        $.ajax({
            url:"SchGogov.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ค้นรายการไปราชการ
    $.fn.def_GogovType = function(){
        var def = $.Deferred();
        $.ajax({
            url:"GogovTypeData.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ประเภทไปราชการ (gogov_type@admin_hr)
    $.fn.def_GogovBackData = function(gogovID){
        var def = $.Deferred();
        $.ajax({
            url:"GogovBackData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'gogovID':JSON.stringify(gogovID)}//gogovID = id ขาไปจากตาราง gogov_new
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูลกลับจากไปราชการ (gogov_back@admin_hr)
    $.fn.def_GogovDataByPersonID = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"GogovDataByPersonID.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'person_id':JSON.stringify(person_id)}//id บุคลากร ขากลับจากไปราชการ (gogov_back@admin_hr)
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูล ไป-กลับ จากไปราชการ (ตาราง gogov_new,gogov_back)
    
    //ระบบฐานข้อมูลวัคซีน
    $.fn.def_VaccineName = function(){
        var def = $.Deferred();
        $.ajax({
            url:"VaccineName.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกรายชื่อวัคซีนทั้งหมดในระบบ
    $.fn.def_ImmunizationName = function(){
        var def = $.Deferred();
        $.ajax({
            url:"Immunization.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกรายชื่อภูมิคุ้มกัน
    
    //ระบบวันลา
    $.fn.def_LeaveFullHalfType = function(){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveFullHalfType.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกตาราง leave_full_half_type
    $.fn.def_LeaveAbsenceName = function(){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveAbsenceName.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกตาราง leave_absence_name
    $.fn.def_LeaveAbsenceVacation = function(){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveAbsenceVacation.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกตาราง leave_absence_vacation
    $.fn.def_LeaveAbsenceVacationSummary = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveAbsenceVacationSummary.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'person_id':JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกตาราง leave_absence_vacation_summary  ซึ่งเป็นการสรุปวันลาพักผ่อน
    $.fn.def_CallLeave = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };
    $.fn.def_CallLeaveParam = function(param){
        var def = $.Deferred();
        if(typeof param ==='object'){
            $.ajax({
                url:"LeaveCallParam.php", 
                type:"post",
                cache:false,
                dataType:'json',
                data:{'param':JSON.stringify(param)}
            }).done(function(data){
                def.resolve(data);
            });
        }else{
            def.resolve({});
        }
        return def.promise();
    };//{'person_id':OnlineUser.person_id,'leave_year_gov':new Date(OnlineUser.dateNow2).getFullYear()}
    $.fn.def_CallLeaveParamAdmin = function(param){
        var def = $.Deferred();
        if(typeof param ==='object'){
            $.ajax({
                url:"LeaveCallParamAdmin.php", 
                type:"post",
                cache:false,
                dataType:'json',
                data:{'param':JSON.stringify(param)}
            }).done(function(data){
                def.resolve(data);
            });
        }else{
            def.resolve({});
        }
        return def.promise();
    };//{'person_id':personData.id,'leave_year_gov':$.fn.formatDate3(new Date()).getFullYear()} 
    $.fn.def_LeaveWaitPerson = function(){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveWaitPerson.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//หารายชื่อบุคลากร (เช่น person_id) ที่ รอพิจารณาใบลา (ตาราง leave_absence > status_use=E)
    $.fn.def_LeaveDelByID = function(leave_id){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveDelByID.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{leave_id:JSON.stringify(leave_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise(); 
    };//ลบวันลาจาก id ตาราง leave_absence (status_use=N)
    $.fn.def_LeaveDelBySerialgen = function(serialgen){
        var def = $.Deferred();
        $.ajax({
            url:"LeaveDelBySerialgen.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{serialgen:JSON.stringify(serialgen)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise(); 
    };//ลบวันลาทุกวันที่มี serialgen เดี่ยวกัน ตาราง leave_absence (record_use=N)

    //ระบบบันทึกผลการพัฒนา ผ่านการจัดโครงการใน ร.พ.
    $.fn.def_CallPmsResult = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"PmsResultData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'person_id':JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกผลการเลื่อนเงินเดือนย้อนหลังตาม person_id
    $.fn.def_CallDevelopByPm = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"DevelopByPmData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'person_id':JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูลฝึกอบรมพัฒนา กรณีจัดโครงการในโรงพยาบาล
    $.fn.def_CallDevelopBySelf = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"DevelopBySelfData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{'person_id':JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
     };//ข้อมูลฝึกอบรมพัฒนา (สมุดบันทึกการพัฒนาตนเองเล่มสีชมพู)
    //ระบบอัตรากำลัง
    $.fn.def_WorkForce1 = function(objParam){
        var def = $.Deferred();
        $.ajax({
            url:"WorkForceData1.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(objParam)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูลอัตรากำลัง 1 แสดงจำนวน {position_by_type1:[1,2],groupwork:onlineUser.groupwork_code} 

    $.fn.def_WorkForce2 = function(objParam){
        var def = $.Deferred();
        $.ajax({
            url:"WorkForceData2.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(objParam)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อมูลอัตรากำลัง 1 แสดงจำนวน {position_by_type1:[1,2],groupwork:['gwA','gwD']} 
    $.fn.def_WorkForce3 = function(objParam){
        var def = $.Deferred();
        $.ajax({
            url:"WorkForceData3.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(objParam)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };
    //ระบบฐานข้อมูล Biofeedback
    $.fn.def_BiofeedbackCallHRV = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"Biofeedback_callHrvData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูล HRV จากตาราง  biofeedback_hrv
    $.fn.def_BiofeedbackCallAPG = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"Biofeedback_callApgData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูล APG จากตาราง  biofeedback_apg
    $.fn.def_BiofeedbackCallAPGbyParam = function(obj){
        var def = $.Deferred();
        $.ajax({
            url:"Biofeedback_callApgDataParam.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(obj)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูล APG จากตาราง  biofeedback_apg โดย object {person_id:'',yeargov:''}
    $.fn.def_BiofeedbackCallSTRESS = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"Biofeedback_callStressData.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูล Stress จากตาราง  biofeedback_stress
    $.fn.def_BiofeedbackCallSTRESSbyParam = function(obj){
        var def = $.Deferred();
        $.ajax({
            url:"Biofeedback_callStressDataParam.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(obj)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูล Stress จากตาราง  biofeedback_stress โดย object {...}

    //ข้อคำถามแบบประเมิน-คัดกรอง ต่างๆ
    $.fn.def_screening_st5_question = function(){
        var def = $.Deferred();
        $.ajax({
            url:"ScreeningST5Question.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อคำถาม ST-5
    $.fn.def_screening_covid19_question = function(){
        var def = $.Deferred();
        $.ajax({
            url:"ScreeningCOVID19Question.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ข้อคำถาม COVID-19
    $.fn.def_screening_st5covid19burnout_result = function(person_id){
        var def = $.Deferred();
        $.ajax({
            url:"ScreeningST5Covid19BurnOutResult.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{person_id:JSON.stringify(person_id)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//ดูผล st5 covid19 burnout รายบุคคล (ดูทั้งหมดทุกปีงบ)

    //ฐานข้อมูลวัคซีน
    $.fn.def_getVaccineByParam = function(obj){
        var def = $.Deferred();
        $.ajax({
            url:"Vaccine_callVaccineDataParam.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(obj)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูลจากตาราง vaccine_person_get_vaccine โดย object {....}
    $.fn.def_getImmunizationByParam = function(obj){
        var def = $.Deferred();
        $.ajax({
            url:"Vaccine_callimmunizationDataParam.php", 
            type:"post",
            cache:false,
            dataType:'json',
            data:{param:JSON.stringify(obj)}
        }).done(function(data){
            def.resolve(data);
        });
        return def.promise();
    };//เรียกข้อมูลจากตาราง vaccine_person_get_immunization โดย object {....}

    //html select ที่ใช้บ่อยๆ
    $.fn.html_GroupWork = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.groupwork_code+'">'+v.groupwork_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Position = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.position_code+'">'+v.position_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_PositionByType1 = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.id+'">'+v.position_by_type1_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_GovernmentEmpType = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.government_emp_type_code+'">'+v.government_emp_type_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Department = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.dep_code+'">'+v.dep_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Class1 = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.class_position_shortname+'">'+v.class_position_type_name2+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_StatusNote = function(data){
        var x = '<select  class="form-control noradius" style="width:100%;">'+
                   '<option value="">ไม่ระบุ</option>';
                   $.each(data,function(i,v){
                       x+='<option value="'+v.id+'">'+v.status_note_name+'</option>';
                   });
            x+='</select>';
        return x;
    };
    $.fn.html_DepartmentOther = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.id+'">'+v.dmh_child_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Competency = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.id+'">'+v.competency_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Skill = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.id+'">'+v.skill_name+'</option>';
            });
            x+='</select>';
        return x;
    };
    $.fn.html_Person = function(ajaxData){
        var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;"><option value="">ไม่ระบุ</option>';
            $.each(ajaxData,function(i,v){
                x+='<option value="'+v.id+'">'+(v.pname+v.fname+" "+v.lname)+'</option>';
            });
            x+='</select>';
        return x;
    };

    $.fn.def_htmlModal = function(){
        var def = $.Deferred();
        var txt = '<div class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
          '<div class="modal-dialog" role="document">'+
              '<div class="modal-content">'+
                  '<div class="modal-header">'+//chayanon-modal-header
                    '<a href="#" data-dismiss="modal" class="pull-right" style="position:relative;top:-2px;">'+
                      '<i class="fa fa-times-circle fa-2x" aria-hidden="true" style="color:black;"></i>'+
                    '</a>'+  
                    '<h4 class="modal-title" style="color:black;">Header</h4>'+
                  '</div>'+
                  '<div class="modal-body"></div>'+
                  '<div class="modal-footer">'+
                      '<button type="button"  class="btn" style="color:black;"></button>'+//chayanon-btn3d-orange
                  '</div>'+
              '</div>'+
          '</div>'+
        '</div>';
        def.resolve($(txt));
        return def.promise();
    };//modal
    $.fn.printIt = function(htmlTxT) {
        var win = window.open();
        win.document.open();
        win.document.write(htmlTxT);
        win.document.close();
        win.print();
        win.close();
    };
    $.fn.pdfMakeHtml = function(myHtml){
        //วิธีใช้  $.fn.pdfMakeHtml(obj.prop('outerHTML'));
        function ParseContainer(cnt, e, p, styles) {
            var elements = [];
            var children = e.childNodes;
            if (children.length !== 0) {
                for (var i = 0; i < children.length; i++) p = ParseElement(elements, children[i], p, styles);
            }
            if (elements.length !== 0) {            
                for (var i = 0; i < elements.length; i++) cnt.push(elements[i]);
            }
            return p;
        }
        function ComputeStyle(o, styles) {
            for (var i = 0; i < styles.length; i++) {
                var st = styles[i].trim().toLowerCase().split(":");
                if (st.length === 2) {
                    switch (st[0]) {
                        case "font-size":{
                            o.fontSize = parseInt(st[1]);
                            break;
                        }
                        case "text-align": {
                            switch (st[1]) {
                                case "right": o.alignment = 'right'; break;
                                case "center": o.alignment = 'center'; break;
                            }
                            break;
                        }
                        case "font-weight": {
                            switch (st[1]) {
                                case "bold": o.bold = true; break;
                            }
                            break;
                        }
                        case "text-decoration": {
                            switch (st[1]) {
                                case "underline": o.decoration = "underline"; break;
                            }
                            break;
                        }
                        case "font-style": {
                            switch (st[1]) {
                                case "italic": o.italics = true; break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        function ParseElement(cnt, e, p, styles) {
            if (!styles) styles = [];
            if (e.getAttribute) {
                var nodeStyle = e.getAttribute("style");
                if (nodeStyle) {
                    var ns = nodeStyle.split(";");
                    for (var k = 0; k < ns.length; k++) styles.push(ns[k]);
                }
            }
            switch (e.nodeName.toLowerCase()) {
                case "#text": {
                    var t = { text: e.textContent.replace(/\n/g, "") };
                    if (styles) ComputeStyle(t, styles);
                    p.text.push(t);
                    break;
                }
                case "b":case "strong": {
                    //styles.push("font-weight:bold");
                    ParseContainer(cnt, e, p, styles.concat(["font-weight:bold"]));
                    break;
                }
                case "u": {
                    //styles.push("text-decoration:underline");
                    ParseContainer(cnt, e, p, styles.concat(["text-decoration:underline"]));
                    break;
                }
                case "i": {
                    //styles.push("font-style:italic");
                    ParseContainer(cnt, e, p, styles.concat(["font-style:italic"]));
                    //styles.pop();
                    break;
                    //cnt.push({ text: e.innerText, bold: false });
                }
                case "span": {
                    ParseContainer(cnt, e, p, styles);
                    break;
                }
                case "br": {
                    p = CreateParagraph();
                    cnt.push(p);
                    break;
                }
                case "table":{
                    var t = {table: {widths: [],body: []}};
                    var border = e.getAttribute("border");
                    var isBorder = false;
                    if (border) if (parseInt(border) === 1) isBorder = true;
                    if (!isBorder) t.layout = 'noBorders';
                    ParseContainer(t.table.body, e, p, styles);

                    var widths = e.getAttribute("widths");
                    if (!widths) {
                        if (t.table.body.length !== 0) {
                            if (t.table.body[0].length !== 0) for (var k = 0; k < t.table.body[0].length; k++) t.table.widths.push("*");
                        }
                    } else {
                        var w = widths.split(",");
                        for (var k = 0; k < w.length; k++) t.table.widths.push(w[k]);
                    }
                    cnt.push(t);
                    break;
                }
                case "tbody": {
                    ParseContainer(cnt, e, p, styles);
                    //p = CreateParagraph();
                    break;
                }
                case "tr": {
                    var row = [];
                    ParseContainer(row, e, p, styles);
                    cnt.push(row);
                    break;
                }
                case "td": {
                    p = CreateParagraph();
                    var st = {stack: []};
                    st.stack.push(p);

                    var rspan = e.getAttribute("rowspan");
                    if (rspan) st.rowSpan = parseInt(rspan);
                    var cspan = e.getAttribute("colspan");
                    if (cspan) st.colSpan = parseInt(cspan);

                    ParseContainer(st.stack, e, p, styles);
                    cnt.push(st);
                    break;
                }
                case "div":case "p": {
                    p = CreateParagraph();
                    var st = {stack: []};
                    st.stack.push(p);
                    ComputeStyle(st, styles);
                    ParseContainer(st.stack, e, p);

                    cnt.push(st);
                    break;
                }
                default: {
                    console.log("Parsing for node " + e.nodeName + " not found");
                    break;
                }
            }
            return p;
        }
        function ParseHtml(cnt, htmlText) {
            var html = $(htmlText.replace(/\t/g, "").replace(/\n/g, ""));
            var p = CreateParagraph();
            for (var i = 0; i < html.length; i++) ParseElement(cnt, html.get(i), p);
        }
        function CreateParagraph() {
            var p = {text:[]};
            return p;
        }
        var content = [];
        ParseHtml(content,myHtml);
        pdfMake.createPdf({
            content: [
                {//image เข้า http://localhost/convertImgBase64/ ก่อน
                   // image: 'data:image/png;base64,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',
                    image:'data:image/png;base64,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',
                    width: 60,
                    height: 57
                },
                content
            ]
        }).open();//หรือ .print(); .download();
    };

})(jQuery);
