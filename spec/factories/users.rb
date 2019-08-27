FactoryBot.define do
  factory :user do
    username { Faker::Lorem.characters(12) }
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length = 8) }
  end
end
