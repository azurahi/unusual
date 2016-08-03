class TestController < ApplicationController
  def index
    @bar = Barbary.all
  end
end
