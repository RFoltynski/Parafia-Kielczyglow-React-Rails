class IntentionsController < ApplicationController
  before_action :find_intention, only: %i[update edit]
  def index
    @intention = Intention.first
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
    if @intention.update(intention_params)
      redirect_to intentions_path
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
