class PostsController < ApplicationController
  before_action :find_post, only: %i[show edit update destroy]
  before_action :require_user, except: [:show]
  def index
    @posts = Post.paginate(page: params[:page]).order("created_at DESC")
  end

  def show; end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = User.first
    if @post.save
      redirect_to @post
    else
      render 'new'
    end
  end

  def edit; end

  def delete_image_attachment
    @post_photo = ActiveStorage::Attachment.find(params[:id])
    @post_photo.purge
    redirect_back(fallback_location: request.referer)
  end
              
  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to @post
    else
      render 'new'
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:id, :title, :description, :file, photos: [])
  end
end
