/**
 * 사용 예문
 */

var addbkcnt = 0;
var addwmscnt = 0;
var clickpoint = false;

/** 지도 실행 예문**/
function mapInit(param) {
	if(param==null){
	var param = {
		div : '2d_map',
		name : '기본도',
		serverUrl : 'http://www.safemap.go.kr/2d',
		layername : 'hybrid_SimpleMap'};
	}

	m_openLayers.mapInit(param);
	
	toast.push("mapInit");	
}

// 배경 지도 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/** 배경지도 레이어 추가 예문**/
function addBackgroundLayer() {
	
	var m_name = '배경지도 레이어 추가' + addbkcnt;
	var param = {
		name : m_name,
		serverUrl : 'http://vmap0.tiles.osgeo.org/wms/vmap0',
		layername : 'basic'
	};

	m_openLayers.addBackgroundLayer(param);
	addbkcnt++;
	
	dialog.push('배경지도 레이어 추가<br>추가된 레이어 이름:'+m_name+'<br><b>지도상에 우측 +버튼으로 레이어 목록 펼쳐서 확인</b>');
}


/** 배경지도 레이어 삭제 예문 **/
function removeBackgroundLayer() {
	
	if(addbkcnt > 0)
	{
		addbkcnt--;
		var m_name = '배경지도 레이어 추가' + addbkcnt;
		m_openLayers.removeBackgroundLayer({name:m_name});
		
		toast.push("삭제 완료");		
	}
	else
		toast.push("추가된 배경 레이어 없음.");
	
}
//배경 지도 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//WMS레이어 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/** WMS레이어 추가 예문**/
    function addWmsLayer(){
    
    param = {name:'여성밤길 치안안전(20~24시)',  
            serverUrl:'www.safemap.go.kr/sm/apis.do?apikey=KJB2458F-KJB2-KJB2-KJB2-KJB2458FZJ', 
            layername:'A2SM_ODBLRCRMNLHSPOT_FEMALE,A2SM_FEMALENIGHTSTRETSFFC', 
            styles:'A2SM_OdblrCrmnlHspot_Tot_20_24,A2SM_FemaleNightStretSffc'}; 
    var wmsLayer = new OpenLayers.Layer.WMS( param.name, param.serverUrl, 
            {layers: ''+param.layername,  
             styles:param.styles, 
             format: 'image/png',  
             exceptions:'text/xml', 
             transparent: true}, 
             {isBaseLayer: false}
    );
    
    
    
    m_openLayers.addLayer(wmsLayer);


/** WMS레이어 삭제 예문**/
function removeWmsLayer(param)
{
	if(addwmscnt > 0)
	{
		//var param = {name:''};
		addwmscnt--;
		//	if(addwmscnt == 0) param.name='교통사고통계(전체)';
		m_openLayers.removeWMSLayer(param);	
		toast.push("WMS레이어 삭제 완료");
	}
	else
		toast.push("추가된 WMS레이어 없음");
}
//WMS레이어 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Map Center ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/** 중심점 출력 예문 **/
function getCenter()
{
	dialog.push("중심점 :"+m_openLayers.getCenter());	
}

function getCachedCenter()
{
	dialog.push("중심점 :"+m_openLayers.getCachedCenter());
}

/** 중심점 설정 예문  **/
function setCenter()
{
	m_openLayers.setCenter({lon:14158393.377283, lat:4390895.3654224});
	toast.push('lon:14158393.377283<br>lat:4390895.3654224<br>중심점 설정 완료');
}

/** 위치이동 예문  **/
function moveTo()
{
	m_openLayers.moveTo({lon:14158393.377283, lat:4390895.3654224, zoom:8});
	toast.push('lon:14158393.377283<br>lat:4390895.3654224<br>zoom:8<br>으로 위치이동 완료');
}
//Map Center ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Map Bounds ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getExtent()
{
	dialog.push("Bounds : "+m_openLayers.getExtent());
}


function setExtent()
{
	
	m_openLayers.setExtent();
}
//Map Bounds ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Map Zoom ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getZoom()
{
	dialog.push("Zoom :"+m_openLayers.getZoom());
}

function setZoom()
{
	m_openLayers.setZoom({zoom:12});
}


function zoomIn()
{
	m_openLayers.zoomIn();
	toast.push("zoomIn");
}

this.zoomOut = function()
{
	m_openLayers.zoomOut();
	toast.push("zoomOut");
}

//Pan ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function pan()
{	
	m_openLayers.pan({dx:0, dy:1});
	toast.push("dx:0<br>dy:1<br> Pan 이동");
}

function panTo()
{
	m_openLayers.panTo({lon:14158393.377283, lat:4390895.3654224});
	toast.push("lon:14158393.377283<br>lat:4390895.3654224<br> PanTo 이동");
}

var m_panPanel = false;
function addPanPanel()
{
	if(!m_panPanel)
	{
		m_openLayers.addController({name:'panPanel', controls:m_openLayers.controlList.panPanel});
		m_panPanel = true;
		
		toast.push("PanPanel을 추가하였습니다<br><b>지도의 좌우에 네비게이션 키를 눌러보세요.</b>");
	}
	else
	{
		m_openLayers.removeController({name:'panPanel'});
		m_panPanel = false;
		toast.push("PanPanel 삭제");
	}
}

//Pan ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//measure ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function measure_Distance()
{
	m_openLayers.measure_line({name:'measure_line'});
}

function measure_area()
{
	m_openLayers.measure_area({name:'measure_polygon'});
}


//measure ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Size ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getMapSize()
{	
	dialog.push("Width :"+m_openLayers.getMapSizeWidth()+"<br>"+"Height:"+m_openLayers.getMapSizeHeight());
}

function setMapSize()
{
	var doc_w = (window.innerWidth || self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	var doc_h = (window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
	
	var width = parseInt(doc_w/10 * 7 -10);
	if(m_openLayers.getMapSizeWidth() == 500)
	{
		$('#2d_map').css('width', width );
		$('#2d_map').css('height', doc_h -20);	
	}
	else
	{
		$('#2d_map').css('width', 500);
		$('#2d_map').css('height', 500);
		
		toast.push("width:500<br> height:500 변경<br><b>Size 변경 클릭시 원래 크리로 돌아 감");		
	}
}
//Size ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Point ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DrawPoint()
{
	//m_openLayers.DrawPoint();
	m_openLayers.DrawControl({type:'point'});
	
	toast.push("지도위에 점을 추가하세요~~!");
}

function getPointInfo()
{
	m_openLayers.getFeatureinfo();
	toast.push("Point를 선택하세요~~!!!");
	
}
function setPlocation()
{
	toast.push("변경할 Point를 선택하세요~~!!! <br> 다른 포인트 좌표 변경시 좌표 변경 버튼을 다시 눌러 주세요.");
	var n1 = 11416259.220658;
	var n2 = 14047731.152084;
	var n3 = 3605265.7654803;
	var n4 = 4696175.0329709;  

	var X = Math.floor( (Math.random() * (n2 - n1 + 1)) + n1);
	var Y = Math.floor( (Math.random() * (n4 - n3 + 1)) + n3);
	m_openLayers.setPLocation(X, Y);
}
function distTwoPoint()
{
	m_openLayers.distTwoPoint();	
}
function pointDeactivate()
{
	m_openLayers.pointDeactivate();
	toast.push("포인트 입력기능 정지");
}

function getLonLat()
{
	if (clickpoint){
		clickpoint = false;
		toast.push("선택지점 좌표값 가져오기 기능 정지");
	}else{
		clickpoint = true;
		toast.push("선택지점 좌표값 가져오기 기능 시작");
	}
}
/**
 * 그리기 레이어 갱신
 */
function refreshFeatureLayer()
{
	m_openLayers.refreshFeatureLayer();
}

/**
 * 그리기 레이어 초기화
 */
function removeAllFeatures()
{
	m_openLayers.removeAllFeatures();
}
//Point ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Line ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function DrawLine()
{
	m_openLayers.DrawControl({type:'line'});	
	toast.push("지도위에 라인 추가하세요~~!");
}

function getLineInfo()
{
	m_openLayers.getFeatureinfo();
	toast.push("Line를 선택하세요~~!!!");
}

function setFeatureStyle()
{
	var param ={
			  fillColor: "green",
			  fillOpacity: 0.5,
			  strokeColor: 'green',//"green",
			  strokeOpacity: 1,
			  strokeWidth: 2,
			  pointRadius: '6'			
	};
	
	m_openLayers.setFeatureStyle(param);
	
	dialog.push('개별 Feature에 대한 Style는 설정 못함<br>레이어 단위로 Style 적용 가능...');
}
//Line ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Polygon ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function DrawPolygon()
{
	m_openLayers.DrawControl({type:'polygon'});	
	//toast.push("지도위에 점을 추가하세요~~!");
}

function getPolygonInfo()
{
	m_openLayers.getFeatureinfo();
	toast.push("Polygon를 선택하세요~~!!!");
}

//Polygon ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//


function DrawNavi()
{
	m_openLayers.DrawControl({type:'navi'});
}

//
//Marker ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addMarker()
{
	m_openLayers.setCenter({lon:14158393.377283, lat:4390895.3654224});
	m_openLayers.setZoom({zoom:7});
	var n1 = 11416259.220658;
	var n2 = 14047731.152084;
	var n3 = 3605265.7654803;
	var n4 = 4696175.0329709;  

	var X = Math.floor( (Math.random() * (n2 - n1 + 1)) + n1);
	var Y = Math.floor( (Math.random() * (n4 - n3 + 1)) + n3);
	
	var w_h = Math.floor(Math.random() * 30) + 20;
	var i = Math.floor(Math.random() * 4) + 1;
	var imgurl;
	if(i == 1) imgurl = 'http://127.0.0.1/mapapi/img/logo.png';
	else if(i == 2) imgurl = 'http://127.0.0.1/mapapi/img/android_focused.png';
	else if(i == 3) imgurl = 'http://127.0.0.1/mapapi/img/btn_rating_star_off_pressed.png';
	else if(i == 4) imgurl = 'http://127.0.0.1/mapapi/img/btn_rating_star_on_selected.png';	
	
	/**
	 * size.w, size.h : Marker 사이즈
	 * lon, lat : Marker 위치
	 * imgUrl : 이미지
	 * info : 마커 정보 
	 **/	

	var param ={
		size:{w:w_h, h:w_h},
		lon:X,
		lat:Y,
		imgUrl:imgurl,
		info:'<b>html</b>로 작성해서 입력 가능<br>'
		
	};
	m_openLayers.addMarker(param);
	
	toast.push("추가된 마커 클릭시 정보창 활성화");
}

function showMarker()
{
	m_openLayers.showMarker();
}

//Marker ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//기타 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showPopUp()
{
	
    /**
     * PopUp 출력
     * popName : 이름
     * popLon, popLat : 출력 좌표
     * popSizeW, popSizeH : 팝업 사이즈
     * popMessage : 출력될 메세지
     **/	
	var param ={
			popName : 'PopUp_test',
			popLon : 47.54333,
			popLat : 19.56665,
			popSizeW : 200,
			popSizeH : 200,
			popMessage : '테스트 팝업'
	}
	
	m_openLayers.showPopUp(param);
	m_openLayers.panTo({lon:14158393.377283, lat:4390895.3654224});
}

function showCloudPopUp()
{
    /**
     * PopUp 출력
     * popName : 이름
     * popLon, popLat : 출력 좌표
     * popSizeW, popSizeH : 팝업 사이즈
     * popMessage : 출력될 메세지
     **/	
	var param ={
			popName : 'PopUp_test',
			popLon : 14158393.377283,
			popLat : 4390895.3654224,
			popSizeW : 0,
			popSizeH : 0,
			popMessage : '테스트 팝업<br> html로 작성해서 입력 가능'
	}
	m_openLayers.showPopUpCloud(param);	 
	m_openLayers.panTo({lon:14158393.377283, lat:4390895.3654224});
}

function redrawLayer()
{
	m_openLayers.redrawLayer();
	
	m_openLayers.setCenter({lon:14228410.082402, lat:4300391.7222201});
	m_openLayers.setZoom({zoom:8});	
}
//기타 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//History Navigation ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addHistoryNavigation()
{
	m_openLayers.addHistoryNavigation();	
}

function next()
{
	m_openLayers.navi_next();
}

function prev()
{
	m_openLayers.navi_prev();
}
//History Navigation ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addKeyboardControl()
{
	document.getElementById('2d_map').focus();
	m_openLayers.addKeyboardControl();
	toast.push("+ (zoom in)<br>- (zoom out)<br>up-arrow (pan north)<br>down-arrow (pan south)<br>left-arrow (pan east)<br>right-arrow (pan west)");
}