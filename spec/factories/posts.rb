FactoryBot.define do
  factory :post do
    title { Faker::Lorem.characters(12) }
    description { Faker::Lorem.characters(12) }
    user_id {Faker::IDNumber}
  end
end
