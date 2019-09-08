class Api::V1::PostsController < ApiController
  def index
    @posts_json =  Post.paginate(page: params[:page]).order("created_at DESC")
  end
end