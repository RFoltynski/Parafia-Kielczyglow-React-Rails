require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'attributes' do
    it { expect(subject.attributes).to include('email', 'username') }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_uniqueness_of(:username).case_insensitive }
    it { is_expected.to validate_length_of(:username).is_at_least(3)}
    it { is_expected.to validate_length_of(:username).is_at_most(25) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_length_of(:email).is_at_most(105) }
    it { is_expected.to allow_value('email@addresse.foo').for(:email) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_length_of(:password).is_at_least(8) }
  end
end
