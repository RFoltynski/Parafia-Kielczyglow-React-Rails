class Api::V1::PostsController < ApiController
  def index
    @per_page = params[:per_page] || 5 || Post.per_page 
    @posts_json = Post.paginate( :per_page => @per_page, :page => params[:page])
  end
end