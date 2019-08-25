class PagesController < ApplicationController
  before_action :require_user, expect: %i[]
  def index; end
  def adminPanel
  @intention = Intention.find(1)
  end
end
