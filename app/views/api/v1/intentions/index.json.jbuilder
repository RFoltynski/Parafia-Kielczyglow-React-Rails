json.data do
  json.kielczyglow do
    json.array! @intentions do |intention|
        json.extract! intention, :K1monday, :K2monday, :K1tuesday, :K2tuesday, :K1wednesday, :K2wednesday, :K1thursday, :K2thursday, :K1friday, :K2friday, :K1saturday,:K2saturday, :K1sunday, :K2sunday
      end
  end
  json.pierzyny do
    json.array! @intentions do |intention|
        json.extract! intention, :P1monday, :P2monday, :P1tuesday, :P2tuesday, :P1wednesday, :P2wednesday, :P1thursday, :P2thursday, :P1friday, :P2friday, :P1saturday,:P2saturday, :P1sunday, :P2sunday
      end
  end
  if @intention.intentionPhoto.attached?
    json.file Rails.application.routes.url_helpers.rails_blob_path(intention.intentionPhoto, only_path: true)
  end
end
