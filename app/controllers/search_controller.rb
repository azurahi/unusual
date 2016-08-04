class SearchController < ApplicationController
  def index
    url = "https://openapi.naver.com/v1/map/geocode?encoding=utf-8&coord=latlng&output=json"  
    par = { :query => params[:juso] }
    
    
    client_id = "7lbbhoc2gSBkJgzTcfZb"
    client_secret = "m9swf8T6E7"
     
    uri = URI.parse(url)
    uri.query = URI.encode_www_form(par)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_PEER
     
    request = Net::HTTP::Get.new(uri.request_uri)
    request.initialize_http_header({"X-Naver-Client-Id"=>client_id, "X-Naver-Client-Secret"=> client_secret})
    response = http.request(request)
     
    @data = JSON.parse(response.body)
     
    
  end
  

end
