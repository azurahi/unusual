class ReportController < ApplicationController
  def index
    @barbaries = Barbary.all
  end
end
