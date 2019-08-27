require 'rails_helper'

RSpec.describe Contact, type: :model do

  describe 'attributes' do
    it { expect(subject.mail_attributes).to include(:name, :email, :message) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:message) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to allow_value('email@addresse.foo').for(:email) }
  end
end
