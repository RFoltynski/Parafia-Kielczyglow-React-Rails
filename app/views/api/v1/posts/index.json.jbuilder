json.data do
  json.array! @posts_json do |post|
    json.extract! post, :title, :id, :description
    json.post_date post.created_at.to_formatted_s(:db)  
    unless post.photos.attachments.size.zero?
      json.images {
        json.array! post.photos do |photo|
          json.merge! Rails.application.routes.url_helpers.rails_blob_path(photo, only_path: true)
        end
      }
    end
    if post.file.attached?
      json.file Rails.application.routes.url_helpers.rails_blob_path(post.file, only_path: true)
    end
  end
end
json.page @posts_json.current_page
json.pages @posts_json.total_pages
json.per_page @per_page.to_i