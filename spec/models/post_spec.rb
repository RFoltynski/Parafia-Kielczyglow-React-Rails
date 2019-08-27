require 'rails_helper'

RSpec.describe Post, type: :model do

  describe 'attributes' do
    it { expect(subject.attributes).to include('title', 'description') }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_least(3)}
    it { is_expected.to validate_length_of(:title).is_at_most(25) }
    it { is_expected.to allow_value('test test test').for(:title) }
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_length_of(:title).is_at_least(3)}
  end

  describe "relations" do
    it { is_expected.to belong_to(:user) }
  end
end
