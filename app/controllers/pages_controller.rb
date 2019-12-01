class PagesController < ApplicationController
  before_action :require_user, only: %i[adminPanel]
  def index  
    @intention = Intention.find(1) 
  end
  def adminPanel
    @intention = Intention.find(1)
  end
end
