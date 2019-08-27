FactoryBot.define do
  factory :contact do
    name { Faker::Lorem.characters(12) }
    email { Faker::Internet.email }
    message { Faker::Lorem.characters(12) }
  end
end
