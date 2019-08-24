class PagesController < ApplicationController
  def index; end
  def adminPanel
  @intention = Intention.find(1)
  end
end
