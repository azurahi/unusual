class ReportController < ApplicationController
  def index
    
    @bar= Barbary.new
    @bar.x= params[:input_x]
    @bar.y = params[:input_y]
    @bar.save
  
  end
  
  def write
    @barbar=Barbary.find(params[:id_of_input])
    @barbar.password = params[:input_password]
    @barbar.title = params[:input_title]
    @barbar.message = params[:input_message]
    @barbar.type = params[:input_type]
    @barbar.save
    
    redirect_to map_path(@barbar), :flash => { :success => "제보 감사합니다" }
  end

end
