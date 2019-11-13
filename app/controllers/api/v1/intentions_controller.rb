class Api::V1::IntentionsController < ApiController
  def index
    @intentions = Intention.all
    @intention = Intention.first
  end
end