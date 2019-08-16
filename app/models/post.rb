class Post < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: {minimm: 3, maximum: 100}
  validates :description, presence: true, length: {minimum: 10, maximum: 300}
  validates :user_id, presence: true
end
