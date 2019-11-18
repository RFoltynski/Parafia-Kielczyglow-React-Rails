json.data do
  json.kielczyglow do
    json.array! @intentions do |intention|
        if intention.intentionPhoto.attached?
          json.file Rails.application.routes.url_helpers.rails_blob_path(intention.intentionPhoto, only_path: true)
        end
      end
  end
end
