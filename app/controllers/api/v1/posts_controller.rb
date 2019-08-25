class Api::V1::PostsController < ApiController
  def index
    @posts_json = Post.all.order("created_at DESC")
  end
end