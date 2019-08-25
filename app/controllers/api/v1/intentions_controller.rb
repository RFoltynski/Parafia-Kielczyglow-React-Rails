class Api::V1::IntentionsController < ApiController
  def index
    @intentions = Intention.all
  end
end