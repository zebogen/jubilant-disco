# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  def new
    render "home/index"
  end
end
