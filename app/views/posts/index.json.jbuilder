json.data do
  json.array! @posts do |post|
    json.extract! post, :title, :id, :description
    json.post_date post.created_at.to_formatted_s(:db)  
    unless post.photos.attachments.size.zero?
      json.pictures(post.photos) do |photos|
        json.photo Rails.application.routes.url_helpers.rails_blob_path(photos, only_path: true)
      end
    end
  end
end
