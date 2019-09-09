class Api::V1::PostsController < ApiController
  def index
    @per_page = params[:per_page] || 100 || Post.per_page 
    @posts_json = Post.paginate( :per_page => @per_page, :page => params[:page]).order('created_at DESC')
  end
end