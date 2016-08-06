class ReportController < ApplicationController
  def index
    
    @bar_x= params[:input_x]
    @bar_y = params[:input_y]

  end
  
  def write
    @barbar = Barbary.new
    @barbar.x = params[:input_x]
    @barbar.y = params[:input_y]
    @barbar.title = params[:input_title]
    @barbar.message = params[:input_message]
    @barbar.crime = params[:input_crime]
    @barbar.save
    
    redirect_to map_path(@barbar), 
      :notice => "제보 감사합니다"
  end
  
  def change
    @data = Barbary.find(params[:cont_c])
  end
  
  def delete
    Barbary.find(params[:data]).destroy
    redirect_to map_path
  end

end
