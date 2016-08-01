class ReportController < ApplicationController
  def index
    @barbaries = Barbary.all
  end
  
  def new
    
    bar= Barbary.new
    bar.x= params[:input_x]
    bar.y = params[:input_y]
    @bar_data = bar
    bar.save
    
  end

end
