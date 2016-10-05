	// 공백 제거 함수	   > 2016-10-05
	function trim(str) {
	    str = input.replace(/(^\s*)|(\s*$)/, "");
	    return str;
	} 

	// 공백문자 제거(왼쪽)
	function ltrim(str)
	{
	    return str.replace(/^\s+/, "");
	}

	// 공백문자 제거(오른쪽)
	function rtrim(str)
	{
	    return str.replace(/\s+$/, "");
	}

	// 공백문자 제거(양쪽)
	function trim(str)
	{
	    return rtrim(ltrim(str));
	}

 	// 입력값이 null or "" 유무
	function isNull(input) {	
	    if (input.value == null || input.value == "") {	
	        return true;	
	    }	
	    return false;	
	}
	
	// 빈문자열인지 유무, 스페이스만 있어도 빈문자열 처리
	function isEmpty(input) {
	    if (input.value == null || input.value.replace(/ /gi,"") == "") {
	        return true;	
	    }	
	    return false;	
	}               
	
	// 숫자(0~9)와 문자(A(a)~Z(z))로만 이루어진 문자열 유효 
	// space=true 공백문자 포함
	function isAlphanNumeric(input, space)
	{
	    if (space)
	    {
	        var reg = /^[a-z A-Z0-9]+$/;
	        return reg.test(input);
	    }
	    else
	    {
	        var reg = /^[a-zA-Z0-9]+$/;
	        return reg.test(input);
	    }
	
	}

	// 문자(A(a)~Z(z))로만 이루어진 문자열 유효 
	// space=true 공백문자 포함
	function isAlpha(input, space)
	{
	    if (space)
	    {
	        var reg = /^[a-z A-Z]+$/;
	        return reg.test(input);
	    }
	    else
	    {
	        var reg = /^[a-zA-Z]+$/;
	        return reg.test(input);
	    }
	}

	// 값에 특정문자열이 포함되어 있는지 유무
	// input.name,"!,*&^%$#@~;"
	function isContainsChars(input,chars) {
	    for (var inx = 0; inx < input.value.length; inx++) {	
	       if (chars.indexOf(input.value.charAt(inx)) != -1)	
	           return true;	
	    }	
	    return false;	
	}

	// 값이 특정문자열만으로 되어 있는지 유무
	// input.name,"0123456789"
	function isContainsCharsOnly(input,chars) {	
	    for (var inx = 0; inx < input.value.length; inx++) {	
	       if (chars.indexOf(input.value.charAt(inx)) == -1)	
	           return false;	
	    }	
	    return true;	
	}

	// 알파벳만 있는지 유무
	function isAlphaWithChars(input) {	
	    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";	
	    return isContainsCharsOnly(input,chars);	
	}

	// 대문자 알파벳만 있는지 유무
	function isUpperCaseAlphaWithChars(input) {	
	    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
	    return isContainsCharsOnly(input,chars);	
	}

	// 소문자 알파벳만 있는지 유무
	function isLowerCaseAlphaWithChars(input) {	
	    var chars = "abcdefghijklmnopqrstuvwxyz";	
	    return isContainsCharsOnly(input,chars);	
	}

	// 숫자만 있는지 유무
	function isNumberWithChars(input) {
	    var chars = "0123456789";	
	    return isContainsCharsOnly(input,chars);	
	}

	// 바이트 구하기
	function getByteLen(str){
	    return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
	}

	// 문자열 길이 구하기
	// 한글 2Byte, 영문,숫자 1Byte
	function getByteLen(str) 
	{ 
	    var len = 0;
	    for (var idx=0; idx<str.length; idx++) 
	    { 
	        if ( (str.charCodeAt(idx)<0) || (str.charCodeAt(idx)>127) ) 
	            len += 2;
	        else
	            len ++;
	    }	
	    return len;	
	}

	// 문자열 길이 구하기
	// 한글 2Byte, 영문,숫자 1Byte
	function getByteLen(input) {
	    var byteLength = 0;	
	    for (var inx = 0; inx < input.value.length; inx++) {	
	        var oneChar = escape(input.value.charAt(inx));	
	        if ( oneChar.length == 1 ) {	
	            byteLength ++;	
	        } else if (oneChar.indexOf("%u") != -1) {	
	            byteLength += 2;	
	        } else if (oneChar.indexOf("%") != -1) {	
	            byteLength += oneChar.length/3;	
	        }	
	    }	
	    return byteLength;	
	}
               
	///////////////////////////////////////////////////////////////
	// 문자 변환 관련
	///////////////////////////////////////////////////////////////
	
	// 문자 변환 함수
	function alterString(str,before,after) {
	    var returnStr = "";
	    for(i = 0; i < str.length; i++) {
	        value = str.charAt(i);
	        index = before.indexOf(value);
	        if(index >= 0) value = after.charAt(index);
	        returnStr += value;
	    }
	    return returnStr;
	}
	// 문자 변환 함수2
	function alterString(str,before,after)
	{
	    var reg = new RegExp(before, "ig");
	    return str.replace(reg, after);
	
	}

	// 소 --> 대문자 변환 함수
	function ToUpper(arg) {
	    var str1 = "abcdefghijklmnopqrstuvwxyz";
	    var str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    return alterString(arg,str1,str2);
	}

	// 대 --> 소문자 변환 함수
	function ToLower(arg){
	    var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    var str2 = "abcdefghijklmnopqrstuvwxyz";
	    return alterString(arg,str1,str2);
	}

	// 정해진 문자열 길이 미만이면 왼쪽에 정해진 단어로 채우기
	// 'abcd',8,'0000' => '0000abcd'
	function lpad(str, n, padding)
	{
	    if (str.length >= n)
	        return str;
	    else
	    {
	        var len = n - str.length;
	        var padstr = str;
	        for (var i=0; i<len; i++)
	            padstr = padding + padstr;
	
	        return padstr;
	    }
	}
	
	// 정해진 문자열 길이 미만이면 오른쪽에 정해진 단어로 채우기
	// 'abcd',8,'0000' => 'abcd0000'
	function rpad(str, n, padding)
	{
	    if (str.length >= n)
	        return str;
	    else
	    {
	        var len = n - str.length;
	        var padstr = str;
	        for (var i=0; i<len; i++)
	            padstr = padstr + padding;
	
	        return padstr;
	    }
	}

	// 정해진 길이만큼 숫자앞에 채우기
	function leadingZeros(n, digits) {
		var zero = '';
		n = n.toString();

		if (n.length < digits) {
			for (i = 0; i < digits - n.length; i++)
				zero += '0';
		}
		return zero + n;
	}

	// 콤마 없애기
	function removeComma(input) {
	    return input.value.replace(/,/gi,"");
	}

//  <br />을 Newline 으로 바꾸기
 function changeBrToNewline(input) {
     return input.replace(/<br\s*\/?>/mg, "\n");
}

	///////////////////////////////////////////////////////////////
	// 숫자 관련
	///////////////////////////////////////////////////////////////

	// 숫자만 유효 (음수 부호 제외)
	function isValidNumber(input)
	{
	    var reg = new RegExp(/^\d+$/); // var reg = /^\d+$/  동일
	    return reg.test(input);
	}
	
	// 부동소숫점 숫자 유효 (음수 부호 포함)
	function isValidDouble(input)
	{
	    var reg = new RegExp(/^[-|+]?\d+\.?\d*$/);
	    return reg.test(input);	
	}
	
	// 부동소숫점 숫자 유효 (음수 부호 제외)
	function isValidDoublePlus(input)
	{
	    var reg = new RegExp(/^\d+\.?\d*$/);
	    return reg.test(input);	
	}

	// 정수 유효(음수 부호 포함)
	function isValidInteger(input)
	{
	    var reg = new RegExp(/^[-|+]?\d+$/);
	    return reg.test(input);	
	}

	// 반올림(value:값, n:소숫점자릿수)
	// 232.3326,3 => 232.333
	function round(input, n)
	{
	    var i = Math.pow(10, n);
	    return Math.round(input* i) / i;
	}

	// 올림(value:값, n:소숫점자릿수)
	// 232.3321,3 => 232.333
	function ceil(input, n)
	{
	    var i = Math.pow(10, n);
	    return Math.ceil(input* i) / i;
	}

	// 내림(value:값, n:소숫점자릿수)
	// 232.3328,3 => 232.332
	function floor(input, n)
	{
	    var i = Math.pow(10, n);
	    return Math.floor(input* i) / i;
	}

	///////////////////////////////////////////////////////////////
	// 일자 관련
	///////////////////////////////////////////////////////////////
	
	// 유효한 월인지 체크
	function isValidMonth(mm) {
	    var m = parseInt(mm,10);
	    return (m >= 1 && m <= 12);
	}

	// 유효한 일인지 체크
	function isValidDay(yyyy, mm, dd) {
	    var m = parseInt(mm,10) - 1;
	    var d = parseInt(dd,10);
	
	    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
	        end[1] = 29;
	    }
	
	    return (d >= 1 && d <= end[m]);
	}

	// 유효한 시간인지 체크
	function isValidHour(hh) {
	    var h = parseInt(hh,10);
	    return (h >= 1 && h <= 24);
	}

	// 유효한 분인지 체크
	function isValidMin(mi) {
	    var m = parseInt(mi,10);
	    return (m >= 1 && m <= 60);
	}

	// 유효한 일자인지 체크 ( 201202240000 )
	function isValidTime(time) {
	    var year  = time.substring(0,4);
	    var month = time.substring(4,6);
	    var day   = time.substring(6,8);
	    var hour  = time.substring(8,10);
	    var min   = time.substring(10,12);
	
	    if (parseInt(year,10) >= 1900  && isValidMonth(month) &&
	        isValidDay(year,month,day) && isValidHour(hour)   &&
	        isValidMin(min)) {
	        return true;
	    }
	    return false;
	}

	// 시간을 타임객체로 변환
	function toTimeObject(time) { 
	    //parseTime(time)
	    var year  = time.substr(0,4);
	    var month = time.substr(4,2) - 1; // 1월=0,12월=11
	    var day   = time.substr(6,2);
	    var hour  = time.substr(8,2);
	    var min   = time.substr(10,2);
	
	    return new Date(year,month,day,hour,min);
	}

	// 지정된시간이 미래인지 체크
	function isFutureTime(time) {
	    return (toTimeObject(time) > new Date());
	}

	// 두일자의 차이(개월)
	function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
	    var date1 = toTimeObject(time1);
	    var date2 = toTimeObject(time2);
	
	    var years  = date2.getFullYear() - date1.getFullYear();
	    var months = date2.getMonth() - date1.getMonth();
	    var days   = date2.getDate() - date1.getDate();
	
	    return (years * 12 + months + (days >= 0 ? 0 : -1) );
	}

	// 두일자의 차이(일자)
	function getDayInterval(time1,time2) {
	    var date1 = toTimeObject(time1);
	    var date2 = toTimeObject(time2);
	    var day   = 1000 * 3600 * 24; //24시간
	
	    return parseInt((date2 - date1) / day, 10);
	}

	// 두일자의 차이(시)
	function getHourInterval(time1,time2) {
	    var date1 = toTimeObject(time1);
	    var date2 = toTimeObject(time2);
	    var hour  = 1000 * 3600; //1시간
	
	    return parseInt((date2 - date1) / hour, 10);
	}

	// 현재시간을 Time 형식으로 리턴
	function getCurrentTime() {
	    return toTimeString(new Date());
	}

	// 현재년도 구하기(YYYY)
	function getYear() {
	/*
	    var now = new Date();
	    return now.getFullYear();
	*/
	    return getCurrentTime().substr(0,4);
	}

	// 현재월 구하기(MM)
	function getMonth() {
	/*
	    var now = new Date();
	
	    var month = now.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
	    if (("" + month).length == 1) { month = "0" + month; }
	
	    return month;
	*/
	    return getCurrentTime().substr(4,2);
	}

	// 현재일 구하기(DD)
	function getDay() {
	/*
	    var now = new Date();
	
	    var day = now.getDate();
	    if (("" + day).length == 1) { day = "0" + day; }
	
	    return day;
	*/
	    return getCurrentTime().substr(6,2);
	}

	// 현재시간 구하기(HH)
	function getHour() {
	/*
	    var now = new Date();
	
	    var hour = now.getHours();
	    if (("" + hour).length == 1) { hour = "0" + hour; }
	
	    return hour;
	*/
	    return getCurrentTime().substr(8,2);
	}

	// 현재요일 구하기
	function getDayOfWeek() {
	    var now = new Date();
	
	    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
	    var week = new Array('일','월','화','수','목','금','토');
	
	    return week[day];
	}

 	// 현재 일자 구하기 ( "YYYY-MM-DD HH:MM:SS" )
	function getNowTimeStamp() {
		var d = new Date();

		var s =
		leadingZeros(d.getFullYear(), 4) + '-' +
		leadingZeros(d.getMonth() + 1, 2) + '-' +
		leadingZeros(d.getDate(), 2) + ' ' +

		leadingZeros(d.getHours(), 2) + ':' +
		leadingZeros(d.getMinutes(), 2) + ':' +
		leadingZeros(d.getSeconds(), 2);

		return s;
	}        
	///////////////////////////////////////////////////////////////
	// 업무로직 유효성 관련
	///////////////////////////////////////////////////////////////
	
	// 전화번호 유효성 검사(숫자-숫자-숫자)
	function isValidPhone(input) {
	    var reg = /^(\d+)-(\d+)-(\d+)$/;
	    return reg.test(input);
	}
	
	// 이메일 유효성 검사
	function isValidEmail(input) {
	    var reg = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
	    return reg.test(input);
	}
	
	///////////////////////////////////////////////////////////////
	// Form Control 관련
	///////////////////////////////////////////////////////////////

	// 체크된 체크, 라디오 버튼이 있는지 유무
	function hasCheckedCtl(input) {
	    if (input.length > 1) {	
	        for (var inx = 0; inx < input.length; inx++) {	
	            if (input[inx].checked) return true;	
	        }	
	    } else {	
	        if (input.checked) return true;	
	    }	
	    return false;	
	}	
	
	//--텍스트박스 안 이미지 보여줌/없앰 ( 글이없으면 이미지광고 넣고 글이 있거나 Focus시 없애줄때 사용 )
	function visibleImgInTxtCtl(obj,img,focus) {
	    if (obj.value == "" && focus == true)
	      obj.style.backgroundImage = "";
	    else if (obj.value == "" && focus == false)
	      obj.style.backgroundImage = img;
	}

	// -- 텍스트박스,셀렉트박스 Focus시 border 줌
	function inFocus(ctl) {
	   (ctl).style.border='2px solid #59a509';
	}

	// -- 텍스트박스,셀렉트박스 out Focus시 border 없앰
	function outFocus(ctl) {
	   (ctl).style.border='2px solid #cccccc';
	}
	
                // 다음 컨트롤로 이동 ( 전화번호,주민번호등 Fix된 갯수후 이동 )
	function moveNext(id_from, id_to, maxSize) {
	   var cur = document.getElementById(id_from).value;
	   var curSize = cur.length;
	   var numFlag = isValidNumber(cur);
	
	   if ( !numFlag && curSize >= 1 && cur != '00' &&  cur != '000') {
	      alert('숫자를 넣어주세요');
	      document.getElementById(id_from).value='';
	      document.getElementById(id_from).focus();
	      return false;
	   }
	   if (curSize == maxSize) {
	      if(next_go || cur_val != cur) {
	         cur_val = cur;
	         next_go = false;
	         document.getElementById(id_to).focus();
	      }
	      return true;
	   }
	   next_go = true;
	}

	// 숫자와 추가 문자만  입력, word = "" 이면 숫자만 입력
	function checkNum(obj, word) {
	   var chk = "0123456789" + word;
	   var j = 0;
	
	   obj = eval(obj);
	
	   for (var i = 0; i < obj.value.length; i++) {
	      if (chk.indexOf(obj.value.charAt(i)) == -1) {
	         j = 1;
	         break;
	      }
	   }
	
	   if (j == 1) {
	      if (word != "") {
	         alert("숫자와 " + word + "만 입력하실 수 있습니다!");
	      }
	      else {
	         alert("숫자만 입력하실 수 있습니다!");
	      }
	      //obj.value = obj.value.substring(0, obj.value.length - 1);
	      obj.value = "";
	      obj.focus();
	   }
	}

	///////////////////////////////////////////////////////////////
	// document 관련
	///////////////////////////////////////////////////////////////

	// 특정 id 엘레멘트안의 폰트 사이즈로 변경 
	function fontSizeReset(id,currentSize) {
	   if (document.getElementById) {
	      document.getElementById(id).style.cssText = "font-size:" + currentSize + "pt";
	   }
	}
	
	//마우스 오른쪽 제거
	function noMouseRightBtn() {
	   document.oncontextmenu = new Function('return false');
	   document.ondragstart = new Function('return false');
	   document.onselectstart = new Function('return false');
	}

	//이미지 사이즈 줄이기
	function sizeConvImg(mx, re) {
	   var oIMG = document.getElementsByTagName('IMG');
	   for (i = 0; i < oIMG.length; i++) {
	      if (oIMG[i].offsetWidth > mx) {
	         oIMG[i].style.width = re;
	      }
	   }
	}
	
	// 이미지 On, Off시 변경, a,b : 엘레먼트
	function changeImageOnOff(a, imgA, b, imgB) {
	   var a = eval(a);
	   var b = eval(b);
	
	   a.src = imgA;
	   b.src = imgB;
	}
	
	// 레이어  On,Off시 Display 변경, a,b : 엘레먼트
	function changeLayerOnOff(a, b) {
	   var a = eval(a);
	   var b = eval(b);
	
	   a.style.display = "block";
	   b.style.display = "none";
	}
	
	// 링크 변경 , a : 엘레먼트
	function getLink(a, linkB) {
	   var a = eval(a);
	
	   a.href = linkB;
	}
	
	// 자바 스크립트가 있는지: true 없는지: false
	function hasjavaScript(oField) {
		var pattern;
		pattern = /<script[\s\S]*<\/script[\s\S]*>/i;
		if(pattern.test(oField.value)) {
			alert("입력하신 내용 중에 클라이언트 스크립트가 포함되어 있습니다.");
			return true;
		}
		pattern = /<object[\s\S]*<\/object[\s\S]*>/i;
		if(pattern.test(oField.value)) {
			alert("입력하신 내용 중에 클라이언트 스크립트가 포함되어 있습니다.");
			return true;
		}
		pattern = /<embed[\s\S]*<\/embed[\s\S]* wmode=transparent>/i;
		if(pattern.test(oField.value)) {
			alert("입력하신 내용 중에 클라이언트 스크립트가 포함되어 있습니다.");
			return true;
		}
		return false; //안전한 String인 경우
	} 
