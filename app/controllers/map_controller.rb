class MapController < ApplicationController
  def index
    @barbaries = Barbary.all
  end
end
