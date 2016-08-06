class HomeController < ApplicationController
  def index
    @bar_num = Barbary.count + 42
  end
end
