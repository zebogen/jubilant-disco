# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :watch_lists, inverse_of: :user, dependent: :destroy
  has_many :user_movies, inverse_of: :user, dependent: :destroy
end
