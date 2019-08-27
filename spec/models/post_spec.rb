require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:user) { create(:user) }
  let(:post) { create(:post, user_id: user.id) }
  describe 'attributes' do
    it { expect(subject.attributes).to include('title', 'description', 'user_id') }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_least(3)}
    it { is_expected.to validate_length_of(:title).is_at_most(25) }
    it { is_expected.to allow_value('dfsasdfas').for(:title) }
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_least(3)}
    it 'should save successfully' do 
      expect(post.save).to eq(true)
    end
  end

  describe 'relations' do
    it { is_expected.to belong_to(:user) }
  end
end
