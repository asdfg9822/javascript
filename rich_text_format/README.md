###Rich Text Format (RTF)

https://ko.wikipedia.org/wiki/%EC%84%9C%EC%8B%9D_%EC%9E%88%EB%8A%94_%ED%85%8D%EC%8A%A4%ED%8A%B8_%ED%8F%AC%EB%A7%B7
위키백과에 의하면 Rich Text Format은 마소가 개발한 문서 파일 형식이다
단순 텍스트 정보뿐만 아니라 그 외의 부가적인 메타정보들을 담고 있다
엑셀의 정보를 Notepad에 복사하면 디자인 요소가 모두 빠지지만
엑셀간의 복사는 텍스트 외의 다양한 정보가 모두 복수가 된다

http://www.webdesignerdepot.com/2008/12/20-excellent-free-rich-text-editors/
웹에서도 Editor에서 이런 부분이 많이 활용되고 있다.

웹에서 RTF의 활용 가능 범위 확인을 위한 테스트 소스


###Chrome 확장 프로그램 테스트
- Clipboard History 2 : 단순 텍스트를 계속해서 탐지


###오픈소스 테스트
- jQuery.clipboard : Clipboard의 내용을 Read/Write할 수 있음
- zeroclipboard : 내부적으로 jQuery의 clipboard를 사용

###참고사이트
https://www.lucidchart.com/techblog/2014/12/02/definitive-guide-copying-pasting-javascript/
http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser

###META-DATA

rtf_ms_excel.html
rtf_google_excel.html

어떤 형태이든 텍스트 이동은 제대로 되는 것을 확인하였음

- Google SpreadSheet -> MS Excel RTF 복사 : Clipboard 복사 X / MS형식으로 다운받기 O
- MS Excel -> Google SpreadSheet RTF 복사 : Clipboard 복사 O / MS형식으로 다운받기 O
- Naver Cell은 양방향 모두 되지 않음