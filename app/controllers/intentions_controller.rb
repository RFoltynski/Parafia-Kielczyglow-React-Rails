class IntentionsController < ApplicationController
  before_action :find_intention, only: %i[show update edit]
  def index
    @intentions = Intention.all
  end

  def show; end

  def new
    @intention = Intention.new
  end

  def create
    @intention = Intention.new(intention_params)
    if @intention.save
      redirect_to @intention
    else
      render 'new'
    end
  end

  def edit; end

  def update
    if @intention.update
      redirect_to @intention
    else
      render 'edit'
    end
  end

  private

  def find_intention
    @intention = Intention.find(params[:id])
  end

  def intention_params
    params.require(:intention).permit(Intention.column_names)
  end
end
