class Post < ApplicationRecord
  belongs_to :user
  has_many_attached :photos
  has_one_attached :file

  validates :title,
            presence: true,
            uniqueness: { case_sensitive: false },
            length: { minimum: 3, maximum: 25 }
  validates :description,
            presence: true
  validate :photos_amount_ng_than_five


  private

  def photos_amount_ng_than_five
    return unless photos.attachments.size > 6

    photos.purge
    errors.add(:photots, 'can not be more than 6.')
  end
end
