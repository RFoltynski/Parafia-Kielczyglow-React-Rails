json.data do
  json.array! @posts do |post|
    json.extract! post, :title, :id, :description
    json.post_date post.created_at.to_formatted_s(:db)
  end
end
