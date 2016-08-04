class HomeController < ApplicationController
  def index
    @bar_num = Barbary.count + 1
  end
end
