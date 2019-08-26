class Api::V1::ContactsController < ApiController
  def index
      message = ['Post 1', 'Post 2']

      render json: { message: message }
    end
  def create
    render json: { params: params }
  end
end