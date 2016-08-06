class LightController < ApplicationController
  def index
    @lamps = Lamp.all
  end

  def dot
    lt = Lamp.new
    lt.x = params[:input_x_light]
    lt.y = params[:input_y_light]
    lt.save
    
    redirect_to :back
  end
  
  def show
    @lam = Lamp.all
    @stx = params[:st_x]
    @sty = params[:st_y]
    @dtx = params[:dt_x]
    @dty = params[:dt_y]
  end
end
